const skills = [
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"UI/UX Design",
	"Responsive Design",
];

const projects = [
	{
		title: "Product Dashboard",
		description: "A clean analytics dashboard designed for fast, informed decisions.",
		tags: ["Next.js", "TypeScript"],
	},
	{
		title: "Creative Studio",
		description: "A bold, responsive website for a modern creative agency.",
		tags: ["React", "CSS"],
	},
	{
		title: "Task Manager",
		description: "A focused productivity tool that keeps projects moving forward.",
		tags: ["Node.js", "UI/UX"],
	},
];

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-slate-950 text-slate-100">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
				<a href="#top" className="text-xl font-bold tracking-tight">
					R<span className="text-cyan-400">.</span>
				</a>
				<div className="flex gap-6 text-sm text-slate-300">
					<a href="#about" className="hover:text-cyan-400">About</a>
					<a href="#work" className="hover:text-cyan-400">Work</a>
					<a href="#contact" className="hover:text-cyan-400">Contact</a>
				</div>
			</nav>

			<section id="top" className="mx-auto max-w-6xl px-6 pb-28 pt-20">
				<p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
					Frontend developer & designer
				</p>
				<h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">
					I build digital experiences that feel simple and meaningful.
				</h1>
				<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
					I&apos;m a developer focused on creating thoughtful interfaces, accessible products,
					and reliable web experiences for people and brands.
				</p>
				<div className="mt-10 flex flex-wrap gap-4">
					<a href="#work" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
						View my work
					</a>
					<a href="#contact" className="rounded-full border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400">
						Get in touch
					</a>
				</div>
			</section>

			<section id="about" className="border-y border-slate-800 bg-slate-900/60">
				<div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">About me</p>
						<h2 className="text-3xl font-bold">Curious by nature. Intentional by craft.</h2>
					</div>
					<div className="space-y-5 leading-8 text-slate-400">
						<p>I enjoy turning complex problems into clear, useful, and beautiful interfaces.</p>
						<p>When I&apos;m not coding, you&apos;ll find me learning something new, sketching ideas, or exploring a good coffee shop.</p>
					</div>
				</div>
			</section>

			<section id="work" className="mx-auto max-w-6xl px-6 py-24">
				<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Selected work</p>
				<h2 className="mb-12 text-3xl font-bold">A few things I&apos;ve built.</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{projects.map((project) => (
						<article key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400">
							<div className="mb-16 h-2 w-12 rounded-full bg-cyan-400" />
							<h3 className="text-xl font-bold">{project.title}</h3>
							<p className="mt-3 min-h-20 leading-7 text-slate-400">{project.description}</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{project.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 pb-24">
				<h2 className="mb-6 text-2xl font-bold">Skills & tools</h2>
				<div className="flex flex-wrap gap-3">
					{skills.map((skill) => <span key={skill} className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300">{skill}</span>)}
				</div>
			</section>

			<footer id="contact" className="border-t border-slate-800 bg-slate-900/60">
				<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-sm uppercase tracking-widest text-cyan-400">Have a project in mind?</p>
						<h2 className="mt-2 text-3xl font-bold">Let&apos;s make it happen.</h2>
					</div>
					<a href="mailto:hello@example.com" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">hello@example.com</a>
				</div>
			</footer>
		</main>
	);
}
