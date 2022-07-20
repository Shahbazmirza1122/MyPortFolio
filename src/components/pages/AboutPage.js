import React from 'react'
import styled from 'styled-components';
import ImageSection from '../ImageSection';
import Title from '../Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../ServicesSection';
import ReviewsSection from '../ReviewsSetion';
import Testimonial from '../Testimonial';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
                <Testimonial/>
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
