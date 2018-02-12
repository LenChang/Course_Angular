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
  ContentChild,
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
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("constructor is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges is called`);
    console.log(changes);
  }

  ngOnInit() {
    console.log(`ngOnInit is called. Text Content is ${this.header.nativeElement.textContent}`);
    console.log(`Text Content of paragraph: ${this.paragraph.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck is called");
  }
  ngAfterContentInit() {
    console.log("ngContentInit is called");
    console.log(`Text Content of paragraph: ${this.paragraph.nativeElement.textContent}`);
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked is called. Text Content is ${this.header.nativeElement.textContent}`);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy is called");
  }
  ngAfterViewChecked() {}
  ngAfterViewInit() {}
}
