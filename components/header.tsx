"use client";
import { Button } from "@heroui/button";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { TbCalendarFilled, TbHome, TbPhotoFilled } from "react-icons/tb";
import { LuBuilding2 } from "react-icons/lu";
import { FaNewspaper, FaPencil, FaPeopleGroup } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { HiArchiveBox } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Header() {
  const links = [
    { title: "Ana Sayfa", href: "/", icon: <TbHome /> },
    { title: "Kurumsal", href: "/kurullar", icon: <LuBuilding2 /> },
    { title: "Meclisler", href: "/meclisler", icon: <FaPeopleGroup /> },
    {
      title: "Komisyonlar",
      href: "/komisyonlar",
      icon: <MdGroups2 />,
    },
    { title: "Bülten", href: "/bulten", icon: <FaNewspaper /> },
    { title: "Blog", href: "/blog", icon: <FaPencil /> },
    { title: "Belgeler", href: "/belgeler", icon: <HiArchiveBox /> },
    { title: "Galeri", href: "/galeri", icon: <TbPhotoFilled /> },
    { title: "Takvim", href: "/takvim", icon: <TbCalendarFilled /> },
    { title: "İletişim", href: "/iletisim", icon: <BsFillTelephoneFill /> },
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        wrapper: "flex flex-col justify-center",
      }}
      className="flex flex-col w-screen h-[8rem]"
      position="static"
    >
      <Logo
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = "/";
        }}
        className="size-12"
      />

      <NavbarContent className="flex" justify="start">
        {links.map((link) => (
          <NavbarItem key={link.title}>
            <Button
              as={Link}
              radius="full"
              className="flex items-center gap-x-2 bg-gray-50/60"
              variant="flat"
              size="md"
              href={link.href}
              style={{
                backgroundColor:
                  pathname == link.href ? "hsla(0, 0%, 0%, 0.1)" : "",
              }}
            >
              {link.icon} {link.title}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
