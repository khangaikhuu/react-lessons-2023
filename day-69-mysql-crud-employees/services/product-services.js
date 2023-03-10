import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products`);

  await Promise.all(
    rows.map(async (row) => {
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions.map((d) => d.description);
      const reviews = await getReviews(row.id);
      row.reviews = reviews;
      const images = await getImages(row.id);
      row.imgUrl = images;
      const color = await getColors(row.id);
      row.color = color.map((c) => c.color);
      const size = await getSizes(row.id);
      row.size = size.map((c) => c.size);
    })
  );

  return rows;
}

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products WHERE title LIKE '%${keyword}%'`
  );

  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions.map((d) => d.description);
      const reviews = await getReviews(row.id);
      row.reviews = reviews;
      const images = await getImages(row.id);
      row.imgUrl = images;
      const color = await getColors(row.id);
      row.color = color.map((c) => c.color);
      console.log(descriptions);
    })
  );

  return rows;
}

export async function getColors(productId) {
  const [rows] = await pool.query(
    `select c.color from product_colors pc LEFT JOIN color c ON c.id = pc.color_id  WHERE product_id = ?`,
    [productId]
  );
  return rows;
}
export async function getSizes(productId) {
  const [rows] = await pool.query(
    `select s.size from product_size ps LEFT JOIN size s ON s.id = ps.size_id  WHERE product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getDescriptions(productId) {
  const [rows] = await pool.query(
    `select * from product_description WHERE product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select customer, review from product_reviews WHERE product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getImages(productId) {
  const [rows] = await pool.query(
    `select original, thumbnail from product_images WHERE product_id = ?`,
    [productId]
  );
  return rows;
}
