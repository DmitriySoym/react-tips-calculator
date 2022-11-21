import styled from "styled-components";

const StyledForm = styled.form`
  width: 456px;
  margin: 0 auto;
  display: grid;
`;

const FormTitle = styled.h2`
  text-align: center;
  left: 571px;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.57);
  margin-top: 18px;
  margin-bottom: 45px;
`;

const TotalBlock = styled.div`
  margin: 45px 0;
  font-weight: 600;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: -0.3px;
  color: #000000;
`;

export { StyledForm, FormTitle, TotalBlock };
