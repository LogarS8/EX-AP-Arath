import fs from "fs/promises";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getEdificaciones(req, res);
    default:
      return res.status(400).json({ message: "Metodo erroneo" });
  }
}

const getEdificaciones = async (req, res) => {
  const data = await fs
    .readFile("./util/apiHuli.json")
    .then((data) => JSON.parse(data));

  const { edificaciones } = data;

  res.status(200).json(edificaciones);
};
