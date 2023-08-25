import Image from "next/image";

import CodeSvg from "../../../public/img/icons/code-svgrepo-com.svg";
import ScreenSvg from "../../../public/img/icons/screen-desktop-svgrepo-com.svg";
import BackSvg from "../../../public/img/icons/gear-11-svgrepo-com.svg";

import MobileSvg from "../../../public/img/icons/mobile-svgrepo-com.svg";
import FlashSvg from "../../../public/img/icons/flash-svgrepo-com.svg";
import SecureSvg from "../../../public/img/icons/secure-shield-password-protect-safe-svgrepo-com.svg";

import MaintenanceSvg from "../../../public/img/icons/tools-svgrepo-com.svg";
import ConsultingSvg from "../../../public/img/icons/business-person-male-who-consults-svgrepo-com.svg";
import ApiSvg from "../../../public/img/icons/api-svgrepo-com.svg";

export default function Service() {
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>
                        to delivering bespoke solutions that are perfectly
                        adapted to your web and mobile application development
                        needs.
                    </p>
                </div>
                <div className="row">
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch"
                        data-aos="zoom-in"
                        data-aos-delay={100}
                    >
                        <div className="icon-box iconbox-blue">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={CodeSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>
                                Design and Development of Web and Mobile
                                Applications
                            </h4>
                            <p>
                                Creation of tailor-made applications, from
                                planning to implementation, using development
                                best practices.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                    >
                        <div className="icon-box iconbox-orange ">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={ScreenSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Front-End Development</h4>
                            <p>
                                Creating user-friendly, responsive interfaces
                                using technologies such as HTML, CSS, JavaScript
                                and frameworks like React or Angular.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    >
                        <div className="icon-box iconbox-pink">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={BackSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Back-End Development</h4>
                            <p>
                                Creation of server logic, database management
                                and development of APIs using technologies such
                                as Node.js, Python and Ruby on Rails,
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={100}
                    >
                        <div className="icon-box iconbox-yellow">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={MobileSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Mobile Applications</h4>
                            <p>
                                Design and development of mobile applications
                                for iOS and Android, using languages and tools
                                such as React Native or Ionic
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                    >
                        <div className="icon-box iconbox-red">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={FlashSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Performance Optimisation</h4>
                            <p>
                                Improving application performance by optimising
                                the code, reducing loading times and optimising
                                resources.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    >
                        <div className="icon-box iconbox-teal">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={SecureSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Security and authentication</h4>
                            <p>
                                Implementation of security measures to protect
                                sensitive data and integration of authentication
                                and authorisation systems.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    >
                        <div className="icon-box iconbox-teal">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={MaintenanceSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Maintenance and Updates</h4>
                            <p>
                                Offer ongoing maintenance, debugging and
                                updating services to ensure that the application
                                runs smoothly over the long term.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    >
                        <div className="icon-box iconbox-teal">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={ConsultingSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Technical Advice and Consultancy</h4>
                            <p>
                                Provide technical advice to help customers
                                choose the best technology and solutions for
                                their needs
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    >
                        <div className="icon-box iconbox-teal">
                            <div className="icon">
                                <Image
                                    width={50}
                                    height={50}
                                    src={ApiSvg}
                                    alt="Logo"
                                />
                            </div>
                            <h4>Third-party integration</h4>
                            <p>
                                Integrate third-party APIs, payment systems and
                                other external services to enhance the
                                application&apos;s functionality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
