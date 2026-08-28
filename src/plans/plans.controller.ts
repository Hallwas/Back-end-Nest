import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';

import { CreatePlanDto } from 'src/dtos/plan/create-plan-dto';
import { UpdatePlanDto } from 'src/dtos/plan/update-plan-dto';
import { PlansService } from './plans.service';

@Controller('api/plans')
export class PlansController {
    constructor(private plansService: PlansService) { }

    @Post()
    async create(@Body() dto: CreatePlanDto) {
        return await this.plansService.create(dto);
    }

    @Get()
    async findAll() {
        return await this.plansService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.plansService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePlanDto,
    ) {
        return await this.plansService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.plansService.delete(id);
    }
}
