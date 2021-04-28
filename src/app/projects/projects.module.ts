import {
  NgModule
} from "@angular/core";
import {
  CommonModule
} from "@angular/common";
import {
  MaterialModule
} from "../material/material.module";
import {
  ProjectsRoutingModule
} from "./projects-routing.module";
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  ProjectsComponent
} from "./projects.component";


@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, MaterialModule, ProjectsRoutingModule, FlexLayoutModule],
})

export class ProjectsModule {

}
