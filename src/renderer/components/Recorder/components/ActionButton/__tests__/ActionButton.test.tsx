import ActionButton from "..";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContextProvider from "../../ContextProvider";


test('loads and displays greeting', async () => {
  render(
    <ContextProvider>
      <ActionButton />
    </ContextProvider>
  )
  const recordButton = screen.getByRole('record');
  expect(recordButton).toBeInTheDocument();
})
