function NewsLetter() {
  return (
    <section className="news-letter-bg h-[420px] flex items-center text-white relative px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-4xl flex flex-col items-start gap-6 z-10">
        <div>
          <h2 className="text-sm tracking-widest uppercase">Newsletter</h2>
          <div className="bg-[#d48f1e] h-0.5 w-14 mx-auto"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Subscribe Our Newsletter
        </h1>
        <p className="mb-6 text-white/70">
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec
          ut. Sagittis vestibulum at quis non massa netus.
        </p>
        <div className="flex gap-4 ">
            <input
                type="email"
                placeholder="Enter your email address"
                className="input input-md input-bordered w-full max-w-2xl bg-base-100 text-white placeholder:text-white/70"
            />
            <button className="btn btn-md bg-[var(--color-primary)] border-0">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
