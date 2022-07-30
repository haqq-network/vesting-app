import React from 'react';
import styled from '@emotion/styled';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ecf0f1;
  font-family: 'Fira Mono', monospace;
`;

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>🚧 Under constaction 🚧</Title>
      </header>
    </div>
  );
}
