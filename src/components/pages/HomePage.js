import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Shahbaz Mirza</span></h1>
                <p>
                    Running a Software Company SoftTechs, i have hardworking team working on all the
                    digital solutions.
                    We provide the different services, such as Digital Marketing, Oracle Services, Reactjs Web & Mobile Services, 
                    and Wordpress Website Design & Development Services. 
                </p>
                <div className="icons">
                    <a href="https://web.facebook.com/armaan.mirza.549" className="icon i-facebook" target="_blank">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/Shahbazmirza1122/" className="icon i-github" target="_blank">
                        <GithubIcon />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/shahbaz-mirza-a46839108/" className="icon i-linkedin" target="_blank">
                        <LinkedInIcon />
                    </a>
                    <a href="https://twitter.com/armaanmirza77" className="icon i-twitter" target="_blank">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCWZOOjn4xCt4bPC2ZgnG3Cw/playlists" className="icon i-youtube" target="_blank">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 3px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 3px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 3px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 3px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 3px solid #0c65f5;
                    color: #0c65f5;
                }
            }
            .i-twitter{
                &:hover{
                    border: 3px solid #5695fc;
                    color: #5695fc;
                }
            }
        }
    }
`;

export default HomePage;
