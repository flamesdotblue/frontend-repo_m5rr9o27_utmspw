import React, { useMemo, useState } from 'react'
import { Mail, User, ArrowRight } from 'lucide-react'
import PasswordField from './PasswordField'
import SocialButtons from './SocialButtons'

function AuthForm() {
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '', remember: true })
  const title = useMemo(() => (mode === 'signin' ? 'Sign in to your account' : 'Create your account'), [mode])
  const subtitle = useMemo(
    () => (mode === 'signin' ? "Welcome back! Please enter your details." : "Start your journey in minutes."),
    [mode]
  )

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with real API call when backend is available
    const payload = { mode, ...form }
    console.log('Auth submit:', payload)
    alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} for ${form.email}`)
  }

  const handleProvider = (provider) => {
    alert(`Social auth with ${provider} (stub)`) // integrate with backend later
  }

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      </div>

      <div className="mb-4 rounded-xl bg-slate-50 p-1 text-sm">
        <div className="grid grid-cols-2">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`rounded-lg px-3 py-2 font-medium transition ${
              mode === 'signin' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`rounded-lg px-3 py-2 font-medium transition ${
              mode === 'signup' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Full name
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <User className="h-4 w-4" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none ring-teal-500 transition focus:ring-2"
              />
            </div>
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email address
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none ring-teal-500 transition focus:ring-2"
            />
          </div>
        </div>

        <PasswordField value={form.password} onChange={handleChange} />

        {mode === 'signin' && (
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-slate-700">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              Remember me
            </label>
            <a href="#" className="font-medium text-teal-600 hover:text-teal-700">
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          {mode === 'signin' ? 'Sign In' : 'Create Account'}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">or continue with</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <SocialButtons onProvider={handleProvider} />

        <p className="pt-2 text-center text-xs text-slate-500">
          By continuing you agree to our
          <a href="#" className="mx-1 font-medium text-slate-700 hover:underline">
            Terms
          </a>
          and
          <a href="#" className="mx-1 font-medium text-slate-700 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}

export default AuthForm
