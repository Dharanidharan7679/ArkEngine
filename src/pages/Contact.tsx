import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Github, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.current) return

        setStatus('sending')
        setErrorMessage(null)

        // Using direct sendForm (the most reliable method)
        emailjs.sendForm(
            'service_hezfjuc',
            'template_mx9xfwe',
            form.current,
            'NY5JmoGmLCltDW6IP'
        )
            .then((result) => {
                console.log('EMAILJS SUCCESS:', result.status, result.text)
                setStatus('success')
                form.current?.reset()
                setTimeout(() => setStatus('idle'), 5000)
            }, (error) => {
                console.error('EMAILJS ERROR:', error)
                setStatus('error')

                // Capture specific error message or status code
                const errorMsg = error?.text || error?.message || (error?.status ? `Error Code: ${error.status}` : 'Unknown Service Error')
                setErrorMessage(errorMsg)
            })
    }

    return (
        <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 pt-24 pb-12 overflow-y-auto custom-scrollbar">

            {/* Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                {/* Left: Identity & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Protocol // Contact</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                            Initiate <br />
                            <span className="text-white/20 italic">Signal</span>.
                        </h2>
                        <p className="text-base text-white/40 max-w-md leading-relaxed font-medium">
                            Engineering at scale requires precise communication. Our channels are prioritized for high-stakes institutional synergy.
                        </p>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">Encryption Line</span>
                            <div className="text-base font-bold text-white/80 hover:text-white transition-colors">arkenginetechnologies@gmail.com</div>
                        </div>
                        <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">Coordinates</span>
                            <div className="text-base font-bold text-white/80">Global Grid Hub // India</div>
                        </div>
                        <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">Direct Signal</span>
                            <div className="text-base font-bold text-white/80">+91 97894 48211</div>
                        </div>
                        <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">Digital Social</span>
                            <div className="flex gap-5">
                                <a href="https://linkedin.com/company/ark-engine" target="_blank" className="text-white/30 hover:text-white transition-all hover:scale-110"><Linkedin size={18} /></a>
                                <a href="https://instagram.com/ark.engine" target="_blank" className="text-white/30 hover:text-white transition-all hover:scale-110"><Instagram size={18} /></a>
                                <a href="https://github.com/ark-engine" target="_blank" className="text-white/30 hover:text-white transition-all hover:scale-110"><Github size={18} /></a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Premium Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="glass-dark p-10 md:p-12 border border-white/5 relative z-10">
                        <form ref={form} onSubmit={sendEmail} className="space-y-10">
                            <div className="space-y-3">
                                <label className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30">Identity Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter full name or entity"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-medium
                                               focus:outline-none focus:border-accent transition-all text-white placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30">Frequency Address</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    required
                                    placeholder="your@signal.com"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-medium
                                               focus:outline-none focus:border-accent transition-all text-white placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30">Signal Core</label>
                                <textarea
                                    name="notes"
                                    required
                                    rows={4}
                                    placeholder="Outline mission parameters"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-medium
                                               focus:outline-none focus:border-accent transition-all text-white placeholder:text-white/10 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="group w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em]
                                           hover:bg-accent hover:text-white active:scale-[0.98] transition-all disabled:opacity-50"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-3 h-3 border-2 border-current border-t-transparent rounded-full"
                                        />
                                        Transmitting...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Send Signal
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Aesthetic Glow */}
                    <div className="absolute -inset-10 bg-accent/5 -z-10 blur-[100px] opacity-50" />
                </motion.div>
            </div>

            {/* Cinematic Overlays */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="max-w-md w-full glass p-12 text-center space-y-8"
                        >
                            <div className="w-20 h-20 bg-accent/20 border border-accent/40 rounded-full mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                                <CheckCircle2 className="text-white w-10 h-10" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Transmission Confirmed</h3>
                                <p className="text-sm text-white/40 leading-relaxed font-medium">
                                    Your data packet has been successfully encrypted and routed.
                                    Expect synchronization within 24 business solar cycles.
                                </p>
                            </div>
                            <button
                                onClick={() => setStatus('idle')}
                                className="px-12 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                            >
                                Return to Hub
                            </button>
                        </motion.div>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="max-w-md w-full border border-red-500/20 bg-red-500/[0.02] p-12 text-center space-y-8 backdrop-blur-xl"
                        >
                            <div className="w-20 h-20 bg-red-500/20 border border-red-500/40 rounded-full mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                                <AlertCircle className="text-red-500 w-10 h-10" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-red-500">Signal Interrupted</h3>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500/40">Protocol // Interference Detected</p>
                                    <p className="text-sm text-white/60 leading-relaxed font-mono">
                                        {errorMessage || 'Unknown Link Error'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setStatus('idle')}
                                className="w-full py-4 bg-red-500 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-600 transition-all"
                            >
                                Retry Connection
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Founder Validation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-5 text-center"
            >
                <div className="text-[9px] font-black uppercase tracking-[0.5em] text-white/5">Foundational Architecture</div>
                <div className="flex items-center gap-4">
                    <div className="h-[0.5px] w-12 bg-white/5" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/20">
                        Institutional Authority: <span className="text-white/50">S.Dharsan</span>
                    </span>
                    <div className="h-[0.5px] w-12 bg-white/5" />
                </div>
            </motion.div>
        </div>
    )
}
