import React from 'react';

const Footer = () => (
     <footer className="footer_section_avez">
        <div className="avez_movie_footer_container">
            <div className="avez_movie_footer_logo">
                    <h1 style={{ marginBottom:"1rem" }}>FIT CLUB</h1>
                    <div className="avez_movie_socials">
                        <ul>
                            <li>
                            <i className="bx bxl-facebook" />
                            <i className="bx bxl-instagram" />
                            <i className="bx bxl-twitter" />
                            <i className="bx bxl-pinterest-alt" />
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        <div className="branding_avez_dev">
            &copy; 2022 Avez Qureshi 
        </div>
    </footer>
);

export default Footer;
