import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cacheable } from '~/core/services/cache.service';

import { Message } from '../models/message';

@Injectable()
export class SpecService {
  constructor(private readonly http: HttpClient) {}

  @Cacheable()
  getMessages(schema: string): Observable<Message[]> {
    return this.http
      .get<{ messages: Message[] }>(`assets/${schema}.json`)
      .pipe(map(data => data.messages.map(message => new Message(message))));
  }
}
