import { useState } from 'react';
import { Cart } from '../Cart';
import * as S from './styles';

export const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };
  
  return (
    <S.Container>
      <S.Logo>Redux Shopping</S.Logo>
      <S.Buttons>
        <div>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </S.Buttons>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </S.Container>
  );
}