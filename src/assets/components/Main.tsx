'use client'

import BenefitsSection from "./BenefitsSection";
import Bonus from "./Bonus";
import CTA from "./CTA";
import Footer from "./Footer";
import Guarantee from "./Guarantee";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Contents from "./Contents";
import Info from "./Info";


export default function Main() {
    return (
        <main>
            <Hero/>
            <BenefitsSection/>
            <Contents/>
            <Testimonials/>
            <Bonus/>
            <Info/>
            <CTA/>
            <Guarantee/>
            <Footer/>
        </main>
    )
}