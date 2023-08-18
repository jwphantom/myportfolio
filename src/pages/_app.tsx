import "@/styles/vendor/aos/aos.css";
import "@/styles/vendor/bootstrap/css/bootstrap.min.css";

import "@/styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/styles/vendor/boxicons/css/boxicons.min.css";

import "@/styles/vendor/glightbox/css/glightbox.min.css";
import "@/styles/vendor/swiper/swiper-bundle.min.css";

import "@/styles/css/style.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
