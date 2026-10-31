"use client";

import { useEffect, useId, useRef } from "react";

// Native modal dialog, open while mounted: render it when there is something to show and unmount it in onClose.
// Esc closes it and fires "close"; a click on the backdrop lands on the dialog element itself.
export default function Modal({
  eyebrow,
  title,
  onClose,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  onClose: () => void;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    // Strict Mode runs effects twice in development; a second showModal() on an open dialog can throw.
    if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="admin-modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="admin-modal-body">
        <header className="admin-modal-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h3 id={titleId}>{title}</h3>
          </div>
          <button className="admin-modal-close" type="button" aria-label="Close" onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>
        {children}
        <footer className="admin-modal-footer">
          <button className="btn-outline" type="button" onClick={close}>
            Close
          </button>
          {actions}
        </footer>
      </div>
    </dialog>
  );
}
