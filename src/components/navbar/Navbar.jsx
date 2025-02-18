

export default function Navbar() {
    const NavbarLinks = [
        { id: 1, name: "Home", uri: '#home' },
        { id: 2, name: "Skills", uri: '#skills' },
        { id: 3, name: "Experience", uri: '#experience' },
        { id: 4, name: "My Work", uri: '#mywork' },
        { id: 5, name: "Contact", uri: '#contact' },

    ]
    return (
        <header data-aos="fade-up" className="absolute top-0 flex justify-center items-center body-font z-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center ">
                <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 mr-11 font-bold text-white text-3xl">Salim Art</span>
                </a>
                <nav className="md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-gray-300 justify-center">
                    {
                        NavbarLinks.map((link) => (
                            <a key={link.id} href={link.uri} className="mr-7 hover:text-white">
                                {link.name}
                            </a>
                        ))
                    }
                </nav>
                <button type="button" className="text-gray-950 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center ">
                    <a href="#contact">Contact</a>
                </button>

            </div>
        </header>
    )
}
