import React, { FC } from 'react';
import ReactDom from 'react-dom';

import styles from './index.module.scss';

const App: FC = () => {

  return (
    <>
      <h1 className={styles.title}>Hello React</h1>
    </>

  )
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)