"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const About2 = ({ 
  img1, subTitle, 
  detailsGeneraux, detailsConception, detailsImpression, detailsFaconnage,
  Content, feature1, feature2, feature3, 
  listItem_faconnage, listItem_impression, listItem_conception 
}) => {
  // viewMode: "details" (par défaut) ou "services"
  const [viewMode, setViewMode] = useState("details");
  const [activeContent, setActiveContent] = useState("image");
  const [hoverStates, setHoverStates] = useState({ img: false, switch: false });

  // --- ANIMATIONS ---
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const iconBoxStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '12px',
    zIndex: -1,
    borderRadius: '25px'
  };

  return (
    <section id="about-section" className="cs_about cs_style_1 position-relative" style={{ overflow: 'hidden', zIndex: 1 }}>
      
      <style jsx>{`
        @media (max-width: 991px) { .custom-bg-decor { display: none !important; } }
        .text-justify { text-align: justify; }
        .detail-block p { margin-bottom: 25px; line-height: 1.7; color: #444; }
        .detail-block strong { color: #dc3545; text-transform: uppercase; display: block; margin-bottom: 5px; }
      `}</style>

      {/* --- ICONES DE FOND --- */}
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="custom-bg-decor" style={{ ...iconBoxStyle, left: '2%', top: '10%' }}>
        <Image src="/assets/img/animations/icons8-courrier-100.png" alt="decor" width={280} height={280} />
      </motion.div>

      <div className="cs_height_120 cs_height_lg_80"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row cs_gap_y_40 align-items-start">
          
          {/* --- COLONNE GAUCHE (Image ou Listes) --- */}
          <div className="col-xl-6">
            <motion.div layout className="cs_about_thumbnail_wrapper" style={{ width: '100%' }}>
              <AnimatePresence mode="wait">
                {activeContent === "image" ? (
                  <motion.div 
                    key="img-side" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  >
                    <Image src={img1} alt="Service" width={1200} height={900} className="cs_radius_20 shadow-lg w-100 h-auto" priority />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="list-side" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="p-5 bg-white shadow-lg cs_radius_20 border-top border-5 border-danger"
                  >
                    <h2 className="text-danger fw-bold text-uppercase mb-4" style={{ fontSize: '35px' }}>{activeContent}</h2>
                    <ul className="ps-0" style={{ listStyle: 'none' }}>
                      {(activeContent === "conception" ? listItem_conception : activeContent === "impression" ? listItem_impression : listItem_faconnage)?.map((item, idx) => (
                        <li key={idx} className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '22px', fontWeight: '600' }}>
                          <span className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', flexShrink:0 }}>
                            <i className="bi bi-check-lg"></i>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* --- COLONNE DROITE (Contenu Dynamique) --- */}
          <div className="col-xl-6">
            <motion.div layout>
              <AnimatePresence mode="wait">
                {viewMode === "details" ? (
                  /* --- VUE PAR DÉFAUT : LES 4 PARAGRAPHES --- */
                  <motion.div 
                    key="details-view" 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }}
                    className="detail-block"
                  >
                    <h1 className="text-danger fw-bold text-uppercase mb-4" style={{ fontSize: '48px', lineHeight: '1' }}>
                      {subTitle}
                    </h1>
                    <div className="text-justify" style={{ fontSize: '18px' }}>
                      <p><strong>Généralités :</strong> {detailsGeneraux}</p>
                      <p><strong>La Conception :</strong> {detailsConception}</p>
                      <p><strong>L&apos;Impression :</strong> {detailsImpression}</p>
                      <p><strong>Le Façonnage :</strong> {detailsFaconnage}</p>
                    </div>
                  </motion.div>
                ) : (
                  /* --- VUE INTERACTIVE : MENU SERVICES --- */
                  <motion.div 
                    key="services-view" 
                    initial={{ opacity: 0, x: 30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -30 }}
                  >
                    <h1 className="text-danger fw-bold text-uppercase mb-3" style={{ fontSize: '55px' }}>
                       Nos Services
                    </h1>
                    <p className="mb-5" style={{ fontSize: '22px', color: '#333' }}>{Content}</p>
                    <div className="mb-5">
                      {[
                        { id: "conception", label: feature1, icon: "/assets/img/icon8-issa.png" },
                        { id: "impression", label: feature2, icon: "/assets/img/icons----imprimante-64.png" },
                        { id: "faconnage", label: feature3, icon: "/assets/img/icons8-livre-64.png" }
                      ].map((feat) => (
                        <div 
                          key={feat.id} 
                          className={`d-flex align-items-center p-3 mb-3 cs_radius_15 border-start border-5 transition-all shadow-sm ${activeContent === feat.id ? 'border-danger bg-light' : 'border-transparent bg-white'}`}
                          style={{ cursor: 'pointer' }}
                          onClick={() => setActiveContent(feat.id)}
                        >
                          <Image src={feat.icon} alt="icon" width={40} height={40} className="me-3" />
                          <h3 className={`m-0 fw-bold ${activeContent === feat.id ? 'text-danger' : ''}`} style={{ fontSize: '24px' }}>{feat.label}</h3>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* --- BARRE DE BOUTONS --- */}
            <div className="d-flex flex-wrap gap-3 mt-5">
              <button 
                onMouseEnter={() => setHoverStates(prev => ({...prev, img: true}))}
                onMouseLeave={() => setHoverStates(prev => ({...prev, img: false}))}
                onClick={() => setActiveContent("image")}
                style={{
                  backgroundColor: hoverStates.img ? 'red' : '#0b023b', color: 'white',
                  border: 'none', padding: '15px 30px', borderRadius: '50px', fontWeight: 'bold', transition: '0.3s'
                }}
              >
                <i className="bi bi-image me-2"></i> Image
              </button>

              <button 
                onMouseEnter={() => setHoverStates(prev => ({...prev, switch: true}))}
                onMouseLeave={() => setHoverStates(prev => ({...prev, switch: false}))}
                onClick={() => setViewMode(viewMode === "details" ? "services" : "details")}
                style={{
                  backgroundColor: hoverStates.switch ? 'red' : '#0b023b', color: 'white',
                  border: 'none', padding: '15px 30px', borderRadius: '50px', fontWeight: 'bold', transition: '0.3s'
                }}
              >
                <i className={`bi ${viewMode === "details" ? 'bi-grid-fill' : 'bi-file-earmark-text-fill'} me-2`}></i>
                {viewMode === "details" ? "Services" : "Contenu"}
              </button>

              <Link href="/about" className="cs_btn cs_style_1 bg-danger text-white border-0 px-5 py-3 d-flex align-items-center" style={{ borderRadius: '50px', fontWeight: 'bold' }}>
                Voir plus <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default About2;