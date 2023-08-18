import { GlobalConstants } from "@/common/global-constants";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="hero"
            className="d-flex flex-column justify-content-center"
        >
            <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                <h1>{GlobalConstants.appname}</h1>
                <p>
                    I&apos;m &nbsp;
                    <span
                        className="typed"
                        data-typed-items="Web Developer, Mobile Developer , Software Design"
                    />
                </p>
                <div className="social-links">
                    <Link
                        target="_blank"
                        href={GlobalConstants.github}
                        className="twitter"
                    >
                        <i className="bx bxl-github" />
                    </Link>
                    <Link
                        target="_blank"
                        href={GlobalConstants.twitter}
                        className="twitter"
                    >
                        <i className="bx bxl-twitter" />
                    </Link>
                    <Link
                        target="_blank"
                        href={GlobalConstants.linkedin}
                        className="linkedin"
                    >
                        <i className="bx bxl-linkedin" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
