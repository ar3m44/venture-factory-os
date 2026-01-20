export const metadata = {
  title: 'Factory OS',
  description: 'Автономная фабрика стартапов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}