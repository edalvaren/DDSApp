import styled from 'styled-components';

export const Wrapper = styled.section`
        padding: 1em;
        margin: 1em;
        background-color: #094145;
        height: 10vh;
        width: 80%;
        border-radius: 10px;
        `;


export const SearchForm = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 3s;
    width: 80%;
    height: 60px;
    background: white;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1.5px solid #05747C;
    padding: 5px;

    &:hover {
    width: 80%;
    cursor: pointer
    }
    `;

export const InputBox = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    padding: 0.5em;
    margin: 0.5em;
    display: block;
    font-size: 18px;
    color: black;
    border-radius: 1px;
    padding: 0 5px;

    &:hover {
        background-color: lightgray;
    }
    `;

export const SearchButton = styled.button`
    position: absolute;
  right: -50px;
  width: 40px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
`;



