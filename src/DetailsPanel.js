import styled from 'styled-components';
import * as mediaQueries from './media-queries';

const DetailsPanel = styled.div`
  border-radius: 5px;
  background: ${props => props.theme.elementsColor};
  flex: 1 0 350px;
  margin: 0 10px 50px;
  padding: 20px 30px 0px;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.1);
  ${mediaQueries.large} {
    margin: 0 0 50px 0;
    padding: 0 50px;
    flex: 0 0 calc(21%);
  }
`;

export default DetailsPanel;
