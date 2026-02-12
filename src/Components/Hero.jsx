import { ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-amber-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>

      <div className="relative z-10">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 flex items-center min-h-screen">
          <div className="text-center w-full">
            {/* Title with decorative < > */}
            <div className="relative inline-block mb-6 sm:mb-8">
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-24 sm:h-24 border-t-2 border-l-2 border-amber-500/50"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-24 sm:h-24 border-b-2 border-r-2 border-amber-500/50"></div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-4 sm:px-8 py-2 sm:py-4">
                Who are We
              </h2>
            </div>

            {/* Content Card */}
            <div className="relative max-w-4xl mx-auto mt-8 sm:mt-16">
              {/* Top decoration - Hidden on mobile */}
              <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  className="text-amber-500/60"
                >
                  <path
                    d="M10 40 Q 30 10, 60 40 T 110 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <circle cx="20" cy="30" r="3" fill="currentColor" />
                  <circle cx="60" cy="40" r="4" fill="currentColor" />
                  <circle cx="100" cy="30" r="3" fill="currentColor" />
                </svg>
              </div>

              <div className="bg-gradient-to-br from-amber-900/40 to-stone-900/40 backdrop-blur-sm border border-amber-700/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
                  <div className="mx-2 sm:mx-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-amber-500"></div>
                  <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
                </div>

                <p className="text-amber-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                  We are a passionate community dedicated to bringing voices
                  together in harmony. Our club celebrates the art of vocal
                  expression, fostering creativity, friendship, and the joy of
                  collective performance.
                </p>

                <p className="text-amber-200/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Join us on a journey where every voice matters, every note
                  counts, and together we create something truly extraordinary.
                </p>

                <div className="flex items-center justify-center mt-4 sm:mt-8">
                  <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
                  <div className="mx-2 sm:mx-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-amber-500"></div>
                  <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
                </div>
              </div>

              {/* Bottom decoration - Hidden on mobile */}
              <div className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  className="text-amber-500/60 rotate-180"
                >
                  <path
                    d="M10 40 Q 30 10, 60 40 T 110 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <circle cx="20" cy="30" r="3" fill="currentColor" />
                  <circle cx="60" cy="40" r="4" fill="currentColor" />
                  <circle cx="100" cy="30" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Discover More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-amber-500 text-amber-300 font-semibold rounded-full hover:bg-amber-500/10 transition-all duration-300 hover:scale-105">
                Join the Club
              </button>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() =>
            document
              .getElementById("activities")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="relative">
            <ChevronDown
              className="text-amber-300 animate-bounce"
              size={32}
              strokeWidth={2}
            />
            <ChevronDown
              className="text-amber-400 absolute top-3 left-0 animate-bounce"
              size={32}
              strokeWidth={2.5}
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
