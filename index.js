// Import required modules
const express = require('express');
const next = require('next');
const path = require('path');

// Determine if we are in development or production
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Prepare the Next.js app
app.prepare().then(() => {
  const server = express();

  // Serve static files from the 'public' directory
  server.use(express.static(path.join(__dirname, 'public')));

  // Handle all other routes with Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Fallback 404 handler
  server.use((req, res) => {
    res.status(404).send('Page Not Found');
  });

  // Define the port and start the server
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
  });
});

