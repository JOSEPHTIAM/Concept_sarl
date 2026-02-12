import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import BeforeAfter from '../Components/BeforeAfter/BeforeAfter';
import Project1 from '../Components/Project/Project1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Process from '../Components/Process/Process';
import Blog3 from '../Components/Blog/Blog3';
import Services3 from '@/app/Components/Services/Services3';
import Services from '../Components/Services/Services1';
import Contact1 from '../Components/ContactInfo/Contact1';
import Impressions from '@/app/Components/Impressions/Impressions1';
import Faconnages from '@/app/Components/Faconnages/Faconnages1';

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>

            <Process></Process>

            <About1
                img1="/assets/img/imprimante.png"
                img2="/assets/img/about_img_2.jpg"
                img3="/assets/img/about_img_3.jpg"
                expNumber=""
                expYers="dededededededede"
                expTitle="gtgrtyhyhtyhyj"
                number="(+237)694189032" 
                subTitle="Nos services"
                Title="Nos trois (03) meilleurs services"
                Content="Nous avons trois (03) services contenant des détails à découvrir :"
                detailsGeneraux="Notre approche globale d'INDIGO repose sur une synergie parfaite entre l'art visuel et la précision technique. Nous ne nous contentons pas d'imprimer; nous accompagnons nos clients dans la matérialisation de leurs idées, qu'il s'agisse de projets personnels ou de campagnes d'envergure pour entreprises."

                detailsConception="INDIGO transforme vos concepts en visuels stratégiques grâce à une expertise prépresse avancée, alliant numérisation haute précision et design graphique pour garantir un rendu final esthétique et percutant."
                detailsConception2="Au-delà de l'esthétique, notre processus de 'conception' repose sur une ingénierie visuelle rigoureuse garantissant une cohérence totale sur tous vos supports de communication. En mobilisant des outils de 'Design' de dernière génération et une expertise pointue en Prépresse, nous anticipons chaque contrainte technique pour sécuriser la transition du digital vers le support physique. Notre service de 'Scan grand format' permet de réintégrer vos archives ou vos plans complexes dans des flux de production modernes, assurant ainsi une continuité parfaite entre vos ressources existantes et vos nouveaux projets. Grâce à nos 'Conseils stratégiques' en architecture graphique, nous définissons des chartes visuelles pérennes qui renforcent votre positionnement sur le marché et optimisent l'impact de chaque diffusion. Cette approche holistique de la création nous permet de transformer vos idées en actifs visuels durables, capables de s'adapter aux évolutions de votre entreprise tout en conservant une identité forte, une lisibilité exemplaire et une élégance qui distingue votre marque dès le premier regard."

                detailsImpression="L’impression chez INDIGO allie technologie de pointe et fidélité colorimétrique. De la haute définition numérique au grand format (3,2m), nous réalisons vos séries, bâches et travaux de luxe avec une précision chirurgicale, garantissant un rendu final qui reflète exactement vos créations."
                detailsImpression2="La maîtrise de la chaîne d'impression nous permet de repousser les limites de la personnalisation pour offrir à vos projets une dimension sensorielle unique. En combinant la réactivité du Print numérique avec la puissance du Print digital grand format, nous transformons vos surfaces (de 1m à 3,2m) en espaces de communication impactants, tout en assurant une qualité de Photocopies et de Reprographie d'une netteté absolue pour vos documents administratifs. "

                detailsFaconnage="Le façonnage transforme vos impressions en objets finis et élégants. Grâce à notre expertise en reliure, coupe de précision et gravure, nous structurons et protégeons vos documents pour leur apporter la robustesse et le prestige d’un produit de qualité supérieure."
                detailsFaconnage2="La signature de votre projet réside dans la perfection de sa finition, une étape où chaque geste technique définit l'ergonomie et la longévité de vos supports. Grâce à notre maîtrise de la Coupe au massicot, nous assurons une netteté géométrique absolue sur tous les bords, indispensable pour un rendu professionnel irréprochable. Nos solutions de Reliures diversifiées s'adaptent à l'usage de vos ouvrages : de la souplesse de la spirale pour les documents de travail à la solidité du dos carré collé pour vos catalogues de prestige. Pour les pièces nécessitant une identité forte, notre service de Gravure apporte une dimension tactile et inaltérable, tandis que nos procédés de protection, incluant la plastification et le rainage, préviennent l'usure prématurée tout en facilitant la manipulation. Plier, assembler ou agrafer ne sont pas de simples gestes mécaniques, mais une véritable ingénierie de l'objet qui garantit que chaque brochure ou dossier conserve sa structure et son élégance, même en cas d'utilisation intensive. En confiant vos travaux à notre atelier, vous optez pour une robustesse certifiée qui valorise votre contenu et pérennise l'impact visuel de votre communication auprès de vos interlocuteurs les plus exigeants."

                feature1="Conception"
                feature2="Impression"
                feature3="Façonnage"
                listItem={[
                    "Conception",
                    "Impression",
                    "Façonnage",
                ]}
                listItem_conception={[
                    "Prépresse",
                    "Design",
                    "Scan grand format",
                    "Conseils",
                ]}
                listItem_impression={[
                    "Print numérique",
                    "Print digital grand format (1m-3.2m)",
                    "Photocopies",
                    "Reprographie",
                    "Impression à la demande",
                    "Billets de mariage",
                    "Enveloppes de luxe",
                    "Dorure",
                ]}
                listItem_faconnage={[
                    "Gravure",
                    "Reliures",
                    "Coupe massicot",    
                ]}
                avatar="/assets/img/avatar_1.png"
                name="Ronald Richards"
                designation="Founder CEO"
            ></About1>    
      
            
            <Services></Services>

            <Impressions></Impressions>

            <Faconnages></Faconnages>


            <Contact1
                Title="Agence d'Akwa"
                subTitle="Notre première agence située au quartier Akwa pour vous accompagner."
                address="Face Espace landmark à côté de Assomption 2em étage, BId de la république"
                email="secretariat@indigo-cm.com"
                number="(+237)694189032 <br/> (+237)676860385 <br/> 243667172"
                img="/assets/img/telephone.jpg" 
                gprs="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.827292271239!2d9.704285!3d4.048243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be26002d9%3A0x69c69346d03f0b!2sAkwa%2C%20Douala!5e0!3m2!1sfr!2scm!4v1706440000000!5m2!1sfr!2scm"

                Title3="Agence de Sadi"
                subTitle3="Notre deuxième agence située au quartier Sadi pour vous accompagner."
                address3="Carrefour laboratoire Meka face Fascino."
                email3="sadi@indigo-cm.com"
                number3="(+237)680876087 <br/> (+237)657616333"
                img3="/assets/img/telephone.jpg"
                gprs3="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.827292271239!2d9.704285!3d4.048243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be26002d9%3A0x69c69346d03f0b!2sAkwa%2C%20Douala!5e0!3m2!1sfr!2scm!4v1706440000000!5m2!1sfr!2scm"

                web="www.indigo-cm.com"
                facebook="Indigoimpressionnumérique"

                subtitle2="Nous joindre"
                title2="Contactez-nous pour une étude personnalisée de votre projet éditorial afin de bénéficier de conseils d'experts et d'une qualité d'impression exceptionnelle, avec une réponse rapide et une proposition adaptée à vos besoins."
                
                title3="nous vous répondrons dans les plus brefs délais avec une proposition adaptée à vos besoins."
                title4="Confiez-nous votre manuscrit ou vos documents via ce formulaire pour une étude personnalisée."
                title5="Remplissez les champs ci-dessous car nous acceptons les fichiers textes et PDF pour une prise en charge immédiate de votre projet."
                title6="Nous garantissons la confidentialité de vos écrits et une analyse rigoureuse de votre demande."
                title7="Cependant, nous ne nous contentons pas de fournir des services d'impression de qualité. Nous sommes également à votre écoute pour comprendre les spécificités de votre projet éditorial, que ce soit un livre, une brochure, un catalogue ou tout autre support. Notre équipe d'experts est là pour vous guider à chaque étape du processus, de la conception à l'impression, en passant par le choix des matériaux et des finitions."
                title8="De la conception à l'impression, nous vous guidons à chaque étape de votre projet éditorial."
            />

            <br />
        </div>
    );
};

export default page;