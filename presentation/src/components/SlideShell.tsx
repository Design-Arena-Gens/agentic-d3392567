import type { ReactNode } from "react";

type SlideShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footerNote?: string;
};

export function SlideShell({
  title,
  subtitle,
  children,
  footerNote,
}: SlideShellProps) {
  return (
    <div className="slide-shell">
      <header className="slide-header">
        <div className="accent-bar" aria-hidden="true" />
        <h1 className="slide-title">{title}</h1>
        {subtitle ? <p className="slide-subtitle">{subtitle}</p> : null}
      </header>
      <div className="slide-body">{children}</div>
      {footerNote ? <p className="footnote">{footerNote}</p> : null}
    </div>
  );
}
