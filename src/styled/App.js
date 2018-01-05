import styled from 'styled-components';
// import * as vars from '../styled/Variables';
import DeleteIcon from '../assets/svg/delete.svg';
import SubmitIcon from '../assets/svg/plus.svg';

export const AppBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background: #0063DC;
  background-image: linear-gradient(-200deg, rgba(255,0,132,0.50) 30%, rgba(0,0,0,0.50) 100%);
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto 50px;
  padding: 50px 20px 0;
`;

export const DeleteButton = styled.button`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border: 0;
  background: url(${DeleteIcon}) top left no-repeat;
  align-self: center;
`;

export const Form = styled.form`
  position: relative;
  margin-top: 25px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    width: 21px;
    height: 21px;
    margin: auto;
    background: url(${SubmitIcon}) top left no-repeat;
  }
`;

export const FormTextInput = styled.input`
  display: block;
  padding: 5px 60px 5px 15px;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #fff;
  box-shadow: none;
  color: #333333;
  font-size: 20px;
  transition: all ease .2s;

  &::-webkit-input-placeholder {
    color: #333333;
  }
  &::-moz-placeholder {
    color: #333333;
  }
  &:-ms-input-placeholder {
    color: #333333;
  }
  &:-moz-placeholder {
    color: #333333;
  }

  &:focus {
    outline: none;
    border-color: #43B05C;
  }
`;