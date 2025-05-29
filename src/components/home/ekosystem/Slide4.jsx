export default function Slide4() {
  return (
    <article className="w-[70%] mx-5 min-h-[70vh] rounded-lg sticky flex items-center justify-center bg-blue-400 top-[190px] -mt-24">
      <div className="w-1/2">
        <img src="https://source.unsplash.com/random/800x600?sig=1" alt="Slide 1" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 p-10 text-gray-900">
        <h2 className="text-3xl font-bold mb-4">Slide 1</h2>
        <p>Bu birinci kartın içeriği.</p>
      </div>
    </article>
  );
}
