import Image from "next/image";

export default function Checklist(){
    return(
        <main className="flex items-center justify-center object-fill">
            <Image alt="checklist" width={160} height={160} src="/checklist/1.webp" />
        </main>
    );
}