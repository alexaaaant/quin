import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import launchesSlice from './features/launch/launchesSlice';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = configureStore({
    reducer: {
      launches: launchesSlice
    }
  });

  return <Provider store={store}>{children}</Provider>;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

async function flushPromises(): Promise<void> {
  return await new Promise((resolve) => scheduler(resolve));
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render, flushPromises };
