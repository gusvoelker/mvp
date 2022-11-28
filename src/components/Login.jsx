import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';




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
    display: inline-flex;
    flex-direction: column;
    width: 64%;
  `

  const Logo = styled.img`
  width: 120%;
  `

  const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  `

  const LoginTitle = styled.h1`
  font-size: 1.2em;
  padding-left: 10%;
  margin: 12% 0 0 0;
  color: #866118;
  `

  const LoginDescription = styled.h2`
  padding-left: 10%;
  margin: 6% 0 0 0;
  max-width: 60%;
  font: bold 25px "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #866118;
  `

  const Nav = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px 30px 0;
  `

  const LoginMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `

  const LoginHeading = styled.h1`
    font: bold 24px/29px "Helvetica Neue", Helvetica, Arial, sans-serif;
  `

  const LoginLineBreak = styled.hr`
    & {
      width: 100%;
      border: none;
      border-top: 2px solid #e0e0e0;
      color: #6e6d7a;
      overflow: visible;
      text-align: center;
      height: 5px;
      margin-top: 40px;
    }
    &:after{
      background: #fff;
      content: 'Or';
      padding: 0 20px;
      position: relative;
      top: -13px;
    }
  `

  const LoginContent=styled.div`
    padding: 30px 60px 0;
    width: 50%;
  `

  const Label = styled.label`
    display: block;
    width: 100%;
    margin-bottom: 30px;
    font: bold 15px/24px "Helvetica Neue", Helvetica, Arial, sans-serif;
  `

  const PairedLabel = styled.label`
    width: 47.5%;
    margin-top: 10px;
    margin-bottom: 30px;
    font: bold 15px/24px "Helvetica Neue", Helvetica, Arial, sans-serif;
  `

  const PairedInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `

  const TextInput = styled.input`
  width: 100%;
  font-size: 1em;
  padding: 10px 16px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: block;
  border: 1px solid transparent;
  border-radius: 8px;
  height: 40px;
  padding: 10px 16px;
  background-color: #f3f3f4;
  color: #0d0c22;
  outline: none;
  &:hover, &:focus {
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    background-color: white;
    border-color: rgba(234,76,137,0.4);
  }
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
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
        <LoginDescription>Never stress dinner planning agian!</LoginDescription>
        <LogoContainer>
          <Logo src='dinnertimeLogo.png'/>
        </LogoContainer>
      </Image>
      <Login>
        <Nav>
          <p>Already have an account? <a href="" onClick={handleHome}>Sign In</a></p>
        </Nav>
        <LoginMain>
          <LoginContent>
            <LoginHeading>
            Sign up to Dinner Time
            </LoginHeading>
            <GoogleButton type="dark"/>
            <LoginLineBreak/>
              <PairedInputContainer>
                <PairedLabel>
                  Name
                  <TextInput type="text" autocomplete="name"></TextInput>
                </PairedLabel>
                <PairedLabel>
                  Username
                  <TextInput type="text"></TextInput>
                </PairedLabel>
              </PairedInputContainer>
              <Label>
                Email
                <TextInput type="text"></TextInput>
              </Label>
              <Label>
                Password
                <TextInput type="text"></TextInput>
              </Label>
              <Label>
                Confirm Password
                <TextInput type="text"></TextInput>
              </Label>
              <LoginSubmit>submit</LoginSubmit>
          </LoginContent>
        </LoginMain>
      </Login>
    </PageContainer>
  )
}