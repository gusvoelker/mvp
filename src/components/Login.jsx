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
      background-color: #f2d184;
      width: 36%;
      height: 100%;
      display: inline-flex;
      flex-direction: column;
    `

  const Login = styled.div`
    background-color: white;
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
    margin: 0 auto;
  `

  const LogoContainer = styled.div`
    margin: 20% 0 0 0;
    display: flex;
    width: 100%;
  `

  const LoginTitle = styled.h1`
  font-size: 1.2em;
  padding-left: 10%;
  margin: 12% 0 0 0;
  `

  const LoginDescription = styled.h2`
  font-size: 1.7em;
  padding-left: 10%;
  margin: 6% 0 0 0;
  max-width: 60%;
  `


  return (
    <PageContainer>
      <Image>
        <LoginTitle>Dinner Time</LoginTitle>
        <LoginDescription>Never stress about dinner planning agian!</LoginDescription>
        <LogoContainer>
          <Logo src='logo2.png'/>
        </LogoContainer>
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