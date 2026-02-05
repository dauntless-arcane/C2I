import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Campus To Internship | IIIC x CAPS',
  description: 'Register for career development workshops and events organized by IIIC and CAPS. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary text-default border-b border-default shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">

            {/* 3 perfectly equal columns */}
            <div className="grid grid-cols-3 items-center">

              {/* LEFT */}
              <div className="flex justify-start">
                <img
                  src="/C2I_Transparent_Logo_New.png"
                  alt="Career 2 Industry Logo"
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* CENTER */}
              <div className="flex justify-center">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
                  Campus to Internship
                </h1>
              </div>

              {/* RIGHT */}
              <div className="flex justify-end gap-6">
                <img
                  src="/IIIC_Transparent_Logo.png"
                  alt="IIIC Logo"
                  className="h-14 object-contain"
                />

                <img
                  src="/CAPS_logo.png"
                  alt="CAPS Logo"
                  className="h-12 object-contain "
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
