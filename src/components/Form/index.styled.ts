import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 8px;

  border: 2px solid #efefef;
  border-radius: 24px;
  padding: 8px 12px;
  margin-bottom: 32px;

  input {
    margin-left: 4px;
    border: none;
    flex: 1;
    height: 32px;
  }
  button {
    padding: 8px 12px;
    border-radius: 16px;
  }
`;
