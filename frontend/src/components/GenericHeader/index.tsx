import React from 'react';
import * as S from './index.style';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.ComponentWrapper>
      <S.ContainerBase>
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.ContainerBase>
    </S.ComponentWrapper>
  );
};

export default Header;
