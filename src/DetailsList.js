import styled from 'styled-components';
import * as mediaQueries from './media-queries';

const DetailsList = styled.dl `
  margin-bottom: 20px;

  dt {
    font-weight: 600;
    display: inline-block;
    width: 7em;
    margin-bottom: 10px;
  }
  dd {
    display: inline-block;
    margin: 0;
    margin-bottom: 10px;
  }

  ${mediaQueries.large} {
    display: inline-block;
    & + & {
      margin-left: 50px;
      max-width: 50%;
    }
  }
`;

export default DetailsList;