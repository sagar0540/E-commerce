import express from 'express'
import productController from '../controller/productController.js';

const router = express.Router();



router.get("/product",productController.productList );



router.get("/one",productController.getProduct);

export default router;