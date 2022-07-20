import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from './styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from './images/design.svg';
import intelligence from './images/intelligence.svg';
// import gamedev from './images/game-dev.svg';
import wordpress from './images/wordpress.png';
import social from './images/social.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Developing'} 
                        paragraph={'I have two years experience of Web and Mobile Apps developing by using MERN Stack'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={wordpress} 
                            title={'WordPress Developing'} 
                            paragraph={'I have upto two years of experience in wordpress development and de-buging'}
                        />
                    </div>
                    <ServiceCard 
                        image={social} 
                        title={'Digital Marketing'} 
                        paragraph={'My Services of Digital Marketing like, Facebook ads, Google ads, YouTube, Twiter & LinkedIn'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
