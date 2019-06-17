import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { DataProvider } from './DataContext';
import GlobalStyles from './GlobalStyles';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DataProvider>
          <div>
            <GlobalStyles />
            <Suspense>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/country/:code" component={DetailsPage} />
            </Suspense>
          </div>
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
