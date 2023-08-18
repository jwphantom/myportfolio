import { GlobalConstants } from "@/common/global-constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <h3>{GlobalConstants.appname}</h3>
                <p>The nanometric developer</p>
                <div className="social-links">
                    <Link
                        href={GlobalConstants.github}
                        target="_blank"
                        className="twitter"
                    >
                        <i className="bx bxl-github" />
                    </Link>
                    <Link
                        href={GlobalConstants.twitter}
                        target="_blank"
                        className="twitter"
                    >
                        <i className="bx bxl-twitter" />
                    </Link>
                    <Link
                        href={GlobalConstants.linkedin}
                        target="_blank"
                        className="linkedin"
                    >
                        <i className="bx bxl-linkedin" />
                    </Link>
                </div>
                <div className="copyright">
                    © Copyright{" "}
                    <strong>
                        <span>MyResume</span>
                    </strong>{" "}
                    All Rights Reserved
                </div>
                <div className="credits">
                    Designed by{" "}
                    <a href="jamesolongo.vercel.com">James Olongo</a>
                </div>
            </div>
        </footer>
    );
}
