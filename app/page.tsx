import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";



export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-secondary">
      <div className="space-y-6 text-center">
        <h1 className=
          "text-6xl font-semibold text-black drop-shadow-md">
        Destion <span className="text-blue-600"> Innovations</span>
        </h1>
     
        <div>
          <LoginButton  asChild>
            <Button variant="default" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
