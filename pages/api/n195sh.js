import data from "../../data/n195sh.js"

export default function handler(req, res) {
  res.status(200).json(data)
}
