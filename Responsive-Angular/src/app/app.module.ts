import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [FlexLayoutModule, BrowserModule, MatGridListModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  tiles = [
    { text: "One", cols: 2, rows: 1, color: "lightblue" },
    { text: "Two", cols: 3, rows: 3, color: "lightgreen" },
    { text: "Three", cols: 2, rows: 2, color: "lightpink" },
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
