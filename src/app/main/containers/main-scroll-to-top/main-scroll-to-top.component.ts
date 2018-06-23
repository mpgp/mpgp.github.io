import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-scroll-to-top',
  styleUrls: ['./main-scroll-to-top.component.scss'],
  templateUrl: './main-scroll-to-top.component.html',
})
export class MainScrollToTopComponent {
  showScroll = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.showScroll = true;
    } else if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.showScroll = false;
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
