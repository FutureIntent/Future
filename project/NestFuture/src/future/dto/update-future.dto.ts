import { PartialType } from '@nestjs/mapped-types';
import { CreateFutureDto } from '@app/future/dto/create-future.dto';

export class UpdateFutureDto extends PartialType(CreateFutureDto) {}
