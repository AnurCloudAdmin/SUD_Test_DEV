window.download_speed = 0; // Initialize
        window.upload_speed = 0;   // Initialize

        // const DOWNLOAD_TEST_FILE_URL = '1mb_test_file.bin'; // Make sure this file exists on your server
        // const FILE_SIZE_MB = 1;
        // const FILE_SIZE_BYTES = FILE_SIZE_MB * 1024 * 1024; // 1 MB in bytes
        // const UPLOAD_TEST_BYTES = 1024 * 1024; // 1 MB of dummy data for upload

        const DOWNLOAD_TEST_FILE_URL = '100kb_test_file.bin'; // Make sure this file exists on your server
        const FILE_SIZE_MB = 0.1; // Changed to 0.1 MB (100 KB)
        const FILE_SIZE_BYTES = FILE_SIZE_MB * 1024 * 1024; // This correctly calculates 102400 bytes
        const UPLOAD_TEST_BYTES = 100 * 1024; // 100 KB of dummy data for upload
        
        
        

        async function measureDownloadSpeed() {
            try {
                const startTime = performance.now();
                const response = await fetch(DOWNLOAD_TEST_FILE_URL, { cache: 'no-store' }); // Prevent caching
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                await response.blob(); // Consume the body to ensure full download
                const endTime = performance.now();

                const durationSeconds = (endTime - startTime) / 1000;
                const speedBps = FILE_SIZE_BYTES / durationSeconds;
                const speedMbps = ((speedBps * 8) / (1024 * 1024)).toFixed(2); // Convert bytes/sec to Mbits/sec and limit to 2 decimal places
                window.download_speed = speedMbps;
            } catch (error) {
                window.download_speed = 0; // Reset on error
            }
        }

        async function measureUploadSpeed() {
            try {
                const dummyData = new Blob([new ArrayBuffer(UPLOAD_TEST_BYTES)], { type: 'application/octet-stream' });

                const startTime = performance.now();
                const response = await fetch('/plvc/anurone_st_up.php', { // You need a server endpoint to receive this
                    method: 'POST',
                    body: dummyData,
                    headers: {
                        'Content-Type': 'application/octet-stream',
                    },
                    cache: 'no-store'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Assuming your server sends back a small confirmation, you might await response.text()
                const endTime = performance.now();

                const durationSeconds = (endTime - startTime) / 1000;
                const speedBps = UPLOAD_TEST_BYTES / durationSeconds;
                const speedMbps = ((speedBps * 8) / (1024 * 1024)).toFixed(2); // Convert bytes/sec to Mbits/sec and limit to 2 decimal places
                window.upload_speed = speedMbps;
            } catch (error) {
                window.upload_speed = 0; // Reset on error
            }
        }

        async function call_anurone_st() {
            await measureDownloadSpeed();
            await measureUploadSpeed();
        }

        // Run the speed test every 5 seconds (adjust as needed)
        // const intervalId = setInterval(call_anurone_st, 5000);
        // // Optional: Clear interval when page is about to be unloaded (though not strictly necessary as it will cease)
        // window.addEventListener('beforeunload', () => {
        //     clearInterval(intervalId);
        // });

        // Initial run
        // call_anurone_st();