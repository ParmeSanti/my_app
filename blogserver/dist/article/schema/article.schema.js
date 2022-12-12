"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose = require("mongoose");
exports.ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=article.schema.js.map