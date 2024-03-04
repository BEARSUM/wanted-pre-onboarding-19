import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #efefef;

  span {
    font-size: 16px;
  }
  button {
    padding: 8px;
    background-color: #1f1f1f;
    color: white;
    font-weight: 600;
  }
`;
