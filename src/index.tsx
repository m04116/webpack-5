import React, { FC } from 'react';
import ReactDom from 'react-dom';

const App: FC = () => {

  return (
    <h1>Hello React!</h1>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)