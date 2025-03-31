import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, CheckCircle, Shield, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
          <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Secure Your Future with Infinity Gains LLP
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Expert financial solutions tailored to your needs. We specialize in insurance and mutual funds to help
                  you achieve your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild>
                    <Link href="/auth/signup">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Financial planning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Infinity Gains?
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer comprehensive financial solutions to help you grow and protect your wealth.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Insurance Protection</h3>
                <p className="text-muted-foreground">
                  Comprehensive insurance solutions to protect what matters most to you and your family.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mutual Fund Investments</h3>
                <p className="text-muted-foreground">
                  Expert-managed mutual funds designed to maximize returns while managing risk effectively.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
                <p className="text-muted-foreground">
                  Personalized financial strategies to help you achieve your short and long-term goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about us.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 mr-3"></div>
                    <div>
                      <h4 className="font-semibold">Client Name</h4>
                      <p className="text-sm text-muted-foreground">Client Position</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Infinity Gains has transformed my financial outlook. Their expert advice and personalized approach
                    have helped me secure my family's future."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied clients who have transformed their financial lives with Infinity Gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Financial benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of Working With Us</h2>
                <p className="text-muted-foreground text-lg">
                  At Infinity Gains, we're committed to providing exceptional service and results for our clients.
                </p>
                <ul className="space-y-4">
                  {[
                    "Personalized financial strategies",
                    "Expert advisors with years of experience",
                    "Comprehensive insurance solutions",
                    "Diversified mutual fund options",
                    "Regular portfolio reviews and adjustments",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild>
                  <Link href="/auth/signup">Get Started Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

