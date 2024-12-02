import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset styles for Quill editor */
  .ql-editor {
    font-family: inherit;
    font-size: inherit;
    line-height: 1.6;
    color: inherit; /* Match your app's text color */
  }

  img {
    max-width: 100%;
    height: auto; /* Ensure images fit within containers */
  }

  p, h1, h2, h3, h4, h5, h6 {
    // margin: 0; /* Remove default margins for headings and paragraphs */
  }
`;

export default GlobalStyle;
