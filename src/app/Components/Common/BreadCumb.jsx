"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Link from "next/link";

const BreadCumb = ({bgImg,Title}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <section className="cs_page_heading cs_bg_filed cs_center cs_primary_bg" data-background={bgImg}>
      <div className="container">
        <h1 className="cs_white_color cs_semibold cs_white_color cs_mb_10 cs_fs_50">{Title}</h1>
        <ol className="breadcrumb cs_heading_font">
          <li className="breadcrumb-item"><Link href="/">Accueil</Link></li>
          <li className="breadcrumb-item active">{Title}</li>
        </ol>
      </div>
    </section>

    );
};

export default BreadCumb;