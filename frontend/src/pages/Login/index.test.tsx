import { doctorLogin } from 'infrastructure/conexaApi';
import React from 'react';
import { fireEvent, render, screen } from 'test/testUtil';
import mockConexaApiData from 'test/mockConexaApiData.json';
import Login from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: () => ({
    handlerModal: () => null,
    handlerLoader: () => null,
  }),
}));

jest.mock('../../infrastructure/conexaApi', () => ({
  ...jest.requireActual('../../infrastructure/conexaApi'),
  doctorLogin: jest.fn((...args) =>
    Promise.resolve(mockConexaApiData.doctorLogin)
  ),
}));

describe('Login Page', () => {
  const emailExample = 'email@email.com';
  const passwordExample = '1234';
  beforeEach(() => jest.resetAllMocks());

  it('should call conexaApi.doctorLogin with correct payload when form is submited', () => {
    render(<Login />);

    const inputEmail = screen.getByLabelText('E-mail');
    const inputPassword = screen.getByLabelText(/Senha/);

    fireEvent.change(inputEmail, { target: { value: emailExample } });
    fireEvent.change(inputPassword, { target: { value: passwordExample } });

    const btnSubmit = screen.getByText('Entrar');

    fireEvent.click(btnSubmit);

    expect(doctorLogin).toHaveBeenCalledWith({
      email: emailExample,
      password: passwordExample,
    });
  });
});
