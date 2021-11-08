import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-meta-tags',
  template: `
    <meta name=”title” content=”Title”>
    <meta name ="description" content = "Esta es una descripción">
    <meta name=”keywords” content=”Meta, Attribute, Keywords”>
  `,
  styles: [
  ]
})
export class MetaTagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
