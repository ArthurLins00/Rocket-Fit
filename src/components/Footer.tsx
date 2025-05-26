import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-teal-900 text-amber-400 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Rocket Fit</h2>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()} Rocket Fit. Todos os direitos reservados a Arthur Borba Lins.
          </p>
        </div>

        <div className="flex gap-6 text-amber-400">
          <a
            href="https://www.linkedin.com/in/arthur-lins-1695b222b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/ArthurLins00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="mailto:arthurborbalins@gmail.com"
            className="hover:text-amber-300 transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}