import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        console.log("🔗 API: Received request to submit-to-sheets"); // cho nay chi la comment

        const formData = await request.json();
        console.log("📥 API: Received form data:", formData);

        // Thêm timestamp
        const dataWithTimestamp = {
            ...formData,
            timestamp: new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        };

        console.log("⏰ API: Data with timestamp:", dataWithTimestamp);

        // Gửi đến Google Sheets thông qua Google Apps Script
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
        console.log("🌐 API: Google Script URL:", GOOGLE_SCRIPT_URL);
        console.log("🔍 API: All environment variables:", Object.keys(process.env).filter(key => key.includes('GOOGLE')));

        if (!GOOGLE_SCRIPT_URL) {
            return NextResponse.json(
                { error: 'Google Script URL not configured' },
                { status: 500 }
            );
        }

        console.log("📤 API: Sending to Google Apps Script...");

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataWithTimestamp),
        });

        console.log("📨 API: Google Apps Script response status:", response.status);
        console.log("📨 API: Google Apps Script response ok:", response.ok);

        if (response.ok) {
            console.log("✅ API: Successfully sent to Google Sheets");
            return NextResponse.json({ success: true });
        } else {
            const errorText = await response.text();
            console.log("❌ API: Failed to submit to Google Sheets:", errorText);
            return NextResponse.json(
                { error: 'Failed to submit to Google Sheets' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error in submit-to-sheets API:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
