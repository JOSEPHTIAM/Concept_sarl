import Image from "next/image";

const ProjectDetails = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_portfolio_details">
          <Image src="/assets/img/portfolio_banner.jpg" alt="img" width={1296} height={552}   />
            <h2>Some Work from our Memorable Gallery</h2>
            <p> The repair time depends on the issue. We will give you an estimated time after inspection Look out for squeaking, grinding noises, or a soft brake pedal. These are signs your brakes may need attention If you notice dim headlights, slow engine crank, or if your battery is over 3 years old, it might be time for a replacement full inspection checks the engine, brakes, tires, suspension, fluid levels, and more to ensure your vehicle is safe and road-ready.</p>
            <p>A check engine light could indicate a range of issues, from a loose gas cap to more serious engine problems. It is best to have it diagnosed promptly we offer a warranty on most repairs, ensuring peace of mind for our customers.</p>
            <div className="row cs_row_gap_30 cs_gap_y_40">
              <div className="col-xl-8 col-lg-7">
                <h2>Your Partner in Car Repair Services Excellence</h2>
                <p>The time depends on the complexity of the issue. We will provide an estimated time after diagnosis an book your kinds time appointment through our website or by calling us we use Original Equipment Manufacturer (OEM) parts for repairs unless otherwise requested. estimated time after diagnosis.</p>
                <p>The cost varies depending on the issue, but we offer free estimates for all service repairs may take a few hours, while more complex issues could take 1-2 days we provide loaner cars for repairs expected to take longer than 24 hours feel for reduced stopping power, or notice if the brake warning light is on.</p>
                <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_30 p-0">
                  <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                  <i className="bi bi-check"></i></span>
                    <span>Battery Boost Replacement</span>
                  </li>
                  <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                  <i className="bi bi-check"></i></span>
                    <span>FastLane Transmission Fix</span>
                  </li>
                  <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                  <i className="bi bi-check"></i></span>
                    <span>Precision Engine Tune-up</span>
                  </li>
                  <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                  <i className="bi bi-check"></i></span>
                    <span>Transmission Check & Repair</span>
                  </li>
                </ul>
                <div className="row cs_row_gap_30">
                  <div className="col-md-6">
                  <Image src="/assets/img/portfolio_img_10.jpg" alt="img" width={412} height={226}   />
                  </div>
                  <div className="col-md-6">
                  <Image src="/assets/img/portfolio_img_11.jpg" alt="img" width={412} height={226}   />
                  </div>
                </div>
                <p>The check engine light could indicate anything from a loose gas cap to a more serious engine issue. Bring it in for a kinds diagnostic check. The check engine light could indicate anything from a loose gas cap to a more serious engine issue our Bring it in for a diagnostic check miles to promote even wear.</p>
              </div>
              <aside className="col-xl-4 col-lg-5">
                <div className="cs_sidebar cs_style_1">
                  <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                    <ul className="cs_categories cs_mp_0">
                      <li><span className="cs_fs_18 cs_semibold cs_heading_color">Category:</span><span>Car Repair Services</span></li>
                      <li><span className="cs_fs_18 cs_semibold cs_heading_color">Customer:</span><span>Star-line Shimlasi</span></li>
                      <li><span className="cs_fs_18 cs_semibold cs_heading_color">Start Date:</span><span>21 January 2024</span></li>
                      <li><span className="cs_fs_18 cs_semibold cs_heading_color">End Date:</span><span>28 September 2024</span></li>
                    </ul>
                    <div className="cs_rating_wrapper">
                      <h3 className="cs_fs_18 cs_semibold mb-0">Rating:</h3>
                      <div className="cs_rating" data-rating="5">
                        <div className="cs_rating_percentage"></div>
                      </div>
                    </div>
                    <div className="cs_social_btns cs_style_1">
                      <a href="#"  className="cs_center cs_radius_50"><i className="bi bi-linkedin"></i></a>
                      <a href="#"  className="cs_center cs_radius_50"><i className="bi bi-twitter"></i></a>
                      <a href="#"  className="cs_center cs_radius_50"><i className="bi bi-youtube"></i></a>
                      <a href="#"  className="cs_center cs_radius_50"><i className="bi bi-facebook"></i></a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default ProjectDetails;