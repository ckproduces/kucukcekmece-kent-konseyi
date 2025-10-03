import { slugify } from "@/utils/slugify";
import Link from "next/link";
import {
  TbAbacus,
  TbAirBalloon,
  TbBuilding,
  TbRosetteDiscountCheck,
  TbWoman,
  TbWorld,
} from "react-icons/tb";

export const groups = [
  {
    title: "Bağımlılıkla Mücadele Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbWorld,
  },
  {
    title: "Araştırma ve Veri Değerlendirme Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbWoman,
  },
  {
    title: "Spor Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbBuilding,
  },
  {
    title: "Akademi Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbAirBalloon,
  },
  {
    title: "Görsel İletişim Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbAbacus,
  },
  {
    title: "Organizasyon Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbRosetteDiscountCheck,
  },
  {
    title: "Çevre ve Hayvan Hakları Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbRosetteDiscountCheck,
  },
  {
    title: "Kültür ve Sanat Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbRosetteDiscountCheck,
  },
  {
    title: "Sağlıklı Yaşam Komisyonu",
    description: "Burası açıklama kısmı burada açıklanır",
    id: "grup",
    icon: TbRosetteDiscountCheck,
  },
];

export default function Page() {
  const colors = ["bg-primary", "bg-secondary", "bg-danger"];

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">Komisyonlar</h1>

        <div className="mt-6 grid grid-cols-4 gap-6">
          {groups.map((group, i) => (
            <Link
              key={i}
              href={`/komisyonlar/${slugify(group.title)}`}
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
