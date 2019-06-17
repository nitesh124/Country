import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  transition: all 0.1s ease-out;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 50px;
  font-weight: 400;
  text-align: center;
`;

export default function SiteHeader() {
  return (
    <Container>
      <Logo>Countries</Logo>
    </Container>
  );
}
