"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";


const Brand1 = () => {

    useEffect(() => {
      loadBackgroudImages();
    }, []);

    return (
      <div className="cs_brands_area">
        <div className="container align-items-center">
          <div
            className="cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed"
            data-background="/assets/img/brand_bg_1.svg"
            style={{display: 'flex', justifyContent: 'center',gap: '30px', height: '100px', width: '500px', margin: '0 auto', padding: '10px 20px' }}
          >
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/icon8-issa.png" alt="img" width={70} height={100}   />
            </div>
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/icons----imprimante-64.png" alt="img" width={70} height={100}   />
            </div>
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/icons8-livre-64.png" alt="img" width={70} height={100}   />
            </div>
          </div> 
        </div>
      </div>
    );
};

export default Brand1;