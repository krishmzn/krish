import Image from "next/image";

export default function Intro() {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse gap-5 mx-auto w-fit min-h-screen justify-center align-middle px-4 md:px-20">
            <div className="md:w-2/5 rounded-full m-auto shadow-2xl">
                <Image
                    src="/krish.jpg"
                    alt='krish'
                    width={500}
                    height={50}
                    priority
                    className="rounded-full"
                />
            </div>

            <div className="flex flex-col justify-center align-middle gap-3">
                <h2 className="font-black text-7xl tracking-tighter drop-shadow-2xl">Full-Stack <br /> Developer.</h2>
                <p className="text-1xl tracking-widest drop-shadow-2xl">Hi this is Krish, I Craft scalable full-stack applications using MERN and Django</p>
            </div>
        </div>
    )
}