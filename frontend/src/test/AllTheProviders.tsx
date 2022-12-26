import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children, ...rest }: AllTheProvidersProps) => {
  return (
    <Provider store={store} {...rest}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default AllTheProviders;
