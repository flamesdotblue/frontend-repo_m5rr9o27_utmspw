import React from 'react'
import { Github, Twitter } from 'lucide-react'

function SocialButtons({ onProvider }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => onProvider?.('github')}
        className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <Github className="h-4 w-4" />
        Continue with GitHub
      </button>
      <button
        type="button"
        onClick={() => onProvider?.('twitter')}
        className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <Twitter className="h-4 w-4" />
        Continue with Twitter
      </button>
    </div>
  )
}

export default SocialButtons
