import { Controller, Post, Body, Delete, Param, Get, HttpCode } from '@nestjs/common';
import { ReviewModel } from './review.module';

@Controller('review')
export class ReviewController {
    @Post('create')
    async create(@Body() dto: Omit<ReviewModel, '_id'>) {


    }


    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @HttpCode(200)
    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {

    }

}
