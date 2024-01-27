import Image from "next/image";

export default function Intro() {
    return (
        <div className="flex flex-row-reverse gap-5 mx-auto w-fit min-h-screen justify-center align-middle px-20">
            <div className="w-2/5 rounded-full m-auto">
                <Image
                    src="/krish.jpg"
                    alt='krish'
                    width={500}
                    height={50}
                    priority
                    className="rounded-full"
                />
            </div>

            <div className="flex flex-col w-3/5 justify-center align-middle gap-3">
                <h2 className="font-black text-8xl tracking-tighter">Full-Stack <br /> Developer.</h2>
                <p className="text-1xl tracking-widest">I Craft solid scalable full-stack applications or websites using various technologies</p>
            </div>
        </div>
    )
}