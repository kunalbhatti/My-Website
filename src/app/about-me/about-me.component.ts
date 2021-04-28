import {
  Component,
  OnInit
} from "@angular/core";
import {
  MediaChange,
  MediaObserver
} from "@angular/flex-layout";
import {
  Subscription
} from "rxjs";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  watcher: Subscription;
  mediaQuery = '';

  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.mediaQuery = change.mqAlias;
    });
  }

}
