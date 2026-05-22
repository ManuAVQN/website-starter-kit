export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <section className="grid min-h-screen place-items-center px-6">
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
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-3">
        <article id="bloc-1" className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/20 text-2xl">✨</div>
          <h2 className="text-xl font-semibold text-white">Idée</h2>
          <p className="mt-2 text-slate-400">
            Décris ce que tu veux, en parlant simplement.
          </p>
        </article>

        <article id="bloc-2" className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-pink-500/20 text-2xl">👀</div>
          <h2 className="text-xl font-semibold text-white">Aperçu</h2>
          <p className="mt-2 text-slate-400">
            Je te montre des images,<br />
            tu valides ou tu corriges.
          </p>
        </article>

        <article id="bloc-3" className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/20 text-2xl">🚀</div>
          <h2 className="text-xl font-semibold text-white">Publication</h2>
          <p className="mt-2 text-slate-400">
            Quand tu es content, ton site est en ligne en quelques secondes.
          </p>
        </article>
      </section>

      <section id="usages" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-semibold text-white sm:text-4xl">
          Pour quoi faire ?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article id="usage-1" className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-sky-500/20 text-2xl">🏠</div>
            <div>
              <h3 className="text-lg font-semibold text-white">Site vitrine</h3>
              <p className="mt-1 text-sm text-slate-400">
                Présenter ton activité, tes services, tes contacts.
              </p>
            </div>
          </article>

          <article id="usage-2" className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-fuchsia-500/20 text-2xl">📣</div>
            <div>
              <h3 className="text-lg font-semibold text-white">Page de promo</h3>
              <p className="mt-1 text-sm text-slate-400">
                Lancer un produit, une offre, un événement.
              </p>
            </div>
          </article>

          <article id="usage-3" className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-amber-500/20 text-2xl">🖼️</div>
            <div>
              <h3 className="text-lg font-semibold text-white">Portfolio</h3>
              <p className="mt-1 text-sm text-slate-400">
                Montrer tes projets, ton travail, tes réalisations.
              </p>
            </div>
          </article>

          <article id="usage-4" className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-rose-500/20 text-2xl">✍️</div>
            <div>
              <h3 className="text-lg font-semibold text-white">Blog</h3>
              <p className="mt-1 text-sm text-slate-400">
                Écrire et partager des articles régulièrement.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
