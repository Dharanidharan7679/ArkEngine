import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { VantaBackground } from '../components/VantaBackground'

export const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="relative h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-6 overflow-hidden">

            {/* Cinematic Vanta Clouds (The "Same Home Page of Cloud") */}
            <VantaBackground />

            {/* Main Content: "Act I - The Origin" (Premium v2 Layout) */}
            <div className="relative z-10 w-full flex flex-col items-center text-center space-y-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-4 px-4 py-1.5 border border-white/5 bg-white/5 backdrop-blur-xl rounded-full">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Initiating Discovery // Phase 01</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
                            Modern <br />
                            <span className="font-serif italic lowercase font-normal opacity-40 tracking-normal">Engineering</span> <br />
                            Standard
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col items-center space-y-8"
                >
                    <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl leading-relaxed tracking-tight">
                        Ark Engine designs and deploys the deep-tech infrastructure powering the worlds most ambitious autonomous intelligence systems.
                    </p>

                    <div className="flex items-center gap-12 pt-8">
                        <button
                            onClick={() => navigate('/portfolio')}
                            className="text-[11px] font-black uppercase tracking-[0.4em] text-white hover:text-white/60 transition-all border-b border-white/20 pb-2"
                        >
                            The Archive
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="group flex items-center gap-4 px-10 py-4 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white/90 transition-all"
                        >
                            Sync Mission
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Aesthetic Detail: Technical Specs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 left-6 hidden lg:flex flex-col gap-1 text-[8px] font-mono tracking-widest uppercase text-white"
            >
                <span>LAT: 11.0168° N</span>
                <span>LNG: 76.9558° E</span>
                <span>ENC: ARCHANGEL_V4</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 right-6 hidden lg:flex flex-col gap-1 text-[8px] font-mono tracking-widest uppercase text-white text-right"
            >
                <span>CORE_TEMP: OPTIMAL</span>
                <span>UPLINK: ACTIVE</span>
                <span>SEC_LVL: 04</span>
            </motion.div>
        </div>
    )
}
