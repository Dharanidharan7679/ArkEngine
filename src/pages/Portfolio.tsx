import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import kgfLogo from '../assets/kgf_logo.png'

// You can import real logos here
// import eliteLogo from '../assets/elite_logo.png'

const projects = [
    {
        id: '01',
        company: 'kongu Blood Bank',
        url: 'kongubloodbank.org',
        category: 'Website Development',
        year: '2024',
        theme: 'medical'
    },
    {
        id: '02',
        company: 'Elite Energy Devices',
        url: 'eliteenergydevices.in',
        category: 'Website Development',
        year: '2025',
        theme: 'elite'
    },
    {
        id: '03',
        company: 'Luminary Studios',
        url: 'www.luminarystudios.co',
        category: 'Graphic Designing',
        year: '2025',
        theme: 'studio'
    },
    {
        id: '04',
        company: 'KGF holidays',
        url: 'kgfholidays.in',
        category: 'Website Development',
        year: '2026',
        theme: 'kgf'
    },
    {
        id: '05',
        company: 'OrbitMobile Labs',
        url: 'www.orbitmobile.io',
        category: 'Mobile Development',
        year: '2024',
        theme: 'orbits'
    },
    {
        id: '06',
        company: 'IronCore Robotics',
        url: 'www.ironcore.tech',
        category: 'Hardware Development',
        year: '2024',
        theme: 'robotics'
    },
]

const ProjectLogo = ({ project }: { project: any }) => {
    switch (project.theme) {
        case 'medical':
            return (
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center border-2 border-red-500/50 rounded-full">
                        <div className="absolute w-6 h-[2px] bg-red-500" />
                        <div className="absolute h-6 w-[2px] bg-red-500" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white/90">KONGU</span>
                </div>
            )
        case 'elite':
            return (
                <div className="relative flex flex-col items-center justify-center p-4 scale-90 md:scale-100">
                    <div className="absolute -bottom-2 -left-4 w-24 h-12 opacity-40">
                        <div className="absolute bottom-0 left-0 w-full h-1 border-b-2 border-red-500 rounded-[100%] rotate-[-15deg]" />
                        <div className="absolute bottom-2 left-1 w-[90%] h-1 border-b-2 border-red-500 rounded-[100%] rotate-[-12deg]" />
                        <div className="absolute bottom-4 left-2 w-[80%] h-1 border-b-2 border-red-500 rounded-[100%] rotate-[-9deg]" />
                    </div>
                    <span className="text-3xl font-black italic tracking-tighter text-[#00FF00] drop-shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                        ELITE
                    </span>
                </div>
            )
        case 'studio':
            return (
                <div className="flex flex-col items-center">
                    <div className="w-16 h-1 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mb-2" />
                    <span className="text-lg font-light tracking-[0.4em] text-white">LUMINARY</span>
                    <div className="w-16 h-1 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mt-2" />
                </div>
            )
        case 'pulse':
            return (
                <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [10, 30, 10] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                            className="w-1 bg-white/40 rounded-full"
                        />
                    ))}
                    <span className="ml-2 text-lg font-black tracking-widest text-white/80">PULSE</span>
                </div>
            )
        case 'kgf':
            return (
                <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                        src={kgfLogo}
                        alt="KGF Holidays"
                        className="max-w-full max-h-full object-contain brightness-110 contrast-110"
                    />
                </div>
            )
        case 'orbits':
            return (
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 border border-white/40 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>
            )
        case 'robotics':
            return (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-1 mb-2">
                        {[0, 1, 2, 3].map((i) => <div key={i} className="w-3 h-3 border border-white/50" />)}
                    </div>
                    <span className="text-xs font-mono font-black tracking-[0.3em] text-white/60">IRONCORE</span>
                </div>
            )
        default:
            return <span className="text-[10px] font-black uppercase text-white/15">PROJECT</span>
    }
}

export const Portfolio = () => {
    return (
        <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 overflow-hidden py-20">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <div className="text-[9px] font-black uppercase tracking-[0.45em] text-white/30 mb-2">
                    ARK PROTOCOL 04 // ARCHIVE
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                    Our <span className="opacity-30 italic">Work</span>.
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto pr-2 custom-scrollbar max-h-[70vh]">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.55, ease: 'easeOut' }}
                        className="group relative flex flex-col border border-white/10 bg-white/[0.03]
                                   hover:bg-white/[0.07] hover:border-white/30
                                   hover:shadow-[0_12px_50px_rgba(255,255,255,0.05)]
                                   transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                        {/* Logo area */}
                        <div className="w-full aspect-[16/8] border-b border-white/10 bg-white/[0.02]
                                        flex items-center justify-center group-hover:bg-white/[0.05] transition-colors overflow-hidden">
                            <ProjectLogo project={project} />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1.5 p-6">
                            {/* Company Name */}
                            <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-white/90
                                           group-hover:text-white transition-colors leading-tight">
                                {project.company}
                            </h3>

                            {/* URL */}
                            <span className="text-[10px] font-mono text-white/35 group-hover:text-white/70 transition-colors italic">
                                {project.url}
                            </span>

                            {/* Category + Year */}
                            <div className="flex items-center justify-between mt-3 pt-4 border-t border-white/[0.07]">
                                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30 group-hover:text-white/55 transition-colors">
                                    {project.category}
                                </span>
                                <span className="text-[8px] font-bold text-white/25 group-hover:text-white/50 transition-colors">
                                    {project.year}
                                </span>
                            </div>
                        </div>

                        {/* Arrow badge */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight className="w-4 h-4 text-white/60" />
                        </div>

                        {/* Bottom sweep accent */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white/40 group-hover:w-full transition-all duration-500" />
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
