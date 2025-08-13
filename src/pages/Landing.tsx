import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, ListTodo, Zap, Shield } from "lucide-react";
import React from "react";

const GridBackground = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
);

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden"
  >
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
    <div className="relative z-10">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 border border-primary/20 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

export default function Landing() {
  return (
    <div className="min-h-screen w-full dark text-foreground bg-background relative overflow-x-hidden">
      <GridBackground />
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      ></motion.div>
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ListTodo className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tighter">TodoMaster</span>
          </div>
          <AuthButton 
            trigger={<Button variant="ghost">Sign In</Button>}
            dashboardTrigger={<Button variant="ghost">Dashboard</Button>}
          />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Unleash Your Productivity
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2"
              style={{ textShadow: "0 0 20px oklch(var(--primary) / 50%)" }}
            >
              Beyond the Checklist
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            TodoMaster is more than a list. It's an intelligent system designed to help you conquer your day, one task at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AuthButton 
              trigger={
                <Button size="lg" className="gap-2 text-lg px-8 py-6 group shadow-[0_0_20px_oklch(var(--primary)/20%)] hover:shadow-[0_0_40px_oklch(var(--primary)/40%)] transition-shadow">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">The Future of Task Management</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features, elegantly designed for a seamless workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            index={0}
            icon={Zap}
            title="Effortless Organization"
            description="Smart lists, priorities, and due dates keep you perfectly organized with minimal effort."
          />
          <FeatureCard 
            index={1}
            icon={Check}
            title="Real-time Sync"
            description="Your tasks are always up-to-date across all devices, powered by Convex."
          />
           <FeatureCard 
            index={2}
            icon={Shield}
            title="Secure and Private"
            description="Your data is yours. With secure authentication and a robust backend, your tasks are safe."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border"
        >
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Ready to Elevate Your Productivity?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start mastering your tasks today. It's free to get started.
          </p>
          <AuthButton 
            trigger={
              <Button size="lg" className="gap-2 text-lg px-8 py-6 group shadow-[0_0_20px_oklch(var(--primary)/20%)] hover:shadow-[0_0_40px_oklch(var(--primary)/40%)] transition-shadow">
                Sign Up Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            }
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 TodoMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}