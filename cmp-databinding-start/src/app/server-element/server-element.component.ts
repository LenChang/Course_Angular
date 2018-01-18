import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input()
  element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;

  constructor() {
    console.log("constructor is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngonChanges is called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit is called");
  }
}
