export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>

      <section id="features"> 
        <Features />
      </section>
      <section id="hero"> 
        <Hero />
      </section>
      <section id="zigzag">
        <Zigzag />
      </section>
      <section id="Testimonials"> 
        <Testimonials/>
      </section>
      <section id="Newsletter">
        <Newsletter />
      </section>
      <section id="features"> 
        <Features />
      </section>
    </>
  )
}
