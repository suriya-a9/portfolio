import React from "react"
import { IoLogoReact } from "react-icons/io5";
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-content">
                                <h4>Made with <IoLogoReact /> for me <BsEmojiSunglasses /> by me <BsEmojiWink /></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;