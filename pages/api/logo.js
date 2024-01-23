export default function handler(req, res) {
    // Assuming the image is directly in the 'public' directory
    res.status(200).json({ src: '/shotless.png' });
  }
  