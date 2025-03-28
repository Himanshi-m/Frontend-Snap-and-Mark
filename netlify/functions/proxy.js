export default async function handler(req, res) {
    const response = await fetch("https://third-party-api.com/data");
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all domains
    res.status(200).json(data);
}
