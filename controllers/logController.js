exports.logResponseTime = (req, res, next) => {
    // Get the start time before it hits the route
    const startHrTime = process.hrtime.bigint();
    // Finish is emitted when the response is sent
    res.on("finish", () => {
        // Get the end time
        const endHrTime = process.hrtime.bigint();
        // Calculate the time in ms and log it
        const elapsedTimeInMs = Number(endHrTime - startHrTime) / 1000000.0;
        console.log(req.method + " " + req.originalUrl + " " + elapsedTimeInMs + " ms");
    });
    next();
}
