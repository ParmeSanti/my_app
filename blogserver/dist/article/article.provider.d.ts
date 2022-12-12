import { Connection } from 'mongoose';
export declare const articleProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        content: string;
        title: string;
        author: string;
        description: string;
        updatedAt: Date;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        content: string;
        title: string;
        author: string;
        description: string;
        updatedAt: Date;
    }>>;
    inject: string[];
}[];
