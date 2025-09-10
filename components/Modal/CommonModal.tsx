"use client";

import { useState, useEffect } from "react";

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  customFooter?: React.ReactNode;
  hideFooter?: boolean;
}

export function CommonModal({
  isOpen,
  onClose,
  title,
  content,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  size = "md",
  customFooter,
  hideFooter = false,
}: CommonModalProps) {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    }
    onClose();
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    }
    onClose();
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-xs sm:max-w-md",
    md: "max-w-xs sm:max-w-md md:max-w-lg",
    lg: "max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl",
    xl: "max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl",
    "2xl": "max-w-xs sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl"
  };

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      style={{
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity modal-backdrop"
        onClick={onClose}
        style={{ zIndex: 999998 }}
      />

      {/* Modal */}
      <div
        className={`relative w-full ${sizeClasses[size]} modal-animate`}
        style={{ zIndex: 999999 }}
      >
        <div className="bg-white rounded-lg shadow-xl dark:bg-gray-800 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6">
            {content}
          </div>

          {/* Footer */}
          {!hideFooter && (
            <div className="flex items-center justify-end gap-3 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
              {customFooter ? (
                customFooter
              ) : (
                <>
                  {secondaryButtonText && (
                    <button
                      onClick={handleSecondaryClick}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      {secondaryButtonText}
                    </button>
                  )}
                  {primaryButtonText && (
                    <button
                      onClick={handlePrimaryClick}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {primaryButtonText}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Hook để quản lý modal state
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
