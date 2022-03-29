import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebaseApp from "../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
const Header = ({ usuarioGlobal }) => {

  const userImage = "https://img.flaticon.com/icons/png/512/16/16363.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
console.log("getImage")
  const [imagen, setImagen] = useState(userImage)

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
          setImagen(result.user.photoURL)
          localStorage.setItem("imagen", result.user.photoURL)
          console.log("handleAuth")
        })
      .catch((err) => console.log(err.message));

      
  };

useEffect(() => {
  handleAuth()
}, [imagen])

 console.log("useEffect")

  return (
    <Nav>
      <Logo href={usuarioGlobal && "/" }>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      {usuarioGlobal && (
        <NavMenu>
          <a href="/">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a href="/">
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a href="/">
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a href="#originals">
            <img src="/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a href="#movies">
            <img src="/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a href="/">
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>
      )}

      {usuarioGlobal ? (
        <Login onClick={() => signOut(auth)}>Sign out</Login>
      ) : (
        <Login onClick={handleAuth}>login</Login>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 16px;
  padding: 0 36px;
  height: 70px;
  z-index: 10;
`;

const Logo = styled.a`
  width: 80px;
  padding: 0;
  max-height: 70px;
  margin-top: 5px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
   @media (max-width: 768px) {
    display: none;
  } 

  @media screen and (max-width: 480px){
   display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;


export default Header;
