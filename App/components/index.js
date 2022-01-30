/**
 * @File : App/components/index.js
 */

 import React, { Component } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Tabs from './Home';
 
 export default function App(){
     return(
         <NavigationContainer>
             <Tabs />
         </NavigationContainer>
     )
 }