// pages/api/app.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../components/App';

export default function handler(req, res) {
  // Render the App component to HTML on the server side
  const appHtml = ReactDOMServer.renderToString(<App />);

  // Return the rendered HTML
  res.status(200).send(appHtml);
}
