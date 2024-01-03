import {
  r as l,
  w as r,
  h as c,
  i as p,
  j as d,
  b as u,
  o as h,
  k as _,
} from "./entry.89f71b2b.js";
function g(i, a) {
  const t = l({});
  return (
    r(() => {
      const s = p(i),
        { title: e, titleTemplate: o, ...n } = s;
      t.value = {
        title: e,
        titleTemplate: o,
        meta: d(n),
      };
    }),
    c(t, a)
  );
}
const m = "" + globalThis.__publicAssetsURL("pics/oshi.png");
const b = {
    class: "page-index",
  },
  f = _(
    '<div class="container"><div class="logo-wrapper"><img src="' +
      m +
      '" alt="oshi"></div><h1>Oshi</h1><h2>First ₿itcoin liquidity pool protocol</h2><div class="page-index__actions"><div><a href="https://unisat.io/market?tick=Oshi&amp;tab=1" target="_blank" class="button primary text-futurist large"><span>Buy Oshi</span></a></div><div><a href="https://theord.gitbook.io/brc-20-lpv1-proposal/" target="_blank" class="button outline text-futurist"><span>Doc</span></a><a href="/app" target="_blank" class="button outline text-futurist disabled"><span>App</span></a></div><div><a href="https://twitter.com/oshifinance" target="_blank" class="button outline small"><span>Twitter</span></a><a href="https://t.me/oshifi" target="_blank" class="button outline small"><span>Telegram</span></a><a href="https://discord.gg/Su8FRhw4gP" target="_blank" class="button outline small"><span>Discord</span></a></div></div></div>',
    1
  ),
  v = [f],
  x = {
    __name: "index",
    setup(i) {
      return (
        g({
          title: "First bitcoin liquidity pool protocol - Oshi Finance",
          ogTitle: "First bitcoin liquidity pool protocol - Oshi Finance",
          description: "DeFi and liquidity pool on bitcoin through Ordinals",
          ogDescription: "DeFi and liquidity pool on bitcoin through Ordinals",
          ogImage: "/pics/metaoshi.jpg",
          twitterCard: "summary_large_image",
        }),
        (a, t) => (h(), u("div", b, v))
      );
    },
  };
export { x as default };
