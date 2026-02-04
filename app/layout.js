import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Career 2 Industry | IIIC x CAPS',
  description: 'Register for career development workshops and events organized by IIIC and CAPS. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Career 2 Industry</h1>
              <p className="text-sm px-2">Career Development Event</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/CAPS_logo.png"
                alt="CAPS Logo"
                className="h-10 w-auto object-contain"
              />
              <img
                src="/logo2.png"
                alt="IIIC Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

        </nav>
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <footer className="bg-primary text-white text-center py-6 mt-0">
          <p className="text-sm">© 2026 CAPS Kengeri. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
