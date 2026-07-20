import Image from "next/image";

type ImageHolderProps = {
    alt : string;
    link : string;
    background : string;
};

export default function ImageHolder({alt, link, background} : ImageHolderProps){
    return(
        <main className={`rounded-lg ${background}`}>
            <Image alt={alt} src={link} width={120} height={120} />
        </main>
    );
}