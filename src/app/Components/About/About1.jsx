"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const About1 = ({ 
  img1, subTitle, 
  detailsGeneraux, detailsConception, detailsImpression, detailsFaconnage,
  Content, feature1, feature2, feature3, 
  listItem_faconnage, listItem_impression, listItem_conception 
}) => {
  const [viewMode, setViewMode] = useState("details"); // "details" (Généralités) ou "services"
  const [activeContent, setActiveContent] = useState("image"); // "image", "conception", "impression", "façonnage"
  const [leftDisplayMode, setLeftDisplayMode] = useState("list"); // "list" ou "text"
  const [hoverStates, setHoverStates] = useState({ img: false, switch: false, hoverCat: false, content: false });

  const redShapeStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#dc3545',
    zIndex: 0,
    pointerEvents: 'none'
  };

  const textBodyStyle = {
    fontSize: "20px", 
    lineHeight: "1.8", 
    color: "#444", 
    textAlign: "justify",
    letterSpacing: "0.01em"
  };

  const getServiceDetailsText = () => {
    if (activeContent === "conception") return detailsConception;
    if (activeContent === "impression") return detailsImpression;
    if (activeContent === "façonnage") return detailsFaconnage;
    return "";
  };

  // Configuration commune de l'animation pour tous les boutons
  const btnAnimation = {
    whileHover: { translateY: -3 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  return (
    <section id="about-section" className="cs_about cs_style_1 position-relative" style={{ overflow: 'hidden', zIndex: 1, backgroundColor: '#fcfcfc' }}>
      
      {/* --- FORMES DÉCORATIVES --- */}
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ ...redShapeStyle, top: 0, height: '25%', borderRadius: '0 0 100% 100% / 0 0 30% 30%' }} />
      
      

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(15px);
          border-radius: 0 40px 40px 0;
          box-shadow: 10px 25px 50px -12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          height: 100%;
        }
        .img-wrapper {
          position: relative;
          width: 100%; height: 100%; min-height: 600px;
          overflow: hidden; border-radius: 40px 0 0 40px; z-index: 2;
        }
        .btn-premium {
          transition: background-color 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 4px 15px rgba(11, 2, 59, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-premium:disabled {
          cursor: not-allowed;
        }
      `}</style>

      <div className="cs_height_120 cs_height_lg_80"></div>
      
      <div className="container-fluid p-0" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row g-0 d-flex align-items-stretch justify-content-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
          {/* --- COLONNE GAUCHE --- */}
          <motion.div className="col-xl-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="img-wrapper shadow-sm">
              <AnimatePresence mode="wait">
                {activeContent === "image" ? (
                  <motion.div key="img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-100 w-100">
                    <Image src={img1} alt="Service" fill style={{ objectFit: 'cover' }} priority />
                  </motion.div>
                ) : (
                  <motion.div key="content-side" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 bg-light h-100">
                    <h2 className="text-danger fw-bold text-uppercase mb-5" style={{ fontSize: '42px' }}>{activeContent}</h2>
                    {leftDisplayMode === "list" ? (
                      <ul className="ps-0" style={{ listStyle: 'none' }}>
                        {(activeContent === "conception" ? listItem_conception : activeContent === "impression" ? listItem_impression : listItem_faconnage)?.map((item, idx) => (
                          <li key={idx} className="d-flex align-items-center gap-4 mb-4" style={{ fontSize: '22px', fontWeight: '500' }}>
                            <span className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', flexShrink:0 }}>
                              <i className="bi bi-check-lg"></i>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                         <p style={{...textBodyStyle, color: '#333', fontSize: '22px'}}>{getServiceDetailsText()}</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* --- COLONNE DROITE --- */}
          <motion.div className="col-xl-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="p-5 glass-effect">
                <AnimatePresence mode="wait">
                    {viewMode === "details" ? (
                      <motion.div key="details-view" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                          <h1 className="text-danger fw-bold text-uppercase mb-4" style={{ fontSize: '52px', lineHeight: '1' }}>{subTitle}</h1>
                          <p style={textBodyStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong style={{ color: "#0b023b", fontSize: "22px"}}>Généralités :</strong> {detailsGeneraux}</p>
                      </motion.div>
                    ) : (
                      <motion.div key="services-view" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <h1 className="text-danger fw-bold text-uppercase mb-4" style={{ fontSize: '55px' }}>Nos Services</h1>
                          <div className="mb-4 mt-5">
                            {[
                                { id: "conception", label: feature1, icon: "/assets/img/icon8-issa.png" },
                                { id: "impression", label: feature2, icon: "/assets/img/icons----imprimante-64.png" },
                                { id: "façonnage", label: feature3, icon: "/assets/img/icons8-livre-64.png" }
                            ].map((feat) => (
                                <motion.div key={feat.id} whileHover={{ x: 10 }}
                                    className={`d-flex align-items-center p-3 mb-3 rounded-4 transition-all ${activeContent === feat.id ? 'bg-white shadow-sm border border-danger' : 'border border-transparent'}`} 
                                    style={{ cursor: 'pointer' }} 
                                    onClick={() => { setActiveContent(feat.id); setLeftDisplayMode("list"); }}
                                >
                                    <Image src={feat.icon} alt="icon" width={40} height={40} className="me-3" />
                                    <h3 className={`m-0 fw-bold ${activeContent === feat.id ? 'text-danger' : ''}`} style={{ fontSize: '22px' }}>{feat.label}</h3>
                                </motion.div>
                            ))}
                          </div>
                      </motion.div>
                    )}
                </AnimatePresence> 

                <div className="d-flex flex-wrap gap-3 mt-5">
                    {/* BOUTON 1: SERVICES / GÉNÉRALITÉS */}
                    <motion.button 
                      {...btnAnimation}
                      onClick={() => {
                        const newMode = viewMode === "details" ? "services" : "details";
                        setViewMode(newMode);
                        if(newMode === "details") { setActiveContent("image"); setLeftDisplayMode("list"); }
                      }} 
                      className="btn-premium"
                      onMouseEnter={() => setHoverStates(p => ({...p, switch: true}))} 
                      onMouseLeave={() => setHoverStates(p => ({...p, switch: false}))}
                      style={{ fontSize: "18px", backgroundColor: hoverStates.switch ? '#dc3545' : '#0b023b', color: 'white', border: 'none', padding: '16px 35px', borderRadius: '50px', fontWeight: 'bold' }}
                    >
                        <i className={`bi ${viewMode === "details" ? 'bi-grid-fill' : 'bi-file-earmark-text-fill'} me-2`}></i>
                        {viewMode === "details" ? "Services" : "Généralités"}
                    </motion.button>

                    {/* BOUTON 2: GALERIE OU DÉTAILS/LISTE */}
                    {viewMode === "details" ? (
                      <motion.button 
                          {...btnAnimation}
                          onClick={() => setActiveContent("image")} 
                          className="btn-premium"
                          onMouseEnter={() => setHoverStates(p => ({...p, img: true}))} 
                          onMouseLeave={() => setHoverStates(p => ({...p, img: false}))}
                          style={{ fontSize: "18px", backgroundColor: hoverStates.img ? '#dc3545' : '#0b023b', color: 'white', border: 'none', padding: '16px 35px', borderRadius: '50px', fontWeight: 'bold' }} 
                      >
                          <i className="bi bi-image me-2"></i> Galerie
                      </motion.button>
                    ) : (
                      <motion.button 
                          {...btnAnimation}
                          disabled={activeContent === "image"}
                          onClick={() => setLeftDisplayMode(leftDisplayMode === "list" ? "text" : "list")}
                          className="btn-premium"
                          onMouseEnter={() => setHoverStates(p => ({...p, content: true}))} 
                          onMouseLeave={() => setHoverStates(p => ({...p, content: false}))}
                          style={{ 
                            fontSize: "18px", 
                            backgroundColor: activeContent === "image" ? '#ccc' : (hoverStates.content ? '#dc3545' : '#0b023b'), 
                            color: 'white', border: 'none', padding: '16px 35px', borderRadius: '50px', fontWeight: 'bold',
                            opacity: activeContent === "image" ? 0.5 : 1
                          }} 
                      >
                          <i className={`bi ${leftDisplayMode === "list" ? 'bi-text-paragraph' : 'bi-list-ul'} me-2`}></i>
                          {leftDisplayMode === "list" ? "Détails" : "Liste"}
                      </motion.button>
                    )}

                    {/* BOUTON 3: VOIR CATÉGORIES */}
                    <motion.div {...btnAnimation}>
                      <Link href="/about" 
                          className="btn-premium"
                          onMouseEnter={() => setHoverStates(p => ({...p, hoverCat: true}))} 
                          onMouseLeave={() => setHoverStates(p => ({...p, hoverCat: false}))} 
                          style={{ fontSize: "18px", backgroundColor: hoverStates.hoverCat ? '#dc3545' : '#0b023b', color: 'white', border: 'none', padding: '16px 35px', borderRadius: '50px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                      >
                          <span>Voir catégories</span>
                          <i className="bi bi-arrow-right"></i>
                      </Link>
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default About1;