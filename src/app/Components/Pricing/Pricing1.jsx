"use client"
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard.jsx";

const Pricing1 = () => {

  const [isActive, setIsActive] = useState('monthly');

    return (
<section className="cs_tabs cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left">
            <SectionTitle
                SubTitle="our price plan"
                Title="Choose The Right Plan Which You Need!"
            ></SectionTitle>
          </div>
        </div>
        <ul className="cs_tab_links cs_style_1 cs_type_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mp_0 wow fadeInUp">
          <li className={`${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')}><a>Monthly</a></li>
          <li className={`${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}><a>Yearly</a></li>
        </ul>
        <div className="cs_tab_body">
          <div className={`cs_tab ${isActive === 'monthly' ? 'active' : ''}`} >
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              <div className="col-lg-4">
              <div className="cs_pricing_table cs_style_1">
              <PricingCard
                price="$100"
                planName="Emergency Plan"
                title="Basic Plan"
                subTitle="Exclusive for Small"
                featureList={[
                  "Rims & Tire Change",
                  "Light Carpet Clean",
                  "Wipe all Surfaces",
                  "Wipe all Surfaces",
                  "Interior Cleaning",
                  "Water proofing",
              ]}
                btnName="Choose Plan"
                btnUrl="/contact"
              ></PricingCard>
              </div>
              </div>
              <div className="col-lg-4 ">
              <div className="cs_pricing_table cs_style_1 active">
              <PricingCard
                price="$160"
                planName="Emergency Plan"
                title="Stander Plan"
                subTitle="Exclusive for Small"
                featureList={[
                  "Rims & Tire Change",
                  "Light Carpet Clean",
                  "Wipe all Surfaces",
                  "Wipe all Surfaces",
                  "Interior Cleaning",
                  "Water proofing",
              ]}
                btnName="Choose Plan"
                btnUrl="/contact"
              ></PricingCard>
              </div>
              </div>

              <div className="col-lg-4">
              <div className="cs_pricing_table cs_style_1">
              <PricingCard
                price="$200"
                planName="Emergency Plan"
                title="Premium plan"
                subTitle="Exclusive for Small"
                featureList={[
                  "Rims & Tire Change",
                  "Light Carpet Clean",
                  "Wipe all Surfaces",
                  "Wipe all Surfaces",
                  "Interior Cleaning",
                  "Water proofing",
              ]}
                btnName="Choose Plan"
                btnUrl="/contact"
              ></PricingCard>
              </div>
              </div>

            </div>
          </div>
          <div className={`cs_tab ${isActive === 'yearly' ? 'active' : ''}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              <div className="col-lg-4">
              <div className="cs_pricing_table cs_style_1">
              <PricingCard
                price="$350"
                planName="Emergency Plan"
                title="Basic Plan"
                subTitle="Exclusive for Small"
                featureList={[
                  "Rims & Tire Change",
                  "Light Carpet Clean",
                  "Wipe all Surfaces",
                  "Wipe all Surfaces",
                  "Interior Cleaning",
                  "Water proofing",
              ]}
                btnName="Choose Plan"
                btnUrl="/contact"
              ></PricingCard>
              </div>
              </div>
              <div className="col-lg-4">
              <div className="cs_pricing_table cs_style_1 active">
              <PricingCard
                price="$500"
                planName="Emergency Plan"
                title="Stander Plan"
                subTitle="Exclusive for Small"
                featureList={[
                  "Rims & Tire Change",
                  "Light Carpet Clean",
                  "Wipe all Surfaces",
                  "Wipe all Surfaces",
                  "Interior Cleaning",
                  "Water proofing",
              ]}
                btnName="Choose Plan"
                btnUrl="/contact"
              ></PricingCard>
              </div>
              </div>
              <div className="col-lg-4">
              <div className="cs_pricing_table cs_style_1">
              <PricingCard
                price="$650"
                planName="Emergency Plan"
                title="Premium plan"
                subTitle="Exclusive for Small"
                featureList={[
                  "Rims & Tire Change",
                  "Light Carpet Clean",
                  "Wipe all Surfaces",
                  "Wipe all Surfaces",
                  "Interior Cleaning",
                  "Water proofing",
              ]}
                btnName="Choose Plan"
                btnUrl="/contact"
              ></PricingCard>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </div>
    </section>
    );
};

export default Pricing1;