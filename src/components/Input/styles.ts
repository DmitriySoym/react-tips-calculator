import styled from "styled-components";

const StyledInput = styled.input`
  width: 456px;
  height: 68px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.3px;

  margin-bottom: 33px;
  color: rgba(117, 108, 108, 0.6);
  border-radius: 30px;
  border: none;
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }

  @media (max-width: 768px) {
    max-width: 331px;
    width: 100%;
    height: 68px;
    margin: 0 auto 17px;
  }
`;

export { StyledInput };
