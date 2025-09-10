"use client";

import toast from "react-hot-toast";

export interface NotificationOptions {
  title?: string;
  message: string;
  type?: "success" | "error" | "warning" | "info" | "loading";
  duration?: number;
}

export const showNotification = ({
  title,
  message,
  type = "info",
  duration = 5000,
}: NotificationOptions) => {
  const fullMessage = title ? `${title}: ${message}` : message;

  const baseStyle = {
    zIndex: 9999999,
    fontSize: '14px',
    fontWeight: '500',
    maxWidth: '400px',
    padding: '16px 20px',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(15px)',
  };

  switch (type) {
    case "success":
      return toast.success(fullMessage, { 
        duration,
        style: {
          ...baseStyle,
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: '#065F46',
        }
      });
    case "error":
      return toast.error(fullMessage, { 
        duration,
        style: {
          ...baseStyle,
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#991B1B',
        }
      });
    case "warning":
      return toast(fullMessage, {
        icon: "⚠️",
        duration,
        style: {
          ...baseStyle,
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: '#92400E',
        },
      });
    case "loading":
      return toast.loading(fullMessage, {
        style: {
          ...baseStyle,
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          color: '#1E40AF',
        }
      });
    default:
      return toast(fullMessage, { 
        duration,
        style: {
          ...baseStyle,
          background: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(209, 213, 219, 0.3)',
          color: '#374151',
        }
      });
  }
};

// Convenience functions
export const showSuccess = (message: string, title?: string) => {
  showNotification({ message, title, type: "success" });
};

export const showError = (message: string, title?: string) => {
  showNotification({ message, title, type: "error" });
};

export const showWarning = (message: string, title?: string) => {
  showNotification({ message, title, type: "warning" });
};

export const showInfo = (message: string, title?: string) => {
  showNotification({ message, title, type: "info" });
};

export const showLoading = (message: string, title?: string) => {
  return showNotification({ message, title, type: "loading" });
};

export const dismissToast = (toastId: string) => {
  toast.dismiss(toastId);
};
