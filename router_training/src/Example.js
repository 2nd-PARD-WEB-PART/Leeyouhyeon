import React from "react";
import "./Example.css";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #fff;
    color: #000;
    font-size: 14px;

    @media (min-width: 768px){
        font-size: 30px;
        color : red;
    }
    @media (min-width: 992px){
        font-size: 60px;
        color : blue;
    }

`;

const Example=()=> {
    return (
        <Wrapper>
            <h1>fafafafaf</h1>
            <p>afffffffffffff</p>
        </Wrapper>
    );
  }
  
  export default Example;