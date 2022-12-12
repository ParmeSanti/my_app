import {
    Controller,
    Get, Post, Put, Delete, Body, Param
} from '@nestjs/common';
import { ArticleDTO } from './DTO/article.dto';
import { ArticleService } from './article.service';
import { Article } from './interface/article.interface';


@Controller('article')
export class ArticleController {
<<<<<<< HEAD
    constructor(private readonly articleService: ArticleService) { }
    @Post()
    async create(@Body() articleDto: ArticleDTO) {
        return this.articleService.create(articleDto);
    }
    @Get()
    async findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }
    @Get(':id')
    async find(@Param('id') id: string) {
        return this.articleService.find(id);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() articleDto: ArticleDTO) {
        return this.articleService.update(id, articleDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string, @Body() articleDto: ArticleDTO) {
        return this.articleService.delete(id, articleDto);
    }
=======
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() articleDto: ArticleDTO) {
    return this.articleService.create(articleDto);
  }
  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.articleService.find(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() articleDto: ArticleDTO) {
    return this.articleService.update(id, articleDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Body() articleDto: ArticleDTO) {
    return this.articleService.delete(id, articleDto);
  }
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577
}
