import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../components/styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sacred Angels Higher Secondary School'}
                        text={'I worked as a computer teacher at Sacred Angels Higher Secondary School for five years, I always deliver the shinning results to my institute. The students was fully satisfied from my teaching skills as well as practical skills. Always got teacher of the year award.'} 
                    />
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'MERN Stack Developer at SAS'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'User Interface Designer'}
                        subTitle={'Front End Developer at SAS'}
                        text={'I worked as a front end developer at SAS, the basic languages that i used for front end development was HTML, CSS, JavaScrip, Jquery, Boostraps, Reactjs, Material Ui, ReactStraps, FontAwesom, Styled-Components. I also learned alot from SAS during working.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'Computer Science Degree'}
                        subTitle={'Comsats University Of Information Technology'}
                        text={'Its my pleasure to get graduation degree from the number 1 I.T University of Pakistan. I completed my Master Degree in Software Engineering from Comsats University Of Information Technology and got marks. The remarks about me from teachers was stunning.'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'Bechelor Of Education'}
                        subTitle={'Sargodha University'}
                        text={'The Education Degree is most important in Education Feild, because it develops the skills of teaching in a human being. Education Degree tells us how to treat with students and how to teach them perfectly. I get this skill from Sargodha University, because I love it.'} 
                    />
                    <ResumeItem 
                        year={'2014 - 2015'} 
                        title={'Bechelor Of Arts'}
                        subTitle={'Sargodha University'}
                        text={'After study of Engineering at faculty level, I Took part in BS,CS but due to some domestic issues i could not complete my Honor Degree. After that i got admission in Bechelor Of Arts Degree to overcome my loss i faced due to domestic issues.'} 
                    />
                    <ResumeItem 
                        year={'2009 - 2011'} 
                        title={'FSc. Non-Medical'}
                        subTitle={'Govt. Islamia College'}
                        text={'I was very found of Engineering feild thats why i choosed Non-Medical feild after completing my matericulation. For getting intermediate education i got admission in Govt. Islamia College and started my study, my first step to higher education.'} 
                    />
                    <ResumeItem 
                        year={'2007 - 2009'} 
                        title={'High School Graduation'}
                        subTitle={'Govt. M.C. High School'}
                        text={'My first Education School was Govt. M.C. High School, I study here for complete 10 years and also completed my matericulation from here. The teachers was so experienced & well talented, they brought me up, they polish my personality.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
