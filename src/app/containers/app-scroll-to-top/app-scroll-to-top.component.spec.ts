import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '@shared/material.module';

import { containers } from '../';
import { components } from '../../components';

import { AppScrollToTopComponent } from './app-scroll-to-top.component';

describe('AppScrollToTopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule, RouterTestingModule],
      declarations: [...components, ...containers],
    }).compileComponents();
  }));

  it('should render', async(() => {
    const fixture = TestBed.createComponent(AppScrollToTopComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
