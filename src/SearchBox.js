import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 0;
  color: inherit;
  flex-grow: 1;
  margin-left: 20px;

  &::placeholder {
    color: ${props => props.theme.textColor};
  }

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 10px 0;
  border-radius: 5px;
  background: ${props => props.theme.elementsColor};
  padding: 10px;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.1);
  align-items: center;
  height: 50px;
  max-width: 600px;
  min-width: 500px;
  flex-grow: 1;
`;

const SearchIcon = styled.svg`
  width: 1em;
`;

export default function SearchBox(props) {
  return (
    <Container>
      <SearchIcon viewBox="0 0 100 100" width="50">
        <title>A search icon</title>
        <circle
          r="30"
          cx="35"
          cy="35"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
        />
        <line
          stroke="currentColor"
          strokeWidth="8"
          x1="56"
          y1="56"
          x2="90"
          y2="90"
        />
      </SearchIcon>
      <InputField type="search" {...props} />
    </Container>
  );
}
