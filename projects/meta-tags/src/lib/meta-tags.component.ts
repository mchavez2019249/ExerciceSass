import {Component, Input, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'mt-meta-tags',
  template: `
    <meta content="Article Description" name="Title">
    <meta content="index,follow" name="Description">
    <meta content="angular, javascript, typescript, meta, seo" name="keywords">
  `,
  styles: [
  ]
})
export class MetaTagsComponent implements OnInit {

  constructor(private metaService: Meta) {
    this.addTags();
  }


  ngOnInit(): void {
    this.addTags();
  }

  addTags() {
    this.metaService.addTags([
      { name: 'Title', content: 'Article Description' },
      { name: 'Description', content: 'index,follow' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' }
    ]);
  }


}
