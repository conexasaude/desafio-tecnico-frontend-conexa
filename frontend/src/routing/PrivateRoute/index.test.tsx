import { render } from '../../test/testUtil';
import PrivateRoute from '.';
import { setDoctor } from '../../store/doctor';
import store from '../../store';

describe('PrivateRoute component', () => {
  it('should render children when doctor is loggeed(has a token)', () => {
    const fakeRenderCallback = jest.fn();
    const SimpleChildren = () => {
      fakeRenderCallback();
      return null;
    };

    store.dispatch(
      setDoctor({
        name: 'fulano silva',
        token: 'a-simple-token-example',
      })
    );

    render(
      <PrivateRoute>
        <SimpleChildren />
      </PrivateRoute>
    );

    expect(fakeRenderCallback).toHaveBeenCalled();
  });

  // it('should render <Navigate> when doctor isnt loggeed without token', () => {
  //   const fakeRenderCallback = jest.fn();
  //   const SimpleChildren = () => {
  //     fakeRenderCallback();
  //     return null;
  //   };

  //   store.dispatch(
  //     setDoctor({
  //       name: '',
  //       token: '',
  //     })
  //   );

  //   render(
  //     <PrivateRoute>
  //       <SimpleChildren />
  //     </PrivateRoute>
  //   );

  //   expect(fakeRenderCallback).toHaveBeenCalled();
  // });
});
