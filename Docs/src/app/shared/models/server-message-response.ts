export class ServerMessageResponse {
  public data: object;
  public description: string;
  public status?: number;

  constructor(json: ServerMessageResponse = null) {
    if (json) {
      this.description = json.description || '';
      this.data = json.data || {};
      this.status = json.status || null;
    } else {
      this.description = 'Some success message.';
      this.data = {
        'payload': {
          'anyServerData': 'hello',
        },
        'status': 'SUCCESS',
        'type': 'ANY_MESSAGE_FOR_EXAMPLE',
      };
    }
  }
}
