"use client"

import Logo from "@/components/Logo";
import { TbLocation, TbMail, TbPhone, TbSend, TbTextCaption } from "react-icons/tb";
import { Form } from "@heroui/form"
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";

export default function Page() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">

    <div className="w-[80%] h-[calc(100vh-12rem)] mx-auto flex flex-col items-center gap-6 mt-20">
      <h1 className="text-4xl">İletişime Geçin!</h1>
      <Form className="w-[40%]">
        <Input startContent={<TbMail/>} className="w-full" label="E-Posta" variant="bordered"/>
                <Input startContent={<TbPhone/>} className="w-full" label="Telefon Numaranız" variant="bordered"/>
                <Input startContent={<TbTextCaption />} className="w-full" label="Adınız ve soyadınız" variant="bordered"/>

                <Textarea minRows={4} variant="bordered" label="İletmek istedikleriniz"/>

    <Select variant="bordered" label="Konu">
      <SelectItem>Öneri</SelectItem>
            <SelectItem>Görüş</SelectItem>
            <SelectItem>Şikayet</SelectItem>

    </Select>

    <Button color="secondary" className="w-full">Gönder <TbSend/></Button>
      </Form>
    </div>

      <div className="h-full w-screen flex items-center justify-center">
        <div className="w-[40%]">
        <Logo className="h-24 w-32 mb-8" />
        <h1 className="text-4xl text-black">
          Görüşleriniz ve önerileriniz <br /> bizim için önemli
        </h1>
        <div className="grid grid-cols-1 gap-2 mt-3 w-[60%]">
          <p className="flex items-start gap-2">
            <TbLocation className="w-6 h-6" />
            Hacı Bayram Mahallesi Atatürk Bulvarı No:18 Ankara Kent Konseyi
            Opera/Altındağ/Ankara 06050
          </p>

          <p className="flex items-start gap-2">
            <TbPhone className="w-6 h-6" />
            0312 324 51 36
          </p>

          <p className="flex items-start gap-2">
            <TbMail className="w-6 h-6" />
            info@ankarakentkonseyi.org.tr
          </p>
        </div>
      </div>

      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.09983988071!2d28.8065727!3d41.0011879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa388591b659d%3A0xa3b71aafc5b80b25!2zS8O8w6fDvGvDp2VrbWVjZSBLZW50IEtvbnNleWk!5e0!3m2!1str!2str!4v1754134776874!5m2!1str!2str"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </main>
  );
}
