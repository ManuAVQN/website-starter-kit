export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-6">
      <div className="text-center">
        <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
          Live preview ✦ Cloudflare Pages
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white to-indigo-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Salut Manu 👋
        </h1>
        <p className="mt-4 text-slate-400">
          Modification poussée depuis Claude Code on the web.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-green-500 px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400">
            Commencer
          </button>
          <button className="rounded-full bg-yellow-400 px-10 py-5 text-lg font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300">
            En savoir plus
          </button>
        </div>
      </div>
    </main>
  );
}
