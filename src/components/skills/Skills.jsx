import CV_Resume from "../../assets/CV_Resume.pdf"
import brend from "../../assets/brend.png"
import media from "../../assets/media.jpg"
import packagei from "../../assets/Package.png"
export default function Skills() {
    return (
        <div>
            <main id="skills" className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div data-aos="fade-up" data-aos-delay="300" className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/75 sm:bg-none  sm:p-0 lg:row-start-1  ">
                        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-3xl ">I AM A FULL GRAPHIC DESIGNER</h1>
                        <p className="text-sm leading-medium text-white sm:text-slate-500 md:text-blue-900">Skills</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-col-4 lg:gap-6 lg:col-start-2 lg:row-span-6 lg:mb-0 ">
                        <img src={brend} alt="BRANDING DESIGN" className="w-full h-60 object-cover rounded-lg sm:h-50 sm:col-span-2 lg:col-span-full" loading="lazy" />
                        <img src={media} alt="Media Design" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                        <img src={packagei} alt="packaging" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                    </div>

                    <div className="mt-4 md:col-start-1 md:row-start-3 self-center lg:mt-2 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                        <a href={CV_Resume} download>
                            <button data-aos="fade-up" data-aos-delay="500" type="button" className="text-white bg-blue-950 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center">
                                Download CV
                            </button>
                        </a>
                    </div>

                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-satrt-4 text-blue-950 lg:col-span-1 ">
                        Salim Art  is a graphic designer with 6+ years of experience crafting compelling visuals. He’s passionate about social media, branding, book cover, and helping clients bring their ideas to life.

                    </p>

                </div>
            </main>
        </div>
    )
}
