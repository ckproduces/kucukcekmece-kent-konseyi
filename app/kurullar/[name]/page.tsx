import Image from "next/image";

export default function Page() {
  const members = [
    {
      name: "Murat Karayalçın",
      job: "ABC Holding Başkanı",
      image:
        "https://ankarakentkonseyi.org.tr/wp-content/uploads/2024/08/MURAT-KARAYALCIN.jpg",
    },
    {
      name: "Murat Karayalçın",
      job: "ABC Holding Başkanı",
      image:
        "https://ankarakentkonseyi.org.tr/wp-content/uploads/2024/08/MURAT-KARAYALCIN.jpg",
    },
  ];

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">Onur Kurulu</h1>
        <p className="mt-3 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum
          maxime ipsam obcaecati. Minima quisquam a de  serunt magnam! Velit fuga
          maxime vel amet voluptatem accusantium maiores exercitationem culpa
          harum aliquid!
        </p>

        <div className="mt-6 grid grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-6 overflow-hidden rounded-2xl"
            >
              <Image
                alt=""
                src={member.image}
                width={1920}
                height={1080}
                className="w-full aspect-3/4 object-cover"
              />
              <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute bottom-0 z-30" />
              <div className="absolute bottom-6 inset-x-0 flex flex-col items-center z-50 text-white">
                <h1 className="text-2xl font-semibold">{member.name}</h1>
                <p className="text-sm mt-2">{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
