import Button from "@/modules/atoms/button";

export default function About(){
    return(
        <main className="flex items-center justify-between p-14">
            <div className="w-xl h-[58vh] flex flex-col items-start justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl tracking-tight">No more searching. We match IT, AI, Marketing and E-Learning talent to your projects full-time, remote, or freelance.</h1>
                <span className="text-lg tracking-tight text-neutral-600">From discovering opportunities to supporting hiring, we make finding the right role simpler and personal.</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="tracking-tight text-md w-sm">We simplify and speed up finding the right person, supporting every step of your hiring journey.</span>
                    <Button style="bg-blue-500 text-white w-fit hover:bg-white hover:text-blue-500 rounded-lg border border-blue-500 text-lg tracking-tight" name="Read More About Us" link="" />
                </div>
            </div>
            <div className="flex flex-col items-center w-md">
                <div className="border-b border-neutral-600 pb-12">
                    <h1 className="text-blue-500 leading-28 text-[120px]">12K+</h1>
                    <p className="text-neutral-600">People connected with new opportunities</p>
                </div>
                <div className="pt-12">
                    <h1 className="text-blue-500 text-[120px] leading-28">850+</h1>
                    <span className="text-neutral-600">Companies Hiring Through EasyAppoint</span>
                </div>
            </div>
        </main>
    );
}