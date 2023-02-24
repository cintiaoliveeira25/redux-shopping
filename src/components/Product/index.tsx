import products from "../../data/products";
import { ProductItem } from "../ProductItem";
import * as S from "./styles";

export const Products = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </S.Container>
  );
};