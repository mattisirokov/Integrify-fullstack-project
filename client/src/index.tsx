import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reportWebVitals from 'reportWebVitals';
import App from 'components/App';
import { store } from 'redux/store';
import 'index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="637505325043-i1he1d2naqn1asfgjudfi96sk70q11fd.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
    </GoogleOAuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
