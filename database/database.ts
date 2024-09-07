import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("database.db");

const createTables = (): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const DATABASE_VERSION = 1;
    let { user_version: currentDbVersion } = (await (await db).getFirstAsync<{
      user_version: number;
    }>("PRAGMA user_version")) ?? { user_version: 0 };

    if (currentDbVersion >= DATABASE_VERSION) {
      resolve();
      return;
    }
    if (currentDbVersion === 0) {
      try {
        await (await db).execAsync(`CREATE TABLE IF NOT EXISTS categories (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              name TEXT NOT NULL
                        );`);

        await (await db).execAsync(`CREATE TABLE IF NOT EXISTS products (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              name TEXT NOT NULL,
                              barcode TEXT,
                              category_id INTEGER,
                              fractional BOOLEAN,
                              quantity REAL,
                              min_quantity REAL,
                              FOREIGN KEY(category_id) REFERENCES categories(id)
                        );`);
        currentDbVersion = 1;

        await (await db).runAsync(`PRAGMA user_version = ${currentDbVersion}`);
        resolve();
      } catch (error) {
        reject(error);
      }
    }
    resolve();
  });
};

// Exporta a função para criar tabelas
export { db, createTables };
