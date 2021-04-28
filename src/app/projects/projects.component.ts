import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";

import {
  MediaChange,
  MediaObserver
} from "@angular/flex-layout";
import {
  MatSidenav
} from "@angular/material/sidenav";

import {
  Subscription
} from "rxjs";

import {
  Project
} from "../models/projects.model";

import * as projects from './../../data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  watcher: Subscription;
  mediaQuery = '';
  projects: Project[];
  selectedProject: Project;

  @ViewChild('sidenav') sideNav: MatSidenav;

  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.projects = projects.projects;
    this.selectedProject = this.projects[0];
  }

  ngAfterViewInit() {
    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.mediaQuery = change.mqAlias;

      if (this.mediaQuery !== 'xs' && this.mediaQuery !== 'md') {
        this.sideNav.open();
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  showProject(project: Project) {
    this.selectedProject = project;
    if (this.mediaQuery === 'xs' || this.mediaQuery === 'sm') {
      this.sideNav.toggle();
    }
  }
}
