import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background h-screen flex flex-col gap-12 items-center justify-center">
      {children}
    </div>
  )
}
