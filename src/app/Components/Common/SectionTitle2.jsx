"use client";
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';

const SectionTitle2 = ({ SubTitle_document, SubTitle_objet, SubTitle_web, SubTitle_carte, SubTitle_flyer, previous, next, currentIndex }) => {
  const [hoverBtn, setHoverBtn] = useState(null);
  const titles = [SubTitle_document, SubTitle_objet, SubTitle_web, SubTitle_carte, SubTitle_flyer];

  return (
    <div className="cs_section_heading cs_style_1 d-flex align-items-center justify-content-between cs_mb_45">
      <div className="cs_section_heading_left">
        <motion.h2 
          key={currentIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cs_section_title cs_fs_48 cs_semibold mb-0"
          style={{ fontSize: '50px', color: '#0b023b' }}
        >
          {parse(String(titles[currentIndex] || ""))}
        </motion.h2>
      </div>
      
      <div className="cs_section_heading_right">
        <div className="cs_nav_btns" style={{ display: 'flex', gap: '15px' }}>
          {/* Bouton Précédent */}
          <button 
            onMouseEnter={() => setHoverBtn('prev')}
            onMouseLeave={() => setHoverBtn(null)}
            onClick={previous}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 25px',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              backgroundColor: hoverBtn === 'prev' ? 'red' : '#0b023b',
              color: 'white',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            <i className="bi bi-arrow-left" style={{ marginRight: '8px', fontSize: '18px' }}></i>
            Précédent
          </button>

          {/* Bouton Suivant */}
          <button 
            onMouseEnter={() => setHoverBtn('next')}
            onMouseLeave={() => setHoverBtn(null)}
            onClick={next}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 25px',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              backgroundColor: hoverBtn === 'next' ? 'red' : '#0b023b',
              color: 'white',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            Suivant 
            <i className="bi bi-arrow-right" style={{ marginLeft: '8px', fontSize: '18px' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle2;