const PHOTOS = [
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=75",
    caption: "The stall at golden hour",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=75",
    caption: "Fresh off the grill",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=75",
    caption: "Loaded and ready",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=900&q=75",
    caption: "Golden and crisp",
    span: "md:row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=75",
    caption: "Something cold on the side",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=75",
    caption: "Wrapped street-style",
    span: "md:col-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=75",
    caption: "The Smoke Stack, up close",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1200&q=75",
    caption: "Charcoal and smoke",
    span: "md:col-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=75",
    caption: "Sides, stacked",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=900&q=75",
    caption: "Cold ones, lined up",
    span: "md:row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=75",
    caption: "Rolled to order",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=75",
    caption: "Sweet finish",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=75",
    caption: "The full spread",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=75",
    caption: "Hot and messy",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1554679665-f5537f187268?auto=format&fit=crop&w=900&q=75",
    caption: "Fresh off the flame",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=900&q=75",
    caption: "Late-night regulars",
    span: "md:col-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1550367363-ea12860cc124?auto=format&fit=crop&w=900&q=75",
    caption: "Char marks that matter",
    span: "",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=75",
  //   caption: "Poured fresh",
  //   span: "",
  // },
];

export default function Gallery() {
  return (
    <section className="relative bg-offwhite  py-3 px-2 sm:px-3">

      <div className="reveal-group grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[30vh] md:auto-rows-[34vh] gap-2 sm:gap-3">
        {PHOTOS.map((p) => (
          <div
            key={p.caption}
            className={`reveal-item group relative overflow-hidden rounded-2xl ${p.span}`}
          >
            <img
              src={p.img}
              alt={p.caption}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/75 via-pine-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-5 left-5 text-cream font-display font-semibold text-base sm:text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              {p.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
