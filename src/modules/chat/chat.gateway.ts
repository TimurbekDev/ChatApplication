import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('typing')
  handleTyping(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    client.broadcast.emit('typing', `${data.user} is typing...`);
  }

  @SubscribeMessage("chatMessage")
  handleJoin(@MessageBody() data: any) {
    this.server.emit('chatMessage', data);
  }

  @SubscribeMessage('send')
  handleSendMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket){
    console.log(data);
    client.broadcast.emit('send',data);
  }
}