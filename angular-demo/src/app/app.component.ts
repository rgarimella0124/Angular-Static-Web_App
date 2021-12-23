import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- header -->

    <app-header></app-header>

    <app-body></app-body>

    <app-footer class="mt-auto"></app-footer>

    <!-- footer -->
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-demo";
}
