import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DoCard from './components/DoCard';

function App() {
  const wordsRef = useRef();
  const textRef = useRef();
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  const windowWidth = window.innerWidth;

  


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

    section2Timeline.to(".exp", {
      transform :'translateX(-150%)',
      scrollTrigger :{
        trigger :'.expsec',
        scroller :'body',
        start :'top 0%',
        end :'top -180%',
        scrub:2,
        pin:true,
      }
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
      )
  });
  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    const boundingRect = svgRef.current.getBoundingClientRect();
    const relativeY = clientY - boundingRect.top;

    const newPath = `M 10 100 Q ${windowWidth/2} ${relativeY} ${windowWidth} 100`;

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: `M 10 100 Q ${windowWidth/2} 100 ${windowWidth} 100` },
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  
  return (
    <div>
      <div
        style={{ backgroundImage: 'url(https://assets.nicepagecdn.com/d2cc3eaa/1966444/images/6654e6-min.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }} >
        <header className="rounded-full shadow border " style={{ position: 'fixed', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '95vw', backdropFilter: 'blur(10px)' }}>
          <div className='flex items-center justify-between p-1'>
            <div className='px-8'>
            <div style={{ fontFamily: 'cursive' }} className='text-white text-2xl font-medium ' >Mohd Shariq Ansari</div>
            </div>
            <div className='flex items-center gap-10'>
            <div className="text-white headeranimate">Home</div>
            <div className="text-white headeranimate">About</div>
            <div className="text-white headeranimate">Services</div>
            <div className="px-8 py-3 rounded-full text-white headeranimate border hover:bg-white hover:text-black"  >
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
      <div className='bg-black'  onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
      }}
    >
      <svg ref={svgRef} width="100vw" height="400">
        <path
          ref={pathRef}
          d={`M 10 100 Q 250 100 ${windowWidth} 100`}
          stroke="white"
          fill="transparent"
           stroke-width="2"
        />
      </svg>
      </div>
      <div className='expsec bg-black'>
        <div className='exp text-white' style={{fontSize:'40vw'}}>EXPERIENCES</div>
      </div>
    </div>
  );
}

export default App;
