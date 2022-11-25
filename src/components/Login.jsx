import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



export default function (props) {

  const handleHome = (e) => {
    e.preventDefault();
    props.setPage('home')
  }
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

  const Logo = styled.img`
  width: 100%;
  `

  const LogoContainer = styled.div`
  margin: 20% 0 0 0;
  display: flex;
  align-items: center;
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

  const SwitchToSignIn = styled.p`
    text-align: right;
  `
  const LoginHeading = styled.h1`
    text-align: center;
  `

  const LoginLineBreak = styled.hr`
    & {
      width: 60%;
      border: none;
      border-top: 2px solid #e0e0e0;
      color: #6e6d7a;
      overflow: visible;
      text-align: center;
      height: 5px;
    }
    &:after{
      background: #fff;
      content: 'Or';
      padding: 0 20px;
      position: relative;
      top: -13px;
    }
  `

  const LoginInputs = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  `

  const Label = styled.label`
    display: block;
    width: 60%;
  `

  const TextInput = styled.input`
  width: 100%;
  font-size: 1.4em;
  padding: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: block;
  `

  const LoginSubmit = styled.button`
    width: 60%;
    font-size: 1.4em;
    padding: 5px;
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
        <SwitchToSignIn>Already have an account? <a href="" onClick={handleHome}>Sign In</a></SwitchToSignIn>
        <LoginHeading>
        Sign up to Dinner Time
        </LoginHeading>
        <LoginLineBreak/>
        <LoginInputs>
          <Label>
            Username
            <TextInput type="text"></TextInput>
          </Label>
          <Label>
            Password
            <TextInput type="text"></TextInput>
          </Label>
          <LoginSubmit>submit</LoginSubmit>
        </LoginInputs>
      </Login>
    </PageContainer>
  )
}