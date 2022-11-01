import App from '../containers/App';
import { LAUNCH } from '../features/launch/constants';
import { render } from '../test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.get(`*${LAUNCH}*`, (req, res, ctx) => {
    return res(ctx.json([{ id: '1', name: '2', pad: { latitude: 1, longitude: 2 } }]));
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('App', () => {
  it('makes a snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
