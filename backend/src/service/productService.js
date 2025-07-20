import fs from "fs";

const getAll = () => {
  const rawData = fs.readFileSync("../backend/src/data/product.json", "utf8");
  
  const data = JSON.parse(rawData);
  return data;
  
};

const getOne = () => {
  const rawData = fs.readFileSync("../backend/src/data/product.json", "utf8");
  const products = JSON.parse(rawData);
  const filterData = products.filter((product) => product.rating > 4);

  return filterData;
  
};

export default { getAll, getOne };
