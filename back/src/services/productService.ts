// src/services/productService.ts
import { Product } from "../entities/Product";
import { ProductModel } from "../config/data-source";
import { CreateProductDto } from "../dto/createProductDto";
import cloudinary from "../config/cloudinary";

export const getProducts = async (): Promise<Product[]> => {
  return await ProductModel.find();
};


export const getProductById = async (id: string): Promise<Product | null> => {
  return await ProductModel.findOneBy({ id: Number(id) });
}


export const createProduct = async (product: CreateProductDto) => {
  try {

    const uploadedImages: string[] = [];
    // Subir imagen a Cloudinary
    for (const image of product.images) {
      const upload = await cloudinary.uploader.upload(image, {
        folder: 'Vicenta',
      });
      uploadedImages.push(upload.url);
    }

    // Crear producto con URL de la imagen
    const ProductBody = ProductModel.create({ ...product, images: uploadedImages });

    await ProductModel.save(ProductBody);

    return { message: 'Product created successfully', product: ProductBody };
  } catch (error: any) {
    throw new Error('Error uploading image to Cloudinary: ' + error.message);
  }
};

export const editProductService = async (productId: string, product: Partial<CreateProductDto>) => {
  const ProductBody = await ProductModel.findOne({ where: { id: Number(productId) } });

  if (!ProductBody) {
    throw new Error('Product not found');
  }

  const uploadedImages: string[] = [];

  if (product.images && product.images.length > 0) {
    for (const image of product.images) {
      const upload = await cloudinary.uploader.upload(image, {
        folder: 'Vicenta',
      });
      uploadedImages.push(upload.url);
    }
  }

  const updatedProductData = {
    ...ProductBody,
    ...product,
    images: uploadedImages.length > 0 ? uploadedImages : ProductBody.images,
  };

  const updatedProduct = await ProductModel.save(ProductModel.merge(ProductBody, updatedProductData));

  return { message: 'Product updated successfully', product: updatedProduct };
};
