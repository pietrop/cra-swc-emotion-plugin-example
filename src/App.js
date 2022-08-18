import logo from './logo.svg';
import './App.css';
import { jsx, css, Global, ClassNames } from '@emotion/react'

function App() {
  const baseClassName = css`
  display: block;
  background-color: red;
  width: 100px;
  height: 100px;
`;

  return (
 
    <ClassNames>
      {({ css, cx }) => (
        <div
        className={cx(css(baseClassName))}
        >Red</div>
      )}
    </ClassNames>

  );
}

export default App;
