import Image from "next/image";

const TeamDetails = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_60 cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_team_thumbnail">
              <Image src="/assets/img/team_img_9.jpg" alt="img" width={618} height={642}   />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_team_details_content">
              <div className="cs_mb_16">
                <h2 className="cs_fs_50 cs_accent_color mb-0">Savannah Nguyen</h2>
                <p className="cs_fs_18 cs_semibold mb-0">Brake Repairer</p>
              </div>
              <p className="cs_team_details_text cs_mb_25">The duration of a project depends on its scope and complexity. We provide a detailed timeline after the initial consultation The duration of a project depends on its scope and complexity. We provide a detailed</p>
              <ul className="cs_team_features_list cs_mp_0 cs_fs_18 cs_semibold cs_heading_color cs_heading_font">
                <li>Best Quality Services</li>
                <li>Meet the Dad-lines</li>
                <li>Time Saving</li>
                <li>24/7 Customer Support</li>
              </ul>
              <div className="cs_height_30 cs_height_lg_30"></div>
              <div className="cs_iconbox_wrapper cs_mb_34">
                <div className="cs_iconbox cs_style_6">
                  <div className="cs_iconbox_icon cs_center cs_accent_color cs_radius_50">
                  <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <p className="cs_fs_14 mb-0">Email Address</p>
                    <a href="mailTo:info@gmail.com" className="cs_fs_18 cs_semibold cs_heading_color cs_heading_font">info@gmail.com</a>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_6">
                  <div className="cs_iconbox_icon cs_center cs_accent_color cs_radius_50">
                  <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <p className="cs_fs_14 mb-0">Phone Number</p>
                    <a href="tel:+(704)555-0127" className="cs_fs_18 cs_semibold cs_heading_color cs_heading_font">+ (704) 555-0127</a>
                  </div>
                </div>
              </div>
              <div className="cs_social_btns cs_style_1 cs_mb_31">
                <a href="#" className="cs_center cs_radius_50"><i className="bi bi-facebook"></i></a>
                <a href="#" className="cs_center cs_radius_50"><i className="bi bi-youtube"></i></a>
                <a href="#" className="cs_center cs_radius_50"><i className="bi bi-twitter"></i></a>
                <a href="#" className="cs_center cs_radius_50"><i className="bi bi-linkedin"></i></a>
              </div>
              <div className="cs_progress_skills_wrapper">
                <h3 className="cs_fs_30 cs_mb_23">Professional Skills</h3>
                <div className="cs_progress_info_wrapper">
                <div className="cs_progress_info">
                  <h3 className="cs_fs_16 cs_semibold cs_mb_10">Tire Tread Check</h3>
                  <div className="cs_progress" data-progress="95">
                    <div className="cs_progress_in">
                      <span className="cs_fs_16 cs_semibold cs_heading_color">95%</span>
                    </div>
                  </div>
                </div>
                <div className="cs_progress_info">
                  <h3 className="cs_fs_16 cs_semibold cs_mb_10">Precision Alignment</h3>
                  <div className="cs_progress" data-progress="80">
                    <div className="cs_progress_in">
                      <span className="cs_fs_16 cs_semibold cs_heading_color">80%</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default TeamDetails;