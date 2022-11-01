import App from '../containers/App';
import { LAUNCH } from '../features/launch/constants';
import { render } from '../test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { Status } from '@googlemaps/react-wrapper';

const mockedMapMethod = jest.fn();
const mockedStatusCallback = jest.fn(() => Status.LOADING);
window.google = { maps: { Map: mockedMapMethod } } as any; // not the best choice, I know

jest.mock('@googlemaps/react-wrapper', () => {
  const lib = jest.requireActual('@googlemaps/react-wrapper');
  return {
    ...lib,
    Wrapper: ({
      children,
      render
    }: {
      children: React.ReactNode;
      render: (status: Status) => JSX.Element;
    }) => {
      const getStatus = (): Status => {
        return mockedStatusCallback();
      };

      return (
        <div id="wrapper">
          {children}
          {render(getStatus())}
        </div>
      );
    },
    Marker: (props: { position: { lat: number; lng: number } }) => (
      <div className="marker">
        lat: {props.position.lat} lng: {props.position.lng}
      </div>
    )
  };
});

export const handlers = [
  rest.get(`*${LAUNCH}*`, (req, res, ctx) => {
    return res(ctx.json({ results: [{ id: '1', name: '2', pad: { latitude: 1, longitude: 2 } }] }));
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('App', () => {
  it('makes a snapshot in different states', async () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();

    // await waitFor(() => {
    //   expect(container.querySelector('.marker')).toBeInTheDocument();
    // });

    // expect(container).toMatchSnapshot();
  });
});
