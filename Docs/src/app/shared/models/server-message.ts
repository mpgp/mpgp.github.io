import { ServerMessageResponse } from './server-message-response';

export class ServerMessage {
  public errors: ServerMessageResponse[];
  public success: ServerMessageResponse;

  constructor(json: any = null) {
    const errors = [{
      'description': 'If the message type isn\'t registered.',
      'data': {
        'type': 'MESSAGE',
        'status': 'ERROR',
        'error': {
          'errorCode': 400,
          'message': 'Bad request'
        }
      }
    }, {
      'description': 'If you isn\'t authorized yet.',
      'data': {
        'type': 'ANY_MESSAGE_FOR_EXAMPLE',
        'status': 'ERROR',
        'error': {
          'errorCode': 401,
          'message': 'Unauthorized'
        }
      }
    }];

    if (json) {
      this.success = json.success || new ServerMessageResponse();
      this.errors = (json.errors && json.errors.map(x => new ServerMessageResponse(x))) || errors;
    } else {
      this.errors = errors;
      this.success = new ServerMessageResponse();
    }
  }
}
