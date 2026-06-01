import { ReactNode } from 'react';
import { Link } from 'react-router';

interface GradientButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function GradientButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
}: GradientButtonProps) {
  const wrapperClasses = `gradient-btn-wrapper ${className}`;

  if (to) {
    return (
      <div className={wrapperClasses}>
        <Link to={to} className="gradient-btn-inner">
          {children}
        </Link>
      </div>
    );
  }

  if (href) {
    return (
      <div className={wrapperClasses}>
        <a href={href} className="gradient-btn-inner">
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      <button type={type} onClick={onClick} className="gradient-btn-inner">
        {children}
      </button>
    </div>
  );
}
