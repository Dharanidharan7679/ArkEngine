import { motion } from 'framer-motion'
import { Globe, Code2, Brain, Cpu, Pen, Smartphone, ArrowUpRight } from 'lucide-react'

const services = [
    {
        icon: Globe,
        id: '01',
        title: 'Bespoke Web Systems',
        desc: 'Architecture-first development of high-performance digital platforms and enterprise ecosystems.',
        tag: 'Development'
    },
    {
        icon: Brain,
        id: '02',
        title: 'Cognitive Engineering',
        desc: 'Advanced neural networks and LLM integration designed for specific operational mastery.',
        tag: 'Artificial Intelligence'
    },
    {
        icon: Code2,
        id: '03',
        title: 'Venture Software',
        desc: 'Engineering robust, scalable software cores for modern startups and shifting markets.',
        tag: 'Scalability'
    },
    {
        icon: Cpu,
        id: '04',
        title: 'Hardware Parity',
        desc: 'Seamless integration of custom circuit logic with low-level software implementation.',
        tag: 'Embedded'
    },
    {
        icon: Pen,
        id: '05',
        title: 'Brand Architecture',
        desc: 'Systematic visual identities and UX designs engineered to communicate institutional trust.',
        tag: 'Design'
    },
    {
        icon: Smartphone,
        id: '06',
        title: 'Mobile Protocols',
        desc: 'High-fidelity mobile experiences optimized for cross-ecosystem synchronization.',
        tag: 'Mobile'
    },
]

export const Services = () => {
    return (
        <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 pt-20 pb-12 overflow-y-auto custom-scrollbar">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-2xl"
                >
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Protocol 02 // Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                        Our <span className="text-white/30 italic">Execution</span> Core.
                    </h2>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-white/40 max-w-sm mb-2"
                >
                    We deploy specialized squads to engineer the most challenging segments of the modern tech stack.
                </motion.p>
            </div>

            {/* Refined Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group relative flex flex-col bg-white/[0.02] border border-white/5 p-8 h-full
                                   hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-white/5 border border-white/10 group-hover:border-white/40 transition-colors">
                                <service.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-[10px] font-mono text-white/20 group-hover:text-white/60 transition-colors">
                                #{service.id}
                            </span>
                        </div>

                        <div className="flex-grow space-y-3">
                            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60">
                                {service.tag}
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                {service.desc}
                            </p>
                        </div>

                        <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/5">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white/60">Detail View</span>
                            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
