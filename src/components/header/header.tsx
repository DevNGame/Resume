import { useEffect, useState } from "react"

interface Data {
    [key: string]: {
        title: string;
        link: string;
    };
}

const data: Data = {
    "About": {
        "title": "About",
        "link": "/#about"
    },
    "Resume": {
        "title": "Resume",
        "link": "/#resume"
    },
    "Contact": {
        "title": "Contact",
        "link": "/#contact"
    }
}

function Header() {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const resumeSection = document.getElementById("resume");
            if (resumeSection) {
                const rect = resumeSection.getBoundingClientRect();
                const inView = rect.top <= 80 && rect.bottom > 80; // 80px for navbar height
                if (inView) {
                    setActive("Resume");
                } else {
                    setActive("");
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="w-full bg-gray-900/80 backdrop-blur-md shadow-sm py-4 px-6 flex justify-center items-center sticky top-0 z-50">
            <div className="flex gap-8">
                {Object.entries(data).map(([key, value]) => (
                    <a
                        href={value.link}
                        key={key}
                        className={`text-gray-100 font-semibold text-lg hover:text-orange-500 transition-colors duration-200 ${active === key ? "text-orange-500" : ""}`}
                    >
                        {value.title}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Header;