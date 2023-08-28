import '@/styles/global.css'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Event Router',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          card: 'rounded-xl border bg-card text-card-foreground shadow border-border p-6',
          headerTitle: 'text-foreground',
          headerSubtitle: 'text-muted-foreground',
          dividerLine: 'bg-border',
          dividerText: 'text-muted-foreground',
          formFieldLabelRow: 'mb-2',
          formFieldLabel:
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          formFieldInput:
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          formButtonPrimary:
            'inline-flex normal-case tracking-normal bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          socialButtonsBlockButton:
            'tracking-normal text-muted-foreground normal-case border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          socialButtonsProviderIcon: 'invert',
          footerActionText: 'text-muted-foreground',
          footerActionLink: 'text-primary hover:text-primary',
          formFieldWarningText: 'text-xs',
          formFieldSuccessText: 'text-xs',

          organizationSwitcherTrigger: 'border border-border',
        },
      }}
    >
      <html
        lang="en"
        className={`dark font-sans antialiased ${inter.variable}`}
      >
        <body>
          <Providers>{children}</Providers>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
