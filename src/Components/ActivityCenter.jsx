import { ChevronLeft, ChevronRight } from "lucide-react"

const ActivityCenter = () => {
    const activities = [
        {
            id: 1,
            title: "Ramadan 2026",
            image: "/activityimages/images.jpg",
            description: "Discover our new Ramadan 2026 program, featuring nightly spiritual vocal sessions, traditional chanting, and exclusive seasonal content designed to inspire.",
            date: "Coming Soon - March 2026",
        },
        {
            id: 2,
            title: "منشط القادم",
            image: "/activityimages/castingonevoice.PNG",
            description: "Join our upcoming presenter auditions. We are looking for talented voices and charismatic personalities for our next big project.",
            date: "3, 4, 5 February 2026",
        },
        {
            id: 3,
            title: "Kitaba One Voice",
            image: "/activityimages/kitabaonevoice.PNG",
            description: "جلسة مناقشة كتاب ليالي البيضاء للكاتب دوستويفسكي. انضموا إلينا في رحلة أدبية لاستكشاف عوالم هذه الرائعة الروائية.",
            date: "31 January 2026",
        },
    ]

    return (
        <section id="activity" className="py-20 bg-neutral-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-200 mb-4 tracking-wide">
                        One Voice Activity
                    </h2>
                    <div className="h-px w-48 sm:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
                </div>

                <div className="relative group">
                    {/* Navigation Arrows */}
                    <button className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 text-amber-500/60 hover:text-amber-400 transition-colors hidden sm:block">
                        <ChevronLeft size={48} />
                    </button>
                    <button className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 text-amber-500/60 hover:text-amber-400 transition-colors hidden sm:block">
                        <ChevronRight size={48} />
                    </button>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="group/card relative bg-gradient-to-br from-amber-900/20 to-stone-900/40 border border-amber-800/20 rounded-2xl p-6 sm:p-8 hover:border-amber-600/40 transition-all duration-500 overflow-hidden"
                            >
                                {/* Visual Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[60px] group-hover/card:bg-amber-500/10 transition-all"></div>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Text Content */}
                                    <div className="flex-1 order-2 sm:order-1">
                                        <h3 className="text-amber-500/80 font-mono text-sm tracking-[0.2em] mb-4 uppercase">
                                            {activity.title}
                                        </h3>
                                        <div className="space-y-3">
                                            <p className="text-amber-100/90 text-lg sm:text-xl font-medium leading-tight">
                                                {activity.description}
                                            </p>
                                            <p className="text-amber-200/40 text-sm italic">
                                                {activity.date}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Placeholder/Thumbnail */}
                                    <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-stone-800 border border-amber-900/40 order-1 sm:order-2">
                                        <img
                                            src={activity.image}
                                            alt={activity.title}
                                            className="w-full h-full object-cover opacity-60 group-hover/card:opacity-90 group-hover/card:scale-110 transition-all duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Decorative border bottom */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-amber-700 group-hover/card:w-full transition-all duration-700 ease-in-out"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation indicator dots */}
                <div className="flex justify-center gap-2 mt-12 sm:hidden">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-stone-800"></div>
                    <div className="w-2 h-2 rounded-full bg-stone-800"></div>
                </div>
            </div>
        </section>
    )
}

export default ActivityCenter
