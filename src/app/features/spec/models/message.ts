import { MessageSpec } from './message-spec';

export class Message {
  description: string;
  spec: MessageSpec[];
  icon: string;
  name: string;

  constructor(json: Message = null) {
    if (json) {
      this.description = json.description || '';
      this.spec = (json.spec && json.spec.map(x => new MessageSpec(x))) || [new MessageSpec()];
      this.name = json.name || '';
      this.icon = json.icon || '';
    } else {
      this.description = 'Any description...';
      this.spec = [new MessageSpec()];
      this.name = 'The name of message';
      this.icon = 'home';
    }
  }
}
