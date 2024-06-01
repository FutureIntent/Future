import { Module } from '@nestjs/common';
import { appModules } from '@app/config';
import { IndexController } from './index/index.controller';

@Module({
  imports: appModules.imports,
  controllers: appModules.controllers,
  providers: appModules.providers
})

export class AppModule { };
