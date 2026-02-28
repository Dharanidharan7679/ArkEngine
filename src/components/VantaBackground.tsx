import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
// @ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min.js'

export const VantaBackground: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const vantaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let effect: any = null
        if (!effect && vantaRef.current) {
            effect = CLOUDS({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                backgroundColor: 0x020202, // Slightly lifted black
                skyColor: 0x0a0a0c,
                cloudColor: 0x44444a, // Much brighter grey clouds for guaranteed visibility
                cloudShadowColor: 0x1a1a1e,
                sunColor: 0x000000,
                sunGlareColor: 0x000000,
                sunlightColor: 0x000000,
                speed: 1.2, // More dynamic movement
            })
        }
        return () => {
            if (effect) effect.destroy()
        }
    }, [])

    return (
        <div
            ref={vantaRef}
            className="fixed inset-0 z-0 bg-black pointer-events-none"
        />
    )
}
