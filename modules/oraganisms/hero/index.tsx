import HeroItem from "@/modules/molecules/hero-item";
import FlipText from "@/modules/atoms/flip-text";

export default function Hero(){
    return(
        <main className="flex py-8 sm:py-12 px-4 lg:px-0 flex-col w-full gap-4 sm:gap-6 items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl w-full max-w-2xl text-center font-semibold">
                <FlipText
                    text="We Are Modern Recruitment and Staffing Agency"
                    duration={1.2}
                    stagger={0.015}
                    spins={2}
                />
            </h1>
            <p className="text-base sm:text-lg lg:text-xl w-full max-w-2xl text-center text-neutral-600 pb-6 sm:pb-12">
                <FlipText
                    text="Recruitment and staffing across IT, AI, Marketing and E-Learning whether full-time, remote, or freelance with end-to-end delivery."
                    duration={1}
                    stagger={0.004}
                    spins={1}
                    delay={0.1}
                />
            </p>
            <HeroItem />
        </main>
    );
}
