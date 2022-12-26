import styled from '@emotion/styled';

export const RightContent = styled.div`
  > * {
    margin: 0 8px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 991px) {
    .salutation {
      display: none;
    }
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;
