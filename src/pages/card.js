import React from 'react'
import Card from '../components/Card'
import ScrollToTop from '../components/ScrollToTop';
import { Card1} from '../components/Card/Data';
import img1 from '../Images/photo.jpg';


const Cards = () => {
  console.log(img1)
  return (
    <>
    <Card {...Card1}/>
   
    <ScrollToTop/>
    </>
  )
}

export default Cards