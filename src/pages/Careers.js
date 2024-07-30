import React from "react";
import styled from "styled-components";

const Careers = () => (
  <Container>
    <h1>Careers at OAU</h1>
    <p>
      Find your next career opportunity at OAU. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit...
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor eu
      elit sed interdum. Aenean lorem justo, eleifend vel cursus eget, semper eu
      mi. Nam facilisis sit amet orci sed gravida. Curabitur sodales porta erat
      vel iaculis. Sed eget interdum tellus, et varius sem. Phasellus ac ornare
      augue, in tempor est. Proin aliquet nisl a orci pharetra finibus. Etiam ac
      mauris tortor. Pellentesque vestibulum pellentesque enim mattis posuere.
    </p>
  </Container>
);

export default Careers;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
