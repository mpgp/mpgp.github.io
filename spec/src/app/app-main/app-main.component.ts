import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-main',
  styleUrls: ['./app-main.component.scss'],
  templateUrl: './app-main.component.html',
})
export class AppMainComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  navIsFixed: boolean;

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.navIsFixed = true;
    } else if ((this.navIsFixed && window.pageYOffset) || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.navIsFixed = false;
    }
  }

  scrollToTop(): void {
    (function smoothscroll(): void {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  }
}
