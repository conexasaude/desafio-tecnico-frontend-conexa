import styled from '@emotion/styled';

export * from 'shared/index.style';

export const PageWrapper = styled.main`
  display: flex;
  flex-grow: 1;
  > * {
    display: flex;
  }
  form {
    max-width: 235px;
    width: 100%;
    > * {
      margin-bottom: 32px;
    }
    button[type='submit'] {
      width: 100%;
    }
  }
  section {
    flex-grow: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 115%;

    text-align: center;
    letter-spacing: -2.5px;

    color: #1c307f;

    margin-bottom: 67px;
  }
  @media screen and (max-width: 991px) {
    > * {
      flex-direction: column;
    }
    .illustration {
      display: none;
    }
    section {
      justify-content: center;
      align-self: stretch;
    }
    h1 {
      margin: 0;
      font-size: 32px;
      line-height: 39px;
    }
    form {
      max-width: unset;
    }
  }
`;
