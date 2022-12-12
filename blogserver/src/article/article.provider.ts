<<<<<<< HEAD
import { Connection } from 'mongoose';
import { ArticleSchema } from './schema/article.schema';
export const articleProviders = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('Article', ArticleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
=======
import { Connection } from 'mongoose';
import { ArticleSchema } from './schemas/article.schemas';
export const articleProviders = [
  {
    provide: 'ARTICLE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Article', ArticleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577
