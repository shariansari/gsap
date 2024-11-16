import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DoCard from './components/DoCard';

function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".headeranimate", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 0.2,
    }).from(".bannerainamte", {
      x: 500,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    const section2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 80%",
      },
    });
    section2Timeline.from(".section2", {
        y: 500,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
      section2Timeline.from(".arrow", {
        y: -100,
        opacity: 0,
        duration: 1,
      }); 
      section2Timeline.from(".wedo", {
        scale:0,
        opacity: 0,
        duration: 1,
      });
      section2Timeline.from(".docard", {
        y: 200,
        opacity: 0,
        duration: 1,
      });
  });
  return (
    <div>
      <div
        style={{ backgroundImage: 'url(https://assets.nicepagecdn.com/d2cc3eaa/1966444/images/6654e6-min.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }} >
        <header className="rounded-full shadow border " style={{ position: 'fixed', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '95vw', backdropFilter: 'blur(10px)' }} >
          <div className="grid grid-cols-2 items-center p-1">
            <div className="px-8">
              <div style={{ fontFamily: 'cursive' }} className='text-white text-2xl font-medium  shariq'>Mohd Shariq Ansari</div>
            </div>
            <div className="flex justify-end items-center">
              <div className="mr-20 text-white headeranimate">Home</div>
              <div className="mr-20 text-white headeranimate">About</div>
              <div className="mr-20 text-white headeranimate">Services</div>
              <div className="px-8 py-3 rounded-full text-white headeranimate" style={{ background: '#70a2e1' }} >
                Apply now
              </div>
            </div>
          </div>
        </header>
        <section className='px-32 pt-48 text-white w-[58%]'>
          <div className='text-7xl font-extrabold bannerainamte'> We Innovate,</div>
          <div className='text-7xl mt-4 font-extrabold bannerainamte'> We Execute,</div>
          <div className='text-xl mt-3 bannerainamte'> We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization.</div>
          <div className='mt-10'>
            <button className='bannerainamte border-2 px-12 text-base font-bold py-4 rounded-full hover:bg-white hover:text-black'>LEARN MORE</button>
          </div>
        </section>
      </div>
      <section style={{ background: '#e5e5e5' }} className='page2'>
        <div className='py-20 flex items-center justify-between gap-10 px-20'>
          <div className='section2'>
            <div className='text-center font-bold text-base'>SERVICES</div>
            <div className='text-center mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </div>
          </div>
          <div className='section2'>
            <div className='text-center mt-4 font-bold text-base'>INDUSTRY EXPERTISE</div>
            <div className='text-center mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </div>
          </div>
          <div className='section2'>
            <div className='text-center mt-4 font-bold text-base'>OMNI-CHANNEL</div>
            <div className='text-center mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </div>
          </div>
          <div className='section2'>
            <div className='text-center mt-4 font-bold text-base'>MEET WITH US</div>
            <div className='text-center mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#e5e5e5' }}>
        <div className='py-20'>
          <div className='flex items-center justify-center flex-col'>
            <img src='https://assets.nicepagecdn.com/d2cc3eaa/1966444/images/545678.png' className='h-16 arrow' />
            <div className='text-6xl font-bold mt-4 wedo'>How We Do it?</div>
          </div>
          <div className='px-32 mt-10'>
            <div className='grid grid-cols-4 gap-6 items-center'>
              <DoCard text={"diagnostic programs"} />
              <DoCard text={'Sharp Analysis'} />
              <DoCard text={'Custom Dashboards'} />
              <DoCard text={'bridging the data gaps'} />
              <DoCard text={'smart and deep reports'} />
              <DoCard text={'database validation'} />
              <DoCard text={'sample headline'} />
              <DoCard text={'customer intelligence'} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
