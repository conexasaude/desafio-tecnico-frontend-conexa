/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { matchers } from '@emotion/jest';
import Input from '.';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);

describe('Input component', () => {
  const labelText = 'Password';

  it('should change the input type when visibility button is clicked', () => {
    render(<Input labelText={labelText} name="password" type="password" />);

    const button = screen.getByRole('button');
    const input = screen.getByLabelText(labelText);
    fireEvent.click(button);

    expect(input.getAttribute('type')).toBe('text');
  });

  it.skip('should show the tooltip when button is hovered', async () => {
    const toolTipText = 'simple tooltip text';
    render(
      <Input
        labelText={labelText}
        name="password"
        type="text"
        toolTip={toolTipText}
      />
    );

    const button = screen.getByRole('button');
    userEvent.hover(button);

    await waitFor(() => expect(screen.getByText(toolTipText)).toBeVisible());
  });
});
