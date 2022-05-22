import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinksWrapper, FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink , WebsiteRights} from './FooterElement'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/about'>About</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle>For Sponsorship and partnership:</FooterLinkTitle>
                        <FooterLink to='/about'>ganiyaatusanuusi@gmail.com</FooterLink>
                        <FooterLink to='/about'>08036951232</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinkContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    
                    <WebsiteRights>Digismart ©  {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//facebook.com" target="_black" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//instagram.com" target="_black" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//linkedin.com" target="_black" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer