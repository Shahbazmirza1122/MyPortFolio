import React from 'react'
import styled from 'styled-components';
import resume from './images/resume.jpg';
import shahbazHd1 from './images/shahbazHd1.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img className="image" src={shahbazHd1} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Shahbaz Mirza</span></h4>
                <p className="paragraph">
                    Running a software company named SoftTechs DigitalSolution, The purpose of my company is to 
                    provide the Digital Solution to people around the world. I have a great and competent team of my guy's 
                    they work until our clients satisfection. We deals with all kinds of Digital Solutions including Social Media Marketing.
                    Contact Freely for geting shining ideas for your business.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Shahbaz Aslam</p>
                        <p>: 28</p>
                        <p>: Pakistani </p>
                        <p>: English, Urdu, Punjabi </p>
                        <p>: Faisalabad, Punjab, Pakistan</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 60%;
        
        img{
            
            height: 540px;
            width: 250px;
            object-fit: cover;
            margin-left: 10%;
            margin-top: 0%;
        
            
        }
    }
    
    .right-content{
        width: 110%;
        margin-top: 4%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
