import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: 'primary' | 'outline' }
type LinkProps = { to: string; children: ReactNode; variant?: 'primary' | 'outline'; className?: string }

export function Button({ children, variant = 'primary', className = '', ...props }: Props) {
  return <button className={`button button--${variant} ${className}`} {...props}>{children}</button>
}

export function ButtonLink({ to, children, variant = 'primary', className = '' }: LinkProps) {
  return <Link className={`button button--${variant} ${className}`} to={to}>{children}</Link>
}
