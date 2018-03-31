import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListModule } from "@angular/material/grid-list";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [FlexLayoutModule, BrowserModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
