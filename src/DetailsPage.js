import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteContent from './SiteContent';
import Button from './Button';
import { useData } from './DataContext';
import DetailsList from './DetailsList';
import DetailsLayout from './DetailsLayout';
import DetailsPanel from './DetailsPanel';
import Flag from './Flag';
import Converter from './Converter';

export default function DetailsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.match.params.code]);

  const { findCountryByCode } = useData();
  const details = findCountryByCode(props.match.params.code);

  return (
    <SiteContent>
      <Button as={Link} to="/" spacedOut>
        &larr; Back
      </Button>
      {details && (
        <DetailsLayout>
          <Flag src={details.flag} alt={`The flag of ${details.name}`} />
          <DetailsPanel>
            <h2>{details.name}</h2>
            <DetailsList>
              <dt>Population:</dt>
              <dd>{details.population.toLocaleString()}</dd>
              <br />
              <dt>Capital:</dt>
              <dd>{details.capital}</dd>
            </DetailsList>
            <DetailsList>
              <dt>
                {details.currencies.length === 1 ? 'Currency' : 'Currencies'}
              </dt>
              <dd>
                {details.currencies
                  .map(currency => `${currency.name} (${currency.symbol})`)
                  .join(', ')}
              </dd>
              <br />
              <Converter currencyCode = {details.currencies[0].code}/>
            </DetailsList>
          </DetailsPanel>
        </DetailsLayout>
      )}
    </SiteContent>
  );
}
