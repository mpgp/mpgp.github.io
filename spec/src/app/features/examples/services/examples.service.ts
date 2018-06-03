import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cacheable } from '@app/core/services/cache.service';

import { Message } from '../models/message';

@Injectable()
export class ExamplesService {
  constructor(private readonly http: HttpClient) {}

  @Cacheable()
  getMessages(specification: string): Observable<Message[]> {
    return this.http
      .get<{ messages: Message[] }>(`assets/${specification}.json`)
      .pipe(map(data => data.messages.map(message => new Message(message))));
  }
}
