import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'School Management System',
  description: 'Manage schools with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar - Fixed at top */}
        <nav className="nav-container fixed top-0 left-0 right-0 z-50">
          <div className="nav-content">
            <h1 className="nav-title">School Management System</h1>
            <div className="nav-buttons">
              <a href="/" className="nav-button active">Add School</a>
              <a href="/showSchools" className="nav-button">View Schools</a>
            </div>
          </div>
        </nav>
        
        {/* Main Content with top margin to avoid nav overlap */}
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
