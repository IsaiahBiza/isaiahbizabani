export default function VideoHero() {
  return (
    <section className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold text-center">Welcome to Isaiah Bizabani’s World of Innovation</h1>
        <p className="text-white text-xl mt-4 text-center">Where Generative AI meets Ubuntu Philosophy.</p>
      </div>
    </section>
  );
}
