"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Form1 = () => {
  const formRef = useRef();
  const [hoverBtn, setHoverBtn] = useState(false);
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "Envoi de votre projet...", type: "" });

    // --- REMPLACE CES 3 VALEURS PAR TES CLÉS RÉCUPÉRÉES ---
    const SERVICE_ID = "TON_SERVICE_ID"; 
    const TEMPLATE_ID = "TON_TEMPLATE_ID";
    const PUBLIC_KEY = "TA_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus({ 
          loading: false, 
          msg: "Succès ! Votre message et votre fichier ont été envoyés à Daniel.", 
          type: "success" 
        });
        formRef.current.reset(); // On vide le formulaire
      }, (error) => {
        console.error("Erreur EmailJS:", error);
        setStatus({ 
          loading: false, 
          msg: "Erreur lors de l'envoi. Vérifiez la taille du fichier.", 
          type: "error" 
        });
      });
  };

  // Animations identiques au reste de ton site
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.form 
      ref={formRef}
      onSubmit={sendEmail}
      className="row cs_row_gap_30 cs_gap_y_30" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Nom */}
      <motion.div className="col-sm-6" variants={itemVariants}>
        <input type="text" name="name" placeholder="Votre nom" required className="cs_form_field cs_radius_5" style={{ padding: '15px', fontSize: "18px" }} />
      </motion.div>

      {/* Email */}
      <motion.div className="col-sm-6" variants={itemVariants}>
        <input type="email" name="email" placeholder="Votre Mail" required className="cs_form_field cs_radius_5" style={{ padding: '15px', fontSize: "18px" }} />
      </motion.div>

      {/* Objet */}
      <motion.div className="col-sm-6" variants={itemVariants}>
        <input type="text" name="subject" placeholder="Nature du projet" required className="cs_form_field cs_radius_5" style={{ padding: '15px', fontSize: "18px" }} />
      </motion.div>

      {/* Sélection de Document / Photo */}
      <motion.div className="col-sm-6" variants={itemVariants}>
        <div className="position-relative">
            <input 
                type="file" 
                name="my_file" // Doit être identique au nom mis dans les Attachments du template
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="cs_form_field cs_radius_5" 
                style={{ padding: '10px 15px', fontSize: "16px" }} 
            />
        </div>
      </motion.div>

      {/* Message */}
      <motion.div className="col-12" variants={itemVariants}>
        <textarea name="message" rows="5" placeholder="Décrivez votre besoin..." required className="cs_form_field" style={{ padding: '15px', fontSize: "18px" }}></textarea>
      </motion.div>

      {/* Notification de Statut */}
      {status.msg && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className={`col-12 fw-bold ${status.type === "success" ? "text-success" : "text-danger"}`}
        >
          {status.msg}
        </motion.div>
      )}

      {/* Bouton de soumission */}
      <motion.div className="col-12" variants={itemVariants}>
        <button 
          type="submit" 
          disabled={status.loading}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          className="cs_btn cs_style_1 mt-3"
          style={{
            backgroundColor: status.loading ? '#ccc' : (hoverBtn ? 'red' : '#0b023b'),
            color: 'white',
            border: 'none',
            padding: '15px 50px',
            borderRadius: '50px',
            fontWeight: 'bold',
            transition: '0.3s ease',
            cursor: status.loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span>{status.loading ? "Envoi en cours..." : "Lancer le projet"}</span>
          {!status.loading && <i className="bi bi-arrow-right"></i>}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default Form1;