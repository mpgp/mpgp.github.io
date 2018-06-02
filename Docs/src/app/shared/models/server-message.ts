import { ServerMessageResponse } from './server-message-response';

export class ServerMessage {
  public errors: ServerMessageResponse[];
  public success: ServerMessageResponse;

  constructor(json: ServerMessage = null) {
    const errors = [
      {
        'data': {
          'error': {
            'errorCode': 400,
            'message': 'Bad request',
          },
          'status': 'ERROR',
          'type': 'MESSAGE',
        },
        'description': 'If the message type isn\'t registered.',
      },
      {
        'data': {
          'error': {
            'errorCode': 401,
            'message': 'Unauthorized',
          },
          'status': 'ERROR',
          'type': 'ANY_MESSAGE_FOR_EXAMPLE',
        },
        'description': 'If you isn\'t authorized yet.',
      },
    ];

    if (json) {
      this.success = json.success || new ServerMessageResponse();
      this.errors = (json.errors && json.errors.map(x => new ServerMessageResponse(x))) || errors;
    } else {
      this.errors = errors;
      this.success = new ServerMessageResponse();
    }
  }
}
