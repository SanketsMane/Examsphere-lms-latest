"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, FlaskConical, Calculator, Leaf, BrainCircuit, Target, Award } from "lucide-react";

const subjects = [
    { name: "Physics", icon: Zap, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Chemistry", icon: FlaskConical, color: "text-pink-500", bg: "bg-pink-50" },
    { name: "Mathematics", icon: Calculator, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Biology", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Botany", icon: Leaf, color: "text-green-500", bg: "bg-green-50" },
    { name: "Zoology", icon: BrainCircuit, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Organic Chem", icon: FlaskConical, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Inorganic Chem", icon: FlaskConical, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Calculus", icon: Calculator, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Mechanics", icon: Zap, color: "text-cyan-500", bg: "bg-cyan-50" },
    { name: "Mock Tests", icon: Target, color: "text-red-500", bg: "bg-red-50" },
    { name: "AIR Strategy", icon: Award, color: "text-yellow-500", bg: "bg-yellow-50" },
];

export function PopularSubjects() {
    return (
        <section className="py-20 bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#011E21] dark:text-white mb-2">Popular Prep Subjects</h2>
                    <p className="text-muted-foreground">Master every chapter with focused study materials</p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {subjects.map((subject, idx) => {
                        const Icon = subject.icon;
                        return (
                            <motion.button
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-full py-3 px-2 pl-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all group hover:border-primary/30 dark:hover:border-primary/30"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center ${subject.bg} dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm`}>
                                       <Icon className={`w-5 h-5 ${subject.color}`} />
                                    </div>
                                    <span className="font-bold text-[#011E21] dark:text-gray-200 text-base">{subject.name}</span>
                                </div>
                                <div className="mr-2">
                                    <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" />
                                </div>
                            </motion.button>
                        );
                    })}
                </motion.div>
            </div>
        </section >
    );
}
// Author: Sanket
