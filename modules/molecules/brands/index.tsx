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
        <main className="flex flex-col items-center gap-4 justify-center">
            <h1 className="sm:text-lg text-md tracking-tight text-blue-500">Trusted by teams that hire with confidence</h1>
            <div className="flex flex-wrap sm:gap-12 gap-2 items-center justify-center">
                {images.map((item, index) => (
                    <Image className="w-23 h-10 sm:w-32 sm:h-32" key={index} src={item.link} width={128} height={128} alt={item.alt} />
                ))}
            </div>
        </main>
    );
}