import Image from "next/image";
import Link from "next/link";
import {
  TbAbacus,
  TbAirBalloon,
  TbBuilding,
  TbRosetteDiscountCheck,
  TbWoman,
  TbWorld,
} from "react-icons/tb";

export default function Page() {
  const groups = [
    {
      title: "Hakkımızda",
      id: "hakkimizda",
      icon: TbWorld,
      image:
        "https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg",
    },
    {
      title: "Onur Kurulu",
      id: "onur-kurulu",
      icon: TbWorld,
      image:
        "https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg",
    },
    {
      title: "Küçükçekmece Kent Konseyi Tüzüğü",
      id: "onur-kurulu",
      icon: TbWorld,
      image:
        "https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg",
    },
    {
      title: "KVKK",
      id: "onur-kurulu",
      icon: TbWorld,
      image:
        "https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg",
    },
  ];

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">Kurullar</h1>

        <div className="mt-6 grid grid-cols-1 gap-6">
          {groups.map((group, i) => (
            <Link
              key={i}
              href={`/kurullar/${group.id}`}
              className="relative group bg-gray-100/50 rounded-[2rem] flex items-center overflow-hidden h-min aspect-12/3"
            >
              <Image
                alt=""
                src={group.image}
                width={1920}
                height={1080}
                className="absolute w-full h-full z-0 object-cover"
              />
              <div className="flex items-center gap-3 relative z-50 ml-20 text-6xl">
                {<group.icon className="text-white" />}
                <h1 className="font-semibold text-white">{group.title}</h1>
              </div>
              <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute z-20 bottom-0 left-0"></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
