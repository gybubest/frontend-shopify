import React from 'react';
import styled from 'styled-components'
import close from '../icons/close.svg';

function Alert({onClose}) {

  return (
    <Wrapper onClick={onClose}>
      <div className="alert-msg">
        You've already selected 5 nominees!
      </div>
        <img className="alert-img" src={close} ></img>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  padding: 2%;
  background-color: #f5f5f7;
  color: #1d1d1f;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  align-items: center;

  .alert-msg {
    color: #c8102E;
    font-weight: bold;
    font-size: 1.17em;
  }

  .alert-img {
    width: 3vw;
    height: 3vh;
    margin-left: 1vw;
  }
`;