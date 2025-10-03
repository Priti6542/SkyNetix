import { sectors } from './sectorsData';

const SectorsScroll = () => (
  <section className="py-12  mt-300px bg-gray-50 ">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-serif font-medium mb-2">
        Game-changing solutions
      </h2>
      <h3 className="text-3xl font-serif mb-8">
        tailored for every sector
      </h3>
      <div className="overflow-x-auto whitespace-nowrap flex gap-6 pb-4 scrollbar-thin">
        {sectors.map((sector, idx) => (
          <div
            key={sector.title}
            className="inline-block align-top bg-white rounded-xl shadow p-6 min-w-[320px] max-w-xs border border-gray-100"
          >
            <img src={sector.icon} alt="" className="h-14 w-14 mb-5" />
            <h4 className="text-2xl font-semibold mb-3">{sector.title}</h4>
            <ul className="mb-5 space-y-1">
              {sector.items.map((item, i) => (
                <li key={i} className="text-gray-600 text-base">{item}</li>
              ))}
            </ul>
            <img
              src={sector.image}
              alt=""
              className="rounded-lg w-full h-28 object-cover mt-3"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsScroll;
