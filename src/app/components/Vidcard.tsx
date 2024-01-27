interface TechStackProps {
    ttl: string;
    subttl: string;
    descriptionFirst: string;
    description: string;
    techVid: string;
    index: number;
}

const VidCard: React.FC<TechStackProps> = ({ ttl, subttl, descriptionFirst, description, techVid, index }) => {
    return (
        <>
            {index % 2 == 0 ? (
                <div className="flex flex-col md:flex-row gap-10 md:pr-10 w-full relative rounded-2xl bg-black bg-opacity-10 transition-opacity cursor-pointer shadow-2xl">
                        <video src={techVid} autoPlay loop muted className="md:w-3/5 rounded-t-2xl md:rounded-none  md:rounded-l-2xl">
                        </video>

                        <div className="hover:bg-white hover:bg-opacity-20 rounded-2xl absolute top-0 left-0 right-0 bottom-0 z-10"></div>
                        <div className="opacity-0 hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base">
                            {ttl}
                        </div>

                    <div className="flex flex-col justify-center items-center px-4 pb-4 md:p-0">
                        <h2 className="tracking-tight text-3xl font-bold text-left w-full mb-3 md:mb-7 drop-shadow-2xl">{ttl}</h2>
                        <p className="tracking-wide text-sm md:text-base">{descriptionFirst}</p>
                        <p className="tracking-tight text-l font-bold text-left w-full my-1">{subttl}</p>
                        <p className="tracking-wide">{description}</p>
                    </div>
                </div>
            )
                : (
                    <div className="flex flex-col md:flex-row-reverse gap-10 md:pl-10 w-full relative rounded-2xl bg-black bg-opacity-10 transition-opacity cursor-pointer shadow-2xl">
                        <video src={techVid} autoPlay loop muted className="md:w-3/5 rounded-t-2xl md:rounded-none  md:rounded-r-2xl">
                        </video>

                        <div className="hover:bg-white hover:bg-opacity-20 rounded-2xl absolute top-0 left-0 right-0 bottom-0 z-10"></div>
                        <div className="opacity-0 hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base">
                            {ttl}
                        </div>

                    <div className="flex flex-col justify-center items-center px-4 pb-4 md:p-0">
                        <h2 className="tracking-tight text-3xl font-bold text-left w-full mb-3 md:mb-7 drop-shadow-2xl">{ttl}</h2>
                        <p className="tracking-wide text-sm md:text-base">{descriptionFirst}</p>
                        <p className="tracking-tight text-l font-bold text-left w-full my-1">{subttl}</p>
                        <p className="tracking-wide">{description}</p>
                    </div>
                </div>
                )

            }
        </>
    )
}

export default VidCard