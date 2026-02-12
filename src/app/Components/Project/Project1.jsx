import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/project1.json';
import Link from "next/link";
import Image from "next/image";

const Project1 = () => {
    return (
        <section className="cs_tabs cs_style_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_left">
                <SectionTitle
                    SubTitle="Popular Project"
                    Title="Where Your Car Gets Pride the Best Care"           
                ></SectionTitle>
            </div>
          </div>
            <ul className="cs_tab_links cs_style_1 cs_heading_color cs_mp_0 wow fadeInDown">
              <li className="active"><Link href="/project">View All Project</Link></li>
            </ul>
            </div>
            <div className="cs_height_60"></div>
            <div className="container-fluid p-0">
            <div className="cs_project_area">
              <div className="cs_project" >
                <div className="row cs_row_gap_60 cs_gap_y_30">
                {data.map((item, i) => (
                  <div key={i} className="col-xl-3 col-md-6 wow fadeInLeft">
                    <div className="cs_card cs_style_2 position-relative">
                      <Link href="/project/project-details" className="cs_card_thumbnail position-relative">
                      <Image src={item.img} alt="img" width={431} height={469}   />
                      </Link>
                      <div className="cs_card_info cs_white_bg">
                        <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><Link href="/project/project-details">{item.title}</Link></h3>
                        <p className="cs_card_subtitle">{item.desc}</p>
                        <Link href="/project/project-details" className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
                          <span className="cs_btn_text text-uppercase">Read More</span>
                          <span className="cs_btn_icon cs_center">
                          <i className="bi bi-arrow-right"></i>
                          <i className="bi bi-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Project1;