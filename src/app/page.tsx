import Main from '@/assets/components/Main'
import styles from './page.module.css'
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';



export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
    </main>
  )
}
