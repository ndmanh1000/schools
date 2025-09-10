"use client";

import React from "react";
import { showSuccess, showError, showInfo, showWarning, showLoading, dismissToast } from "../Common/NotificationToast";

const NotificationTest: React.FC = () => {
  const [loadingToastId, setLoadingToastId] = React.useState<string | undefined>();

  const handleTestSuccess = () => {
    showSuccess("Đây là thông báo thành công!", "Test Success");
  };

  const handleTestError = () => {
    showError("Đây là thông báo lỗi!", "Test Error");
  };

  const handleTestInfo = () => {
    showInfo("Đây là thông báo thông tin!", "Test Info");
  };

  const handleTestWarning = () => {
    showWarning("Đây là thông báo cảnh báo!", "Test Warning");
  };

  const handleTestLoading = () => {
    const id = showLoading("Đang tải...", "Test Loading");
    setLoadingToastId(id);
  };

  const handleDismissLoading = () => {
    if (loadingToastId) {
      dismissToast(loadingToastId);
      setLoadingToastId(undefined);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Test Notification Toast</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={handleTestSuccess}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Test Success
        </button>
        <button
          onClick={handleTestError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Test Error
        </button>
        <button
          onClick={handleTestInfo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Test Info
        </button>
        <button
          onClick={handleTestWarning}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Test Warning
        </button>
        <button
          onClick={handleTestLoading}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          Test Loading
        </button>
        <button
          onClick={handleDismissLoading}
          disabled={!loadingToastId}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Dismiss Loading
        </button>
      </div>
    </div>
  );
};

export default NotificationTest;
