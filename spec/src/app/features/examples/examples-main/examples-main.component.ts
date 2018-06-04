import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { Message } from '../models/message';
import { ExamplesService } from '../services/examples.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-examples-main',
  styleUrls: ['./examples-main.component.scss'],
  templateUrl: './examples-main.component.html',
})
export class ExamplesMainComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(public readonly route: ActivatedRoute, public readonly router: Router, private readonly examplesService: ExamplesService) {}

  ngOnInit(): void {
    this.messages$ = this.route.params.pipe(
      map(({ specification }) => specification),
      distinctUntilChanged(),
      switchMap(specification => this.examplesService.getMessages(specification)),
    );
  }

  isNotEmpty(obj: object): boolean {
    return Object.keys(obj).length !== 0;
  }
}
