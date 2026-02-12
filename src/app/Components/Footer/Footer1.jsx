"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer1 = () => {
  // --- CONFIGURATION DES ANIMATIONS STYLE "SERVICES3" ---
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: false, amount: 0.1 }
  };

  return (
    <footer id='footer1-section' className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
      <div className="container">
        {/* --- SECTION NEWSLETTER --- */}
        <motion.div 
          {...fadeUp}
          className="cs_footer_newsletter cs_style_1"
        >
          <div className="cs_footer_newsletter_left cs_accent_bg cs_center">
            <Image src="/assets/img/indigo_logo.png" alt="img" width={325} height={80} />
          </div>
          <div className="cs_footer_newsletter_right">
            <h3 style={{ marginLeft: '0px', fontSize: 'clamp(18px, 4vw, 24px)', lineHeight: '1.4', marginBottom: '20px', width: '100%' }} className="cs_fs_24 cs_semibold cs_white_color mb-0" >
              Abonnez-vous maintenant pour recevoir les dernières mises à jour.
            </h3>
            <form action="#" className="cs_footer_newsletter_form">
              <input type="text" placeholder="Entrer votre Mail" />
              <button className="cs_btn cs_style_1">
                <span>S&apos;abonner</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="cs_main_footer cs_white_color">
        <div className="container">
          {/* --- GRILLE DES COLONNES AVEC EFFET DE CASCADE (STAGGER) --- */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.1 }}
            className="cs_footer_row"
          >
            {/* Colonne 1 : À propos */}
            <motion.div variants={fadeUp} className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">A propos</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <div className="cs_text_widget">
                  <p>
                    Nous sommes une structure engagée dans la conception et la réalisation de solutions modernes... (votre texte)
                  </p>
                </div>
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_social_btn cs_center"><i className="bi bi-globe"></i></a>
                  <a href="#" className="cs_social_btn cs_center"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
            </motion.div>

            {/* Colonne 2 : Akwa */}
            <motion.div variants={fadeUp} className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contacter Akwa</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li><i className="bi bi-geo-alt-fill"></i> Face Espace landmark...</li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:(+237)694189032">(+237)694189032</a>
                  </li>
                  <li><i className="bi bi-envelope-fill"></i> <a href="mailto:secretariat@indigo-cm.com">secretariat@indigo-cm.com</a></li>
                </ul>
              </div>
            </motion.div>

            {/* Colonne 3 : Sadi */}
            <motion.div variants={fadeUp} className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contacter Sadi</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li><i className="bi bi-geo-alt-fill"></i> Carrefour Laboratoire...</li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:(+237)680876087">(+237)680876087</a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Colonne 4 : Horaires */}
            <motion.div variants={fadeUp} className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Disponibilités :</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  <li><span>Lundi - vendredi</span> <span>08h00 - 18h00</span></li>
                  <li><span>Samedi</span> <span>08h00 - 12h00</span></li>
                  <li><span>Dimanche</span> <span>Fermé</span></li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM FOOTER --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5 }}
        className="cs_footer_bottom cs_white_color"
      >
        <div className="container">
          <div className="cs_footer_bottom_in">
            <div className="cs_footer_copyright">
              Copyright © 2026 <a href="#">Indigo</a>. Tous les droits sont réservés.
            </div>
            <div>
              <Image src="/assets/img/payment_card.svg" alt="img" width={191} height={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer1;