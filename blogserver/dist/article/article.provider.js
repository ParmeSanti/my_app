"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleProviders = void 0;
const article_schemas_1 = require("./schemas/article.schemas");
exports.articleProviders = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (connection) => connection.model('Article', article_schemas_1.ArticleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=article.provider.js.map