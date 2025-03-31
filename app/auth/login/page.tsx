import Link from "next/link"
import Image from "next/image"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block relative w-1/2 bg-muted">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Financial growth" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 flex flex-col justify-between p-12">
          <div>
            <Link href="/" className="text-white font-bold text-2xl">
              Infinity Gains
            </Link>
          </div>
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome back to Infinity Gains</h1>
            <p className="text-white/90 text-lg">
              Log in to access your personalized dashboard and continue your journey to financial success.
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
            <h2 className="text-3xl font-bold mb-2">Log in to your account</h2>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

