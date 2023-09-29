'use client'
import styles from './page.module.css'
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

import Hero from '@/assets/components/Hero';
import BenefitsSection from '@/assets/components/BenefitsSection';
import Contents from '@/assets/components/Contents';
import Testimonials from '@/assets/components/Testimonials';
import Bonus from '@/assets/components/Bonus';
import Info from '@/assets/components/Info';
import CTA from '@/assets/components/CTA';
import Guarantee from '@/assets/components/Guarantee';
import Footer from '@/assets/components/Footer';



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
