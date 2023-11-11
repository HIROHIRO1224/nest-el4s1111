import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { MorseService } from "./morse.service";
import {} from "@nestjs/platform-socket.io";
import { Server } from "socket.io";
import { Logger, OnModuleInit } from "@nestjs/common";
@WebSocketGateway()
export class MorseGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor(private readonly morseService: MorseService) {}
  private logger: Logger = new Logger("Gateway Log");
  onModuleInit() {
    this.server.on("connection", (socket) => {
      console.log(socket.id);
      console.log("connected!");
    });
  }
  @SubscribeMessage("message")
  handleMessage(@MessageBody() message: string) {
    this.logger.log("message recieved");
    this.logger.log(message);
    this.server.emit("update", message);
  }
}
