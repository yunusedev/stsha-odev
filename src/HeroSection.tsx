import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bluredImage = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const newTitleOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const blurStyle = useMotionTemplate`blur(${bluredImage}px)`;
  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full flex flex-col items-center"
    >
      <motion.div className="top-0 sticky h-screen w-full flex items-center flex-col justify-center">
        <motion.img
          style={{
            filter: blurStyle,
            opacity: 0.8
          }}
          className="h-full w-full object-cover absolute"
          src="/arkaplan.png"
          alt="Aile"
        />
        <motion.div
          className="absolute top-0 left-0 h-screen w-full flex justify-center flex-col bg-background"
          style={{ opacity: overlayOpacity }}
        />
        <motion.h1
          className="relative p-2 mx-2 lg:bg-foreground-300/30 lg:border lg:border-border/10 lg:rounded-md lg:backdrop-blur-md text-7xl font-semibold lg:text-white px-4 text-center"
          style={{
            opacity: titleOpacity,
          }}
        >
          Türk atasözleri, alta kaydır
        </motion.h1>
        <motion.div
        className="absolute flex flex-col items-center gap-4 px-4 py-0"
          style={{ opacity: newTitleOpacity }}
        >
          <h1 className="text-6xl max-w-2xl text-center bg-gradient-to-r from-red-500 via-pink-400 to-blue-500 bg-clip-text text-transparent font-bold leading-[55px]">
            Türk atasözlerinde değerler eğitimi açısından aile kurumunun işlevi
          </h1>
          <p className="text-muted text-lg text-center">Bu sayfada, türk atasözlerinde değerler eğitimi açısından aile kurumunun işlevi hakkında bilgi alacaksınız.</p>
          <p className="font-semibold text-blue-400 text-center">Aşağı inin</p>
        </motion.div>
      </motion.div>
      
    </section>
  );
}
