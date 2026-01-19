        window.download_speed = 0.00;
        window.upload_speed = 0.00;
        const anurone_DOWNLOAD_TEST_FILE_SIZE_MB = 500;
        const anurone_UPLOAD_TEST_FILE_SIZE_MB = 500;
        const anurone_UPDATE_INTERVAL_MS = 5000;
        const anurone_DOWNLOAD_URL = `https://speed.cloudflare.com/__down?bytes=${anurone_DOWNLOAD_TEST_FILE_SIZE_MB * 1024 * 1024}`;
        const anurone_UPLOAD_URL = 'https://dev1.anurcloud.com/dev_anurone/speed/anurone_st_up.php';


        // --- Utility Functions ---
        function bytesToMbps(bytesPerSecond) {
            return (bytesPerSecond * 8) / (1000 * 1000); // Convert Bytes/s to Megabits/s (Mbps)
        }

        // --- Test Runner Function ---
        async function runTest(type, url, sizeInBytes) {
            let totalBytesProcessed = 0;
            let startTime = performance.now();
            let lastUpdateTime = startTime;
            let lastBytesProcessed = 0;
            let xhr = new XMLHttpRequest();

            return new Promise((resolve, reject) => {
                xhr.open(type === 'download' ? 'GET' : 'POST', url, true);
                xhr.responseType = type === 'download' ? 'arraybuffer' : '';

                // Add logging for readyState changes
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === XMLHttpRequest.OPENED) {
                        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Test: Request opened.`);
                    } else if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
                        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Test: Headers received.`);
                    } else if (xhr.readyState === XMLHttpRequest.LOADING) {
                        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Test: Loading data...`);
                    }
                };


                const progressHandler = (event) => {
                    // Debugging: Log when onprogress fires and if lengthComputable is true
                    // console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Test: onprogress fired. loaded: ${event.loaded}, lengthComputable: ${event.lengthComputable}`);

                    if (event.lengthComputable) {
                        totalBytesProcessed = event.loaded;

                        const currentTime = performance.now();
                        const timeElapsedSinceStart = currentTime - startTime;
                        const timeElapsedSinceLastUpdate = currentTime - lastUpdateTime;

                        // Calculate and log current speed periodically
                        if (timeElapsedSinceLastUpdate >= anurone_UPDATE_INTERVAL_MS) {
                            const bytesSinceLastUpdate = totalBytesProcessed - lastBytesProcessed;
                            const currentSpeed = bytesToMbps((bytesSinceLastUpdate / timeElapsedSinceLastUpdate) * 1000);
                           if (type === 'download') {
                                window.download_speed = parseFloat(currentSpeed.toFixed(2));
                                // console.log(`Download Current Speed (window.download_speed): ${window.download_speed} Mbps`);
                            } else {
                                window.upload_speed = parseFloat(currentSpeed.toFixed(2));
                                // console.log(`Upload Current Speed (window.upload_speed): ${window.upload_speed} Mbps`);
                            }

                            lastUpdateTime = currentTime;
                            lastBytesProcessed = totalBytesProcessed;
                        }

                        // Always log average speed
                        if (timeElapsedSinceStart > 0) {
                            const averageSpeed = bytesToMbps((totalBytesProcessed / timeElapsedSinceStart) * 1000);
                            // console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Average Speed: ${averageSpeed.toFixed(2)} Mbps`);
                        }
                    } else {
                        // Debugging: Log if lengthComputable is false
                        console.warn(`${type.charAt(0).toUpperCase() + type.slice(1)} Test: event.lengthComputable is false. Progress might not be accurate.`);
                        // Even if not computable, we can still track loaded bytes if needed
                        totalBytesProcessed = event.loaded;
                        const currentTime = performance.now();
                        const timeElapsedSinceStart = currentTime - startTime;
                        if (timeElapsedSinceStart > 0 && totalBytesProcessed > 0) {
                            const currentSpeed = bytesToMbps((totalBytesProcessed / timeElapsedSinceStart) * 1000);
                            // console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} (Partial) Average Speed: ${currentSpeed.toFixed(2)} Mbps`);
                             if (type === 'download') {
                                window.download_speed = parseFloat(currentSpeed.toFixed(2));
                                // console.log(`Download (Partial) Average Speed (window.download_speed): ${window.download_speed} Mbps`);
                            } else {
                                window.upload_speed = parseFloat(currentSpeed.toFixed(2));
                                // console.log(`Upload (Partial) Average Speed (window.upload_speed): ${window.upload_speed} Mbps`);
                            }
                        }
                    }
                };

                // Attach progress handler
                if (type === 'download') {
                    xhr.onprogress = progressHandler;
                } else { // type === 'upload'
                    xhr.upload.onprogress = progressHandler;
                }

                // Completion handler
                xhr.onload = () => {
                    const endTime = performance.now();
                    const totalTime = endTime - startTime;

                    if (totalTime > 0) {
                        const finalBytes = type === 'download' ? totalBytesProcessed : sizeInBytes; // Use totalBytesProcessed for download, expected size for upload
                        const finalAverageSpeed = bytesToMbps((finalBytes / totalTime) * 1000);
                        if (type === 'download') {
                            window.download_speed = parseFloat(finalAverageSpeed.toFixed(2));
                            // console.log(`--- Download Test Complete! ---`);
                            // console.log(`Final Average Download Speed (window.download_speed): ${window.download_speed} Mbps`);
                        } else {
                            window.upload_speed = parseFloat(finalAverageSpeed.toFixed(2));
                            // console.log(`--- Upload Test Complete! ---`);
                            // console.log(`Final Average Upload Speed (window.upload_speed): ${window.upload_speed} Mbps`);
                        }
                        resolve(finalAverageSpeed);
                    } else {
                        console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} Test Error: Completed too quickly or with no data. Total Bytes: ${totalBytesProcessed}`);
                        if (type === 'download') {
                            window.download_speed = 0.00;
                        } else {
                            window.upload_speed = 0.00;
                        }
                        reject(new Error(`${type} test completed too quickly or with no data.`));
                    }
                };

                // Error handler
                xhr.onerror = () => {
                   console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} Test Error: Failed. Check network or server endpoint. Status: ${xhr.status}, StatusText: ${xhr.statusText}`);
                    if (type === 'download') {
                        window.download_speed = 0.00;
                    } else {
                        window.upload_speed = 0.00;
                    }
                    reject(new Error(`${type} test failed. Check network or server endpoint.`));
                };

                // Abort handler
                xhr.onabort = () => {
                    console.warn(`${type.charAt(0).toUpperCase() + type.slice(1)} Test Aborted.`);
                    if (type === 'download') {
                        window.download_speed = 0.00;
                    } else {
                        window.upload_speed = 0.00;
                    }                    reject(new Error(`${type} test aborted.`));
                };

                // Send the request
                if (type === 'download') {
                    xhr.send();
                } else { // type === 'upload'
                    const data = new Uint8Array(sizeInBytes);
                    for (let i = 0; i < sizeInBytes; i++) {
                        data[i] = Math.floor(Math.random() * 256);
                    }
                    xhr.send(new Blob([data]));
                }
            });
        }

        // window.onload = async () => {
        //     console.log("Starting automatic speed tests...");
            
        //     // Run Download Test
        //     try {
        //         // await runTest(
        //         //     'download',
        //         //     anurone_DOWNLOAD_URL,
        //         //     anurone_DOWNLOAD_TEST_FILE_SIZE_MB * 1024 * 1024
        //         // );
        //         await Promise.all([
        //             runTest(
        //                 'download',
        //                 anurone_DOWNLOAD_URL,
        //                 anurone_DOWNLOAD_TEST_FILE_SIZE_MB * 1024 * 1024
        //             ),
        //             runTest(
        //                 'upload',
        //                 anurone_UPLOAD_URL,
        //                 anurone_UPLOAD_TEST_FILE_SIZE_MB * 1024 * 1024
        //             )
        //         ]);
        //     } catch (error) {
        //         console.error(`Download/Upload Test failed: ${error.message}`);
        //         console.log("\nSome automatic speed tests may not have completed.");
        //     }

        // };



         async function runAnuroneSpeedTest() {
            console.log("Starting Anurone speed tests...");

            // Reset speeds to 0 before starting new tests
            window.download_speed = 0.00;
            window.upload_speed = 0.00;

            try {
                // Run download and upload tests concurrently using Promise.all
                await Promise.all([
                    runTest(
                        'download',
                        anurone_DOWNLOAD_URL,
                        anurone_DOWNLOAD_TEST_FILE_SIZE_MB * 1024 * 1024
                    ),
                    runTest(
                        'upload',
                        anurone_UPLOAD_URL,
                        anurone_UPLOAD_TEST_FILE_SIZE_MB * 1024 * 1024
                    )
                ]);
                console.log("Anurone speed tests completed successfully.");
                // Return the final results
                return {
                    download_speed: window.download_speed,
                    upload_speed: window.upload_speed
                };
            } catch (error) {
                console.error(`Anurone Speed Test failed: ${error.message}`);
                console.error("Some Anurone speed tests may not have completed.");
                // Re-throw the error so calling code can handle it
                throw error;
            }
        }

        // Call the speed test function automatically when the page loads
        window.onload = async () => {
            console.log("Page loaded. Initiating speed test...");
            try {
                const results = await runAnuroneSpeedTest();
                console.log(`Final Results: Download: ${results.download_speed} Mbps, Upload: ${results.upload_speed} Mbps`);
            } catch (error) {
                // Error already logged by runAnuroneSpeedTest, but can add more specific handling here if needed
                console.error('Failed to complete speed test:', error);
            }
        };