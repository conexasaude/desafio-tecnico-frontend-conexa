import styled from '@emotion/styled';
export * from '../shared/index.style';

export const ComponentWrapper = styled.header`
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 991px) {
    > *:only-child {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
