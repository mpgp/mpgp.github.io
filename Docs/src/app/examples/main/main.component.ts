import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { Message } from '../../shared/models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'mpgp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public messages$: Observable<Message[]>;

  constructor(
    public route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this.messages$ = this.route.params.pipe(
      map(({specification}) => specification),

      // Don't make a http request, if the specification wasn't changed.
      distinctUntilChanged(),
      switchMap((specification) => this.http.get<any>(`assets/${specification}.json`)),
      map(data => data.messages.map(message => new Message(message))));
  }

  public isNotEmpty(obj: any) {
    return Object.keys(obj).length !== 0;
  }
}
