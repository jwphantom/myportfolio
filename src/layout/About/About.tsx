import { GlobalConstants } from "@/common/global-constants";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        I&apos;m James Olongo based in Yaoundé, Cameroon and
                        i&apos;m available for freelance and full-time work
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Image
                            width={600}
                            height={600}
                            src="/img/me/profile-img.jpg"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>
                            Web & Mobile Developer &amp; Machine Learning
                            Developer.
                        </h3>

                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right" />{" "}
                                        <strong>Website:</strong>{" "}
                                        <span>{GlobalConstants.website}</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" />{" "}
                                        <strong>Phone:</strong>
                                        <span>{GlobalConstants.phone1}</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" />{" "}
                                        <strong>City:</strong>{" "}
                                        <span>
                                            {GlobalConstants.localisation}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right" />
                                        <strong>Degree:</strong>
                                        <span>Master</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" />
                                        <strong>Email:</strong>
                                        <span>{GlobalConstants.email}</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" />
                                        <strong>Freelance:</strong>
                                        <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            My career path is testament to my unshakeable
                            determination and my appetite for innovation. I
                            tackle every project with an inexhaustible
                            determination to overcome difficulties, turning
                            obstacles into staircases to excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
