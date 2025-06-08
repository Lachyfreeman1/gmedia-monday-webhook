export default async function handler(req, res) {
  if (req.method === 'POST') {
    const payload = req.body;
    console.log('Received Monday payload:', payload);
    res.status(200).json({ message: 'Received!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
