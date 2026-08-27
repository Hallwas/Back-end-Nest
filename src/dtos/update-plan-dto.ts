import { IsOptional, IsString, Length, IsNumber, IsPositive } from 'class-validator';

export class UpdatePlanDto {
    @IsOptional()
    @IsString()
    @Length(2, 120)
    name?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    price?: number;
}
