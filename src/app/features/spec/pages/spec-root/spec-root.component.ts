import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { NavigateEvent } from '~/app/features/spec/events/navigate.event';

import { Message } from '../../models/message';
import { SpecService } from '../../services/spec.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'spec-root',
  styleUrls: ['./spec-root.component.scss'],
  templateUrl: './spec-root.component.html',
})
export class SpecRootComponent implements OnInit {
  messages$!: Observable<Message[]>;
  params$!: Observable<NavigateEvent>;

  constructor(readonly route: ActivatedRoute, public readonly router: Router, private readonly specService: SpecService) {}

  ngOnInit(): void {
    this.messages$ = this.route.params.pipe(
      map(({ schema }) => schema),
      distinctUntilChanged(),
      switchMap(schema => this.specService.getMessages(schema)),
    );

    this.params$ = this.route.params.pipe(
      distinctUntilChanged(),
      map(params => new NavigateEvent({
        action: params['action'],
        module: params['module'],
        schema: params['schema'],
        tab: params['tab'],
      })),
    );
  }

  onNavigate(schema: string, _module: number, action: number, tab: number): void {
    this.router.navigate(['/spec', schema, _module, action, tab]).catch(reason => console.error(reason));
  }
}
