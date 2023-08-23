import Image from "next/image";
import ToastCenter from "@/components/Toast/ToastCenter";
import { toast } from "react-toastify";
import Link from "next/link";
import portfolioData from "@/data/portfolio";

export default function Portfolio() {
    const onDetails = (event: any) => {
        event.preventDefault();

        console.log("ok");
        toast.info("Details page under construction");
    };
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>
                        Discover my portfolio, which is full of concrete
                        achievements. Each project is a canvas on which I have
                        woven skills and creativity to shape unique and
                        captivating digital experiences.
                    </p>
                </div>

                <div
                    className="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    {portfolioData.map((project, index) => (
                        <>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    {project?.img && project.img[0] && (
                                        <Image
                                            width={600}
                                            height={600}
                                            src={project?.img[0]}
                                            className="img-fluid"
                                            alt={project.alt}
                                        />
                                    )}
                                    <div className="portfolio-info">
                                        <h4>{project?.name}</h4>
                                        <p>{project?.type}</p>
                                        <div className="portfolio-links">
                                            <a
                                                href={project?.url}
                                                target="_blank"
                                                className="portfolio-details-lightbox"
                                                data-glightbox="type: external"
                                                title="Portfolio Details"
                                            >
                                                <i className="bx bx-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <ToastCenter />
        </section>
    );
}
