import { AllImages, Data } from '../../helpers';
import { NavLink } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faGithub);


export const Footer = () => {
    const headerLinks = Data.links.header;
    const redesLinks = Data.links.redes;
    const footer = Data.footer;

    const linksHeader = Object.values(headerLinks.links);
    const linksRedes = Object.values(redesLinks.links);
   
    return (
        <div className="footer">
            <div className="img-wrapper">
            <a href="https://www.cavepotlab.com/" target="_blank">
                <img src={AllImages.CavepotLabLogo} alt={footer.alt.imgs[1]} />
            </a>
            <a href="https://cavepot.com" target="_blank">
                <img src={AllImages.LogoFooter} alt={footer.alt.imgs[0]} />
            </a>
            </div>
            <div className="text-wrapper">
                <div className="column company">
                    <label className='title'>{footer.columns[0].title}</label>
                    {linksHeader.map((obj: any,key) => (
                        <>   
                            {obj.link.includes("http") && 
                                <a key={key} href={obj.link} target='_blank' className='menu-nav__link'>
                                    { obj.label }
                                </a>
                            } 
                           {!obj.link.includes("http") &&  
                                <NavLink to={obj.link}>
                                            { obj.label }
                                </NavLink> 
                            }
                        </>
                    ))}
                </div>
                <div className="column connect">
                    <label className='title'>{footer.columns[1].title}</label>
                    {linksRedes.map((obj: any,key) => (
                            <a href={obj.link} target="_blank">
                                    { obj.label }
                            </a> 
                    ))}

                </div>
                <div className="column locate">
                    <div className='main-text'>
                        <label className='title' >{footer.columns[2].title}</label>
                        <a href='https://goo.gl/maps/wz4pabw7Pg1Q5bog8' target="_blank">{footer.columns[2].texts[0]} {footer.columns[2].texts[1]}</a>
                
                        <a href='mailto:info@cavepot.com' target="_blank">{footer.columns[2].texts[2]}</a>
                    </div>
                    <div className='social-media'>
                        {linksRedes.map((obj: any,key) => (
                                <a key={key} href={obj.link} target="_blank">
                                        <FontAwesomeIcon icon={['fab', obj.label.toLowerCase()]} />
                                </a> 
                        ))}
                    </div>
                    <div className="clutch-wrapper">
                        <div className="clutch-widget" data-nofollow="true" data-url="https://widget.clutch.co" data-widget-type="1" data-darkbg="true" data-height="40" data-clutchcompany-id="592393"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}


















