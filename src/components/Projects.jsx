import { Code2, Globe, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful 3D landing page powered by Spline and React.',
    tech: ['React', 'Spline', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat',
    description: 'Socket-powered chat app with typing indicators and group rooms.',
    tech: ['React', 'FastAPI', 'Socket.io'],
    link: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Starter',
    description: 'Headless UI storefront with cart, checkout and admin dashboard.',
    tech: ['React', 'Stripe', 'MongoDB'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Selected Projects</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">A few things I’ve been building lately.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <Code2 size={18} className="text-neutral-500" />
                </div>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-white hover:underline">
                    <Globe size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-white hover:underline">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
