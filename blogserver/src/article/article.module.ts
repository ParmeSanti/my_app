<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { articleProviders } from './article.provider';
import { DatabaseModule } from '../database/database.module';
@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController],
    providers: [ArticleService, ...articleProviders],
})
export class ArticleModule { }
=======
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { articleProviders } from './article.provider';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService, ...articleProviders],
})
export class ArticleModule {}
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577
