// Proxy for GNews API to avoid CORS issues
export default async function handler(req, res) {
  // Allow CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle browser preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests for security
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Get API key from env vars
    const apiKey = process.env.GNEWS_API_KEY;
    
    if (!apiKey) {
      res.status(500).json({ error: 'API key not configured' });
      return;
    }

    // Extract the endpoint from the URL path
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathSegments = url.pathname.split('/').filter(segment => segment);
    const endpoint = pathSegments[pathSegments.length - 1]; // Get the last segment (top-headlines or search)

    // Get all the query params from the request
    const { category, country, max, q, lang, sortby } = req.query;

    // Start building the GNews API URL
    const gnewsUrl = new URL('https://gnews.io/api/v4');
    
    // Choose endpoint: search or top-headlines
    if (endpoint === 'search' || q) {
      gnewsUrl.pathname += '/search';
      gnewsUrl.searchParams.set('q', q);
      if (lang) gnewsUrl.searchParams.set('lang', lang);
      if (sortby) gnewsUrl.searchParams.set('sortby', sortby);
    } else {
      gnewsUrl.pathname += '/top-headlines';
      if (category) gnewsUrl.searchParams.set('category', category);
      if (country) gnewsUrl.searchParams.set('country', country);
    }
    
    // Add common params
    if (max) gnewsUrl.searchParams.set('max', max);
    gnewsUrl.searchParams.set('apikey', apiKey);

    // Actually call the GNews API
    const response = await fetch(gnewsUrl.toString());
    
    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Send the data back to the client
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news data',
      details: error.message 
    });
  }
}
