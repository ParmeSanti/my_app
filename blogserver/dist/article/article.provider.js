"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleProviders = void 0;
const article_schema_1 = require("./schema/article.schema");
exports.articleProviders = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (connection) => connection.model('Article', article_schema_1.ArticleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=article.provider.js.map