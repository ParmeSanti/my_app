import { ArticleDTO } from './DTO/article.dto';
import { ArticleService } from './article.service';
import { Article } from './interface/article.interface';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(articleDto: ArticleDTO): Promise<Article>;
    findAll(): Promise<Article[]>;
    find(id: string): Promise<any>;
    update(id: string, articleDto: ArticleDTO): Promise<Article>;
    delete(id: string, articleDto: ArticleDTO): Promise<Article>;
}
