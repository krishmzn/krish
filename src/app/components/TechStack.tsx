import Image from "next/image";

interface TechListType {
    techName: string;
    techImage: string;
}

const techList:TechListType[] = [
    {
        techName: 'Python',
        techImage: '/techstack/python.png'
    },
]

export default function TechStackList(techName: string, techImage: string) {
    return (
      <section className="flex flex-row gap-3">
        {techList && 
            techList.map((techItem:TechListType, index:number) => (
                <TechStack key={index} techName={techItem.techName} techImage={techItem.techImage}/>
                ))}
      </section>
    );
  }

function TechStack(techName: string, techImage: string) {
  return (
    <div className="flex flex-row gap-3">
      <h2 className="text-lg">{techName}</h2>
      <Image
        src={techImage}
        alt="krish"
        width={500}
        height={50}
        priority
        className="rounded-full"
      />
    </div>
  );
}
