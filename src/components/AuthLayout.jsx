import React from 'react'
import { ShieldCheck } from 'lucide-react'

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col overflow-hidden rounded-none md:flex-row md:rounded-2xl md:shadow-xl">
        {/* Brand / Visual Side */}
        <div className="relative hidden w-full items-center justify-center bg-slate-900 p-10 text-slate-100 md:flex md:w-1/2">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative z-10 max-w-sm text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800">
              <ShieldCheck className="h-7 w-7 text-teal-400" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Welcome to Aegis Admin</h2>
            <p className="mt-3 text-slate-300">Secure access to your analytics, customers, and transactions. Your data is protected with modern security standards.</p>
          </div>
        </div>
        {/* Auth Content Side */}
        <div className="flex w-full items-center justify-center bg-white p-6 md:w-1/2 md:p-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
