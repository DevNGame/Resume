

interface Data {
    [key: string]: {
        title: string;
        link: string;
    };
}

const data: Data = {
    "About": {
        "title": "About",
        "link": "#about"
    },
    "Resume": {
        "title": "Resume",
        "link": "#resume"
    },
    "Contact": {
        "title": "Contact",
        "link": "#contact"
    }
}

function Header() {
    
    return (
        <nav className="w-full bg-gray-900/80 backdrop-blur-md shadow-sm py-4 px-6 flex justify-center items-center sticky top-0 z-50">
            <div className="flex gap-8">
                {Object.entries(data).map(([key, value]) => (
                    <a
                        href={value.link}
                        key={key}
                        className={`text-gray-100 font-semibold text-lg hover:text-orange-500 transition-colors duration-200`}
                    >
                        {value.title}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Header;