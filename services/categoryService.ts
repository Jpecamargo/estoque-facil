import { db } from "@/database/database";

// Definição de tipo para categorias
type Category = {
  id?: number;
  name: string;
};

// Função para adicionar uma categoria
const addCategory = async (category: Category) => {
  const { name } = category;

  await (await db).runAsync(`INSERT INTO categories (name) VALUES (?);`, [name]);
};

// Função para buscar todas as categorias
const getCategories = async () => {
  const categories = await (await db).getAllAsync(`SELECT * FROM categories;`);
  return categories;
};

// Função para buscar categroia por id
const getCategoryById = async (categoryId: number) => {
  const category = await (await db).getFirstAsync("SELECT * FROM categories where id = (?)", [categoryId]);
  return category;
};

// Exporta as funções de categoria
export { addCategory, getCategories, getCategoryById, Category };
