import { render, screen } from '@testing-library/react';
import App from './App';
import store from 'redux/store'
import {Provider} from 'react-redux'

describe('App', () => {
  test(`renders words correctly`, async () => {
    render(<Provider store={store}>
      <App />
    </Provider>);

    expect(screen.getByText('Please wait, loading')).toBeInTheDocument();

    //TODO mock out loading topics + check for success
  });
});
