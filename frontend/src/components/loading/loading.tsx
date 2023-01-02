import React from 'react';
import { ContainerLoading } from './styled-loading';

export interface loadingProps {
  color?: string;
  width?: string;
  background?: string;
}

export const Loading: React.FC<loadingProps> = ({ ...props }: loadingProps) => {
  return (
    <ContainerLoading color={props.color} background={props.background}>
      <div title="0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox={props?.width ? props.width : '0 0 50 50'}
        >
          <path
            fill="#000"
            d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"
            opacity=".2"
          />
          <path
            fill="#000"
            d="m26.013 10.047 1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              dur="0.5s"
              from="0 20 20"
              repeatCount="indefinite"
              to="360 20 20"
              type="rotate"
            />
          </path>
        </svg>
      </div>
    </ContainerLoading>
  );
};
