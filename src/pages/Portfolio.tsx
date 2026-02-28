import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import kgfLogo from '../assets/kgf_logo.png'

const projects = [
    { id: '01', company: 'Kongu Blood Bank', url: 'kongubloodbank.org', category: 'Medical Infrastructure', year: '2024', theme: 'medical' },
    { id: '02', company: 'Elite Energy Devices', url: 'eliteenergydevices.in', category: 'Power Systems', year: '2025', theme: 'elite' },
    { id: '03', company: 'Luminary Studios', url: 'luminarystudios.co', category: 'Digital Craft', year: '2025', theme: 'studio' },
    { id: '04', company: 'KGF Holidays', url: 'kgfholidays.in', category: 'Experience Design', year: '2026', theme: 'kgf' },
    { id: '05', company: 'OrbitMobile Labs', url: 'orbitmobile.io', category: 'Neural Mobility', year: '2024', theme: 'orbits' },
    { id: '06', company: 'IronCore Robotics', url: 'ironcore.tech', category: 'Hardware Logic', year: '2024', theme: 'robotics' },
]

const ProjectLogo = ({ project }: { project: any }) => {
    switch (project.theme) {
        case 'medical':
            return <div className="flex items-center gap-3"><div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full"><div className="w-4 h-[1px] bg-white/40" /><div className="absolute h-4 w-[1px] bg-white/40" /></div><span className="text-lg font-black tracking-tighter">KONGU</span></div>
        case 'elite':
            return <span className="text-3xl font-black italic tracking-tighter text-white opacity-40">ELITE</span>
        case 'studio':
            return <span className="text-lg font-light tracking-[0.4em] text-white opacity-40 uppercase">Luminary</span>
        case 'kgf':
            return <img src={kgfLogo} alt="" className="max-w-full max-h-12 object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
        case 'orbits':
            return <div className="relative w-12 h-12 flex items-center justify-center"><div className="absolute inset-0 border border-white/10 rounded-full" /><div className="w-3 h-3 bg-white/20 rounded-full" /></div>
        case 'robotics':
            return <div className="grid grid-cols-2 gap-1">{[0, 1, 2, 3].map((i) => <div key={i} className="w-2 h-2 border border-white/20" />)}</div>
        default:
            return <span className="text-[10px] font-black uppercase text-white/5">00_PROJ</span>
    }
}

export const Portfolio = () => {
    return (
        <div className="flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-24">

            {/* Header: Act IV - The Archive */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-20 space-y-6"
            >
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/5 rounded-full">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Protocol 03 // Archive</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                    Global <br />
                    <span className="italic font-normal opacity-70 lowercase tracking-normal">Deployed</span> <br />
                    Grid.
                </h2>
            </motion.div>

            {/* Premium Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="group relative flex flex-col bg-background p-10 hover:bg-white/[0.01] transition-all"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-[10px] font-mono text-white/20 group-hover:text-white transition-colors">#{project.id}</span>
                            <ArrowUpRight className="w-4 h-4 text-white/5 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>

                        <div className="h-24 flex items-center justify-start mb-12">
                            <ProjectLogo project={project} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase tracking-tight text-white/40 group-hover:text-white transition-colors">
                                {project.company}
                            </h3>
                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10">{project.category}</span>
                                <span className="text-[9px] font-mono text-white/10 group-hover:text-white/40 transition-colors uppercase">{project.year}</span>
                            </div>
                        </div>

                        {/* Subtle Hover Sweep */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.a>
                ))}
            </div>

            {/* Bottom Credit */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-24 text-center"
            >
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/5">Selective Portfolio // Confidential Segments Omitted</p>
            </motion.div>
        </div>
    )
}
