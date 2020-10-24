export class NavigateEvent {
  action: number;
  module: number;
  schema: string;
  tab: number;

  constructor(json?: NavigateEvent) {
    if (json) {
      this.action = json.action;
      this.module = json.module;
      this.schema = json.schema;
      this.tab = json.tab;
    } else {
      this.action = 0;
      this.module = 0;
      this.schema = '';
      this.tab = 0;
    }
  }
}
