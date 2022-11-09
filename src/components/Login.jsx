import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



export default function () {
  const PageContainer = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    `

  const Image = styled.div`
      background-color: white;
      display: inline-block;
      width: 40%;
      height: 100%;
    `

  const Login = styled.div`
    background-color: grey;
    display: inline-block;
    width: 60%;
  `

  const LoginHeading = styled.h1`
    text-align: center;
  `

  const LoginInputs = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  `

  const TextInput = styled.input`
    width: 60%;
    font-size: 1.4em;
    padding: 5px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  `

  const LoginSubmit = styled.button`
    width: 60%;
    font-size: 1.4em;
    padding: 5px;
  `

  const Logo = styled.img`
    width: 100%;
    background-color: transparent;
  `


  return (
    <PageContainer>
      <Image>
        <Logo src='dinnertime1.png'/>
      </Image>
      <Login>
        <LoginHeading>
          Login
        </LoginHeading>
        <LoginInputs>
          <TextInput type="text" placeholder="username"></TextInput>
          <TextInput type="text" placeholder="password"></TextInput>
          <LoginSubmit>submit</LoginSubmit>
        </LoginInputs>
      </Login>
    </PageContainer>
  )
}