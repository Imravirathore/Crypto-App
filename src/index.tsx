import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

//Redux
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();



root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <React.StrictMode>
            <BrowserRouter>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <App />
            </BrowserRouter>
          </React.StrictMode>
        </ChakraProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);

reportWebVitals();
