import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, Req } from '@nestjs/common';
import { FutureService } from '@app/future/future.service';
import { CreateFutureDto } from '@app/future/dto/create-future.dto';
import { UpdateFutureDto } from '@app/future/dto/update-future.dto';
import { ZseFutureDto } from '@app/future/dto/zse-future.dto';
import { Request } from 'express';

@Controller('future')
export class FutureController {
  constructor(private readonly futureService: FutureService) { }

  @Post()
  create(@Body() createFutureDto: CreateFutureDto) {
    return this.futureService.create(createFutureDto);
  }

  @Get()
  findAll() {
    return this.futureService.findAll();
  }

  @Get('zaq/:id')
  zaq(@Param('id') param: string) {
    return param;
  }

  @Get('zxc')
  zxc(@Query() query: string[]) {
    return query;
  }

  @Get('zse')
  @HttpCode(201)
  zse(@Body() zseFutureDto: ZseFutureDto) {
    return zseFutureDto;
  }

  @Get('zdt')
  zdt(@Req() request: Request) {
    console.log(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.futureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFutureDto: UpdateFutureDto) {
    return this.futureService.update(+id, updateFutureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.futureService.remove(+id);
  }
}
