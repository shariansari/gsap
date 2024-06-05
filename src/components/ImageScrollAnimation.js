// src/components/ImageScrollAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

const ImageScrollAnimation = ({ image1, image2, image3, iamge4, imgae5, image6 }) => {
    const canvasRef = useRef(null);
    const image1Ref = useRef(new Image());
    const image2Ref = useRef(new Image());

    useGSAP(() => {
        gsap.to("#box", {
            scrollTrigger: {
                trigger: "#box",
                scroller: "body",
                scrub: 1,
                pin: true,
                markers: true,
            }
        })
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        image1Ref.current.src = image1;
        image2Ref.current.src = image2;
        image2Ref.current.src = image3;
        image2Ref.current.src = iamge4;
        image2Ref.current.src = imgae5;
        image2Ref.current.src = image6;


        const drawImage = (progress) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1 - progress;
            ctx.drawImage(image1Ref.current, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = progress;
            ctx.drawImage(image2Ref.current, 0, 0, canvas.width, canvas.height);
        };

        const onScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollPosition / maxScroll, 1);
            drawImage(scrollProgress);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [image1, image2, image3, iamge4, imgae5, image6]);

    return <div id='box'>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>;
};

export default ImageScrollAnimation;
