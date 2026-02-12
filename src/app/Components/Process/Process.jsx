"use client";
import React, { useState, useEffect } from 'react';
import SectionTitle2 from '../Common/SectionTitle2';
import data from '../../Data/process.json';
import Image from "next/image";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Process = () => {
  const allItems = data.flat();
  const categories = ["Documents", "Objets", "web_design", "invitation", "flyer"];
  
  const iconMapping = {
    "Documents": "/assets/img/animations/icons8-document-100.png",
    "Objets": "/assets/img/animations/icons8-clip-à-papier-100.png",
    "web_design": "/assets/img/animations/icons8-personnalisation-windows10-100.png",
    "invitation": "/assets/img/animations/icons8-invitation-100.png",
    "flyer": "/assets/img/animations/icons8-prospectus-100.png"
  };

  const [catIndex, setCatIndex] = useState(0); 
  const [itemIndex, setItemIndex] = useState(0);
  const [hoverBtn, setHoverBtn] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCategoryName = categories[catIndex];
  const currentCategoryData = allItems.filter(item => item.categorie === currentCategoryName);
  const itemsToShow = isMobile ? 1 : 3;
  const visibleItems = currentCategoryData.slice(itemIndex, itemIndex + itemsToShow);

  const handleNextCategory = () => { setCatIndex((prev) => (prev + 1) % categories.length); setItemIndex(0); };
  const handlePrevCategory = () => { setCatIndex((prev) => (prev - 1 + categories.length) % categories.length); setItemIndex(0); };
  const handleNextItem = () => { if (itemIndex + itemsToShow < currentCategoryData.length) setItemIndex(prev => prev + 1); else setItemIndex(0); };
  const handlePrevItem = () => { if (itemIndex > 0) setItemIndex(prev => prev - 1); else setItemIndex(Math.max(0, currentCategoryData.length - itemsToShow)); };

  // --- STYLES HARMONISÉS ---
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.92)",
    backdropFilter: "blur(15px)",
    borderRadius: "40px",
    padding: "45px",
    boxShadow: "10px 25px 50px -12px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  };

  const textBodyStyle = {
    fontSize: "20px", 
    lineHeight: "1.8", 
    color: "#444", 
    textAlign: "justify"
  };

  // --- ANIMATIONS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const infiniteRotation = { rotate: [0, 8, -8, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };

  return (
    <section id='categories_services_accueil' className="position-relative" style={{ overflow: 'hidden', zIndex: 1, backgroundColor: '#fcfcfc' }}>
      
      {/* FORMES ROUGES DÉCORATIVES */}
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#dc3545', height: '15%', borderRadius: '0 0 100% 100% / 0 0 25% 25%', zIndex: 0 }} />

      <style jsx>{`
        @media (max-width: 991px) { .custom-bg-icon { display: none !important; } }
      `}</style>

      {/* ICONES D'ARRIÈRE-PLAN DYNAMIQUES 
      <AnimatePresence mode="wait">
        <motion.div key={`icon-left-${currentCategoryName}`} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
          className="custom-bg-icon" style={{ position: 'absolute', left: '2%', top: '25%', zIndex: -1 }}>
          <motion.div animate={infiniteRotation}>
            <Image src={iconMapping[currentCategoryName] || iconMapping["Documents"]} alt="decor" width={80} height={80} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      */}

      <div className="container mt-5" style={{ position: 'relative', zIndex: 2 }}> 
        
        {/* EN-TÊTE ANIMÉ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer} className="cs_mb_50">
          <motion.div variants={fadeInUp} className="row mb-5">
            <div className="col-12">
              <h1 className="text-white fw-bold text-uppercase" style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: '1.1' }}>
                Nos catégories
              </h1>
            </div>
          </motion.div>

          <div className="row g-5 align-items-stretch">
            <motion.div className="col-lg-6 d-flex" variants={fadeInUp}>
              <div style={glassStyle}>
                <div style={textBodyStyle}>
                  <p><strong style={{ color: "#0b023b" }}>Maîtrisez l&apos;impact de votre message</strong> en structurant vos documents techniques et publicitaires comme de véritables outils de conviction. Nous transformons vos flux d&apos;informations en supports tangibles qui renforcent votre autorité.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6 d-flex" variants={fadeInUp}>
              <div style={glassStyle}>
                <div style={textBodyStyle}>
                  <p><strong style={{ color: "#0b023b" }}>Sublimez votre identité visuelle</strong> en franchissant la frontière entre la simple visibilité et une présence mémorable. Nous créons des ambassadeurs tactiles et des interfaces numériques immersives qui forgent un lien émotionnel durable.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <SectionTitle2 
          SubTitle_document="Documents" SubTitle_objet="Objets"
          SubTitle_web="Web Design" SubTitle_carte="Invitations" SubTitle_flyer="Flyers"
          currentIndex={catIndex} next={handleNextCategory} previous={handlePrevCategory}
        />

        {/* CAROUSEL AVEC BORDURE DYNAMIQUE ET ANIMATIONS PROGRESSIVES */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', justifyContent: 'center', gap: '25px', marginTop: '60px' }}>
          <button onClick={handlePrevItem} onMouseEnter={() => setHoverBtn('prev')} onMouseLeave={() => setHoverBtn(null)}
            style={{ cursor: 'pointer', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px', backgroundColor: hoverBtn === 'prev' ? 'red' : '#0b023b', color: 'white', border: 'none', minWidth: '65px', height: '65px', transition: '0.3s' }}>
            <i className="bi bi-arrow-left" style={{ fontSize: '26px' }}></i>
          </button>

          <div style={{ flex: '1', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', padding: '10px', height: '100%', alignItems: 'stretch' }}>
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleItems.map((item) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -50 }} 
                    transition={{ duration: 0.5 }} 
                    className="cs_card cs_style_3" 
                    style={{ flex: isMobile ? '0 0 100%' : '0 1 380px', display: 'flex' }}
                    onMouseEnter={() => setHoverCard(item.title)}
                    onMouseLeave={() => setHoverCard(null)}
                  >
                    <div className="cs_card_content cs_white_bg cs_radius_35 text-center shadow-lg" 
                         style={{ 
                           padding: '40px 25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', 
                           border: `10px solid ${hoverCard === item.title ? '#0b023b' : '#f0f0f0'}`,
                           transition: 'all 0.3s ease-in-out',
                           transform: hoverCard === item.title ? 'translateY(-10px)' : 'translateY(0)'
                         }}>
                      <div>
                        <div className="cs_card_icon cs_center cs_mb_22" style={{ width: '100%', height: '220px' }}>
                          <Image src={item.img} alt={item.title} width={250} height={250} style={{ objectFit: 'contain' }} className="cs_img_hover_zoom" />
                        </div>
                        <h3 className="fw-bold" style={{ fontSize: '24px', color: '#0b023b' }}>{item.title}</h3>
                        {item.rubrique}
                      </div>
                      <Link href={`/service/service-details?title=${encodeURIComponent(item.title)}`} className="text-danger fw-bold text-uppercase d-inline-flex align-items-center justify-content-center gap-2 mt-4" style={{ textDecoration: 'none' }}>
                        <span>{item.btnText}</span> <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button onClick={handleNextItem} onMouseEnter={() => setHoverBtn('next')} onMouseLeave={() => setHoverBtn(null)}
            style={{ cursor: 'pointer', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px', backgroundColor: hoverBtn === 'next' ? 'red' : '#0b023b', color: 'white', border: 'none', minWidth: '65px', height: '65px', transition: '0.3s' }}>
            <i className="bi bi-arrow-right" style={{ fontSize: '26px' }}></i>
          </button>
        </div>

        {/* PAGINATION NUMÉRIQUE & DOTS */}
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '40px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#0b023b', marginBottom: '10px' }}>
             {currentCategoryData.length > 0 ? `${itemIndex + 1} - ${Math.min(itemIndex + itemsToShow, currentCategoryData.length)} / ${currentCategoryData.length}` : "0 / 0"}
          </div>
          <div className="d-flex gap-2">
            {currentCategoryData.map((_, idx) => (
              <div key={idx} onClick={() => setItemIndex(idx)}
                style={{ width: itemIndex === idx ? '30px' : '10px', height: '10px', borderRadius: '5px', backgroundColor: itemIndex === idx ? '#dc3545' : '#ccc', transition: '0.4s', cursor: 'pointer' }} />
            ))}
          </div>
        </div>

        {/* SECTION VISION ET ENGAGEMENT ANIMÉE */}
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="row justify-content-center mt-5 pt-5" style={{ marginBottom: '100px' }}>
          <motion.div variants={fadeInUp} className="col-lg-12">
            <h1 className="text-danger fw-bold text-uppercase mb-5" style={{ fontSize: '48px', lineHeight: '1.1' }}>Vision et Engagement</h1>
            <div className="row g-5 align-items-stretch">
              <motion.div className="col-lg-6 d-flex" variants={fadeInUp}>
                <div style={glassStyle}>
                  <div style={textBodyStyle}>
                    <p><strong style={{ color: "#0b023b" }}>Une approche partenariale et durable</strong> qui place l&apos;innovation éco-responsable et la réactivité opérationnelle au cœur de votre stratégie. Nous conseillons chaque étape de votre production.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-6 d-flex" variants={fadeInUp}>
                <div style={glassStyle}>
                  <div style={textBodyStyle}>
                    <p><strong style={{ color: "#0b023b" }}>L&apos;excellence technologique et sécurisée</strong> pour garantir des supports multisensoriels d&apos;une fidélité absolue. Nous appliquons des protocoles de confidentialité rigoureux pour protéger vos projets.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;