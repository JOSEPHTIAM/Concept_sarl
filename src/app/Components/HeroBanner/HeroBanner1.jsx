"use client"
import Slider from "react-slick";
import data from '../../Data/herobanner1.json';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
 

const HeroBanner1 = () => {
   
    useEffect(() => {
    loadBackgroudImages();
    }, []);

    const scrollToNextSection = () => {
      const target = document.getElementById("about-section");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const [isHovered, setIsHovered] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,          
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,      
        autoplaySpeed: 3000,  
        pauseOnHover: false,  
      };

    return (

        <section className="cs_slider cs_style_1">        
          <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="900" data-center="0" data-variable-width="0" data-slides-per-view="1">
            <div className="cs_slider_wrapper">
            <Slider {...settings}>
            {data.map((item, index)=>(
              <div key={index} className="cs_slide">
                <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">

                  <Image src={item.img} alt={item.title} fill priority className="cs_hero_bg" style={{ objectFitit: 'cover',  objectPosition: 'center', zIndex: '1',   }} />

                  <div className="container">
                    <div className="cs_hero_text">
                      <h1 className="cs_hero_title cs_fs_70 cs_mb_18 wow fadeInUp" style={{ backgroundColor: 'rgba(255, 255, 255, 0.627)' }}>&nbsp; {item.title}</h1>
                      <p className="cs_hero_subtitle cs_mb_34" style={{ fontSize: '25px', color: 'rgba(1, 15, 52, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.627)' }}>{item.desc}</p>
                      <div className="cs_hero_btns">
                        <button
                          onClick={scrollToNextSection}
                          className="cs_btn cs_style_1 bg-danger text-white border-0 px-5 py-3"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          style={{
                            backgroundColor: isHovered ? 'red' : '#0b023b',
                            color: 'white',
                            border: 'none',
                            padding: '15px 35px',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            transition: '0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: "20px",
                            lineHeight: "1.6"
                          }}
                        >
                          <span>{item.btnName}</span>
                          <i className="bi bi-arrow-left"></i>
                        </button>   

                        <Link href={item.btnUrl} 
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          style={{
                            backgroundColor: isHovered ? 'red' : '#0b023b',
                            color: 'white',
                            border: 'none',
                            padding: '15px 35px',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            transition: '0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px', 
                            fontSize: "20px", 
                            lineHeight: "1.6"
                        }}>
                          Voir plus  
                          <i className="bi bi-arrow-right"></i>   
                        </Link>
                        <span className="cs_hero_number  wow fadeInRight">
                          <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                          <i className="bi bi-telephone-x-fill"></i>
                          </span>
                          <a className="cs_fs_24 cs_semibold cs_heading_color" style={{ backgroundColor: 'rgba(255, 255, 255, 0.627)' }}>{item.number}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
              </Slider>
            </div>
          </div>
        </section>
    );
};

export default HeroBanner1;