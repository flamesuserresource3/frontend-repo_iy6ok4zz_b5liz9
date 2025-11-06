import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 rounded-2xl p-6 md:p-8 border border-black/5 dark:border-white/10 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-neutral-600 dark:text-neutral-300">Hello, I’m</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
            Your Name
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-prose">
            I build modern web experiences with a focus on performance, accessibility, and delightful interactions.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white px-5 py-3 text-sm font-medium border border-black/5 dark:border-white/10 hover:bg-white/90 dark:hover:bg-neutral-800">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
