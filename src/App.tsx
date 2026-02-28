import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Portfolio } from './pages/Portfolio'
import logo from './assets/logo.png'

const fontImport = document.createElement('link')
fontImport.rel = 'stylesheet'
fontImport.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesque:wght@300;400;500;600;700&display=swap'
document.head.appendChild(fontImport)

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2200)
        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono"
        >
            <div className="flex flex-col items-center gap-8">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-px w-64 bg-white/40"
                />
                <div className="text-[10px] tracking-[0.5em] text-white/60 animate-pulse">ARK ENGINE SYSTEM_INIT</div>
            </div>
        </motion.div>
    )
}

const AppContent = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-['Space_Grotesque']">
            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <nav className="fixed top-0 w-full z-50 px-12 h-20 flex items-center justify-between border-b border-white/[0.03] backdrop-blur-xl">
                        <Link to="/" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src={logo} alt="Ark Engine" className="w-full h-full object-contain filter invert opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-xl font-black tracking-tighter uppercase group-hover:tracking-widest transition-all">ARK ENGINE</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-12 text-[10px] font-black tracking-[0.4em] uppercase">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Capabilities', path: '/services' },
                                { name: 'The Archive', path: '/portfolio' },
                                { name: 'Contact', path: '/contact' },
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative hover:text-white transition-colors py-2 ${location.pathname === item.path ? 'text-white' : 'text-white/30'}`}
                                >
                                    {item.name}
                                    {location.pathname === item.path && (
                                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-px bg-white/40" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <main className="relative z-10 pt-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="min-h-[calc(100vh-80px)]"
                            >
                                <Routes location={location}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/services" element={<Services />} />
                                    <Route path="/portfolio" element={<Portfolio />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </motion.div>
                        </AnimatePresence>
                    </main>

                    {/* Architectural Grid Overlay */}
                    <div className="fixed inset-0 z-0 bg-grid opacity-20 pointer-events-none" />
                </>
            )}
        </div>
    )
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    )
}

export default App
