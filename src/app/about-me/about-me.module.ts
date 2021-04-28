import {
  CommonModule
} from "@angular/common";
import {
  NgModule
} from "@angular/core";
import {
  MaterialModule
} from "../material/material.module";

import {
  AboutMeRoutingModule
} from "./about-me-routing.module";
import {
  AboutMeComponent
} from "./about-me.component";

import {
  FlexLayoutModule
} from '@angular/flex-layout';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, MaterialModule, AboutMeRoutingModule, FlexLayoutModule]
})

export class AboutMeModule {

}
