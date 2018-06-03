import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '@app/shared/material.module';

import { AppMainComponent } from './app-main.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule, RouterTestingModule],
      declarations: [AppMainComponent],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppMainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a toolbar', async(() => {
    const fixture = TestBed.createComponent(AppMainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('mat-sidenav-container > mat-sidenav-content > mat-toolbar > span');
    expect(title.textContent).toContain('MPGP Documentation');
  }));
});
