import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted">
          <div className="container px-4 py-16 md:py-24 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Infinity Gains</h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  We are a leading financial services company dedicated to helping individuals and businesses achieve
                  their financial goals through expert insurance and mutual fund solutions.
                </p>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Infinity Gains team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded in 2010, Infinity Gains has grown from a small advisory firm to a comprehensive financial
                services company serving thousands of clients nationwide.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2010</h3>
                <p className="text-muted-foreground">
                  Founded as a small advisory firm with a vision to transform financial services.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2015</h3>
                <p className="text-muted-foreground">
                  Expanded our team and services to include comprehensive insurance solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2018</h3>
                <p className="text-muted-foreground">
                  Recognized as one of the top financial advisory firms in the region.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Today</h3>
                <p className="text-muted-foreground">
                  Serving thousands of clients with tailored financial solutions and innovative technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  At Infinity Gains, our mission is to empower individuals and businesses to achieve financial security
                  and growth through personalized solutions, expert guidance, and unwavering integrity.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that everyone deserves access to high-quality financial advice and products that can help
                  them build a secure future for themselves and their families.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <ul className="space-y-4">
                  {[
                    "Integrity: We always put our clients' interests first.",
                    "Excellence: We strive for the highest standards in everything we do.",
                    "Innovation: We continuously seek better ways to serve our clients.",
                    "Transparency: We believe in clear, honest communication.",
                    "Empowerment: We help our clients take control of their financial future.",
                  ].map((value, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-2 shrink-0">
                        {i + 1}
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Leadership Team</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced leadership team brings decades of expertise in finance, insurance, and investment
                management.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-muted rounded-xl overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=Team Member ${i}`}
                      alt={`Team member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-muted-foreground mb-4">Chief Executive Officer</p>
                    <p className="text-sm text-muted-foreground">
                      With over 20 years of experience in financial services, John leads our company with vision and
                      integrity.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join Infinity Gains today and take the first step toward a secure financial future.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

