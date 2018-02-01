import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input()
  element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;

  constructor() {
    console.log("constructor is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngonChanges is called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit is called");
    console.log(`Text Content is ${this.header.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck is called");
  }
  ngAfterContentInit() {
    console.log("ngContentInit is called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked is called");
    console.log(`Text Content is ${this.header.nativeElement.textContent}`);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy is called");
  }
  ngAfterViewChecked() {}
  ngAfterViewInit() {}
}
