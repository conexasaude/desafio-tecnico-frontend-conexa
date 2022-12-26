import styled from '@emotion/styled';

export const ContainerBase = styled.div`
  max-width: 1334px;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 32px);
  @media screen and (max-width: 991px) {
    max-width: 272px;
  }
`;
