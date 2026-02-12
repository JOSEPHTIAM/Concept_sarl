import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About2 from '../Components/About/About2';
import Services2 from '../Components/Services/Services2';
import Faq1 from '../Components/Faq/Faq1';
import Video1 from '../Components/Video/Video1';
import Form2 from '../Components/Form/Form2';
import Team1 from '../Components/Team/Team1';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Brand1 from '../Components/Brand/Brand1';
import Project2 from '../Components/Project/Project2';
import Counter1 from '../Components/Counter/Counter1';
import Blog2 from '../Components/Blog/Blog2';

const page = () => {
    return (
        <div>
            <HeroBanner2
                bgimg="/assets/img/hero_bg_1.jpg"
                subtitle="Battery Check & Replace"
                title="Your Car’s Health is Our Mission"
                conetnt="Repair times vary depending on the service, but most standard repairs are completed within a few hours your satisfaction and peace of mind."
                btnname="Read more"
                btnurl="/about"
                videoname="Watch Our Story"
            ></HeroBanner2> 
            <About2
                img1="/assets/img/about_img_4.jpg"
                img2="/assets/img/about_img_5.jpg"
                expNumber="58"
                expTitle="EXPER"
                exYear="STA 1980"
                subTitle="About Us"
                Title="Where Your Car the Best Care Every Time"
                Content="Globally maintain high payoff collaboration and idea sharing after viral solutions car as Objectively leading are mindshare rather than premier testing pursue professional you customer service revolutinary services drive"
                
                               
                detailsGeneraux="Notre approche globale d'INDIGO repose sur une synergie parfaite entre l'art visuel et la précision technique. Nous ne nous contentons pas d'imprimer; nous accompagnons nos clients dans la matérialisation de leurs idées, qu'il s'agisse de projets personnels ou de campagnes d'envergure pour entreprises. Grâce à une infrastructure moderne et une équipe pluridisciplinaire, nous garantissons une cohérence visuelle sur tous vos supports, assurant ainsi une identité de marque forte, durable et percutante dans un marché de plus en plus exigeant."
                detailsConception="La phase de conception est le cœur créatif de notre métier. Nos designers transforment vos concepts abstraits en visuels stratégiques grâce à une maîtrise avancée du prépresse et du design graphique. Nous intégrons des services de pointe comme le scan grand format pour la numérisation de documents techniques et artistiques, tout en offrant un conseil personnalisé sur le choix des palettes de couleurs et des typographies. Chaque création est optimisée pour son support final, garantissant un rendu esthétique irréprochable qui capte immédiatement l'attention de votre cible."
                detailsImpression="L'impression chez nous est le point de rencontre entre la technologie de pointe et la fidélité colorimétrique. Grâce à notre parc machine polyvalent, nous couvrons tous les besoins : du print numérique haute définition pour vos petites et moyennes séries, à l'impression digitale grand format (allant jusqu'à 3,2 mètres) pour vos bâches et affiches monumentales. Nous excellons également dans la reprographie et les travaux de luxe, incluant l'impression d'enveloppes personnalisées, de billets de mariage et l'application de dorure à chaud. Chaque goutte d'encre est projetée avec une précision chirurgicale pour garantir que le rendu final soit l'exact reflet de votre écran."
                detailsFaconnage="Le façonnage est l'étape cruciale qui transforme une simple feuille imprimée en un objet fini, fonctionnel et élégant. C'est ici que vos documents prennent leur structure finale grâce à nos services de reliure professionnelle (spirale, thermique ou collée) et de coupe au massicot ultra-précise au millimètre près. Notre expertise s'étend à la gravure personnalisée et à la plastification pour protéger vos supports. Que ce soit pour plier, assembler, agrafer ou rainer, notre atelier de façonnage apporte la touche de robustesse et de prestige qui fait toute la différence entre un document ordinaire et un produit de qualité supérieure."
                
                box1="Brake Master Service"
                boxContent1="Squeaking, grinding noises, or a soft brake pedal are common signs Kind warranty on most services."
                box2="Engine Diagnostics"
                boxContent2="Slow engine crank, dim headlights, and a battery warning light are kinds typical signs."
                avatar="/assets/img/avatar_1.png"
                name="Ronald Richards"
                designation="Founder CEO"
            ></About2>   
            <Services2></Services2>
            <Faq1></Faq1>
            <Video1></Video1>
            <Form2></Form2> 
            <Team1></Team1>
            <Testimonial2></Testimonial2>
            <Brand1></Brand1>  
            <Project2></Project2> 
            <Counter1></Counter1>
            <Blog2></Blog2>                        
        </div>
    );
};

export default page;