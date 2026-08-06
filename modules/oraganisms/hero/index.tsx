import HeroItem from "@/modules/molecules/hero-item";
import FlipText from "@/modules/atoms/flip-text";

export default function Hero(){
    return(
        <main className="flex py-12 flex-col w-full gap-6 items-center justify-center">
            <h1 className="text-5xl w-2xl text-center font-semibold">
                <FlipText
                    text="We Are Modern Recruitment and Staffing Agency"
                    duration={1.2}
                    stagger={0.015}
                    spins={2}
                />
            </h1>
            <p className="text-xl w-2xl text-center text-neutral-600 pb-12">
                <FlipText
                    text="Recruitment and staffing agencies operate as the intermediaries their all networks, expertise, and resources to streamline the hiring process."
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
