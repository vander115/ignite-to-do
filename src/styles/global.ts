import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button, textarea, input {
    outline: 0;
    border: 0;
    background: transparent;
  }
  :root {
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;
    
    --purple-500: #8284fa; 
    --purple-700: #5e60ce;

    --blue-500: #4ea8de;
    --blue-700: #1e6f9f;

    --red-500: #E25858;
  }
`;
