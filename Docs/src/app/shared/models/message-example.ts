import { Field } from './field';
import { ServerMessage } from './server-message';

export class MessageExample {
  public clientMessage: any;
  public description: string;
  public fields: Field[];
  public name: string;
  public serverMessage: ServerMessage;
  public summary: string;
  public verb?: string;

  constructor(json: any = null) {
    if (json) {
      this.description = json.description || '';
      this.fields = (json.fields && json.fields.map(x => new Field(x))) || [new Field()];
      this.name = json.name || '';
      this.summary = json.summary || '';
      this.clientMessage = json.clientMessage || {};
      this.serverMessage = (json.serverMessage && new ServerMessage(json.serverMessage)) || new ServerMessage();
      this.verb = json.verb || null;
    } else {
      this.description = 'A description for some message.';
      this.fields = [new Field()];
      this.name = 'ANY_MESSAGE_FOR_EXAMPLE';
      this.summary = 'Here are the basic data of messages.';
      this.clientMessage = {
        type: 'ANY_MESSAGE_FOR_EXAMPLE',
        payload: {
          anyField: 'Any Value',
          nonRequiredField: 42
        }
      };
      this.serverMessage = new ServerMessage();
    }
  }
}
