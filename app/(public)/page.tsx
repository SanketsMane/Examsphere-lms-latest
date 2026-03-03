import { getActiveBroadcasts } from "../actions/broadcasts";
import { getSessionWithRole } from "../data/auth/require-roles";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TestimonialsSectionV2 } from "@/components/ui/testimonial-v2";
import { Logos3 } from "@/components/ui/logos3";
import { FadeIn } from "@/components/ui/fade-in";

import {
  ArrowRight, BookOpen, Users, TrendingUp, Award, Play, Star,
  Calendar, Clock, Eye, User, CheckIcon, Globe, Shield, Zap,
  Video, MessageSquare, Trophy, Target, Lightbulb, Headphones,
  FileText, BarChart3, Smartphone, Laptop, Tablet, CheckCircle2
} from "lucide-react";
import { prisma } from "@/lib/db";
import { CategoryCard } from "@/components/ui/category-card";
import { SectionHeading } from "@/components/ui/section-heading";
import HeroSection from "@/components/ui/hero-section-9";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { CategoriesGrid } from "@/components/marketing/CategoriesGrid";
import { PopularLanguages } from "@/components/marketing/PopularLanguages";
import { FeaturedCourses } from "@/components/marketing/FeaturedCourses";
import { StatsBar } from "@/components/marketing/StatsBar";
import { VibeCard } from "@/components/marketing/vibe-card";
import { BroadcastBanner } from "@/components/marketing/BroadcastBanner";
import { UpcomingGroupClasses } from "@/components/marketing/UpcomingGroupClasses";
import { getFeaturedCourses } from "../data/courses/get-featured-courses";
import { getTopCategories } from "../data/marketing/get-marketing-data";

const features = [
  {
    icon: Target,
    title: "Exam-Oriented Live Sessions",
    description: "Daily interactive classes focused on JEE, NEET, and CET patterns with real-time doubt clearing."
  },
  {
    icon: FileText,
    title: "Vast MCQ Question Bank",
    description: "Access over 50,000+ practice questions with step-by-step video solutions for every concept."
  },
  {
    icon: BarChart3,
    title: "Real-Time CBT Mock Tests",
    description: "Experience the actual exam environment with our Computer Based Test (CBT) simulation platform."
  },
  {
    icon: Lightbulb,
    title: "Concept Master Classes",
    description: "Deep-dive into Physics, Chemistry, and Math with masterclasses from top-tier faculty."
  },
  {
    icon: Award,
    title: "All India Ranking (AIR)",
    description: "Compare your performance with aspirants across India and identify your weak areas instantly."
  },
  {
    icon: Shield,
    title: "Structured Study Planner",
    description: "Get a personalized roadmap to cover the entire XII & XI syllabus well before the exam date."
  }
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getSessionWithRole();

  // Fetch Real Data
  const broadcasts = await getActiveBroadcasts();
  const courseCount = await prisma.course.count({ where: { status: 'Published' } });
  const studentCount = await prisma.user.count({ where: { role: 'student' } });
  const instructorCount = await prisma.teacherProfile.count({ where: { isVerified: true } });

  const featuredCourses = await getFeaturedCourses();
  const categories = await getTopCategories();
  const testimonials = await prisma.testimonial.findMany({
    where: { isActive: true, isFeatured: true },
    orderBy: { createdAt: 'desc' },
    take: 9
  });

  return (
    <AnimationWrapper className="min-h-screen bg-background font-sans">
      {/* --- BROADCAST BANNER --- */}
      <BroadcastBanner broadcasts={broadcasts} />
      
      <HeroSection
        title={
          <>
            Master your Entrance <br /> <span className="text-primary italic font-serif">Exams with Confidence</span>
          </>
        }
        subtitle="Examsphere provide top-tier coaching and materials for JEE, NEET, and CET from expert faculty across the nation."
        actions={[
          {
            text: 'Start Free Trial',
            href: '/register',
            variant: 'default' as const,
          },
          {
            text: 'Explore Courses',
            href: '/courses',
            variant: 'outline' as const,
          },
        ]}
        stats={[
          {
            value: '50K+',
            label: 'MCQs Solved',
            icon: <Target className="h-5 w-5 text-muted-foreground" />,
          },
          {
            value: '12K+',
            label: 'Active Aspirants',
            icon: <Users className="h-5 w-5 text-muted-foreground" />,
          },
          {
            value: 'AIR Focus',
            label: 'National Benchmarking',
            icon: <Award className="h-5 w-5 text-muted-foreground" />,
          },
        ]}
        images={[
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
        ]}
      />

      <StatsBar />

      <VibeCard />

      <FeaturesGrid />

      <UpcomingGroupClasses />

      <FeaturedCourses courses={featuredCourses} />

      <CategoriesGrid categories={categories} />

      <PopularLanguages />

      <ServicesSection />

      {/* --- REVIEWS --- */}
      <TestimonialsSectionV2 testimonials={testimonials} />

      {/* --- DUAL CTA --- */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Student CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary dark:bg-card p-12 flex flex-col justify-center items-start group hover:shadow-2xl transition-all duration-500">
              <div className="relative z-10">
                <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Aspirant</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Get access to JEE/NEET structured courses, test series, and personalized MCQ practice.
                </p>
                <Link href="/register" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
                  Start Preparation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors" />
            </div>

            {/* Teacher CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-12 flex flex-col justify-center items-start group hover:shadow-2xl transition-all duration-500">
              <div className="relative z-10">
                <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Expert Faculty</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Join India's most innovative platform to mentor students and share your expertise.
                </p>
                <Link href="/register/teacher" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-slate-900 font-bold hover:bg-gray-100 transition-colors">
                  Join as Faculty <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}