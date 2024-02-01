export default function Facts() {
    return (
        <section id="facts" className="facts">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Facts</h2>
                    <p>
                        In this section, I&apos;d like to give you an overview
                        of my career: years of valuable experience, a collection
                        of certificates and a history of varied projects that
                        testify to my commitment and passion.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={9}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={14}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-code-slash" />

                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={5}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>Years</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-award" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={9}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>Certificates</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
