import Image from "next/image";
import ToastCenter from "@/components/Toast/ToastCenter";
import { toast } from "react-toastify";
import Link from "next/link";

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
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/omnivox-2.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Omnivox Img2"
                            />
                            <div className="portfolio-info">
                                <h4>Omnivox - Dashboard</h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/afrizon.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Afrizon Img"
                            />
                            <div className="portfolio-info">
                                <h4>Afrizon - Home</h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/irdsm-aviation.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Irdsm Aviation Img"
                            />
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/too-neuf_2.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Too Neuf Img2"
                            />
                            <div className="portfolio-info">
                                <h4>Too - Neuf : Create Own</h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/endoftheage.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - EndOfTheAge Img"
                            />
                            <div className="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/lifederma.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Lifederma Img"
                            />
                            <div className="portfolio-info">
                                <h4>Lifederma - Home</h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/mboadjoss.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Mboadjoss Img"
                            />
                            <div className="portfolio-info">
                                <h4>Mboadjoss - Home</h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                width={600}
                                height={600}
                                src="/img/portfolio/business_school.png"
                                className="img-fluid"
                                alt="James Olongo Portfolio - Business School Img"
                            />
                            <div className="portfolio-info">
                                <h4>Business School - Etudiants</h4>
                                <p>APP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastCenter />
        </section>
    );
}
