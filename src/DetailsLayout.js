import styled from 'styled-components';
import * as mediaQueries from './media-queries';
const DetailsLayout = styled.div`
  ${mediaQueries.large} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    & > * {
      flex: 1;
      width: 0; /* since the image will make stuff grow, this is required for some reason */
    }
  }
`;

export default DetailsLayout;
