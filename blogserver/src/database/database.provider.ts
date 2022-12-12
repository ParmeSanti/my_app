<<<<<<< HEAD
import * as mongoose from 'mongoose';
export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://localhost/articleblog'),
    },
];
=======
import * as mongoose from 'mongoose';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/articleblog'),
  },
];
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577
