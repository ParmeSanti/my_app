"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ArticleService = class ArticleService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async create(articleDto) {
        console.log('Neuen Artikel erzeugen' + articleDto);
        const createdArticle = new this.articleModel(articleDto);
        return await createdArticle.save();
    }
    async findAll() {
        console.log('Alle Artikel liefern');
        return await this.articleModel.find().exec();
    }
    async find(id) {
        return await this.articleModel.findById(id).exec();
    }
    async update(id, articleDto) {
        return await this.articleModel.findByIdAndUpdate(id, articleDto);
    }
    async delete(id, articleDto) {
        return await this.articleModel.findByIdAndRemove(id);
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ARTICLE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map