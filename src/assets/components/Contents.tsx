import { Swiper, SwiperSlide } from 'swiper/react'
import { content } from "../../json/db.json"
import styles from "../styles/content.module.css"
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import keyImage from "../img/key-img.png"


export default function Contents(){
    return (
        <section className={styles.container}>
            <h1 className={styles.containerTitle}>Uma Jornada Estruturada no Universo do Marketing Digital</h1>
                <Swiper
                    
                    slidesPerView={3}
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}     
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}     
                    pagination={{clickable: true}}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    breakpoints={{
                        375: {slidesPerView: 1},
                        475: {slidesPerView: 1},
                        640: {slidesPerView: 2},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                        1280: {slidesPerView: 4},
                        1536: {slidesPerView: 4},
                    }}
                    className={styles.swiper}

                    >   
                    {content.map((module) => (
                        <SwiperSlide key={module.id} className={styles.swiperSlide}>
                            <div className={styles.inner}>
                                <Image src={keyImage} width={100} height={100} alt='Imagem de Chave de Ouro'/>
                                <h2 className={styles.slideTitle}>{module.title}</h2>
                                <p className={styles.slideDescription}>{module.description}</p>
                            </div>
                        </SwiperSlide>
                            
                        )
                    )}
                </Swiper>

        </section>
    )
}