import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlanDto } from 'src/dtos/plan/create-plan-dto';
import { UpdatePlanDto } from 'src/dtos/plan/update-plan-dto';

@Injectable()
export class PlansService {

    constructor(
        private prisma: PrismaService
    ) { }

    async create(dto: CreatePlanDto) {
        const plan = await this.prisma.plan.create({
            data: {
                name: dto.name,
                price: dto.price,
            }
        });
        return {
            message: 'Plano criado com sucesso!',
            data: plan
        };
    }

    async findAll() {
        return await this.prisma.plan.findMany();
    }

    async findOne(id: number) {
        const plan = await this.prisma.plan.findUnique({ where: { id } });
        if (!plan) throw new NotFoundException('Plano não encontrado.');
        return plan;
    }

    async update(id: number, dto: UpdatePlanDto) {
        const plan = await this.prisma.plan.findUnique({ where: { id } });
        if (!plan) throw new NotFoundException('Plano não encontrado.');
        return await this.prisma.plan.update({
            where: { id },
            data: {
                name: dto.name,
                price: dto.price,
            }
        });
    }

    async delete(id: number) {
        const plan = await this.prisma.plan.findUnique({ where: { id } });
        if (!plan) throw new NotFoundException('Plano não encontrado.');
        await this.prisma.plan.delete({ where: { id } });
    }

}
