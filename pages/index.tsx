import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LaunchYourProject from "../components/LaunchYourProject";
import Testimonials from "../components/Testimonials";
import WebsiteLab from "../components/WebsiteLab";
import WorkWithUs from "../components/WorkWithUs";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-full">
      <Head>
        <title>Clientle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="top">
        <Header />
        <Hero />
      </section>
      <WebsiteLab />
      <WorkWithUs />
      <Testimonials />
      <LaunchYourProject />
      <Footer />
    </div>
  );
};

export default Home;
