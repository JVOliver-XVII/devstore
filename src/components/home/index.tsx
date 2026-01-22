import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid h-full grid-cols-9 grid-rows-6 gap-6">
        <Link
          href="/"
          className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-java.png"
            alt=""
            width={920}
            height={920}
            quality={100}
          />
          <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">Moletom Java</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 119,90</span>
          </div>
        </Link>

        <Link
          href="/"
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-ia-p-devs.png"
            alt=""
            width={920}
            height={920}
            quality={100}

          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">Moletom IA P/ Devs</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 109,90</span>
          </div>
        </Link>

        <Link
          href="/"
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/camiseta-dowhile-2022.png"
            alt=""
            width={920}
            height={920}
            quality={100}
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">Camiseta Do While</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 79,90</span>
          </div>
        </Link>
      </section>
    </>
  );
}
