import React from 'react';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import Collage from '../components/Landing/Collage';
import { Welcome } from '../components/Landing/Welcome';
import { Slider } from '../components/Landing/Slider';


export const Index = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Welcome/>
      <Collage/>
      <Footer/>
    </div>
  )
}
