import React from "react";
import styled from "styled-components";

const Filter = ({ filterFunc, name }) => {
  return <Button onClick={filterFunc}>{name}</Button>;
};

const Button = styled.button`
  display: flex;
  width: content;
  height: 30px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 30px;

  :hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

export default Filter;
