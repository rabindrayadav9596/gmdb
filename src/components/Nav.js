import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>GMDB</h1>
      </Logo>
      <Input>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          
        </button>
      </Input>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  @media (max-width: 30em){
    display: flex;
    flex-direction: column;
    box-shadow : none;
  }

  @media (max-width: 40em){
   
    box-shadow : none;
  }
 
  
`;

const Logo = styled(motion.div)`
  /* float:left; */
  display: flex;
  /* align-items: left; */
  
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Input = styled(motion.div)`
  display: flex;
  text-align: center;
  
  input {
     
      font-size: 1.5rem;
      padding: 0.5rem;
      border: none;
      margin-top: 1rem;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
      font-size: 1.5rem;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      margin-top: 1rem;
      
    }
    button::before {
     content: "🔎 ";
    }

`
export default Nav;
