import { db } from "@/database/database";

// Definição de tipos para produtos
type Product = {
  id?: number;
  name: string;
  barcode: string;
  category_id: number;
  fractional: boolean;
  quantity: number;
  min_quantity: number;
};

// Função para adicionar um produto
const addProduct = async (product: Product) => {
  const { name, barcode, category_id, fractional, quantity, min_quantity } =
    product;

  await db.runAsync(
    `INSERT INTO products (name, barcode, category_id, fractional, quantity, min_quantity) VALUES (?, ?, ?, ?, ?, ?);`,
    [name, barcode, category_id, fractional ? 1 : 0, quantity, min_quantity]
  );
};

// Função para buscar todos os produtos
const getProducts = async () => {
  const products = await db.getAllAsync("SELECT * FROM products");
  return products;
};

// Função para buscar produto por id
const getProductById = async (
  productId: number,
) => {
  const product = await db.getFirstAsync("SELECT * FROM products where id = (?)", [productId]);
  return product;
};

// Exporta as funções de produto
export { addProduct, getProducts, getProductById, Product };
