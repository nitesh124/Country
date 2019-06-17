import React from 'react';
import matchSorter from 'match-sorter';
import SearchBox from './SearchBox';
import CountryElement from './CountryElement';
import Countries from './Countries';
import SiteContent from './SiteContent';
import { useData } from './DataContext';
import Filters from './Filters';
import SiteHeader from './SiteHeader';

export default function HomePage() {
  const { countries } = useData();
  const [searchValue, setSearchValue] = React.useState('');
  const [currentRegion] = React.useState('');

  const filteredCountries = React.useMemo(() => {
    if (!countries) {
      return [];
    }
    let sortableCountries = countries;
    if (currentRegion) {
      sortableCountries = countries.filter(
        country => country.region === currentRegion,
      );
    }
    return matchSorter(sortableCountries, searchValue, { keys: ['name'] });
  }, [searchValue, countries, currentRegion]);
  return (
    <SiteContent>
      <SiteHeader />
      {countries && (
        <>
          <Filters>
            <SearchBox
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search for a country"
            />
          </Filters>
          <Countries>
            {filteredCountries.map(country => (
              <CountryElement
                as="li"
                key={country.name}
                code={country.alpha3Code}
                name={country.name}
                flag={country.flag}
                details={[
                  {
                    label: 'Population',
                    value: country.population.toLocaleString(),
                  },
                  { label: 'Region', value: country.region },
                  { label: 'Capital', value: country.capital },
                ]}
              />
            ))}
            {filteredCountries.length === 0 && <p>No matches</p>}
          </Countries>
        </>
      )}
    </SiteContent>
  );
}
