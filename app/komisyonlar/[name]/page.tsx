"use client";
import Image from "next/image";
import Link from "next/link";
import { groups } from "../page";
import { slugify } from "@/utils/slugify";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import trLocale from "@fullcalendar/core/locales/tr"; // Türkçe locale
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ name: string }>();
  const name = params.name;
  const commission = groups.find((g) => slugify(g.title) === name);

  const members = [
    {
      name: "Murat Karayalçın",
      role: "Kordinatör",
      image:
        "https://ankarakentkonseyi.org.tr/wp-content/uploads/2024/08/MURAT-KARAYALCIN.jpg",
    },
    {
      name: "Murat Karayalçın",
      role: "Kordinatör",
      image:
        "https://ankarakentkonseyi.org.tr/wp-content/uploads/2024/08/MURAT-KARAYALCIN.jpg",
    },
    {
      name: "Murat Karayalçın",
      role: "Kordinatör",
      image:
        "https://ankarakentkonseyi.org.tr/wp-content/uploads/2024/08/MURAT-KARAYALCIN.jpg",
    },
  ];

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">{commission?.title}</h1>

        <div className="flex w-full gap-12 mt-6">
          <div className="w-[70%] bg-gray-100/40 rounded-2xl">
            <div className="p-6">
              <h1 className="text-xl text-black">Hakkında</h1>
              <p className="mt-2 text-gray-700">
                Ankara Kent Konseyi Ankara Araştırmaları Çalışma Grubu,
                Ankara’nın tarihi, kültürel ve sosyal dokusunu araştırmak ve bu
                değerleri koruyarak gelecek nesillere aktarmak amacıyla faaliyet
                gösteren bir uzman grubudur. Grup, Ankara’nın geçmişi ve bugünü
                üzerine derinlemesine araştırmalar yaparak, bu bilgileri topluma
                kazandırmayı hedefler. Çalışma grubu, seminerler, yayınlar ve
                saha çalışmaları ile başkentin kimliğini ve mirasını daha iyi
                anlamaya ve tanıtmaya yönelik projeler geliştirir. Ayrıca, yerel
                yönetimlerle iş birliği içinde, Ankara’nın tarihi ve kültürel
                mirasının korunmasına yönelik politika önerileri sunar.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
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
                  className="w-full aspect-3/4 object-cover h-full"
                />
                <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute bottom-0 z-30" />
                <div className="absolute bottom-6 inset-x-0 flex flex-col items-center z-50 text-white">
                  <h1 className="text-xl font-semibold">{member.name}</h1>
                  <p className="text-sm mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 w-full">
          <h1 className="text-4xl font-semibold text-center">
            2025-2026 Proje ve Faaliyet Takvimi
          </h1>
          <div className="">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              locales={[trLocale]} // Türkçe'yi ekle
              locale="tr" // Aktif dili Türkçe yap
              headerToolbar={{}}
              events={[]}
            />
          </div>
        </div>

        <div className="mt-32 w-full">
          <h1 className="text-4xl font-semibold text-center">
            2025-2026 Proje ve Faaliyetler
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[1, 2, 3, 4, 5].map((id) => (
              <Link
                key={id}
                href="/bulten/1"
                className="relative flex flex-col gap-6 group cursor-pointer"
              >
                <Image
                  alt="image"
                  src="https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg"
                  width={1920}
                  height={1080}
                  className="w-full aspect-video object-cover group-hover:scale-[1.05] transition-all duration-300"
                />
                <div>
                  <p className="text-sm text-gray-500">03.04.2025</p>
                  <h1 className="text-2xl font-semibold text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </h1>
                  <p className="text-sm mt-2 line-clamp-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
