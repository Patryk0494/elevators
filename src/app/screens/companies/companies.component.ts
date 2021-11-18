import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CompanyService } from '@core/repository';
import { LocationService } from '@core/services';
import {
  GEOLOCATION_SUPPORT,
  GeolocationService,
} from '@ng-web-apis/geolocation';
import { HotToastService } from '@ngneat/hot-toast';
import { Subscription, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Component({
  selector: 'app-companies',
  template: `
    <app-top-bar-filters></app-top-bar-filters>
    <section class="flex">
      <div class="flex 2xl:flex-50 flex-60">
        <router-outlet></router-outlet>
      </div>
      <app-companies-map
        class="hidden lg:block 2xl:flex-50 flex-40"
      ></app-companies-map>
    </section>
  `,
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  public subs$: Subscription;

  constructor(
    private readonly _geolocation$: GeolocationService,
    @Inject(GEOLOCATION_SUPPORT) private readonly _geolocationSupport: boolean,
    private readonly _locationService: LocationService,
    private readonly _companyService: CompanyService,
    private readonly _toastService: HotToastService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.subs$ = new Subscription();
  }

  public ngOnInit(): void {
    this._geolocationSupport && this._getCoords();
    this._fetchAllCompanies();
    this.document.body.classList.add('full-height');
  }

  public ngOnDestroy(): void {
    this.subs$.unsubscribe();
    this.document.body.classList.remove('full-height');
  }

  private _fetchAllCompanies(): void {
    this._companyService
      .getAll({
        region: '',
        name: '',
      })
      .subscribe();
  }

  private _getCoords(): void {
    this.subs$.add(
      this._geolocation$
        .pipe(
          take(1),
          catchError((e: Error): any => {
            return throwError(e.message);
          })
        )
        .subscribe(
          (res) => {
            if (res) {
              this._locationService.coords = {
                lat: (res as GeolocationPosition).coords.latitude,
                lng: (res as GeolocationPosition).coords.longitude,
              };
            }
          },
          (e: string) => {
            this._toastService.error(e);
          }
        )
    );
  }
}
