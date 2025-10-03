import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="w-full min-h-screen h-full">
      <div className="w-[80%] mx-auto p-12">
        <h1 className="text-5xl font-semibold">Küçükçekmece Kent Konseyi Blog</h1>
        <div className="mt-12 grid grid-cols-3 gap-12">

            {
                [1, 2, 3, 4, 5].map((id) => (
                    <Link key={id} href="/blog/1" className="relative flex flex-col gap-6 group cursor-pointer">
                        <Image
                          alt=""
                            src="https://www.camhotel.com.tr/wp-content/uploads/2017/12/toplanti-yonetimi-4.jpg"
                            width={1920}    
                            height={1080}
                            className="w-full aspect-video object-cover group-hover:scale-[1.05] transition-all duration-300"
                        />
                        <div>
                          <p className="text-sm text-gray-500">03.04.2025</p>
                            <h1 className="text-2xl font-semibold text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                            <p className="text-sm mt-2 line-clamp-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </Link>
                ))
            }

        </div>
      </div>
    </main>
  );
}
