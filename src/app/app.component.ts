import { Component } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SkipLinkComponent } from './shared/components/skip-link/skip-link.component';
import { filter } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SkipLinkComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a11y-table';

  /**
   *
   */
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events
      .subscribe((e) => {
        if (!(e instanceof Scroll)) {
          return
        }
        if (e.anchor) {
          // anchor navigation
          /* setTimeout is the core line to solve the solution */
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor ?? '');
          })
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      }
      );
  }
}
