import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { Cpu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VantaBackground } from './components/VantaBackground'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
// import { Crew } from './pages/Crew' - REMOVED
import { Contact } from './pages/Contact'
import { Portfolio } from './pages/Portfolio'
import logo from './assets/logo.png'

// Typography Import
const fontImport = document.createElement('link')
fontImport.rel = 'stylesheet'
fontImport.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
document.head.appendChild(fontImport)

const ScrollNavigator = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const lastScrollTime = useRef(0)
    const cooldown = 1500 // ms

    const pages = ['/', '/services', '/portfolio', '/contact']

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const now = Date.now()
            if (now - lastScrollTime.current < cooldown) return

            const currentIndex = pages.indexOf(location.pathname)
            if (currentIndex === -1) return

            if (e.deltaY > 50 && currentIndex < pages.length - 1) {
                lastScrollTime.current = now
                navigate(pages[currentIndex + 1])
            } else if (e.deltaY < -50 && currentIndex > 0) {
                lastScrollTime.current = now
                navigate(pages[currentIndex - 1])
            }
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    }, [location.pathname, navigate])

    return null
}

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2500)
        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono selection:bg-white selection:text-black"
        >
            <div className="w-full max-w-sm space-y-4 px-6">
                <div className="flex justify-between items-center text-[10px] text-white/40">
                    <span className="animate-pulse">BOOTING ARK_PROTOCOL...</span>
                    <span>v4.0.5</span>
                </div>

                <div className="h-0.5 w-full bg-white/5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-white"
                    />
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[8px] text-white/20 uppercase tracking-widest">
                    <span>{">"} CORE_INIT: OK</span>
                    <span>{">"} NEURAL_SYNC: RUNNING</span>
                    <span>{">"} ARK_ENGINE: ACTIVE</span>
                    <span>{">"} PROTOCOL: ARCHANGEL</span>
                </div>
            </div>
        </motion.div>
    )
}

const AppContent = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative h-screen bg-black text-white font-outfit selection:bg-white selection:text-black overflow-hidden">
            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <ScrollNavigator />
                    {location.pathname === '/' && <VantaBackground />}

                    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
                        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                            <Link to="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="Ark Engine Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">ARK ENGINE</span>
                            </Link>

                            <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Services', path: '/services' },
                                    { name: 'Portfolio', path: '/portfolio' },
                                    { name: 'Ark AI', url: 'https://ai.arkengine.com' }, // Placeholder URL
                                    { name: 'Contact', path: '/contact' },
                                ].map((item) => {
                                    if ('url' in item) {
                                        return (
                                            <a
                                                key={item.name}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    }
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`hover:text-white transition-colors ${location.pathname === item.path ? 'text-white' : ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </nav>

                    <main className="relative z-10 h-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
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
