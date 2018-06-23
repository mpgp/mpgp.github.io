export class NavigatedEvent {
  action: number;
  module: number;
  schema: string;
  tab: number;

  constructor(json: NavigatedEvent = null) {
    this.action = json.action;
    this.module = json.module;
    this.schema = json.schema;
    this.tab = json.tab;
  }
}
