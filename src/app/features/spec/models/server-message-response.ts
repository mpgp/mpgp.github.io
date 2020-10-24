export class ServerMessageResponse {
  data: object;
  description: string;
  status: number | null;

  constructor(json?: ServerMessageResponse) {
    if (json) {
      this.description = json.description || '';
      this.data = json.data || {};
      this.status = json.status || null;
    } else {
      this.description = 'Some success message.';
      this.status = null;
      this.data = {
        payload: {
          anyServerData: 'hello',
        },
        status: 'SUCCESS',
        type: 'ANY_MESSAGE_FOR_EXAMPLE',
      };
    }
  }
}
