// Google Sheets API integration
export interface FormData {
    name: string;
    position: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
    timestamp: string;
    source: string; // "buy" hoặc "register"
}

// Function này không được sử dụng, chỉ để tham khảo
// export async function submitToGoogleSheets(formData: FormData): Promise<boolean> {
//     // Function cũ - không sử dụng
// }

// Alternative: Sử dụng Google Sheets API trực tiếp (cần authentication)
export async function submitToGoogleSheetsAPI(formData: FormData): Promise<boolean> {
    try {
        console.log("🔄 GoogleSheets: Calling API route...");

        const response = await fetch('/api/submit-to-sheets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log("📡 GoogleSheets: API response status:", response.status);
        console.log("📡 GoogleSheets: API response ok:", response.ok);

        if (response.ok) {
            const result = await response.json();
            console.log("✅ GoogleSheets: API success:", result);
            return true;
        } else {
            const errorText = await response.text();
            console.error('❌ GoogleSheets: Failed to submit:', response.status, errorText);
            return false;
        }
    } catch (error) {
        console.error('❌ GoogleSheets: Error submitting:', error);
        return false;
    }
}
