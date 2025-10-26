import React, { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

function PasswordField({ label = 'Password', value, onChange, name = 'password', placeholder = 'Enter your password', required = true }) {
  const [show, setShow] = useState(false)
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <Lock className="h-4 w-4" />
        </span>
        <input
          id={name}
          name={name}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm outline-none ring-teal-500 transition focus:ring-2"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}

export default PasswordField
