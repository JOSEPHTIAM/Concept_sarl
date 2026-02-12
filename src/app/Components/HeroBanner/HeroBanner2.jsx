"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";

const HeroBanner2 = ({bgimg,subtitle,title,conetnt,btnname,btnurl,videoname}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

    return (
        <section className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center cs_ripple_activate"
        data-background={bgimg}>
        <div className="container">
          <div className="cs_hero_text" data-wow-duration="0.9s" data-wow-delay="0.25s">
            <h3 className="cs_hero_mini_title cs_accent_color cs_fs_18 cs_medium cs_mb_8 text-uppercase">{subtitle}</h3>
            <h1 className="cs_hero_title cs_white_color cs_fs_70 cs_mb_18 wow fadeInUp">{title}</h1>
            <p className="cs_hero_subtitle cs_white_color cs_mb_34">{conetnt}</p>
            <div className="cs_hero_btns">
              <Link href={btnurl} className="cs_btn cs_style_1 wow fadeInLeft">
                <span>{btnname}</span>
                <i className="bi bi-arrow-right"></i>  
              </Link>
              <a onClick={handelClick} className="cs_hero_player_btn cs_video_open wow fadeInRight">
                <span className="cs_player_btn cs_center">
                  <span></span>
                </span>
                <span className="cs_hero_play_btn_text">{videoname}</span>
              </a>
            </div>
          </div>
        </div>
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal>
      </section>
    );
};

export default HeroBanner2;