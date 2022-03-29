import React from "react";
import styled from "styled-components";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../firebase";
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);

const Login = (props) => {

  const handleAuth = () => {
    signInWithPopup(auth, provider)}

  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="logo" />
          <SignUp onClick={handleAuth}>Get all there</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="logo" />
        </CTA>
        <BackgroundImage />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BackgroundImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vh;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e9;
  font-size: 18px;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 25px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
 color: hsla(0, 0%, 95.3%, 1);
 font-size: 12px;
 margin: 0 0 24px;
 line-height: 1.5;
 letter-spacing: 1.4px;
`

const CTALogoTwo = styled.img`
width: 100%;
max-width: 600px;
margin-bottom: 20px;
`