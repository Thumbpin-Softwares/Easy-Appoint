import Image from "next/image";

const images = [
    {
        link : "/brands/1.svg",
        alt : "company logo"
    },
    {
        link : "/brands/2.svg",
        alt : "company logo"
    },
    {
        link : "/brands/3.svg",
        alt : "company logo"
    },
    {
        link : "/brands/4.svg",
        alt : "company logo"
    },
    {
        link : "/brands/5.svg",
        alt : "company logo"
    },
]

export default function Brands(){
    return(
        <main className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-lg tracking-tight text-blue-500">Trusted by teams that hire with confidence</h1>
            <div className="flex gap-12">
                {images.map((item, index) => (
                    <Image key={index} src={item.link} width={128} height={128} alt={item.alt} />
                ))}
            </div>
        </main>
    );
}