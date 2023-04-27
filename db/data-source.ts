import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'My@$conn@@t',
    database: 'newpostgresdb',
    entities: ['dist/src/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: true // not use in production
  };

  const dataSource = new DataSource(dataSourceOptions);
  export default dataSource;