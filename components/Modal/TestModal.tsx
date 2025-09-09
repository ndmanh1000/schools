"use client";

import { CommonModal, useModal } from "./CommonModal";

export function TestModal() {
    const { isOpen, openModal, closeModal } = useModal();

    const testContent = (
        <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
                Đây là modal test để kiểm tra hoạt động.
            </p>
            <div className="p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                <p className="text-blue-800 dark:text-blue-200">
                    ✅ Modal đang hoạt động bình thường!
                </p>
            </div>
        </div>
    );

    return (
        <>
            <button
                onClick={openModal}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Test Modal
            </button>

            <CommonModal
                isOpen={isOpen}
                onClose={closeModal}
                title="Test Modal"
                content={testContent}
                primaryButtonText="OK"
                secondaryButtonText="Cancel"
                onPrimaryClick={() => console.log("Primary clicked")}
                onSecondaryClick={() => console.log("Secondary clicked")}
                size="md"
            />
        </>
    );
}
