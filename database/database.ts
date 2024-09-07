import * as SQLite from "expo-sqlite";

const db = await SQLite.openDatabaseAsync("database.db");

const createTables = async (): Promise<void> => {
  await db.execAsync(`CREATE TABLE IF NOT EXISTS categories (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL
                  );`);

  await db.execAsync(`CREATE TABLE IF NOT EXISTS products (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        barcode TEXT,
                        category_id INTEGER,
                        fractional BOOLEAN,
                        quantity REAL,
                        min_quantity REAL,
                        FOREIGN KEY(category_id) REFERENCES categories(id)
                  );`);
};

// Exporta a função para criar tabelas
export { db, createTables };
