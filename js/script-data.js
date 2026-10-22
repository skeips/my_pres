/* Single source of truth for the spoken script. Each line keeps its Japanese (jp)
   and romaji (ro) together so they cannot drift apart.
   `deck` lists the slides of index.html (1-based) that each section is spoken over. */
window.PRESENTATION_SCRIPT = {
  title: { jp: 'ネパールの地形（ちけい）、自然災害（しぜんさいがい）、旅行（りょこう）', ro: 'Nepāru no chikei, shizen saigai, ryokō' },
  sections: [
    {
      id: 'opening', heading: 'Opening remarks', sub: 'Before Slide 1', deck: [1],
      lines: [
        { jp: '最近、ネパールで洪水（こうずい）や土砂崩れ（どしゃくずれ）のニュースをよく聞きます。', ro: 'Saikin, Nepāru de kōzui ya doshakuzure no nyūsu o yoku kikimasu.' },
        { jp: 'その理由（りゆう）の一つは、ネパールの地形です。', ro: 'Sono riyū no hitotsu wa, Nepāru no chikei desu.' }
      ]
    },
    {
      id: 'slide-1', heading: 'Slide 1 — Nepal’s Geography', deck: [2, 3],
      lines: [
        { lead: true, jp: 'まず、ネパールの地形について話します。（スライド1）', ro: 'Mazu, Nepāru no chikei ni tsuite hanashimasu.' },
        { jp: 'ネパールには、大きく分けて、三つの地域（ちいき）があります。', ro: 'Nepāru ni wa, ōkiku wakete, mittsu no chiiki ga arimasu.' },
        { jp: '平野（へいや）、丘（おか）、そしてヒマラヤの山々です。', ro: 'Heiya, oka, soshite Himaraya no yamayama desu.' },
        { jp: 'ネパールの国土（こくど）の約83パーセントは、丘や山です。', ro: 'Nepāru no kokudo no yaku hachijūsan pāsento wa, oka ya yama desu.' },
        { jp: 'また、ネパールには約6,000の川があります。多くの川は、山から平野へ流れています。', ro: 'Mata, Nepāru ni wa yaku roku-sen no kawa ga arimasu. Ōku no kawa wa, yama kara heiya e nagarete imasu.' }
      ]
    },
    {
      id: 'slide-2', heading: 'Slide 2 — Natural Disasters', deck: [4],
      lines: [
        { lead: true, jp: '次に、この地形は自然災害とどのように関係しているのでしょうか。（スライド2）', ro: 'Tsugi ni, kono chikei wa shizen saigai to dono yō ni kankei shite iru no deshō ka.' },
        { jp: '雨季（うき）には、ネパールでたくさんの雨が降ります。', ro: 'Uki ni wa, Nepāru de takusan no ame ga furimasu.' },
        { jp: '雨がたくさん降ると、川の水があふれて、洪水が起こります。', ro: 'Ame ga takusan furu to, kawa no mizu ga afurete, kōzui ga okorimasu.' },
        { jp: 'また、山の土が雨でゆるくなり、土砂崩れが起こることもあります。', ro: 'Mata, yama no tsuchi ga ame de yuruku nari, doshakuzure ga okoru koto mo arimasu.' },
        { jp: 'このような災害で、家や道路がこわれることがあります。人々の生活にも大きな影響（えいきょう）があります。', ro: 'Kono yō na saigai de, ie ya dōro ga kowareru koto ga arimasu. Hitobito no seikatsu ni mo ōkina eikyō ga arimasu.' }
      ]
    },
    {
      id: 'slide-3', heading: 'Slide 3 — Travel and Transportation', deck: [5, 6],
      lines: [
        { lead: true, jp: '最後に、ネパールの地形は旅行にどのような影響がありますか。（スライド3）', ro: 'Saigo ni, Nepāru no chikei wa ryokō ni dono yō na eikyō ga arimasu ka.' },
        { jp: 'ネパールは、山や川、谷（たに）がある、とても美しい国です。', ro: 'Nepāru wa, yama ya kawa, tani ga aru, totemo utsukushii kuni desu.' },
        { jp: 'しかし、ある場所から別の場所へ行くのに、長い時間がかかることがあります。', ro: 'Shikashi, aru basho kara betsu no basho e iku noni, nagai jikan ga kakaru koto ga arimasu.' },
        { jp: '山や丘が多いので、道路はまっすぐ作れません。山のまわりを通る道路が多いです。', ro: 'Yama ya oka ga ōi node, dōro wa massugu tsukuremasen. Yama no mawari o tōru dōro ga ōi desu.' },
        { jp: 'また、ネパールには、山を通る道路のトンネルがまだあまり多くありません。', ro: 'Mata, Nepāru ni wa, yama o tōru dōro no tonneru ga mada amari ōku arimasen.' },
        { jp: 'しかし、2026年7月に、ナグドゥンガ・トンネルが完成しました。日本もこの工事を支援しました。', ro: 'Shikashi, ni-sen ni-jū-roku nen shichi-gatsu ni, Nagudunga tonneru ga kansei shimashita. Nihon mo kono kōji o shien shimashita.' },
        { jp: 'このようなトンネルができると、移動（いどう）がもっと便利になります。', ro: 'Kono yō na tonneru ga dekiru to, idō ga motto benri ni narimasu.' },
        { jp: '雨季には、土砂崩れで道路が通れなくなり、旅行に長い時間がかかることもあります。', ro: 'Uki ni wa, doshakuzure de dōro ga tōrenaku nari, ryokō ni nagai jikan ga kakaru koto mo arimasu.' }
      ]
    },
    {
      id: 'closing', heading: 'Conclusion', sub: 'After Slide 3', deck: [7],
      lines: [
        { lead: true, jp: 'まとめ', ro: 'Matome' },
        { jp: 'ネパールの地形は、美しい景色を作っています。', ro: 'Nepāru no chikei wa, utsukushii keshiki o tsukutte imasu.' },
        { jp: 'しかし、洪水や土砂崩れ、そして旅行にも影響があります。', ro: 'Shikashi, kōzui ya doshakuzure, soshite ryokō ni mo eikyō ga arimasu.' },
        { jp: 'ネパールの地形を知ることは、ネパールをもっとよく理解するために大切です。', ro: 'Nepāru no chikei o shiru koto wa, Nepāru o motto yoku rikai suru tame ni taisetsu desu.' },
        { jp: 'ありがとうございました。', ro: 'Arigatō gozaimashita.' }
      ]
    }
  ]
};
