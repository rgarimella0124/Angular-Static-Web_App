import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BodyComponent } from "./components/body/body.component";
import { ApplicationInsightsErrorHandler } from "./ApplicatioInsightsErrorHandler";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ApplicationInsightsErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
