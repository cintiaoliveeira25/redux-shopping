import * as S from "./styles";
import { CartProps } from "./types";

export const Cart = ({ isVisible, setIsVisible }: CartProps) => {

  const handleEscapeAreaClick = () => {
    setIsVisible(false)
  }

  return (
    <S.CartContainer isVisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartTitle>Seu Carrinho</S.CartTitle>
      </S.CartContent>
    </S.CartContainer>
  );
};