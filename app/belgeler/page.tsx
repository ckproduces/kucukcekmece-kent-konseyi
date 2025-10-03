import Image from "next/image";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function Page() {
  return (
    <main className="w-full h-full min-h-screen">
      <div className="p-12 w-[80%] mx-auto">
        <h1 className="text-5xl font-semibold">Belgeler</h1>

        <div className="mt-6 grid grid-cols-4 gap-12">
          <div className="col-span-4 flex items-center gap-2">
            <p className="text-lg">Bugün</p>
            <div className="bg-gray-700/40 w-full h-0.5"></div>
          </div>

          <div className="rounded-2xl bg-gray-100/40 p-6">
            <BsFillFileEarmarkPdfFill className="w-24 h-24 mb-4 mx-auto text-danger-700" />
            <h1 className="text-center">Ocak Ayı Raporu</h1>
          </div>

          <div className="rounded-2xl bg-gray-100/40 p-6">
            <BsFillFileEarmarkPdfFill className="w-24 h-24 mb-4 mx-auto text-danger-700" />
            <h1 className="text-center">Ocak Ayı Raporu</h1>
          </div>

          <div className="rounded-2xl bg-gray-100/40 p-6">
            <BsFillFileEarmarkPdfFill className="w-24 h-24 mb-4 mx-auto text-danger-700" />
            <h1 className="text-center">Ocak Ayı Raporu</h1>
          </div>

          <div className="rounded-2xl bg-gray-100/40 p-6">
            <BsFillFileEarmarkPdfFill className="w-24 h-24 mb-4 mx-auto text-danger-700" />
            <h1 className="text-center">Ocak Ayı Raporu</h1>
          </div>

          <div className="rounded-2xl bg-gray-100/40 p-6">
            <BsFillFileEarmarkPdfFill className="w-24 h-24 mb-4 mx-auto text-danger-700" />
            <h1 className="text-center">Ocak Ayı Raporu</h1>
          </div>
          <div className="col-span-4 flex items-center gap-2">
            <p className="text-lg whitespace-nowrap">Geçen Ay</p>
            <div className="bg-gray-700/40 w-full h-0.5"></div>
          </div>
          <div className="rounded-2xl bg-gray-100/40 p-6">
            <BsFillFileEarmarkPdfFill className="w-24 h-24 mb-4 mx-auto text-danger-700" />
            <h1 className="text-center">Ocak Ayı Raporu</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
