import { ReactNode } from 'react';
import { Link } from 'react-router';

interface AnimatedButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline';
  className?: string;
}

export function AnimatedButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    px-8 py-4 tracking-wider text-sm font-medium
    overflow-hidden cursor-pointer z-[1]
    transition-colors duration-300
    ${variant === 'primary'
      ? 'bg-primary text-primary-foreground border-2 border-primary hover:text-primary-foreground'
      : 'bg-transparent text-foreground border-2 border-foreground hover:text-background'
    }
    rounded-full
    before:absolute before:content-[''] before:w-[150px] before:h-[200px]
    before:rounded-[50%] before:z-[-1] before:transition-all before:duration-300
    ${variant === 'primary'
      ? 'before:bg-primary-foreground/20'
      : 'before:bg-foreground'
    }
    before:top-full before:left-full
    hover:before:top-[-30px] hover:before:left-[-30px]
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
