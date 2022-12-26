import styled from '@emotion/styled';

const warningMessageHeight = '1.2em';
const toolTipBackgroundColor = '#2e50d4';
const inputFontSize = '14px';
const inputPaddingY = '6px';

export const InputWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: ${warningMessageHeight};
  label {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #575453;
  }
  input {
    border: none;
    border-bottom: 2px solid #dad2d0;
    padding: ${inputPaddingY} 0;
    font-size: ${inputFontSize};
    ::placeholder {
      font-family: 'Nunito';
      font-style: italic;
      font-weight: 300;
      line-height: 20px;
      color: #999392;
    }
  }
  .warning-message {
    display: none;
    position: absolute;
    bottom: -${warningMessageHeight};
  }
  .more-info-icon {
    margin-left: 0.8em;
    color: #999392;
    .tool-tip-text {
      background: ${toolTipBackgroundColor};
      border-radius: 4px;
      color: white;
      padding: 4px;
      position: absolute;
      bottom: calc(100% + 8px);
      left: 0;
      right: 0;
      display: none;
    }
    .icon-container {
      position: relative;
      display: inline-flex;
      justify-content: center;
      &:hover {
        ~ .tool-tip-text {
          display: block;
        }
        &::after {
          content: '';
          position: absolute;
          border: 8px solid transparent;
          border-top: 8px solid #2e50d4;
          bottom: calc(100% - 6px);
        }
      }
    }
  }
  .toggle-visibility-container {
    color: #999392;
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: calc(${inputFontSize} + (2 * ${inputPaddingY}));
  }
`;
