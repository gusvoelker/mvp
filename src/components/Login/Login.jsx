import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import {
  PageContainer,
  Image,
  Login,
  Logo,
  LogoContainer,
  LoginTitle,
  LoginDescription,
  Nav,
  LoginMain,
  LoginHeading,
  LoginLineBreak,
  LoginContent,
  Label,
  PairedLabel,
  PairedInputContainer,
  SubmitContainer,
  TextInput,
  LoginSubmit,
} from "./LoginStyles";
// let str = "";
// for (let key in styles) {
//   str += key;
//   str += ", ";
// }
// console.log("aa", str);

const handleHome = (e) => {
  e.preventDefault();
  props.setPage("home");
};

export default function (props) {
  return (
    <PageContainer>
      <Image>
        <LoginTitle>Dinner Time</LoginTitle>
        <LoginDescription>Never stress dinner planning agian!</LoginDescription>
        <LogoContainer>
          <Logo src="dinnertimeLogo.png" />
        </LogoContainer>
      </Image>
      <Login>
        <Nav>
          <p>
            Already have an account?{" "}
            <a href="" onClick={handleHome}>
              Sign In
            </a>
          </p>
        </Nav>
        <LoginMain>
          <LoginContent>
            <LoginHeading>Sign up to Dinner Time</LoginHeading>
            <GoogleButton type="dark" label="Sign up with Google" />
            <LoginLineBreak />
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
              <TextInput type="text" placeholder="6+ characters"></TextInput>
            </Label>
            <Label>
              Confirm Password
              <TextInput type="text"></TextInput>
            </Label>
            <SubmitContainer>
              <LoginSubmit type="submit" value="Create Account"></LoginSubmit>
            </SubmitContainer>
          </LoginContent>
        </LoginMain>
      </Login>
    </PageContainer>
  );
}
