import Head from "next/head";
import Script from "next/script";
import { ReactNode } from "react";
import { GlobalConstants } from "@/common/global-constants";

import styles from "./layout.module.css";

export default function Layout({ children, title, breadScrumbs }: any) {
    return (
        <>
            <div>
                <Head>
                    <title>James Olongo | {title} </title>
                    <meta
                        name={GlobalConstants.appname}
                        content={GlobalConstants.description}
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {children}
            </div>
        </>
    );
}
