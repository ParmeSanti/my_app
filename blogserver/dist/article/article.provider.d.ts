import { Connection } from 'mongoose';
export declare const articleProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        title: string;
        author: string;
        description: string;
        content: string;
        updatedAt: Date;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        title: string;
        author: string;
        description: string;
        content: string;
        updatedAt: Date;
    }>>;
    inject: string[];
}[];
