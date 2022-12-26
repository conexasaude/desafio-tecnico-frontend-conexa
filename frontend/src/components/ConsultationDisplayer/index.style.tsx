import styled from '@emotion/styled';

export const ConsultationDisplayerWrapper = styled.div<{
  maxDisplayerHeight: number;
}>`
  color: #575453;
  font-family: 'Nunito';
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  .total {
    font-weight: 700;
  }
  .displayer {
    ${({ maxDisplayerHeight }) =>
      maxDisplayerHeight
        ? `
    max-height: ${maxDisplayerHeight}px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  `
        : ``}
  }
`;

export const DiplayerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  .title {
    font-weight: 400;
    font-size: 16px;
  }
  .sub-title {
    font-weight: 400;
    font-size: 12px;
  }
`;
