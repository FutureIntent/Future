import { Injectable, OnModuleInit } from '@nestjs/common';
import { Message } from 'node-telegram-bot-api';
import Actions from '@app/bot/actions/Actions';
import { getActionKey, getActionText } from '@utils/botMessage';
const TelegramBot = require('node-telegram-bot-api');


@Injectable()
export class BotService implements OnModuleInit {
  public bot: typeof TelegramBot;

  onModuleInit() {
    this.initialise()
  }

  initialise() {
    const token = process.env.BOT_TOKEN;
    this.bot = new TelegramBot(token, { polling: true });

    this.bot.on('message', (msg: Message) => {
      this.processMessage(msg);
    });

    this.bot.on("polling_error", console.log);
  }

  processMessage(msg: Message) {
    const messageText: string | undefined = msg.text;

    if (messageText?.match(/\/.+/)) {
      const actionKey = getActionKey(messageText);
      const actionText = getActionText(messageText);

      const action = new Actions(this.bot, msg);
      action.processAction(actionKey, actionText);
    }

    // some logic
  }
}
