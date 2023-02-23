import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Logo>Redux Shopping</S.Logo>
      <S.Buttons>
        <div>Login</div>
        <div>Carrinho</div>
      </S.Buttons>
    </S.Container>
  );
}