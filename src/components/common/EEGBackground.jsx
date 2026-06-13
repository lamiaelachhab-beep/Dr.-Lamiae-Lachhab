import React from 'react'
import { motion } from 'framer-motion'

const EEGWave = ({ className = "" }) => {
    return (
        <div className={`absolute pointer-events-none opacity-20 ${className}`}>
            <svg
                width="100%"
                height="100"
                viewBox="0 0 1000 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-primary stroke-2"
            >
                <motion.path
                    d="M0 50 L50 50 L60 30 L70 70 L80 50 L120 50 L130 10 L140 90 L150 50 L200 50 L210 20 L220 80 L230 50 L300 50 L310 40 L320 60 L330 50 L400 50 L410 0 L420 100 L430 50 L500 50 L510 30 L520 70 L530 50 L600 50 L610 10 L620 90 L630 50 L700 50 L710 20 L720 80 L730 50 L800 50 L810 40 L820 60 L830 50 L1000 50"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    )
}

const NeuralNetwork = ({ color = "currentColor", className = "" }) => {
    // Simple nodes and connections
    const nodes = [
        { x: 10, y: 20 }, { x: 30, y: 15 }, { x: 50, y: 25 },
        { x: 20, y: 40 }, { x: 45, y: 55 }, { x: 70, y: 40 },
        { x: 15, y: 70 }, { x: 35, y: 80 }, { x: 60, y: 75 },
        { x: 85, y: 60 }, { x: 90, y: 30 }, { x: 75, y: 10 }
    ];

    const connections = [
        [0, 1], [1, 2], [2, 11], [11, 10], [10, 5], [5, 2],
        [0, 3], [3, 4], [4, 5], [5, 9], [9, 10], [4, 7],
        [3, 6], [6, 7], [7, 8], [8, 9], [8, 4]
    ];

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
                {connections.map(([start, end], i) => (
                    <motion.line
                        key={i}
                        x1={nodes[start].x}
                        y1={nodes[start].y}
                        x2={nodes[end].x}
                        y2={nodes[end].y}
                        stroke={color}
                        strokeWidth="0.1"
                        initial={{ opacity: 0.1, pathLength: 0 }}
                        animate={{ opacity: [0.1, 0.4, 0.1], pathLength: [0, 1, 0] }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        r="0.5"
                        fill={color}
                        initial={{ opacity: 0.2, scale: 0.5 }}
                        animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.5, 1.2, 0.5] }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export { EEGWave, NeuralNetwork }
