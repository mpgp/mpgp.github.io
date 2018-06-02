import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { Message } from '../../shared/models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  public messages$: Observable<Message[]>;

  constructor(
    public readonly route: ActivatedRoute,
    public readonly router: Router,
    private readonly http: HttpClient,
  ) {}

  public ngOnInit(): void {
    this.messages$ = this.route.params.pipe(
      map(({specification}) => specification),

      // Don't make a http request, if the specification wasn't changed.
      distinctUntilChanged(),
      switchMap(specification => this.http.get<{messages: Message[]}>(`assets/${specification}.json`)),
      map(data => data.messages.map(message => new Message(message))));
  }

  public isNotEmpty(obj: object): boolean {
    return Object.keys(obj).length !== 0;
  }
}
