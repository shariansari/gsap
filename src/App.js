import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DoCard from './components/DoCard';

function App() {
  const wordsRef = useRef(null);
  const words = document.querySelectorAll('.animate-word span');
  const circleRef = useRef(null);
  const textRef = useRef(null);


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
        scrub: true,
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
      scale: 0,
      opacity: 0,
      duration: 1,
    });
    section2Timeline.from(".docard", {
      y: 200,
      opacity: 0,
      duration: 1,
    });
   
      const words = wordsRef.current.querySelectorAll('span');
      gsap.fromTo(
        words,
        { color: '#333333' },
        {
          color: "white",
          stagger: 0.1,
          scrollTrigger: {
            trigger: wordsRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
 

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
      <section className='bg-black py-20 pl-60' >
        <div className='w-[65%]' ref={wordsRef}>
          <div className='text-white font-bold text-3xl'>
            NOT EVERYONE MAKES IT IN.
          </div>
          <div
            className="text-white mt-10 text-6xl leading-relaxed lowercase animate-word"
          >
            <span>A</span> <span>sentence</span> <span>group</span> <span>of</span>
            <span>words</span> <span>and</span> <span>a</span> <span>verb</span><span>,</span>
            <span>that</span> <span>expresses</span> <span>a</span>
            <span>statement</span><span>,</span> <span>a</span> <span>question</span>
            <span>A</span> <span>sentence</span> <span>group</span> <span>of</span>
            <span>words</span> <span>and</span> <span>a</span> <span>verb</span><span>,</span>
            <span>that</span> <span>expresses</span> <span>a</span>
            <span>statement</span><span>,</span><span>a</span> <span>question</span>
            <span>A</span> <span>sentence</span> <span>group</span> <span>of</span>
            <span>words</span> <span>and</span> <span>a</span> <span>verb</span><span>,</span>
            <span>that</span> <span>expresses</span> <span>a</span>
            <span>statement</span><span>,</span> <span>a</span> <span>question</span>
            <span>etc</span><span>.</span>
          </div>
        </div>
      </section>
      <div className='h-[1px] bg-white w-full'></div>
      <section className='bg-black py-40 px-32'>
        <div className='flex flex-col items-center justify-center'>
          <img src='https://web-images.credcdn.in/v2/_next/assets/images/landing/datasafe.png' className='h-20' />
          <div className='text-white mt-5 text-4xl uppercase'>In linguistics and grammar, a sentence is.</div>
          {/* <div className='text-white mt-10 text-center text-5xl leading-relaxed lowercase '>
            A sentence group of words  and a verb, that expresses a statement, a question, etc. When a sentence is written it begins with a big (capital) letter and ends with a full stop.
          </div> */}
           <div className="text-white mt-10 text-center text-5xl leading-relaxed lowercase" ref={textRef}>
          {Array.from("A sentence group of words and a verb, that expresses a statement, a question, etc.").map(
            (char, index) => (
              <span key={index} style={{ display: "inline-block" }}>
                {char === " " ? "\u00A0" : char}
              </span>
            )
          )}
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
