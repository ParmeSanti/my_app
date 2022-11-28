import * as mongoose from 'mongoose';
export declare const ArticleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    title: string;
    author: string;
    description: string;
    content: string;
    updatedAt: Date;
}>;
