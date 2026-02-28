import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import heroCore from '../assets/hero_core.png'

export const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="relative h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-6 pt-20">

            {/* Split Layout: Image & Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8 text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">System Status: Active // v4.0.5</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] uppercase tracking-tighter">
                            Engineering <br />
                            <span className="text-white/30 italic">Planetary</span> <br />
                            Intelligence.
                        </h1>
                        <p className="text-lg text-white/50 font-medium max-w-lg leading-relaxed tracking-tight">
                            Ark Engine develops the deep-tech infrastructure that powers the next generation of autonomous intelligence and hardware-software parity.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                        <button
                            onClick={() => navigate('/portfolio')}
                            className="group relative px-10 py-4 bg-white text-black font-bold text-[11px] uppercase tracking-[0.2em] 
                                       hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            View Case Studies
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 
                                       hover:text-white transition-colors duration-300 group"
                        >
                            Initiate Contact
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Right: Premium Asset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
                        <img
                            src={heroCore}
                            alt="Ark Engine Core"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
                        />
                        {/* Recursive Glow Layers */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
                    </div>
                </motion.div>
            </div>

            {/* Bottom: Mini Features or Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-12"
            >
                {[
                    { label: 'Security', value: 'Level 04', icon: Shield },
                    { label: 'Velocity', value: '1.2 GB/s', icon: Zap },
                    { label: 'Coverage', value: 'Global', icon: Globe },
                    { label: 'Protocol', value: 'Archangel', icon: ArrowRight },
                ].map((stat, i) => (
                    <div key={i} className="space-y-2 group cursor-default">
                        <div className="flex items-center gap-2">
                            <stat.icon className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{stat.label}</span>
                        </div>
                        <div className="text-xl font-black uppercase tracking-tight">{stat.value}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
