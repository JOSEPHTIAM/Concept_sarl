"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Form1 from "../Form/Form1";
import parse from 'html-react-parser';
import { motion, useScroll, useTransform } from "framer-motion";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Contact1 = ({
  Title, subTitle, address, email, number, img, 
  Title3, subTitle3, address3, email3, number3, img3, web, facebook,
  subtitle2, title2, title3, title4, title5, title6, title7, title8, gprs , gprs3
}) => {
  
  const [isAkwa, setIsAkwa] = useState(true);
  const [hoverBtnSwap, setHoverBtnSwap] = useState(false);
  const sectionRef = useRef(null);

  // Gestion du scroll pour l'opacité globale (apparition/disparition progressive)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacityScroll = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animation spécifique pour les blocs rouges (Apparition après les autres)
  const shapeVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { delay: 1.2, duration: 1, ease: "easeOut" } 
    }
  };

  const shapeRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { delay: 1.2, duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="cs_contact_section position-relative" 
      style={{ overflow: 'hidden', zIndex: 1, backgroundColor: '#fff' }}
    >
      
      {/* --- BLOC ROUGE GAUCHE (Apparition décalée Gauche -> Droite) --- */}
      <motion.div 
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        style={{ 
          opacity: opacityScroll,
          position: 'absolute', top: 0, left: 0, width: '15%', height: '100%',
          backgroundColor: '#dc3545', zIndex: 0,
          borderRadius: '0% 100% 0% 0% / 0% 100% 0% 0%' 
        }}
      />

      <style jsx>{`
        @media (max-width: 991px) {
          .custom-animated-icon, .cs_contact_section::before, .cs_contact_section::after {
            display: none !important;
          }
        }
      `}</style>

      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="row cs_row_gap_40 cs_gap_y_40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* --- COLONNE GAUCHE --- */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="cs_contact_info_wrapper position-relative">
              <div className="cs_contact_info cs_white_bg shadow-lg" style={{ padding: '40px', borderRadius: '25px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h2 className="cs_contact_info_title cs_fs_15 fw-bold mb-0" style={{ color: '#0b023b' }}>
                    {isAkwa ? Title : Title3} 📍
                  </h2>
                  <button 
                    onClick={() => setIsAkwa(!isAkwa)}
                    style={{
                      cursor: 'pointer', backgroundColor: hoverBtnSwap ? 'red' : '#0b023b',
                      color: 'white', border: 'none', padding: '10px 30px', borderRadius: '20px',
                      fontWeight: 'bold', transition: '0.4s ease'
                    }}
                    onMouseEnter={() => setHoverBtnSwap(true)}
                    onMouseLeave={() => setHoverBtnSwap(false)}
                  >
                    Voir {isAkwa ? "Sadi" : "Akwa"}
                  </button>
                </div>
                <div className="cs_accent_bg cs_line_shape cs_mb_25" style={{ height: '3px', width: '60px', backgroundColor: 'red' }}></div> 
                <p style={{fontSize: "20px", lineHeight: "1.6"}}>{isAkwa ? subTitle : subTitle3}</p>
                <div className="cs_contact_list">
                  

                  {[
                    { 
                      icon: "/assets/img/icons/location.svg", 
                      content: isAkwa ? address : address3,
                      link: isAkwa ? gprs : gprs3 
                    },
                    { 
                      icon: "/assets/img/icons/mail_open.svg", 
                      content: isAkwa ? email : email3,
                      link: `mailto:${isAkwa ? email : email3}` 
                    },
                    { 
                      icon: "/assets/img/icons/internet.png", 
                      content: web,
                      link: `https://${web}` 
                    },
                    { 
                      icon: "/assets/img/icons/facebook.png", 
                      content: facebook,
                      link: "https://www.facebook.com/Indigoimpressionnumerique" // Lien direct Facebook
                    },
                    { 
                      icon: "/assets/img/icons/phone-call.svg", 
                      content: isAkwa ? number : number3,
                      // Pour le téléphone, on nettoie le premier numéro pour le lien 'tel:'
                      link: `tel:${(isAkwa ? number : number3).split('<br/>')[0].replace(/[^\d+]/g, '')}` 
                    }
                  ].map((item, index) => (
                    <div key={index} className="cs_iconbox cs_style_1 cs_type_1 cs_mb_20 d-flex align-items-center gap-3">
                      <div className="cs_iconbox_icon cs_center" style={{ width: '45px', height: '45px', backgroundColor: '#f4f4f4', borderRadius: '50%', flexShrink: 0 }}>
                        <Image src={item.icon} alt="icon" width={22} height={22} />
                      </div>
                      <div className="cs_iconbox_info">
                        <div style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: '600' }}>
                          {/* On rend le contenu cliquable avec une balise <a> */}
                          <a 
                            href={item.link} 
                            target={item.icon.includes('location') || item.icon.includes('facebook') ? "_blank" : "_self"} 
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'none', transition: '0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = '#dc3545'}
                            onMouseLeave={(e) => e.target.style.color = 'inherit'}
                          >
                            {parse(item.content)}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}



                </div>





              </div>
              <div className="cs_contact_thumbnail" style={{ width: '100%', overflow: 'hidden', borderRadius: '25px' }}>
                <Image src={isAkwa ? img : img3} alt="img" width={1000} height={800} className="w-100 shadow-lg" style={{ borderRadius: '25px', objectFit: 'cover' }} />
              </div>
            </div>
          </motion.div>
 
          {/* --- COLONNE DROITE --- */}
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1 cs_mb_45">
              <motion.h1 variants={itemVariants} className="text-danger fw-bold text-uppercase cs_mb_12" style={{ fontSize: '55px', lineHeight: '1.1' }}>
                {subtitle2}
              </motion.h1>
              <motion.div variants={itemVariants} className="cs_mb_40" style={{fontSize: "20px", lineHeight: "1.6"}}>
                <p><strong style={{ color: "#0b023b"}}>Nous contacter :</strong> {title2}</p>
                <p><strong style={{ color: "#0b023b"}}>Formulaire :</strong> {title5}</p>
                <p><strong style={{ color: "#0b023b"}}>Garantie :</strong> {title6}</p>
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

    </section>
  );
};

export default Contact1;