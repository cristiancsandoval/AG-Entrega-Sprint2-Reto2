import React from 'react';
import {FooterStyle, IconStyle} from '../styled/style'

const FooterCountdown = () => {
  return (
    <FooterStyle>
        <a href='https://facebook.com' target="_blank">
            <IconStyle src='images/icon-facebook.svg' alt='icon facebook'/>
        </a>
        <a href='https://pinterest.com' target="_blank">
            <IconStyle src='images/icon-pinterest.svg' alt='icon pinterest'/>
        </a>
        <a href='https://instagram.com' target="_blank">
            <IconStyle src='images/icon-instagram.svg' alt='icon instagram'/>
        </a>
    </FooterStyle>
  )
}

export default FooterCountdown