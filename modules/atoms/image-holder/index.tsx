import Image from "next/image";

type ImageHolderProps = {
    alt : string;
    link : string;
    background : string;
};

export default function ImageHolder({alt, link, background} : ImageHolderProps){
    return(
        <main className={`rounded-3xl ${background}`}>
            <Image alt={alt} src={link} width={260} height={260} />
        </main>
    );
}