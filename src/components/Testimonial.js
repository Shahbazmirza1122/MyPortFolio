import React from 'react';
import Slider from"react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  {Avatar}  from '@material-ui/core';
import { borderBottom, fontSize, width } from '@material-ui/system';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./Testimonial.css";
import shahbazLogo from './images/shahbazLogo.png';
import carton from './images/carton.jpg';
import carton1 from './images/carton1.jpg';
import ServiceCard from './ServiceCard';



const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "30px" }} />
      </div>
    );
  };


const Testimonial = ()=>{
    return(
        
        <div className="testimonial" 
        style={
            {display:'flex', 
            justifyContent:'center',
            marginTop: '0%',
            // backgroundColor: '#051d45'
            }}>
            <div className="Testimonial-inner"
            style={{
                width:'100%',
                marginTop: '0%'
            }}>
        
        <Slider 
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={1}
                slidesToScroll={1}
                >
            
            <Card image={shahbazLogo}/>
            <Card image={carton}/>
            <Card image={carton1}/>
            
            
        </Slider>
        </div>
        
        </div>
    );
};


const Card = ({image, title, paragraph}) => {
    return (
      // <div>
        
        /* <div className="" style={{
            display:'flex',
            alignItems: 'center',
            flexDirection: 'column',
  
        }}
        > */
          <div>
          <ServiceCard>
          title={'Web Developer'}
          paragraph={'Hello world how are you'}
          <Slider>
           <Avatar src={image}
           style={{width:120, height: 120, justifyContent:'center', marginBottom: '10px', marginTop:'3%', border:'7px solid lightgray'}}
          />
           </Slider>
           
          
         
            
           </ServiceCard>
           
          

          
          </div>
          
          
               
            
           
             
              
            /* className="Avatar" style={{width:120, height: 120, justifyContent:'center', marginBottom: '10px', marginTop:'3%', border:'7px solid lightgray'}}/>
            <p style={{color:'gray'}}>I just wanted to say 'Impressive Guy', I worked with <u>Shahbaz Mirza</u> and his team <u>SoftTechs</u>.
            It was a great and stunning experience, the task given to him delivered at exact time. I Wish to choose him again for new tasks.
            </p>
            <p style={{marginTop: '2%', color: 'gray', marginBottom:'5%'
            }}><span style={{color:'gray',fontSize:'20px', fontStyle:'italic'}}>Dr. Capt. Siddique</span> E-Rozgar Trainer</p>
             */
            
           
            
            
            
            
        /* </div>
        </div> */
    );
};



export default Testimonial;

