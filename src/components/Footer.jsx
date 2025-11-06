import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Let’s build something great</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Open to collaborations, freelance work, and new opportunities.</p>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">
              <Mail size={16} /> Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white px-4 py-2 text-sm font-medium border border-black/5 dark:border-white/10 hover:bg-white/90 dark:hover:bg-neutral-800">
              <Github size={16} /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white px-4 py-2 text-sm font-medium border border-black/5 dark:border-white/10 hover:bg-white/90 dark:hover:bg-neutral-800">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </div>
    </footer>
  );
}
