import { BsCartPlus } from 'react-icons/bs';
import { CustomButton } from '../Button';

import * as S from "./styles";
import { ProductsProps } from './types';

export const ProductItem = ({ product }: ProductsProps) => {
  return (
    <S.ProductContainer>
      <S.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </S.ProductImage>

      <S.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </S.ProductInfo>
    </S.ProductContainer>
  );
};