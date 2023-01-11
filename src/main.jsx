import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA_1zB6fo379033ObIJvdlOH_JSGbxE1p8',
  authDomain: 'nimbus-nith.firebaseapp.com',
  projectId: 'nimbus-nith',
  storageBucket: 'nimbus-nith.appspot.com',
  messagingSenderId: '503345539183',
  appId: '1:503345539183:web:c8ee375c297aba88ebc59a',
  measurementId: 'G-0RT2HKQQZ6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (count, error) => {
        if (error.message.includes('Network Error') && count < 3) {
          return true;
        }
        return false;
      },
      staleTime: 60 * 60 * 1000,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
