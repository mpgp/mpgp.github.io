export class NavigateEvent {
  action: number;
  module: number;
  schema: string;
  tab: number;

  constructor(json: NavigateEvent = null) {
    this.action = json.action;
    this.module = json.module;
    this.schema = json.schema;
    this.tab = json.tab;
  }
}
