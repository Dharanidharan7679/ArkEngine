import { motion } from 'framer-motion'
import { Globe, Brain, Cpu, Terminal, Shield, Zap, ArrowUpRight } from 'lucide-react'

const capabilities = [
    {
        id: '01',
        title: 'Bespoke Neural Systems',
        desc: 'Architecture-first development of high-performance cognitive platforms and autonomous agents.',
        tag: 'Intelligence',
        icon: Brain
    },
    {
        id: '02',
        title: 'Venture Core Engineering',
        desc: 'Building the robust, scalable backbones for the next generation of global software institutions.',
        tag: 'Infrastructure',
        icon: Terminal
    },
    {
        id: '03',
        title: 'Hardware-Software Parity',
        desc: 'Deep integration of custom silicon logic with low-level native software implementation.',
        tag: 'Embedded',
        icon: Cpu
    }
]

export const Services = () => {
    return (
        <div className="flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-24">

            {/* Section Header: Act II - The Execution */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-3xl space-y-6"
                >
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/5 rounded-full">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Protocol 02 // Capabilities</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                        The <span className="italic font-normal opacity-70 lowercase tracking-normal">Execution</span> <br />
                        Standard.
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-white/60 max-w-sm mb-2 font-medium leading-relaxed"
                >
                    We deploy elite squads to solve the most complex segments of the modern technical ecosystem.
                </motion.p>
            </div>

            {/* Curated List: act-based services */}
            <div className="space-y-px border-y border-white/5">
                {capabilities.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 items-center py-12 px-4 hover:bg-white/[0.02] transition-colors"
                    >
                        {/* ID & Label */}
                        <div className="lg:col-span-2 flex items-center gap-6">
                            <span className="text-[10px] font-mono text-white/20 group-hover:text-white transition-colors">#{item.id}</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10 group-hover:text-white/40 transition-colors">{item.tag}</span>
                        </div>

                        {/* Title */}
                        <div className="lg:col-span-4 mt-4 lg:mt-0">
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="lg:col-span-5 mt-4 lg:mt-0">
                            <p className="text-base text-white/30 group-hover:text-white/60 transition-colors leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>

                        {/* Arrow Link */}
                        <div className="lg:col-span-1 flex justify-end mt-6 lg:mt-0">
                            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Support Callout */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-20 flex flex-wrap gap-12 justify-center"
            >
                {[
                    { icon: Shield, label: 'Secure Protocols' },
                    { icon: Zap, label: 'Instant Sync' },
                    { icon: Globe, label: 'Global Grid' }
                ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                        <stat.icon size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
