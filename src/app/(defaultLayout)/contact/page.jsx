import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact from '@/app/Components/Contact/Contact';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/contacter.jpg"
                Title="Contact"
            ></BreadCumb> 

            <Contact
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
                gprs3="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.912!2d9.734!3d4.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061120000000000%3A0x0!2sSadi%2C%20Douala!5e0!3m2!1sfr!2scm!4v1706440000000!5m2!1sfr!2scm"

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

        </div>
    );
};

export default page;