import { ApiProperty } from "@nestjs/swagger";

export class MorseMessageRequestDto {
  @ApiProperty()
  readonly message: string;

  constructor(partial: Partial<MorseMessageRequestDto>) {
    Object.assign(this, partial);
  }
}
