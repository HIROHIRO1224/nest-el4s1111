import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MorseModule } from './morse/morse.module';
@Module({
  imports: [MorseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
