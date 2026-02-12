import Link from 'next/link';
import data from '../../Data/project2.json';
import Image from 'next/image';

const Project3 = () => {
    return (
        <section className="cs_tabs cs_style_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_cards_grid cs_style_1">
          {data.map((item, i) => (
            <div key={i} className="cs_card cs_style_5 position-relative">
                <div className="cs_card_thumbnail">
                <Image src={item.img} alt="img" width={412} height={295}   />
                </div>
                <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                <div className="cs_portfolio_text">
                    <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><Link href="/project/project-details">{item.title}</Link></h3>
                    <p className="cs_white_color mb-0">{item.desc}</p>
                </div>
                <Link href="/project/project-details" className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg">
                <Image src="/assets/img/icons/arrow_long.svg" alt="img" width={23} height={24}   />
                </Link>
                </div>
            </div>
            ))}

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Project3;