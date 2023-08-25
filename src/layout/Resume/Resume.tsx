import { GlobalConstants } from "@/common/global-constants";

export default function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>
                        Explore my career path through my CV. A summary of my
                        past experience, current skills and vision for the
                        challenges ahead.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>{GlobalConstants.appname}</h4>
                            <p>
                                <em>
                                    A meticulous, deadline-driven developer with
                                    over 4 years, experience in the creation and
                                    development of user-focused web and mobile
                                    applications. My expertise extends from
                                    initial concept to final delivery, always
                                    executed with rigour and attention to
                                    detail.
                                </em>
                            </p>
                            <ul>
                                <li>{GlobalConstants.localisation}</li>
                                <li>{GlobalConstants.phone1}</li>
                                <li>{GlobalConstants.email}</li>
                            </ul>
                        </div>
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master 1 of IA & DataScience</h4>
                            <h5>2022 - 2023</h5>
                            <p>
                                <em>Saint Jean Institute</em>
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Software Engineering Arts</h4>
                            <h5>2016 - 2020</h5>
                            <p>
                                <em>University of Yaounde 1</em>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">
                            Professional Experience
                        </h3>
                        <div className="resume-item">
                            <h4>FULL STACK DEVELOPER - Partial time</h4>
                            <h5>2019 - Present</h5>
                            <p>
                                <em>IRDSM - AVIATION </em>
                            </p>
                            <ul>
                                <li>
                                    Involved in technical user stories
                                    definition
                                </li>
                                <li>
                                    Involved in the meetings of evaluation of
                                    the user stories points and continuous
                                    improvement of the platform
                                </li>
                                <li>
                                    Design and development of the school page
                                </li>
                                <li>
                                    Design of the administrative management
                                    dashboard
                                </li>
                                <li>
                                    Implementation of the application submission
                                    system
                                </li>
                                <li>Fix bugs</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>FREELANCE</h4>
                            <h5>2017 - Présent</h5>
                            <p>
                                <em>Employer based in Africa and Canada</em>
                            </p>
                            <ul>
                                <li>
                                    Conception, design and development of
                                    various websites and applications for
                                    clients in Canada and Cameroon, e.g.: Mini
                                    social network, e-commerce and landing page.
                                </li>
                                <li>
                                    Supporting technical discussions with
                                    stakeholders to clearly define the
                                    requirements, integration and general
                                    expectations of all parties involved.
                                </li>
                                <li>
                                    Participation in drawing up specifications
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
