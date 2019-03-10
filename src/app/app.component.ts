import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  navLinks = [
    {
      label: 'Angular Forms',
      path: '/angularforms'
    },
    {
      label: 'Homemade Dyn',
      path: '/homemade-dynamic'
    },
    {
      label: 'Formly Basics',
      path: '/formly-basics'
    },
    {
      label: 'Formly Adv',
      path: '/formly-advanced'
    },
    {
      label: 'Angular SF',
      path: '/angular-sf'
    }
  ];

  constructor() {}

  ngOnDestroy(): void {}
}
