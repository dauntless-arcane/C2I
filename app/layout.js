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

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 text-center">

              {/* LEFT — Main Logo */}
              <div className="flex justify-center sm:justify-start">
                <div className="h-16 w-34 flex items-center justify-center">
                  <img
                    src="/C2I.png"
                    alt="Career 2 Industry Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>


              {/* CENTER — Title */}
              <div>
                <h1 className="text-lg sm:text-2xl font-semibold">
                  Career 2 Industry
                </h1>
                <p className="text-xs sm:text-sm opacity-90">
                  Career Development Event
                </p>
              </div>


              {/* RIGHT — Partner Logos */}
              <div className="flex justify-center sm:justify-end gap-2">

                <div className="h-12 w-32 flex items-center justify-center">
                  <img
                    src="/1000099095.png"
                    alt="IIIC Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="h-12 w-26 flex items-center justify-center">
                  <img
                    src="/CAPS_white.png"
                    alt="CAPS Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

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
