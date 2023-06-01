// Creates API route for Azure to use for health checking of app
export default function handler(req, res) {
    res.status(200).json({ "status": "ok" })
}