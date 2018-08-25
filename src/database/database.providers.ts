import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://admin:psl2018@ds133252.mlab.com:33252/praxis-psl',{ useNewUrlParser: true }),
  },
];