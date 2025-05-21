import { ReactNode } from 'react'

interface TestLayoutProps {
  children: ReactNode
}

export default function TestLayout({ children }: TestLayoutProps) {
  return (
    <div className="bg-gray-100">
      <main>
        <div className=" mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}