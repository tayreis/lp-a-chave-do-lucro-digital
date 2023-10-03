'use client'
import styles from './page.module.css';
import dynamic from 'next/dynamic';

import Hero from '@/assets/components/Hero';
import BenefitsSection from '@/assets/components/BenefitsSection';
import Contents from '@/assets/components/Contents';
import Testimonials from '@/assets/components/Testimonials';
import Info from '@/assets/components/Info';
import CTA from '@/assets/components/CTA';
import Guarantee from '@/assets/components/Guarantee';
import Footer from '@/assets/components/Footer';
import Loading from '@/assets/components/Loading';



const Bonus = dynamic(() => import("@/assets/components/Bonus"), { ssr: false, loading: () => <Loading/> });


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
