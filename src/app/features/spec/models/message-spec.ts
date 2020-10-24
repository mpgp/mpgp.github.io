import { Field } from './field';
import { ServerMessage } from './server-message';

export type MessageVerb = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD' | '';

export class MessageSpec {
  clientMessage: object;
  description: string;
  fields: Field[];
  name: string;
  serverMessage: ServerMessage;
  summary: string;
  verb: MessageVerb;

  constructor(json?: MessageSpec) {
    if (json) {
      this.description = json.description || '';
      this.fields = (json.fields && json.fields.map(x => new Field(x))) || [new Field()];
      this.name = json.name || '';
      this.summary = json.summary || '';
      this.clientMessage = json.clientMessage || {};
      this.serverMessage = (json.serverMessage && new ServerMessage(json.serverMessage)) || new ServerMessage();
      this.verb = json.verb || '';
    } else {
      this.description = 'A description for some message.';
      this.fields = [new Field()];
      this.name = 'ANY_MESSAGE_FOR_EXAMPLE';
      this.summary = 'Here are the basic data of messages.';
      this.verb = '';
      this.clientMessage = {
        payload: {
          anyField: 'Any Value',
          nonRequiredField: 42,
        },
        type: 'ANY_MESSAGE_FOR_EXAMPLE',
      };
      this.serverMessage = new ServerMessage();
    }
  }
}
