import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Image = styled.div`
  background-color: #f2d184;
  width: 36%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
`;

export const Login = styled.div`
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  width: 64%;
`;

export const Logo = styled.img`
  width: 120%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LoginTitle = styled.h1`
  font-size: 1.2em;
  padding-left: 10%;
  margin: 12% 0 0 0;
  color: #866118;
`;

export const LoginDescription = styled.h2`
  padding-left: 10%;
  margin: 6% 0 0 0;
  max-width: 60%;
  font: bold 25px "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #866118;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 30px 0;
  font: normal 14px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoginHeading = styled.h1`
  font: bold 24px/29px "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const LoginLineBreak = styled.hr`
  & {
    width: 100%;
    border: none;
    border-top: 2px solid #e0e0e0;
    color: #6e6d7a;
    overflow: visible;
    text-align: center;
    height: 5px;
    margin-top: 40px;
    font: normal 14px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  &:after {
    background: #fff;
    content: "Or";
    padding: 0 20px;
    position: relative;
    top: -13px;
  }
`;

export const LoginContent = styled.div`
  padding: 30px 60px 0;
  width: 50%;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 30px;
  font: bold 15px/24px "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const PairedLabel = styled.label`
  width: 47.5%;
  margin-top: 10px;
  margin-bottom: 30px;
  font: bold 15px/24px "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const PairedInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SubmitContainer = styled.div`
  margin-top: 40px;
  display: block;
`;

export const TextInput = styled.input`
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
  &:hover,
  &:focus {
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    background-color: white;
    border-color: rgba(234, 76, 137, 0.4);
  }
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
`;

export const LoginSubmit = styled.input`
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 20px;
  display: block;
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  background-color: #ea4c89;
  color: white;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  padding: 10px 16px;
  transition: color 200ms ease;
  &:hover {
    background-color: #f082ac;
  }
  &:active {
    background-color: #bb3d6e;
  }
`;
