"use client";

import { motion } from "framer-motion";
import { User, MessageCircle, Users, Star, Target, Award } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: User,
        title: "Top Tier Faculty",
        description: "Learn from IITians and Medical graduates with years of entrance coaching experience.",
        color: "bg-indigo-600",
        visual: (
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                    alt="Top Tier Faculty" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
        )
    },
    {
        icon: Target,
        title: "CBT Mock Tests",
        description: "Practice on a platform that mirrors the actual JEE/NEET computer-based test environment.",
        color: "bg-emerald-600",
        visual: (
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                    alt="CBT Mock Tests" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
        )
    },
    {
        icon: Award,
        title: "AIR Benchmarking",
        description: "Compare your scores with lakhs of aspirants across India to understand your standing.",
        color: "bg-amber-600",
        visual: (
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                    alt="AIR Benchmarking" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
        )
    },
];

export function FeaturesGrid() {
    return (
        <section className="py-24 bg-white dark:bg-background border-b border-border/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#011E21] dark:text-white mb-6">
                        Examsphere: Engineering & Medical Success
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: -50 }} // Changed from 30 to -50 for "up to down"
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="bg-white dark:bg-card p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 w-full h-full hover:shadow-2xl transition-all duration-300">
                                {/* Visual Container - Added padding and centered content to avoid clipping */}
                                <div className="w-full aspect-[4/3] mb-6 relative flex items-center justify-center p-4">
                                    {feature.visual}
                                </div>

                                <h3 className="text-2xl font-bold text-[#011E21] dark:text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed dark:text-slate-400">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
