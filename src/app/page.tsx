'use client'
import styles from './page.module.css'
import dynamic from 'next/dynamic';

import Hero from '@/assets/components/Hero';


const BenefitsSection = dynamic(() => import("@/assets/components/BenefitsSection"));
const Contents = dynamic(() => import("@/assets/components/Contents"));
const Testimonials = dynamic(() => import("@/assets/components/Testimonials"));
const Bonus = dynamic(() => import("@/assets/components/Bonus"));
const Info = dynamic(() => import("@/assets/components/Info"));
const CTA = dynamic(() => import("@/assets/components/CTA"));
const Guarantee = dynamic(() => import("@/assets/components/Guarantee"));
const Footer = dynamic(() => import("@/assets/components/Footer"));


export default function Home() {
  return (
    <main className={styles.main}>
            <Hero/>
            <BenefitsSection/>
            <Contents/>
            <Testimonials/>
            <Info/>
            <Bonus/>
            <CTA/>
            <Guarantee/>
            <Footer/>
    </main>
  )
}
