const resumeData = [
    {
        "title": "Education",
        data: [
            {
                "title": "Bachelors in Information Technology",
                "description": "Guru Gobind Singh Indraprastha University, Delhi, India",
                "duration": "Aug 2015",
                "location": "Delhi, India",
                "summary": [
                    "Learned about the basics of computer science and programming. Applied the knowledge to build Java Applets based web browser as Major Project"
                ]
            }
        ]
    },
    {
        "title": "Work Experience",
        data: [
            {
                "title": "Computer Scientist-I",
                "description": "Adobe Systems Inc., Noida | Adobe Globalization",
                "duration": "Oct 2019 - Present",
                "location": "Noida, India",
                "summary": [
                    "Spearheaded cross-team design review and development of a scalable full-stack localization system for Adobe Lightroom Guided Tutorials, enabling access in 27 regions and supporting 1M+ monthly user interactions, resulting in 35% faster content delivery globally.",
                    "Owned Engineering challenge to enhance Adobe Stock's search system by introducing geo-based auto-tagging and relevance algorithms, increased click-through rates by 18% and boosting localized content discoverability by 25%.",
                    "Acted as a core technical leader for Loc Deck, Adobe's Internal platform for enabling localization for 200 products in over 30 languages, improving operational efficiency by up to 40% and influencing cross-org alignment.",
                    "Designed, developed, and engineered a platform for orchestrating microservices workflows, integrating Netflix Conductor, Spring Boot, ReactJS, MySQL, and Apache Kafka. Delivered a robust UI-driven interface improving task visibility and reducing manual intervention for engineering teams by 60% across 100+ workflows.",
                    "Mentored 5+ junior developers, Championed engineering best practices across teams facilitating adoption of scalable design principles, clean code standards, improving code quality."
                ]
            },
            {
                "title": "Senior Software Engineer",
                "description": "Kronos Incorporated, Noida | Workforce TeleStaff",
                "duration": "Dec 2018 - Oct 2019",
                "location": "Noida, India",
                "summary": [
                    "Developed and enhanced core scheduling modules in a workforce management app (TeleStaff), implementing role- and designation-based shift exchange logic and rules-driven auto-allocation, improving scheduling accuracy by 30% and reducing manual overrides by 50%.",
                    "Migrated roster interface from legacy JSP-based datagrid to React Tables, leveraging data prefetching, page hydration, and code splitting to reduce load times by 3x, enhancing responsiveness for 5K+ end users across multiple departments."
                ]
            },
            {
                "title": "Senior Software Engineer",
                "description": "FarEye India Pvt. Ltd, Noida | Fareye - Last Mile Delivery Solution",
                "duration": "Feb 2018 - Dec 2018",
                "location": "Noida, India",
                "summary": [
                    "Designed and implemented RESTful APIs using Spring Boot and PostgreSQL to orchestrate BPMN workflows with Camunda and standardized schema mappings through structured data definitions within a multi-tier microservices architecture."
                ]
            },
            {
                "title": "Senior Associate 2",
                "description": "Dell Services, Noida | Massachusetts State Health Connector",
                "duration": "Dec 2015 - Feb 2018",
                "location": "Noida, India",
                "summary": [
                    "Developed robust integrations for the Massachusetts Health Insurance Marketplace to generate EDI-834 based data driven customer notices in PDF format, integrating with Print Partners' APIs ensuring on-time delivery to 100K+ users.",
                    "Estimated development efforts from RFC documents to support Agile adoption, contributing to on-time project delivery."
                ]
            }
        ]
    },
    {
        "title": "Skills",
        data: [
            { skill: "Java", level: 95 },
            { skill: "Spring Boot", level: 90 },
            { skill: "React", level: 90 },
            { skill: "Kafka", level: 85 },
            { skill: "Cloud Infrastructure", level: 80 },
            { skill: "MySQL/PostgreSQL", level: 80 },
            { skill: "Microservices", level: 90 },
            { skill: "System Design", level: 85 },
            { skill: "Mentoring", level: 80 }
        ]
    }
]

function Resume() {
    return (
        <section id="resume" className="max-w-5xl mx-auto pt-16 bg-gray-50 min-h-screen">
            {resumeData.map((section) => (
                <div key={section.title} className="flex flex-col md:flex-row mb-16">
                    {/* Fixed-width title column */}
                    <div className="w-full md:w-56 flex-shrink-0 flex items-start">
                        <div className="text-2xl font-bold text-gray-900 tracking-wide pl-2 pt-2 uppercase">
                            {section.title}
                        </div>
                    </div>
                    {/* Flexible details column */}
                    <div className="flex-1 border-l-0 md:border-l-4 border-orange-500 pl-0 md:pl-10 bg-white rounded-b-lg shadow-sm">
                        {section.title === "Skills" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
                                {section.data.map((item, idx) => (
                                    'skill' in item ? (
                                        <div key={item.skill + idx} className="mb-4">
                                            <div className="flex justify-between mb-1">
                                                <span className="font-semibold text-gray-800">{item.skill}</span>
                                                <span className="text-gray-600">{item.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${item.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        ) : (
                            section.data.map((entry, idx) => (
                                'title' in entry ? (
                                    <div key={entry.title + idx} className="mb-10">
                                        <div className="flex flex-col mb-2">
                                            <div className="text-xl font-bold text-gray-900">{entry.title}</div>
                                            <div className="italic text-gray-600 text-base mt-1 flex items-center gap-2">
                                                <span>{entry.location}</span>
                                                <span className="mx-1 text-lg text-gray-400">•</span>
                                                <span>{entry.duration}</span>
                                            </div>
                                        </div>
                                        <div className="text-gray-700 text-base mb-2">{entry.description}</div>
                                        {entry.summary && entry.summary.length > 0 && (
                                            <ul className="text-gray-600 text-sm pl-5 list-disc">
                                                {entry.summary.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : null
                            ))
                        )}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Resume;