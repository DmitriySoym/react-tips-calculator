import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 456px;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 331px;
  }

  @media (max-width: 479px) {
    margin-bottom: 60px;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.57);
  margin-top: 18px;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const TotalBlock = styled.div`
  margin: 45px 0;
  font-weight: 500;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: -0.3px;
  color: #000000;

  @media (max-width: 479.98px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { StyledForm, FormTitle, TotalBlock };
