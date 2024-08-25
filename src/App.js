import React from "react";
import {Component} from "react";
import "./App.css";
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import HelloJSX from './Components/HelloJSX';
import Count from './Components/Count';
import ClassCounter from './Components/ClassCounter';
import Counting from './Components/Counting';


export default function App() {
  return (
    <div>


     <ClassCounter />
      <Count/>
      <Welcome /> 
    
      <ClassCounter/>
      <Counting />

     {/*
   <Greet name= "Moa" heroName="Mulusew" >
     <p> this is children tag </p>
     <>cool, very cool.</>

     </Greet> 
    <Greet name="Sewent" heroName="Akale">
      <button>I TOOK ACTION</button > </Greet>
    <Greet name="Solé" heroName="Wede Webe"/>
    
    <Welcome name="Bruk" heroName="Heyaw"/>

    */}

<section className="footer">
      <h1> WTF</h1>
    <Greet />
    <Welcome /> 
    <HelloJSX />
  </section>

  </div>
  );
}
