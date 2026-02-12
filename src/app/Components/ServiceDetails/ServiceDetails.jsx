"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import data from '../../Data/process.json'; 
import Link from "next/link";
import Image from "next/image";
import parse from 'html-react-parser';
import { motion } from "framer-motion";

const ServiceDetailsContent = () => {
    const searchParams = useSearchParams();
    const [service, setService] = useState(null);
    const [hoverCard, setHoverCard] = useState(null);
    const serviceTitle = searchParams.get('title');

    useEffect(() => {
        if (serviceTitle) {
            const flatData = data.flat();
            const foundService = flatData.find(item => item.title === serviceTitle);
            setService(foundService);
        }
    }, [serviceTitle]);

    // --- CONFIGURATION DES ANIMATIONS ---
    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    // --- STYLES HARMONISÉS ---
    const glassStyle = {
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: "30px",
        padding: "35px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
        border: "1px solid #eee",
        height: "100%",
        transition: "all 0.3s ease"
    };

    if (!service) {
        return (
            <div className="container text-center" style={{padding: '150px 0'}}>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <h3 className="fw-bold" style={{ color: '#0b023b' }}>Recherche de votre service...</h3>
                </motion.div>
            </div>
        );
    }

    return (
        <section style={{ backgroundColor: '#fcfcfc' }}>

            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="row g-5">
                    
                    {/* --- CONTENU PRINCIPAL --- */}
                    <div className="col-xl-8 col-lg-7">
                        <motion.div {...fadeUp}>
 
                            <h1 className="fw-bold cs_mb_30" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#0b023b', lineHeight: '1.2' }}>
                                <font style={{color: '#dc3545'}}>{service.title}</font> 
                            </h1>
                                
                            {/* Image avec bordure décorative - AGRANDIE */}
                            <div className="position-relative cs_mb_50 w-100">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="overflow-hidden shadow-lg"
                                    onMouseEnter={() => setHoverCard('visible')}
                                    onMouseLeave={() => setHoverCard(null)}
                                    style={{ 
                                        borderRadius: '35px', // Bord arrondi plus prononcé pour le grand format
                                        border: hoverCard === 'visible' ? '12px solid #0b023b' : '8px solid #ffffff',
                                        width: '45%', 
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                                    }}
                                >
                                    <Image 
                                        src={service.img} 
                                        alt={service.title} 
                                        width={1200} // Augmentation de la largeur de référence
                                        height={675} // Ratio 16:9 pour un aspect cinéma/pro
                                        className="w-100 h-auto"
                                        style={{ 
                                            objectFit: 'cover', 
                                            display: 'block',
                                            transform: hoverCard === 'visible' ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'transform 0.6s ease'
                                        }}
                                        priority
                                    />
                                </motion.div>
                            </div> 


                            <div className="cs_mb_40 text-muted" style={{ fontSize: '19px', lineHeight: '1.8', textAlign: 'justify' }}>
                                {parse(String(service.Explications_1 || ""))}
                            </div>

                            {/* Cartes Techniques Style "Services3" */}
                            <div className="row g-4 cs_mb_40">
                                <div className="col-md-6">
                                    <div 
                                        style={{ ...glassStyle, border: hoverCard === 'type' ? '10px solid #0b023b' : '1px solid #eee' }}
                                        onMouseEnter={() => setHoverCard('type')}
                                        onMouseLeave={() => setHoverCard(null)}
                                        className="text-center"
                                    >
                                        <Image src={service.imageDetail_type} alt="Type" width={80} height={80} className="cs_mb_20" />
                                        <h5 className="fw-bold mb-1">Type de service</h5>
                                        <p className="mb-0 text-danger fw-bold">{service.type}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div 
                                        style={{ ...glassStyle, border: hoverCard === 'domaine' ? '10px solid #0b023b' : '1px solid #eee' }}
                                        onMouseEnter={() => setHoverCard('domaine')}
                                        onMouseLeave={() => setHoverCard(null)}
                                        className="text-center"
                                    >
                                        <Image src={service.imageDetail_rubrique} alt="Rubrique" width={80} height={80} className="cs_mb_20" />
                                        <h5 className="fw-bold mb-1">Type de catégorie</h5>
                                        <p className="mb-0 text-danger fw-bold">{service.categorie}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cs_mb_50 text-muted" style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
                                {parse(String(service.Explications_2 || ""))}
                            </div>

                            {/* Footer Récapitulatif */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                style={{ background: '#0b023b', borderRadius: '30px', padding: '40px' }}
                                className="text-white d-flex flex-wrap justify-content-between align-items-center gap-4 shadow-lg"
                            >
                                <div>
                                    <p className="text-uppercase mb-1" style={{ letterSpacing: '2px', fontSize: '12px', opacity: 0.7 }}>Classification</p>
                                    <h4 style={{color: 'white'}} className="mb-0 fw-bold">{service.categorie}</h4>
                                </div>
                                <div style={{ width: '2px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)' }} className="d-none d-md-block"></div>
                                <div>
                                    <p className="text-uppercase mb-1" style={{ letterSpacing: '2px', fontSize: '12px', opacity: 0.7 }}>Expertise</p>
                                    <h4 style={{color: 'white'}} className="mb-0 fw-bold">{service.type}</h4>
                                </div>
                                <Link href="/contact" className="btn btn-danger rounded-pill px-4 py-3 fw-bold text-uppercase">
                                    Demander un devis
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* --- SIDEBAR DE CONTACT --- */}
                    <aside className="col-xl-4 col-lg-5">
                        <div className="sticky-top" style={{ top: '100px', zIndex: 1 }}>
                            <motion.div 
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                style={{ 
                                    background: 'linear-gradient(145deg, #0b023b, #1a0a5e)', 
                                    borderRadius: '35px', 
                                    padding: '45px 35px',
                                    boxShadow: '0 20px 40px rgba(11, 2, 59, 0.2)' 
                                }}
                                className="text-white"
                            >
                                <div className="text-center cs_mb_40">
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        style={{ display: 'inline-block', padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', marginBottom: '20px' }}
                                    >
                                        <Image src="/assets/img/icons/phone-call_2.svg" alt="Phone" width={45} height={45} />
                                    </motion.div>
                                    <h3 className="fw-bold text-uppercase" style={{ fontSize: '24px', color: 'white', letterSpacing: '1px' }}>
                                        Contacts
                                    </h3>
                                    <div style={{ width: '50px', height: '3px', backgroundColor: '#dc3545', margin: '15px auto' }}></div>
                                </div>

                                <div className="cs_contact_info_list">
                                    <div className="mb-4">
                                        <p className="text-danger fw-bold mb-2">📍 Agence Akwa</p>
                                        <div className="d-flex flex-column gap-2">
                                            <a href="tel:+237694189032" className="text-white text-decoration-none fs-5 fw-bold hover-red">(+237) 694 18 90 32</a>
                                            <a href="tel:+237676860385" className="text-white text-decoration-none fs-5 fw-bold hover-red">(+237) 676 86 03 85</a>
                                        </div>
                                    </div>

                                    <div className="mb-4 pt-3 border-top border-secondary">
                                        <p className="text-danger fw-bold mb-2">📍 Agence Sadi</p>
                                        <div className="d-flex flex-column gap-2">
                                            <a href="tel:+237680876087" className="text-white text-decoration-none fs-5 fw-bold hover-red">(+237) 680 87 60 87</a>
                                            <a href="tel:+237657616333" className="text-white text-decoration-none fs-5 fw-bold hover-red">(+237) 657 61 63 33</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 text-center p-3" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '20px' }}>
                                    <p className="mb-0 small opacity-75 italic">Ouvert 24h/24 pour vos services urgents</p>
                                </div>
                            </motion.div>
                        </div>
                    </aside> 
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>

            {/* CSS Additionnel pour les hovers */}
            <style jsx>{`
                .hover-red:hover { color: #dc3545 !important; transition: 0.3s; }
            `}</style>
        </section>
    );
};

export default function ServiceDetails() {
    return (
        <Suspense fallback={
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-danger" role="status"></div>
            </div>
        }>
            <ServiceDetailsContent />
        </Suspense>
    );
}