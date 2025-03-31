import Link from "next/link"
import Image from "next/image"
import SignupForm from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block relative w-1/2 bg-muted">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Financial planning" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 flex flex-col justify-between p-12">
          <div>
            <Link href="/" className="text-white font-bold text-2xl">
              Infinity Gains
            </Link>
          </div>
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6">Start your financial journey with Infinity Gains</h1>
            <p className="text-white/90 text-lg">
              Create an account to access personalized financial solutions and expert guidance.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link href="/" className="text-primary font-bold text-2xl">
              Infinity Gains
            </Link>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Create your account</h2>
            <p className="text-muted-foreground">Fill in your details to get started with Infinity Gains</p>
          </div>
          <SignupForm />
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

