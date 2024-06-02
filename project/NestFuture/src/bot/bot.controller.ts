import { Body, Controller, Get, HttpCode, HttpStatus, Param, Res } from '@nestjs/common';
import { BotService } from '@app/bot/bot.service';
import { Response } from 'express';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) { }

  @HttpCode(200)
  @Get()
  getBotInstance() {
    console.log(this.botService.bot);

    return true;
  }
}
