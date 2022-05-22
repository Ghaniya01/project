import React from 'react'
import Icon1 from '../../Images/svg-4.svg' 
import Icon2 from '../../Images/svg-1.svg' 
import Icon3 from '../../Images/svg-1.svg' 
import{FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2,  FeaturesP} from './FeaturesElements'
const Features = () => {
  return (
   <FeaturesContainer id="features">
       <FeaturesH1> Features</FeaturesH1>
       <FeaturesWrapper>
         <FeaturesCard>
         <FeaturesIcon src={Icon1}/>
         <FeaturesH2>Be Identified</FeaturesH2>
         <FeaturesP>Have access to any place within the school premises with your card.</FeaturesP>
         </FeaturesCard>

         <FeaturesCard>
         <FeaturesIcon src={Icon2}/>
         <FeaturesH2>Perform transactions</FeaturesH2>
         <FeaturesP>Go cashless with your card. Use your card to perform transaction within the school.</FeaturesP>
         </FeaturesCard>

         <FeaturesCard>
         <FeaturesIcon src={Icon3}/>
         <FeaturesH2>Be Identified</FeaturesH2>
         <FeaturesP>Have access to any place within the school premises with your card.</FeaturesP>
         </FeaturesCard>
       </FeaturesWrapper>
   </FeaturesContainer>
  )
}

export default Features