"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  TbArchive,
  TbArrowLeft,
  TbArrowRight,
  TbBook,
  TbBookFilled,
  TbPhoto,
  TbQuestionMark,
  TbUsersGroup,
} from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen">
      <div className="h-[calc(100vh-7rem)] w-full">
        <div className="w-[80%] aspect-video mx-auto">
          <div className="cursor-pointer relative bg-gray-100 w-full aspect-video rounded-[10rem] overflow-hidden">
            <Button
              isIconOnly
              className="z-50 right-6 inset-y-0 my-auto absolute"
              radius="full"
            >
              <TbArrowRight />
            </Button>
            <Button
              isIconOnly
              className="z-50 left-6 inset-y-0 my-auto absolute"
              radius="full"
            >
              <TbArrowLeft />
            </Button>
            <Image
              alt="Photo"
              src="https://www.workland.com.tr/wp-content/uploads/2020/02/dylan-gillis-KdeqA3aTnBY-unsplash-1-scaled.jpg"
              width={1920}
              height={1080}
            />
            <div className="bg-gradient-to-t from-black to-transparent h-[60%] w-full absolute bottom-0"></div>

            <div className="absolute bottom-12 left-32">
              <h1 className="text-5xl text-white font-semibold">Merhaba</h1>
              <p className="text-xl text-white w-[80%] line-clamp-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                laudantium dolore ad eaque voluptatem sit, veritatis provident
                deserunt maiores asperiores, nisi mollitia recusandae animi
                obcaecati laborum excepturi similique illum ipsam!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen grid grid-cols-3 p-16 gap-6 mt-64">
        <Link
          href="/hakkimizda"
          className="w-full h-full relative group overflow-hidden rounded-[7rem]"
        >
          <Image
            alt="Photo"
            src="https://www.workland.com.tr/wp-content/uploads/2020/02/dylan-gillis-KdeqA3aTnBY-unsplash-1-scaled.jpg"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
          />
          <div className="z-10 bg-danger-800/60 group-hover:bg-danger-800 transition-colors cursor-pointer absolute w-full h-full top-0 left-0"></div>
          <div className="absolute z-20 bottom-[18%] -right-[10%] w-min">
            <h1 className="-rotate-90 text-9xl font-semibold text-white w-full">
              Bizi Tanıyın
            </h1>
          </div>
        </Link>

        <Link
          href="/galeri"
          className="w-full h-full relative group overflow-hidden rounded-[7rem]"
        >
          <Image
            alt="Photo"
            src="https://www.workland.com.tr/wp-content/uploads/2020/02/dylan-gillis-KdeqA3aTnBY-unsplash-1-scaled.jpg"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
          />
          <div className="z-10 bg-secondary-800/60 group-hover:bg-secondary-800 transition-colors cursor-pointer absolute w-full h-full top-0 left-0"></div>
          <div className="absolute z-20 bottom-[25%] -right-[15%] w-min">
            <h1 className="-rotate-90 text-9xl font-semibold text-white w-full">
              Medya
            </h1>
          </div>
        </Link>

        <Link
          href="/kurullar"
          className="w-full h-full relative group overflow-hidden rounded-[7rem]"
        >
          <Image
            alt="Photo"
            src="https://www.workland.com.tr/wp-content/uploads/2020/02/dylan-gillis-KdeqA3aTnBY-unsplash-1-scaled.jpg"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
          />
          <div className="z-10 bg-black/60 group-hover:bg-black transition-colors cursor-pointer absolute w-full h-full top-0 left-0"></div>
          <div className="absolute z-20 bottom-[30%] -right-[35%] w-min">
            <h1 className="-rotate-90 text-9xl font-semibold text-white w-full">
              Yönetim
            </h1>
          </div>
        </Link>
      </div>

      <div className="w-screen h-screen flex gap-24 items-center relative mt-64">
        <div
          className="mask-[url(/geos/c.png)] w-[80rem] -left-[20%] absolute h-full bg-[url(/media/hero_sp.jpg)] 
        [mask-size:contain] [mask-repeat:no-repeat] [mask-position:right]"
        ></div>

        <div className="absolute right-[5%] bottom-[10%] w-[40%]">
          <h1 className="text-7xl text-black">
            Küçükçekmece İçin Çalışıyoruz!
          </h1>
          <p className="text-lg max-w-full mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            provident quas accusamus? Nobis hic sed error nesciunt, amet ullam
            non velit voluptate. Quo quae nostrum deleniti dignissimos et. Nemo,
            perferendis?
          </p>
        </div>
      </div>

      <div className="w-[80%] flex mx-auto h-screen mt-64">
        <div className="w-[45%] h-[80%] relative">
          <Image
            alt="Photo"
            src="https://www.workland.com.tr/wp-content/uploads/2020/02/dylan-gillis-KdeqA3aTnBY-unsplash-1-scaled.jpg"
            className="aspect-3/4 object-cover rounded-b-[7rem] rounded-tl-[7rem]"
            width={1920}
            height={1080}
          />
          <div
            className="flex flex-col justify-center p-4 absolute -bottom-[13%] inset-x-0 
          bg-secondary-300/80 w-[70%] mx-auto rounded-[7rem] min-h-[6rem]"
          >
            <h1 className="text-2xl text-center text-black">
              Ahmet Ahmet Ahmet
            </h1>
            <p className="text-center text-secondary-700">
              Küçükçekmece Kent Konseyi Başkanı
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[80%] px-12">
          <h1 className="text-8xl font-semibold text-black">Başkanın Mesajı</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum voluptas, quos, quia, quisquam, quisquam, quisquam,
            quisquam, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aperiam quidem doloremque dolor ad vitae qui perferendis. Assumenda
            veritatis ullam doloribus provident sunt, asperiores debitis sit
            magnam consectetur velit, perspiciatis quis.
          </p>
        </div>
      </div>

      <div className="cursor-pointer w-[80%] mx-auto h-[20rem] rounded-[10rem] overflow-hidden relative">
        <Image
          alt="Photo"
          src="/kucukcekmece.jpg"
          width={1366}
          height={768}
          className="w-full h-full object-cover object-top"
        />
        <div className="z-10 absolute w-full h-full bg-secondary-800/60 top-0 left-0"></div>
        <div className="bg-gradient-to-r from-black/40 to-transparent -left-[5%] absolute inset-y-0 my-auto h-full w-[50%] z-20"></div>

        <div className="flex items-center justify-between w-full -left-[5%] absolute inset-y-0 my-auto z-30">
          <div className="flex items-center gap-4">
            <TbBookFilled className="w-64 h-64 text-white" />

            <h1 className="text-5xl text-white">
              Küçükçekmece Kent <br /> Konseyi Raporları
            </h1>
          </div>

          <TbArrowRight className="size-32 text-white" />
        </div>
      </div>
    </main>
  );
}
