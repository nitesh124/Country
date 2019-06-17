import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DetailsList from './DetailsList';
import * as mediaQueries from './media-queries';

const Container = React.memo(styled.div`
  border-radius: 5px;
  overflow: auto;
  background: ${props => props.theme.elementsColor};
  flex: 1 0 350px;
  margin: 0 10px 50px;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.1);
  ${mediaQueries.large} {
    margin: 0 0 50px 0;
    flex: 0 0 calc(21%);
  }
`);

const Clickable = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const CountryName = styled.h2`
  margin: 0 0 10px;
`;

const DetailsPanel = styled.div`
  padding-left: 55px;
  margin: 50px;
`;

function CountryElement(props) {
  return (
    <Container as={props.as}>
      <Clickable to={`/country/${props.code}`}>
        <DetailsPanel>
          <CountryName>{props.name}</CountryName>
          <DetailsList>
            {props.details.map(detail => (
              <Fragment key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
                <br />
              </Fragment>
            ))}
          </DetailsList>
        </DetailsPanel>
      </Clickable>
    </Container>
  );
}

export default React.memo(CountryElement);
