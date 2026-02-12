import Link from "next/link";

const PricingCard = ({price,planName,title,subTitle,featureList,btnName,btnUrl}) => {
    return (
        <div>
        <div className="cs_pricing_head cs_radius_50">
          <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
            <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">{price}</h2>
            <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">{planName}</p>
          </div>
        </div>
        <div className="cs_pricing_info_wrapper">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width="510" height="686">
            <title>pricing_bg_1-svg</title>        
            <g>
              <path className="s0"
                d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
            </g>
          </svg>
          <svg width="510" height="686" viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_2723475)">
              <path
                d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z"
                fill="white" />
              <path
                d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z"
                stroke="currentColor" strokeWidth="2" />
            </g>
            <defs>
              <filter id="filter0_d_1_2778475" x="0.665039" y="0" width="508.85" height="686"
                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className="cs_pricing_plan cs_mb_27">
            <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">{title}</h3>
            <p className="cs_pricing_head_subtitle mb-0">{subTitle}</p>
          </div>
          <ul className="cs_pricing_feature_list cs_mp_0">
          {featureList?.map((item, index) => (
            <li key={index}><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                <i className="bi bi-check"></i></span>{item}
            </li>
            ))}
          </ul>
          <Link href={btnUrl}
            className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10">{btnName}</Link>
        </div>
      </div>
    );
};

export default PricingCard;