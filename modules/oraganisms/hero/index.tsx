import Button from "@/modules/atoms/button";
import Brands from "@/modules/molecules/brands";

export default function Hero(){
    return(
        <main className="flex py-12 flex-col w-full gap-8 items-center justify-center">
            <span className="text-blue-500 text-xl tracking-tight">No More Searching</span>
            <h1 className="text-6xl sm:w-2xl text-center">Talent that Fits. Projects that <span className="text-blue-600">Ship</span></h1>
            <p className="sm:w-xl sm:px-0 px-4 text-center text-lg text-neutral-600">Recruitment across IT, AI, Marketing and E-Learning full-time, remote, and freelance with end-to-end delivery.</p>

            <div className="flex gap-4 pb-12">
                <Button name="Hire With Us" link="/" style="bg-blue-600 px-8 tracking-tight text-white rounded-lg text-lg border border-blue-600 hover:bg-transparent hover:text-blue-600" />
                <Button name="Our Services" link="/" style="bg-black px-8 tracking-tight text-white rounded-lg text-lg border border-black hover:bg-transparent hover:text-black" />
            </div>

            <Brands />
        </main>
    );
}