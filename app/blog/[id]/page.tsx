import { User } from "@heroui/user";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">
          Küçükçekmece’de Sokak Hayvanlarının Sessiz Mücadelesi
        </h1>
        <User
          className="mt-3"
          avatarProps={{
            src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
          }}
          name="Mehmet"
          description="Yazar"
        />
        <Image
          alt="image"
          src="https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg"
          width={1920}
          height={1080}
          className="w-full aspect-video object-cover my-8"
        />
        <div className="flex justify-between relative">
          <article className="mt-12 prose prose-lg w-[80%]">
            <p>
              İstanbul’un kalabalık ve hızlı yaşamının ortasında,
              Küçükçekmece’nin sokaklarında sessiz bir mücadele sürüyor: sokak
              hayvanlarının hayatta kalma mücadelesi. Özellikle kış aylarında
              mama bulmak zorlaşırken, yaz aylarında da sıcaklar büyük bir
              tehdit oluşturuyor.
            </p>

            <h2>Gönüllülerin Desteği Hayat Kurtarıyor</h2>

            <p>
              Mahalle sakinlerinin bazıları her gün mama ve su kaplarını
              doldurarak bu canlılara yardımcı oluyor. Gönüllü gruplar, yaralı
              ya da hasta hayvanları veterinere götürmek için büyük bir
              özveriyle çalışıyor. Sosyal medyada oluşturulan gruplar sayesinde
              kayıp hayvanlar bulunabiliyor veya sahiplendirilebiliyor.
            </p>

            <h2>Belediyenin Sorumluluğu</h2>

            <p>
              Küçükçekmece Belediyesi, belirli bölgelerde kedi evleri ve mama
              istasyonları yerleştirmiş durumda. Ancak bu noktaların sayısı ve
              etkinliği hâlâ tartışma konusu. Düzenli veteriner kontrolü,
              kısırlaştırma ve tedavi hizmetlerinin artırılması gerekiyor.
            </p>

            <blockquote>
              “Bir kap su, bir kap mama hayat kurtarabilir.” — Mahalle gönüllüsü
            </blockquote>

            <h2>Ne Yapabiliriz?</h2>

            <ul>
              <li>
                Kapınızın önüne her gün bir kap su ve mama bırakabilirsiniz.
              </li>
              <li>Yaralı hayvanları en yakın veterinere ulaştırabilirsiniz.</li>
              <li>
                Barınakları ve sahiplendirme platformlarını
                destekleyebilirsiniz.
              </li>
              <li>
                Belediye hizmetlerini artırmaları için talepte bulunabilirsiniz.
              </li>
            </ul>

            <p>
              Unutmayalım ki sokak hayvanları da bu kentin birer sakini. Onlara
              sahip çıkmak, daha yaşanabilir ve vicdanlı bir toplumun temelini
              oluşturur.
            </p>
          </article>
          <div className="w-[30%] pt-6 sticky top-0 h-[30rem]">
            <h1 className="text-lg text-gray-600">Göz Atabilirsiniz:</h1>

            <div className="grid grid-cols-1 mt-5 h-full">
              {[1, 2, 3, 4].map(() => (
                <div className="group cursor-pointer">
                  <h1 className="text-3xl font-semibold group-hover:underline underline-offset-4">
                    Küçükçekmece Blog
                  </h1>
                  <p className="line-clamp-3 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus earum officiis unde, dignissimos magnam cum ea
                    corrupti ipsum placeat, quibusdam possimus tempore animi non
                    qui mollitia! Omnis veniam quasi at!
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
