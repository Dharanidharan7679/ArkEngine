import { motion, AnimatePresence } from 'framer-motion'
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

        emailjs.sendForm(
            'service_hezfjuc',
            'template_mx9xfwe',
            form.current,
            'NY5JmoGmLCltDW6IP'
        )
            .then((result) => {
                setStatus('success')
                form.current?.reset()
                setTimeout(() => setStatus('idle'), 5000)
            }, (error) => {
                setStatus('error')
                const errorMsg = error?.text || error?.message || 'Unknown Service Error'
                setErrorMessage(errorMsg)
            })
    }

    return (
        <div className="flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-24">

            {/* Split Layout: Act III - The Signal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                {/* Left: Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/5 rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Protocol 04 // Contact</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                            Con <br />
                            <span className="italic font-normal opacity-70 lowercase tracking-normal">tact</span>.
                        </h2>
                        <p className="text-lg text-white/70 max-w-md leading-relaxed font-medium">
                            The signal is open for elite ventures, institutional scale-ups, and specialized deep-tech engineering queries.
                        </p>
                    </div>

                    {/* Minimal Info Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 underline underline-offset-8">Frequency</span>
                            <div className="text-base font-bold text-white/90">arkenginetechnologies@gmail.com</div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 underline underline-offset-8">Direct</span>
                            <div className="text-base font-bold text-white/90">+91 97894 48211</div>
                        </div>
                    </div>

                    <div className="flex gap-8 opacity-20 hover:opacity-100 transition-opacity pt-6">
                        <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white"><Github size={20} /></a>
                    </div>
                </motion.div>

                {/* Right: Portal Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="p-2 border border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-none">
                        <form ref={form} onSubmit={sendEmail} className="space-y-12 p-8 md:p-12">
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">01 // Identity</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="your name or organization"
                                    className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-medium
                                               focus:outline-none focus:border-white/40 transition-colors text-white placeholder:text-white/5"
                                />
                            </div>
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">02 // Frequency</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    required
                                    placeholder="your email address"
                                    className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-medium
                                               focus:outline-none focus:border-white/40 transition-colors text-white placeholder:text-white/5"
                                />
                            </div>
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">03 // Core Signal</label>
                                <textarea
                                    name="notes"
                                    required
                                    rows={4}
                                    placeholder="brief mission parameters"
                                    className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-medium
                                               focus:outline-none focus:border-white/40 transition-colors text-white placeholder:text-white/5 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-6 bg-white text-black text-[12px] font-black uppercase tracking-[0.5em]
                                           hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Transmitting...' : 'Initiate Sync'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Overlays & Founder Validation */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 text-center">
                        <div className="space-y-12">
                            <CheckCircle2 className="mx-auto text-white w-20 h-20" />
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Transmission Confirmed</h3>
                            <button onClick={() => setStatus('idle')} className="px-12 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Acknowledge</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-32 pt-12 border-t border-white/5 flex flex-col items-center gap-4 text-center"
            >
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10 underline underline-offset-8">Authority Status: Verified</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
                    S.Dharsan // <span className="text-white/60">Lead Architect</span>
                </div>
            </motion.div>
        </div>
    )
}
