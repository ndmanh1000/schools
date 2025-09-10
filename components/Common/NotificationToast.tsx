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

  switch (type) {
    case "success":
      return toast.success(fullMessage, { duration });
    case "error":
      return toast.error(fullMessage, { duration });
    case "warning":
      return toast(fullMessage, {
        icon: "⚠️",
        duration,
        style: {
          background: "#FEF3C7",
          color: "#92400E",
          border: "1px solid #F59E0B",
        },
      });
    case "loading":
      return toast.loading(fullMessage);
    default:
      return toast(fullMessage, { duration });
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
