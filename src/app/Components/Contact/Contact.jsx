"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Form1 from "../Form/Form1";
import parse from 'html-react-parser';
import { motion } from "framer-motion";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Contact = ({
  Title, subTitle, address, email, number, img, 
  Title3, subTitle3, address3, email3, number3, img3, web, facebook,
  subtitle2, title2, title3, title4, title5, title6, title7, title8, gprs, gprs3
}) => {
  
  const [isAkwa, setIsAkwa] = useState(true);
  const [hoverBtnSwap, setHoverBtnSwap] = useState(false);
  const [hoverBtnCat, setHoverBtnCat] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);
  
  const scrollToNextSection_categories = () => {
    const target = document.getElementById("categories_services_accueil");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // --- CONFIGURATION DES ANIMATIONS ---

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const iconEntry = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const infiniteRotation = {
    rotate: [0, 10, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  const iconBoxStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    borderRadius: '20px'
  };
  
  return (
    <section className="cs_contact_section position-relative" style={{ overflow: 'hidden', zIndex: 1 }}>
      
      <style jsx>{`
        @media (max-width: 991px) {
          .custom-animated-icon {
            display: none !important;
          }
        }
      `}</style>

      <div className="cs_height_120 cs_height_lg_80"></div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="row cs_row_gap_40 cs_gap_y_40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* --- COLONNE GAUCHE : INFOS & IMAGE --- */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="cs_contact_info_wrapper position-relative">
              <div className="cs_contact_info cs_white_bg shadow-lg" style={{ padding: '40px', borderRadius: '25px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h2 className="cs_contact_info_title cs_fs_15 fw-bold mb-0" style={{ color: '#0b023b' }}>
                    {isAkwa ? Title : Title3} 📍
                  </h2>
                  
                  <button 
                    onMouseEnter={() => setHoverBtnSwap(true)}
                    onMouseLeave={() => setHoverBtnSwap(false)}
                    onClick={() => setIsAkwa(!isAkwa)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: hoverBtnSwap ? 'red' : '#0b023b',
                      color: 'white',
                      border: 'none',
                      padding: '10px 30px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      transition: '0.4s ease'
                    }}
                  >
                  Voir {isAkwa ? "Sadi" : "Akwa"}
                  </button>
                </div>

                <div className="cs_accent_bg cs_line_shape cs_mb_25" style={{ height: '3px', width: '60px', backgroundColor: 'red' }}></div> 
                <p style={{color: '#555' }}>{isAkwa ? subTitle : subTitle3}</p>
                
                <div className="cs_contact_list">
                  {[
                    { icon: "/assets/img/icons/location.svg", content: isAkwa ? address : address3 },
                    { icon: "/assets/img/icons/mail_open.svg", content: isAkwa ? email : email3 },
                    { icon: "/assets/img/icons/internet.png", content: web },
                    { icon: "/assets/img/icons/facebook.png", content: facebook },
                    { icon: "/assets/img/icons/phone-call.svg", content: isAkwa ? number : number3 }
                  ].map((item, index) => (
                    <div key={index} className="cs_iconbox cs_style_1 cs_type_1 cs_mb_20 d-flex align-items-center gap-3">
                      <div className="cs_iconbox_icon cs_center" style={{ width: '45px', height: '45px', backgroundColor: '#f4f4f4', borderRadius: '50%', flexShrink: 0 }}>
                        <Image src={item.icon} alt="icon" width={22} height={22} />
                      </div>
                      <div className="cs_iconbox_info">
                        <div style={{ fontSize: '17px', fontWeight: '600' }}>{parse(item.content)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs_contact_thumbnail" style={{ width: '100%', overflow: 'hidden', borderRadius: '25px' }}>
                <Image 
                  src={isAkwa ? img : img3} 
                  alt="Contact Location" 
                  width={1000} 
                  height={600} 
                  className="w-100 shadow-lg"
                  style={{ borderRadius: '25px', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </motion.div>
 
          {/* --- COLONNE DROITE : FORMULAIRE --- */}
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1 cs_mb_45">
              <motion.h1 
                variants={itemVariants} 
                className="text-danger fw-bold text-uppercase cs_mb_12" 
                style={{ fontSize: '55px', lineHeight: '1.1' }}
              >
                <strong>{subtitle2}</strong>
              </motion.h1>
              <motion.div 
                variants={itemVariants} 
                className="cs_mb_40" 
              >
                <p style={{fontSize: '20px', lineHeight: '1.6'}}><strong style={{ color: "#0b023b"}}>Nous contacter :</strong> {title2}</p>
                <p style={{fontSize: '20px', lineHeight: '1.6'}}><strong style={{ color: "#0b023b"}}>Formulaire :</strong> {title5}</p>
                <p style={{fontSize: '20px', lineHeight: '1.6'}}><strong style={{ color: "#0b023b"}}>Garantie :</strong> {title6}</p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Form1 />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* MAP IFRAME */}
      <div className="cs_map_wrapper" style={{ width: '100%', height: '450px', marginTop: '60px' }}>
        <iframe src={isAkwa ? gprs : gprs3} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <br />
    </section>
  );
};

export default Contact;