import Logo from "@/components/Logo";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { TbLock, TbMail } from "react-icons/tb";

export default function Page(){
    return (
        <main className="flex flex-col justify-start items-center gap-4 w-full h-full min-h-screen">
            <div className="flex flex-col gap-6 mt-[10%] w-[25%] items-center">
                <Logo/>
                <h1 className="text-black text-5xl">Giriş Yap</h1>
                <p className="text-gray-400">Tekrardan hoş geldiniz.</p>
                <Input type="email" variant="bordered" placeholder="E-Posta Adresi" startContent={<TbMail/>}/>
                                <Input type="password" variant="bordered" placeholder="Şifre" startContent={<TbLock/>}/>
<Button variant="flat" className="w-full" color="primary">Giriş Yap</Button>
            </div>
        </main>
    )
}