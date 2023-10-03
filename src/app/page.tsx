'use client'
import styles from './page.module.css';
import dynamic from 'next/dynamic';

import Hero from '@/assets/components/Hero';
import Loading from '@/assets/components/Loading';




const BenefitsSection = dynamic(() => import("@/assets/components/BenefitsSection"), { ssr: false });
const Contents = dynamic(() => import("@/assets/components/Contents"), { ssr: false });
const Testimonials = dynamic(() => import("@/assets/components/Testimonials"), { ssr: false });
const Bonus = dynamic(() => import("@/assets/components/Bonus"), { ssr: false,  loading: () => <Loading/> });
const Info = dynamic(() => import("@/assets/components/Info"), { ssr: false });
const CTA = dynamic(() => import("@/assets/components/CTA"), { ssr: false });
const Guarantee = dynamic(() => import("@/assets/components/Guarantee"), { ssr: false });
const Footer = dynamic(() => import("@/assets/components/Footer"), { ssr: false });


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
