"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import data from '../../Data/process.json'; 
import Image from 'next/image';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { motion, AnimatePresence } from "framer-motion";

const Faconnages3 = () => {
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

  const flatData = data.flat();
  const faconnageData = flatData.filter(
    item => item.type && item.type.toUpperCase() === "FAÇONNAGE"
  );
    
  const itemsToShow = isMobile ? 1 : 3;
  const visibleItems = faconnageData.slice(itemIndex, itemIndex + itemsToShow);

  const handleNextItem = () => {
    if (itemIndex + itemsToShow < faconnageData.length) setItemIndex(prev => prev + 1);
    else setItemIndex(0); 
  };

  const handlePrevItem = () => {
    if (itemIndex > 0) setItemIndex(prev => prev - 1);
    else setItemIndex(Math.max(0, faconnageData.length - itemsToShow));
  };

  // --- VARIANTES D'ANIMATION (Comme dans Impressions3) ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // --- STYLES ---
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

  return (
    <section className="position-relative overflow-hidden" style={{ backgroundColor: '#fcfcfc' }}>
      
      {/* FORMES DÉCORATIVES ROUGES */}
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#ffffff', height: '18%', borderRadius: '0 0 100% 100% / 0 0 25% 25%', zIndex: 0 }} />
      
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#dc3545', height: '12%', borderRadius: '100% 100% 0 0 / 35% 35% 0 0', zIndex: 0 }} />

      <div className="cs_height_120 cs_height_lg_80"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* --- EN-TÊTE ANIMÉ --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer} className="cs_mb_50">
          <motion.div variants={fadeInUp} className="row mb-5">
            <div className="col-12">
              <h1 className="text-white fw-bold text-uppercase" style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: '1.1' }}>                
                <font style={{color: '#dc3545'}}>Services de Façonnage</font>
              </h1>
            </div>
          </motion.div>

          <div className="row g-5 align-items-stretch">
            <motion.div variants={fadeInUp} className="col-lg-6 d-flex">
              <div style={glassStyle}>
                <div style={textBodyStyle}>
                  <p>
                    <strong style={{ color: "#0b023b" }}>La signature finale</strong> de votre projet réside dans la qualité exceptionnelle de son façonnage, étape ultime où l&apos;imprimé brut se métamorphose en un objet fini. Nous donnons vie à vos documents avec une rigueur industrielle constante.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-lg-6 d-flex">
              <div style={glassStyle}>
                <div style={textBodyStyle}>
                  <p>
                    <strong style={{ color: "#0b023b" }}>Maîtrisez l&apos;impact de votre message</strong> en structurant vos projets créatifs avec une rigueur professionnelle. Nous transformons vos idées en concepts visuels percutants, garantissant que chaque détail graphique renforce votre expertise.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- CAROUSEL AVEC APPARITION PROGRESSIVE --- */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', justifyContent: 'center', gap: '25px', marginTop: '60px' }}>
          <button onClick={handlePrevItem} onMouseEnter={() => setHoverBtn('prev')} onMouseLeave={() => setHoverBtn(null)} style={{ cursor: 'pointer', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px', transition: '0.3s', backgroundColor: hoverBtn === 'prev' ? 'red' : '#0b023b', color: 'white', border: 'none', minWidth: '65px', height: '65px', zIndex: 10 }}>
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
                           padding: '40px 25px', 
                           display: 'flex', 
                           flexDirection: 'column', 
                           justifyContent: 'space-between', 
                           width: '100%', 
                           border: `10px solid ${hoverCard === item.title ? '#0b023b' : '#f0f0f0'}`,
                           transition: 'all 0.3s ease-in-out',
                           transform: hoverCard === item.title ? 'translateY(-10px)' : 'translateY(0)'
                         }}>
                      <div>
                        <div className="cs_card_icon cs_center cs_mb_22" style={{ width: '100%', height: '220px' }}>
                          <Image src={item.img} alt={item.title} width={250} height={250} style={{ objectFit: 'contain' }} />
                        </div>
                        <h3 className="fw-bold" style={{ fontSize: '24px', color: '#0b023b' }}>{item.title}</h3>
                        {item.rubrique}<br /><strong>{item.categorie}</strong>
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

          <button onClick={handleNextItem} onMouseEnter={() => setHoverBtn('next')} onMouseLeave={() => setHoverBtn(null)} style={{ cursor: 'pointer', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px', transition: '0.3s', backgroundColor: hoverBtn === 'next' ? 'red' : '#0b023b', color: 'white', border: 'none', minWidth: '65px', height: '65px', zIndex: 10 }}>
            <i className="bi bi-arrow-right" style={{ fontSize: '26px' }}></i>
          </button>
        </div>

        {/* --- PAGINATION & DOTS --- */}
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '40px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#0b023b', marginBottom: '10px' }}>
             {faconnageData.length > 0 ? `${itemIndex + 1} - ${Math.min(itemIndex + itemsToShow, faconnageData.length)} / ${faconnageData.length}` : "0 / 0"}
          </div>
          <div className="d-flex gap-2">
            {faconnageData.map((_, idx) => (
              <div key={idx} onClick={() => setItemIndex(idx)}
                style={{ width: itemIndex === idx ? '30px' : '10px', height: '10px', borderRadius: '5px', backgroundColor: itemIndex === idx ? '#dc3545' : '#ccc', transition: '0.4s', cursor: 'pointer' }} />
            ))}
          </div>
        </div>

        {/* --- SECTION BAS ANIMÉE --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer} className="row justify-content-center" style={{ marginTop: '120px', marginBottom: '80px' }}>
          <motion.div variants={fadeInUp} className="col-lg-12 mb-5">
            <h1 className="text-danger fw-bold text-uppercase" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Visions et engagements : Façonnage
            </h1>
          </motion.div>
          <div className="row g-5 align-items-stretch">
            <motion.div variants={fadeInUp} className="col-lg-6 d-flex">
              <div style={glassStyle}>
                <div style={textBodyStyle}>
                  <p><strong style={{ color: "#0b023b" }}>L&apos;Ingénierie du Plis :</strong><br /> Nous maîtrisons les plis complexes avec une précision millimétrée pour une symétrie irréprochable au micron près, garantissant un rendu digne des plus grandes éditions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-lg-6 d-flex">
              <div style={glassStyle}>
                <div style={textBodyStyle}>
                  <p><strong style={{ color: "#0b023b" }}>L&apos;Art du Massicotage :</strong><br /> Nos massicots numériques assurent une coupe droite et propre, offrant à vos dossiers une allure nette et professionnelle dès la sortie de l&apos;atelier.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div> 
      </div>

    </section>
  );
};

export default Faconnages3;