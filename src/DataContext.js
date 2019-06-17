import React from 'react';
import { AppGlobals } from './AppGlobals';

export const DataContext = React.createContext();

function dataReducer(state, action) {
  switch (action.type) {
    case 'START':
      return {
        loading: true,
        countries: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        countries: action.payload,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        countries: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unrecognized action ${action.type}.`);
  }
}

export function DataProvider(props) {
  const [context, dispatch] = React.useReducer(dataReducer, {
    loading: false,
    countries: null,
    error: null,
  });
  React.useEffect(() => {
    dispatch({ type: 'START' });
    fetch(AppGlobals.countriesApi)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SUCCESS', payload: data });
      })
      .catch(e => dispatch({ type: 'ERROR', payload: e }));
  }, []);
  return <DataContext.Provider value={context} {...props} />;
}

export function useData() {
  const context = React.useContext(DataContext);

  if (!context) {
    throw new Error(
      'useData() requires a DataProvider component',
    );
  }
  const enhancedContext = React.useMemo(
    () => ({
      ...context,
      findCountryByCode: code => {
        if (context.countries) {
          return context.countries.find(
            country => country.alpha3Code === code.toUpperCase(),
          );
        } else {
          return null;
        }
      },
    }),
    [context],
  );
  return enhancedContext;
}
