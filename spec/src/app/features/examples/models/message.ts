import { MessageExample } from './message-example';

export class Message {
  description: string;
  examples: MessageExample[];
  icon: string;
  name: string;

  constructor(json: Message = null) {
    if (json) {
      this.description = json.description || '';
      this.examples = (json.examples && json.examples.map(x => new MessageExample(x))) || [new MessageExample()];
      this.name = json.name || '';
      this.icon = json.icon || '';
    } else {
      this.description = 'Any description...';
      this.examples = [new MessageExample()];
      this.name = 'The name of message';
      this.icon = 'home';
    }
  }
}
