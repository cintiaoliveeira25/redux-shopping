import * as S from './styles';
import { ButtonProps } from './types';

export const CustomButton = ({ children, startIcon, ...rest }: ButtonProps) => {
  return (
    <S.CustomButtonContainer {...rest}>
      {startIcon && <S.IconContainer>{startIcon}</S.IconContainer>}

      {children}
    </S.CustomButtonContainer>
  );
};