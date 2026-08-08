import Reveal from './Reveal';

const tiles = [
  {
    src: 'https://images.pexels.com/photos/6653222/pexels-photo-6653222.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'A leatherworker’s hands shaping leather with traditional crafting tools.',
    span: 'lg:col-span-2 lg:row-span-2',
    caption: 'The maker’s hand',
  },
  {
    src: 'https://images.pexels.com/photos/5963170/pexels-photo-5963170.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'An artisan stitching a leather piece by hand with needle and thread.',
    span: '',
    caption: 'Stitch by stitch',
  },
  {
    src: 'https://images.pexels.com/photos/4173289/pexels-photo-4173289.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'A master in an apron dyeing and polishing the edge of a leather piece by hand.',
    span: '',
    caption: 'Finishing the edge',
  },
  {
    src: 'https://images.pexels.com/photos/4452603/pexels-photo-4452603.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tools and materials laid out on a leather crafting workspace.',
    span: 'lg:col-span-2',
    caption: 'Tools of the trade',
  },
  {
    src: 'https://images.pexels.com/photos/13710034/pexels-photo-13710034.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'A detailed view of a finished leather horse saddle hung on a wall.',
    span: '',
    caption: 'The finished saddle',
  },
  {
    src: 'https://images.pexels.com/photos/12888017/pexels-photo-12888017.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Close-up of stylish brown leather cowboy boots worn indoors.',
    span: '',
    caption: 'The finished boot',
  },
];

export default function CraftsmanshipGallery() {
  return (
    <section className="relative bg-espresso-950 py-24 text-cream-50 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow !text-brass-300">The world behind the show</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Built by Hand. Made With Skill.
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-brass-400 to-transparent" />
          <p className="mt-5 text-cream-100/75 sm:text-lg">
            Every boot and saddle on the trade show floor starts here — with leather, tools,
            and the patient work of the maker. This is the craft the event was built around.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
          {tiles.map((t, i) => (
            <Reveal
              key={t.src}
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-2xl ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/75 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">
                  {t.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
