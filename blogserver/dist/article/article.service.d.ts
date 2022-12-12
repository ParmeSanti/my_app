import { Model } from 'mongoose';
import { ArticleDTO } from './DTO/article.dto';
import { Article } from './interface/article.interface';
export declare class ArticleService {
    private readonly articleModel;
    constructor(articleModel: Model<Article>);
    create(articleDto: ArticleDTO): Promise<Article>;
    findAll(): Promise<Article[]>;
    find(id: string): Promise<Article[] | any>;
    update(id: string, articleDto: ArticleDTO): Promise<Article>;
    delete(id: string, articleDto: ArticleDTO): Promise<Article>;
}
