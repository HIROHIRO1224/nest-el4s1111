import { Module } from "@nestjs/common";
import { MorseService } from "./morse.service";
import { MorseGateway } from "./morse.gateway";
import { MorseController } from "./morse.controller";

@Module({
  providers: [MorseGateway, MorseService],
  controllers: [MorseController],
})
export class MorseModule {}
