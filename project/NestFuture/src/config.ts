import { ConfigModule } from "@nestjs/config";

import { IndexController } from "@app/index/index.controller";
import { FutureController } from "@app/future/future.controller";
import { BotController } from "@app/bot/bot.controller";

import { FutureService } from "@app/future/future.service";
import { BotService } from "@app/bot/bot.service";

export const appModules = {
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.dev', '.env.prod'],
            isGlobal: true
        })
    ],
    controllers: [
        IndexController, FutureController, BotController
    ],
    providers: [
        FutureService, BotService
    ]
}