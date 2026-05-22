"use client";

import { useState } from "react";

export function InfoModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id="open-info-modal"
        onClick={() => setOpen(true)}
        className="rounded-full bg-yellow-400 px-10 py-5 text-lg font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300"
      >
        En savoir plus
      </button>

      {open && (
        <div
          id="info-modal-backdrop"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 backdrop-blur-sm px-4"
        >
          <div
            id="info-modal"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/95 p-8 text-left shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              ✕
            </button>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/20 text-2xl">
              ℹ️
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Comment ça marche ?
            </h2>
            <p className="mt-3 text-slate-400">
              Tu dictes ce que tu veux, je te montre des aperçus, et quand
              tu valides, ton site est en ligne en quelques secondes.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              D'accord, on essaye !
            </button>
          </div>
        </div>
      )}
    </>
  );
}
