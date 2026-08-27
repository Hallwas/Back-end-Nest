import { IsString, Length, IsNumber, IsPositive } from 'class-validator';

export class CreatePlanDto {
    @IsString()
    @Length(2, 120)
    name: string = '';

    @IsNumber()
    @IsPositive()
    price: number = 0;
}
