"use client";
import Image from "next/image";
import Logo from "./Logo";
import { TbBrandFacebook, TbBrandInstagram } from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      icon: <TbBrandInstagram className="size-8" />,
      link: "https://instagram.com/kckentkonseyi",
    },
    {
      icon: <TbBrandFacebook className="size-8" />,
      link: "https://instagram.com/kckentkonseyi",
    },
  ];

  const altlinks = [
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "Kurullar", href: "/kurullar" },
    { title: "Meclisler", href: "/meclisler" },
    { title: "Komisyonlar", href: "/komisyonlar" },
  ];

  return (
    <footer className="mt-48 w-screen h-[42rem] overflow-hidden relative">
      <Image
        alt="Photo"
        className="w-full absolute"
        src="/bridge.png"
        width={1440}
        height={678}
      />

      <div className="w-full h-full grid place-content-center z-30 relative">
        <div className="flex flex-col mt-[70%] w-full">
          <Logo className="h-24 w-32 mx-auto" />
          <h1 className="text-xl text-center mt-4">
            Küçükçekmece Kent Konseyi
          </h1>
          <div className="flex gap-2 items-center justify-center mt-3">
            {socials.map((social, id) => (
              <Link className="cursor-pointer" key={id} href={social.link}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 mx-auto w-min flex items-center gap-3">
          {altlinks.map((link) => (
            <Link
              className="cursor-pointer whitespace-nowrap underline"
              key={link.href}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
