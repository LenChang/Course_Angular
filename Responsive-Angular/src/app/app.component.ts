import { Component, OnInit } from "@angular/core";
import { ObservableMedia } from "@angular/flex-layout";

// Ref: https://stackoverflow.com/questions/45188134/change-the-layout-or-cols-value-of-md-grid-list-based-on-screen-size
// Ref: http://brianflove.com/2017/05/03/responsive-angular/
// Ref: https://material.angular.io/components/categories

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  tiles = [
    { text: "QueryBar", cols: 3, rows: 1, color: "lightblue" },
    { text: "Maps", cols: 7, rows: 6, color: "lightgreen" },
    { text: "WatRInfo", cols: 3, rows: 5, color: "lightpink" },
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private observableMedia: ObservableMedia) {
    observableMedia.asObservable().subscribe(change => {
      // console.log(change.mqAlias);
      if (change.mqAlias == "xs") {
        this.cols = 1;
        this.tiles = [
          { text: "QueryBar", cols: 1, rows: 1, color: "lightblue" },
          { text: "Maps", cols: 1, rows: 2, color: "lightgreen" },
          { text: "WatRInfo", cols: 1, rows: 2, color: "lightpink" },
          // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
        ];
      } else if (change.mqAlias == "sm") {
        this.cols = 1;
        this.tiles = [
          { text: "QueryBar", cols: 1, rows: 1, color: "lightblue" },
          { text: "Maps", cols: 1, rows: 2, color: "lightgreen" },
          { text: "WatRInfo", cols: 1, rows: 2, color: "lightpink" },
          // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
        ];
      } else {
        this.cols = 10;
        this.tiles = [
          { text: "QueryBar", cols: 3, rows: 1, color: "lightblue" },
          { text: "Maps", cols: 7, rows: 6, color: "lightgreen" },
          { text: "WatRInfo", cols: 3, rows: 5, color: "lightpink" },
          // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
        ];
      }
      // console.log(change.mqAlias);
    });
  }

  /**
   * The number of colums in the md-grid-list directive.
   */
  cols = 10;

  ngOnInit() {
    // this.cols = 1;
  }
}
