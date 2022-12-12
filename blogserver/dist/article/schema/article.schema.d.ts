import * as mongoose from 'mongoose';
export declare const ArticleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    content: string;
    title: string;
    author: string;
    description: string;
    updatedAt: Date;
}>;
