/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React, { Component } from "react";
import { LoadScript } from "../js/loadScript.service";
import Layout from "@/pages/layout";
import { useEffect } from "react";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Facts from "@/components/facts/Fact";
import Skills from "@/components/skills/Skills";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Service from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const script = new LoadScript();

export default function Home(props: any) {
    useEffect(() => {
        script.loadJS();
    }, []);

    return (
        <>
            <Layout title="Home" breadScrumbs="Home">
                {/* ======= Mobile nav toggle button ======= */}
                {/* <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> */}
                <i className="bi bi-list mobile-nav-toggle d-lg-none" />
                {/* ======= Header ======= */}
                <Header />
                {/* End Header */}
                {/* ======= Hero Section ======= */}
                <Hero />
                {/* End Hero */}
                <main id="main">
                    {/* ======= About Section ======= */}
                    <About />
                    {/* End About Section */}
                    {/* ======= Facts Section ======= */}
                    <Facts />
                    {/* End Facts Section */}
                    {/* ======= Skills Section ======= */}
                    <Skills />
                    {/* End Skills Section */}
                    {/* ======= Resume Section ======= */}
                    <Resume />
                    {/* End Resume Section */}
                    {/* ======= Portfolio Section ======= */}
                    <Portfolio />
                    {/* End Portfolio Section */}

                    {/* ======= Services Section ======= */}
                    <Service />
                    {/* End Services Section */}

                    {/* ======= Contact Section ======= */}
                    <Contact />
                    {/* End Contact Section */}
                </main>
                {/* End #main */}
                {/* ======= Footer ======= */}
                <Footer />
                {/* End Footer */}
                {/* <div id="preloader"></div>
                <a
                    href="#"
                    className="back-to-top d-flex align-items-center justify-content-center"
                >
                    <i className="bi bi-arrow-up-short"></i>
                </a> */}
            </Layout>
        </>
    );
}
