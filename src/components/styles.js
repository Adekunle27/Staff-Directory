import styled from "styled-components";

export const QuillContentWrapper = styled.div`
  max-width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 16px;

  /* Customize text appearance */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.9;
  }

  /* Specific handling for lists */
  ul,
  ol {
    padding-left: 1.5em;
    margin: 1em 0;
  }

  li {
    margin-bottom: 0.5em;
  }
`;

export const PublicationsWrapper = styled.div`
  max-width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1.5;

  /* Styles for ordered list */
  ol {
    padding-left: 1.5em; /* Add indentation for list items */
    margin: 1em 0; /* Add spacing around the list */
  }

  li {
    margin-bottom: 1em; /* Add spacing between list items */
    text-align: justify; /* Align text neatly for better readability */
  }

  /* Ensure links or large elements don’t break layout */
  a {
    word-wrap: break-word;
    color: #0077cc; /* Optional: Customize link color */
    text-decoration: underline;
  }

  /* Handle table-like structures gracefully (if included) */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  /* Ensure images or media fit within the container */
  img {
    max-width: 100%;
    height: auto;
  }
`;
