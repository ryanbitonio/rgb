import styled from "styled-components";

export const Content = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #171717;
    font-size: 7rem;
    text-align: center;
    font-family: "BebasNeueProBold";
    line-height: 5.5rem;
    letter-spacing: -0.1rem;
  }

  p {
    font-family: "BebasNeueProLight";
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: 0.15rem;
    margin: 1rem 0 5rem 0;
  }

  svg {
    font-size: 4.5rem;
  }
`;
