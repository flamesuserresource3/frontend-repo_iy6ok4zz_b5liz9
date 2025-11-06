import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
            <span>About Me</span>
            <Sparkles className="text-violet-500" />
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I’m a frontend-focused full‑stack engineer crafting intuitive products with a blend of design thinking and engineering rigor. I love building immersive interfaces, scalable systems, and tiny delightful moments that elevate everyday products.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {['React & TypeScript', 'FastAPI & Python', 'MongoDB', 'Three/Spline', 'Tailwind & Radix', 'Testing & CI/CD'].map((item) => (
              <li key={item} className="rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-4 py-3 text-neutral-800 dark:text-neutral-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 rounded-2xl blur opacity-30" />
          <div className="relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-6">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Outside of work, you’ll find me exploring generative art, tinkering with micro‑interactions, and sharing what I learn with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
