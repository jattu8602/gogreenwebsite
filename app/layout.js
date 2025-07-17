import './globals.css'

export const metadata = {
  title: 'GoGreen - Eco-Friendly Travel App',
  description:
    'Plan eco-friendly trips and reduce your carbon footprint while traveling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
