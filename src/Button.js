import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
  style: props.spacedOut ? { margin: '30px 0 50px' } : {},
}))`
  appearance: none;
  background: ${props => props.theme.elementsColor};
  border: 0;
  border-radius: 0;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.2);
  color: inherit;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export default Button;
