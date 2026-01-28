// import type React from "react"
// import type { Metadata, Viewport } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"
// import { ThemeProvider } from "@/lib/theme-context"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "CareLife Foundation - Empowering Every Child",
//   description:
//     "Caring for early lives. Empowering every child to embrace adulthood positively through healthcare, nutrition, and early childhood development.",
//   generator: "v0.app",
//   manifest: "/manifest.json",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "black-translucent",
//     title: "CareLife Foundation",
//   },
//   formatDetection: {
//     telephone: false,
//   },
// }

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
//   userScalable: true,
//   themeColor: "#10a37f",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//         <meta name="apple-mobile-web-app-title" content="CareLife" />
//       </head>
//       <body className={`font-sans antialiased bg-background text-foreground`}>
//         <ThemeProvider>{children}</ThemeProvider>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareLife Foundation - Caring for early lives",
  description:
    "Caring for early lives. Empowering every child to embrace adulthood positively through healthcare, nutrition, and early childhood development.",
  generator: "CareLife Foundation",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/carelife-logo.jpg",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/carelife-logo.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/carelife-logo.jpg",
    shortcut: "/carelife-logo.jpg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CareLife Foundation",
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#10a37f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CareLife Foundation" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
