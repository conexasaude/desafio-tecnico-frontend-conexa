import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

interface AllTheProvidersProps {
    children: React.ReactNode
}

const AllTheProviders = ({
    children,
    ...rest
  }: AllTheProvidersProps) => {
    return (
        <Provider store={store} {...rest} >
            {children}
        </Provider>
    );
  };

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: props => (
      <AllTheProviders
        {...props}
        {...options}
      />
    ),
    ...options,
  });

export const customWait = (delay = 1000) => {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
