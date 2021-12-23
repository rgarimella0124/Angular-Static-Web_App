import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApplicationInsightsService } from "../../application-insights.service";

@Component({
  selector: "app-body",
  template: `
    <div *ngIf="!showData; else message">
      <div class=" d-flex justify-content-md-center bg-dark ">
        <button type="button" class="btn btn-primary" (click)="getData()">
          Show Random People
        </button>
      </div>
    </div>

    <ng-template #message>
      <div class="bg-dark">
        <div class="row">
          <div class="col-sm-3 pl-5 mt-3" *ngFor="let image of data">
            <div class="card pl-5 mt-3 pb-sm-2">
              <img
                class="card-img-top"
                [src]="image.picture.large"
                alt="Card image"
              />
              <div class="card-body pb-sm-2">
                <h4 class="card-title text-black ">
                  {{ image.name.title + image.name.first }}
                </h4>
                <p class="card-text text-black">{{ image.phone }}</p>
                <p class="card-text text-black">{{ image.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
})
export class BodyComponent implements OnInit {
  public data: any = [];
  public showData: boolean = false;
  private appinsights!: ApplicationInsightsService;
  constructor(private http: HttpClient) {}

  getData() {
    const url = "https://mnitpoc.azurewebsites.net/api/getdetails";
    try {
      this.http.get(url).subscribe((res: any) => {
        this.data = res.results;
        this.showData = true;
        console.log(res.results);
      });
    } catch (exception: any) {
      this.appinsights.logException(exception);
    }
  }

  ngOnInit() {}
}
