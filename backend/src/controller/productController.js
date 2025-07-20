import productService from '../service/productService.js';

const getProduct = (req,res)=>{

  const result = productService.getOne();
  res.json(result);
  
};

const productList= (req, res) => {
  const data = productService.getAll();
  res.json(data);

}

export default {getProduct, productList}