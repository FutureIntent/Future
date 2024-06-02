import { ActionInterface, ActionType } from "@app/bot/actions/ActionInterface";
import TelegramBot, { Message } from "node-telegram-bot-api";


class Actions implements ActionInterface {
    private bot: TelegramBot;
    private msg: Message;

    private actionList: ActionType = {
        hi: () => this.actionHi(),
        gpt: (text: string) => this.actionGpt(text)
    }

    constructor(bot: TelegramBot, msg: Message) {
        this.bot = bot;
        this.msg = msg;
    }

    processAction(action: string, text: string) {
        this.actionList[action] && this.actionList[action](text);
    }

    actionHi() {
        this.bot.sendMessage(this.msg.chat.id, `Hello ${this.msg.from?.first_name}, you are a slaaave!`);
    }

    actionGpt(text: string) {
        this.bot.sendMessage(this.msg.chat.id, `GPT says: "${text}"`);
    }

}

export default Actions;