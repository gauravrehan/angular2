import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import {ProductService} from './product.service';

@Component (
    {
        selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css']
    }
)

export class ProductListComponent implements OnInit {
    pageTitle : string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    message: string;
    errorMessage: string;

//Lifecycle hook method
    ngOnInit() : void {
        console.log('In OnInit');
        this.productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    private productService : ProductService;

    constructor (productService: ProductService ){
        this.productService = productService;
    }

    products: IProduct[];

toggleImage(): void {this.showImage = !this.showImage;};

onRatingClicked(message: string) : void {
    this.pageTitle = 'Product List: ' + message;
}

}