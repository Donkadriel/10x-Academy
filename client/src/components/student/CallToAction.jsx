import { assets } from "../../assets/assets"

export const CallToAction = () => {
    return (
        <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
            <h1 className="text-heading font-bold text-3xl md:text-4xl mb-4">Learn anything, anytime, anywhere</h1>
            <p className="text-body text-base sm:text-sm md:text-lg leading-relaxed">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam 
            <br />aliqua proident excepteur commodo do ea.</p>

            <div className="flex items-center justify-center fonts-medium gap-6 mt5">
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-10 rounded-md">
                    Get Started
                </button>
                <button className=" flex gap-2 font-semibold py-2 px-4 rounded">
                    Learn More
                    <img src={assets.arrow_icon} alt="arrow_icon" />
                </button>
            </div>
        </div>
    )
}