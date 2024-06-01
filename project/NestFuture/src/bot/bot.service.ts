import { Injectable, OnModuleInit } from '@nestjs/common';
const TelegramBot = require('node-telegram-bot-api');


@Injectable()
export class BotService implements OnModuleInit {
  public bot: typeof TelegramBot | undefined = undefined;

  onModuleInit() {
    this.initialise()
  }

  initialise() {
    // const token = 'YOUR_TELEGRAM_BOT_TOKEN';

    // this.bot = new TelegramBot(token, { polling: true });
  }
}
