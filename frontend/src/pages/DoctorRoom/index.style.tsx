import styled from '@emotion/styled';
import illustrationPlant from 'assets/illustration/illustration-plant.svg';
import illustrationCertificates from 'assets/illustration/illustration-certificates.svg';

export * from 'shared/index.style';

export const PageWrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: #1c307f;
    margin: 32px 12px;
  }
  .consultation-list {
    margin: 0 auto;
    max-width: 440px;
    width: 100%;
    flex-grow: 1;
  }
  .consultation-options {
    > * {
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      color: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      text-decoration: none;
    }
  }
  .without-consultation-message {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #999392;

    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background-image: url(${illustrationCertificates});
      background-size: cover;
      width: 90px;
      height: 60px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: url(${illustrationPlant});
      background-size: cover;
      width: 80px;
      height: 90px;
    }
  }
  @media screen and (max-width: 991px) {
    h1 {
      font-size: 28px;
      line-height: 38px;
      margin: 16px 0;
    }
    .consultation-options {
      border-top: 2px solid #dad2d0;
    }
  }
`;
