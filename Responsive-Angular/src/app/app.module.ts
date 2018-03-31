import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [FlexLayoutModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
