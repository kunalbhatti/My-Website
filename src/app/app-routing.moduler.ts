import {
  NgModule
} from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import {
  ProjectsComponent
} from "./projects/projects.component";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/projects'
}, {
  path: 'projects',
  loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
}, {
  path: 'about-me',
  loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)
}, {
  path: '**',
  component: ProjectsComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
