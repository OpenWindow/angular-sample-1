import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Sample';
  categories =[];
  categoryItems = [];

  ngOnInit(): void {
    this.categories = [
      {
      name : "category 1",
      items: [ { label: "cat1-item1", description: "blah blah"}, { label: "cat1-item2", description: "blah blah"}, { label: "cat1-item3", description: "blah blah"}]
    },
    {
      name : "category 2",
      items: [ { label: "cat2-item1", description: "blah blah"}, { label: "cat2-item2", description: "blah blah"}, { label: "cat2-item3", description: "blah blah"}]
    },
    {
      name : "category 3",
      items: [ { label: "cat3-item1", description: "blah blah"}, { label: "cat2-item2", description: "blah blah"}, { label: "cat3-item3", description: "blah blah"}]
    },
    {
      name : "category 4",
      items: [ { label: "cat4-item1", description: "blah blah"}, { label: "cat3-item2", description: "blah blah"}]
    },
    {
      name : "category 5",
      items: [ { label: "cat5-item1", description: "blah blah"}, ]
    }];

    this.categoryItems = this.categories[0].items;
  }

  onCategorySelect(itemIndex) {
    this.categoryItems = this.categories[itemIndex].items;
  }

}
