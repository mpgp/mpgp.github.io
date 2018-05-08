import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

import { Message } from '../../shared/models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'mpgp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public fileName$ = new BehaviorSubject('websocket');

  public messages$: Observable<Message[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.messages$ = this.fileName$.pipe(
      switchMap(fileName => this.http.get<any>(`assets/${fileName}.json`)),
      map(data => data.messages.map(message => new Message(message))));
  }

  public isNotEmpty(obj: any) {
    return Object.keys(obj).length !== 0;
  }
}
