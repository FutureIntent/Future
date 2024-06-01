import { IsNotEmpty } from "class-validator";

export class ZseFutureDto {
    @IsNotEmpty()
    readonly id: number
}