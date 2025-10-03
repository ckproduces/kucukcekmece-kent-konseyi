import { slugify } from "@/utils/slugify";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

const colors = {
  0: "bg-primary",
  1: "bg-secondary",
  2: "bg-danger",
};

export const groups = [
  {
    title: "Gençlik Meclisi",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Engelliler Meclisi",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Gençlik ve Spor Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Halkla İlişkiler Tanıtım ve İletişim",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Afet Farkındalık ve Kentsel Dönüşüm",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Kadın Meclisi",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Çocuk Meclisi",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Ekonomi Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Eğitim Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
  {
    title: "Çevre ve Sağlık Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "123",
    icon: TbWorld,
  },
];

export default function Page() {
  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">Meclisler</h1>

        <div className="mt-6 grid grid-cols-4 gap-6">
          {groups.map((group, i) => (
            <Link
              key={i}
              href={`/meclisler/${slugify(group.title)}`}
              className="relative group bg-gray-100/50 rounded-[2rem] overflow-hidden"
            >
              <div className="m-6 z-30 relative">
                {<group.icon className="size-12 mb-3 group-hover:text-white" />}
                <h1 className="text-2xl font-semibold group-hover:text-white">
                  {group.title}
                </h1>
                <p className="mt-2 group-hover:text-gray-200">
                  {group.description}
                </p>
              </div>
              <div
                className={`bottom-0 absolute z-20 transition-all group-hover:h-full w-full ${
                  colors[i % 3]
                } mt-2 h-2`}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
