<<<<<<< HEAD:blogserver/src/article/schema/article.schema.ts
import * as mongoose from 'mongoose';
export const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
})
=======
import * as mongoose from 'mongoose';
export const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577:blogserver/src/article/schemas/article.schemas.ts
