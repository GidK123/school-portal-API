// Centralized Express Error Middleware (Place after all app routes)
app.use((err, req, res, next) => {
  // Log internal technical details to server console for debugging
  console.error("[SERVER ERROR]:", err.stack || err.message);

  // Determine appropriate status code and human-readable message
  const statusCode = err.statusCode || 500;

  // Custom operational errors get passed along; unhandled exceptions get a safe fallback message
  const userMessage = err.isOperational
    ? err.message
    : "An unexpected server error occurred. Please try again later.";

  res.status(statusCode).json({
    success: false,
    message: userMessage,
  });
});
