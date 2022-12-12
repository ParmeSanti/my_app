<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})

export class DatabaseModule { }
=======
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
>>>>>>> 2c7d4a2a5579da542f013a93a424f2448e3e0577
