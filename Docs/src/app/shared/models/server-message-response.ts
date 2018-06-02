export class ServerMessageResponse {
  public data: any;
  public description: string;
  public status?: number;

  constructor(json: any = null) {
    if (json) {
      this.description = json.description || '';
      this.data = json.data || {};
      this.status = json.status || null;
    } else {
      this.description = 'Some success message.';
      this.data = {
        'type': 'ANY_MESSAGE_FOR_EXAMPLE',
        'status': 'SUCCESS',
        'payload': {
          'anyServerData': 'hello'
        }
      };
    }
  }
}
