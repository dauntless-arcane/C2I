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
          <div className="max-w-7xl mx-auto px-4 py-4">

            <div className="
              flex flex-col gap-3
              sm:flex-row sm:items-center sm:justify-between
            ">

              {/* Title */}
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-semibold">
                  Career 2 Industry
                </h1>
                <p className="text-xs sm:text-sm opacity-90">
                  Career Development Event
                </p>
              </div>

              {/* Logos */}
              <div className="flex justify-center sm:justify-end items-center gap-3 sm:gap-4">
                <img
                  src="/CAPS_logo.png"
                  alt="CAPS Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
                <img
                  src="/logo2.png"
                  alt="IIIC Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>

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
