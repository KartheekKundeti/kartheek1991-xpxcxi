import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
export interface PeriodicElement {
  name: string;
  bidAmount: number;
  mobile: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    bidAmount: 1000,
    name: 'Kartheek',
    mobile: 1234567890,
    email: 'kartheek@cognizant.com',
  },
  {
    bidAmount: 2000,
    name: 'Soni Dev',
    mobile: 1234567890,
    email: 'devendra@cognizant.com',
  },
  {
    bidAmount: 3000,
    name: 'Chandra Roy Debarshi',
    mobile: 1234567890,
    email: 'debarshi@cognizant.com',
  },
  {
    bidAmount: 4000,
    name: 'Ashok',
    mobile: 1234567890,
    email: 'Ashok.kumar@cognizant.com',
  },
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productName: string = '';
  productDescription: string = '';
  detailproductDescription: string = '';
  category: string = '';
  bidEndDate: any;
  pipe = new DatePipe('en-US');
  todayWithPipe: any = null;
  groupedform = this.fb.group({
    Name: ['', Validators.required],
    Email: [],
    knownlang: this.fb.array([this.fb.control('')]),
  });
  displayedColumns: string[] = ['bidAmount', 'name', 'mobile', 'email'];
  showBid: boolean = false;
  isSubmitted = false;
  showProductInfo: boolean = false;
  price: number = 0;
  dataSource = new MatTableDataSource([...ELEMENT_DATA]);
  Products: any = ['Painting', 'Sculptor', 'Ornament'];
  @ViewChild(MatSort, { static: false }) set sort(val: MatSort) {
    this.dataSource.sort = val;
  }
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  public counter() {
    this.showBid = true;
  }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    bidForm: ['', [Validators.required]],
  });

  ProductForm = this.fb.group({
    productForm: ['', [Validators.required]],
  });

  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get('bidForm');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    this.showProductInfo = true;
    this.productName = 'iPhone 12.0';
    this.productDescription = 'This is a test Product';
    this.detailproductDescription = 'This is a detailed Product';
    this.category = 'Bid Products';
    this.price = 100;
    this.bidEndDate = new Date();
    this.todayWithPipe = this.pipe.transform(this.bidEndDate, 'dd/MM/yyyy');
    if (!this.registrationForm.valid) {
      return false;
    } else {
      return true;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
