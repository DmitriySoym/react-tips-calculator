import styled from "styled-components";

const Container = styled.div`
  padding-top: 203px;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    transform: translate(-5%, -39%);
    width: 250px;
    height: 250px;
    border: 1px solid inherit;
    border-radius: 50%;
    background: rgba(133, 211, 202, 0.31);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    transform: translate(-40%, -17%);
    width: 250px;
    height: 250px;
    border: 1px solid inherit;
    border-radius: 50%;
    background: rgba(133, 211, 202, 0.31);
  }
`;

const Title = styled.h1`
  margin-block-start: 0;
  text-align: center;
  font-size: 40px;
  line-height: 58px;
  letter-spacing: 1.2px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #000000;
`;

export { Title, Container };
