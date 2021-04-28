import {
  NgModule
} from "@angular/core";

import {
  MatToolbarModule
} from '@angular/material/toolbar';

import {
  MatIconModule
} from '@angular/material/icon';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatListModule
} from '@angular/material/list';

import {
  MatCardModule
} from '@angular/material/card';

import {
  MatSidenavModule
} from '@angular/material/sidenav';

const materialArr: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatSidenavModule
]


@NgModule({
  imports: materialArr,
  exports: materialArr
})
export class MaterialModule {

}
