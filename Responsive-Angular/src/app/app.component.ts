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
  constructor(private observableMedia: ObservableMedia) {
    observableMedia.asObservable().subscribe(change => {
      if (change.mqAlias == "xs") {
        this.cols = 1;
      } else if (change.mqAlias == "sm") {
        this.cols = 2;
      } else {
        this.cols = 3;
      }
      // console.log(change.mqAlias);
    });
  }
  title = "app";

  /**
   * The number of colums in the md-grid-list directive.
   */
  cols = 2;

  ngOnInit() {
    this.cols = 1;
  }
}
