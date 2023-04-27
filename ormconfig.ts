import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'sqlitedb',
    entities: ['src/entity/**/*{.js, .ts}'],
    synchronize: true,
    migrations: ['src/migrations/**/*{.js, .ts}']
}

export default config;
