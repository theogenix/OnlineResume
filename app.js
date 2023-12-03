const express = require("express");
const PORT = 8080;
const app = express();
const path = require("path");
const dataExperiences_path = "../project-cv/src/assets/dataExperiences.json";
const dataEducations_path = "../project-cv/src/assets/dataEducations.json";
const dataSkills_path = "../project-cv/src/assets/dataSkills.json";
const dataHobbies_path = "../project-cv/src/assets/dataHobbies.json";
const dataFooters_path = "../project-cv/src/assets/dataFooters.json";
const dataAccueils_path = "../project-cv/src/assets/dataAccueils.json";
const fs = require("fs");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/admin/experiences", (req, res) => {
  res.sendFile("/JavaCV/project-cv/src/assets/dataExperiences.json", {
    root: path.join(__dirname, "../../"),
  });
});
app.get("/admin/educations", (req, res) => {
  res.sendFile("/JavaCV/project-cv/src/assets/dataEducations.json", {
    root: path.join(__dirname, "../../"),
  });
});
app.get("/admin/hobbies", (req, res) => {
  res.sendFile("/JavaCV/project-cv/src/assets/dataHobbies.json", {
    root: path.join(__dirname, "../../"),
  });
});
app.get("/admin/skills", (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../JavaCV/project-cv/src/assets/dataSkills.json"
  );
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      res.status(500).send("Erreur serveur");
      return;
    }
    let jsonData = JSON.parse(data);
    const sortedData = jsonData.sort((a, b) => {
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    });
    res.json(sortedData);
  });
});
app.get("/admin/footers", (req, res) => {
  res.sendFile("/JavaCV/project-cv/src/assets/dataFooters.json", {
    root: path.join(__dirname, "../../"),
  });
});
app.get("/admin/accueils", (req, res) => {
  res.sendFile("/JavaCV/project-cv/src/assets/dataAccueils.json", {
    root: path.join(__dirname, "../../"),
  });
});

app.post("/admin/experiences", (req, res) => {
  const newData = req.body;
  let data = JSON.parse(fs.readFileSync(dataExperiences_path));
  data.push(newData);
  fs.writeFileSync(dataExperiences_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});
app.post("/admin/educations", (req, res) => {
  let newData = req.body;
  let data = JSON.parse(fs.readFileSync(dataEducations_path));
  data.push(newData);
  fs.writeFileSync(dataEducations_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});
app.post("/admin/hobbies", (req, res) => {
  let newData = req.body;
  let data = JSON.parse(fs.readFileSync(dataHobbies_path));
  data.push(newData);
  fs.writeFileSync(dataHobbies_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});
app.post("/admin/skills", (req, res) => {
  let newData = req.body;
  let data = JSON.parse(fs.readFileSync(dataSkills_path));
  data.push(newData);
  fs.writeFileSync(dataSkills_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});
app.post("/admin/footers", (req, res) => {
  let newData = req.body;
  let data = JSON.parse(fs.readFileSync(dataFooters_path, null, "\t"));
  data.push(newData);
  fs.writeFileSync(dataFooters_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});
app.post("/admin/accueils", (req, res) => {
  let newData = req.body;
  let data = JSON.parse(fs.readFileSync(dataAccueils_path, null, "\t"));
  let index = 0;
  if (index !== -1) {
    if (!data[index].recommendations) {
      data[index].recommendations = [];
    }
  }
  data[index].recommendations.push({
    author: newData["recommendations.author"],
    position: newData["recommendations.position"],
    text: newData["recommendations.text"],
  });
  fs.writeFileSync(dataAccueils_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});

app.put("/admin/experiences", (req, res) => {
  let newData = req.body;
  fs.writeFileSync(dataExperiences_path, JSON.stringify(newData, null, "\t"));
  res.send(newData);
});
app.put("/admin/educations", (req, res) => {
  let newData = req.body;
  console.log(newData);
  fs.writeFileSync(dataEducations_path, JSON.stringify(newData, null, "\t"));
  res.send(newData);
});
app.put("/admin/skills", (req, res) => {
  let newData = req.body;
  fs.writeFileSync(dataSkills_path, JSON.stringify(newData, null, "\t"));
  res.send(newData);
});
app.put("/admin/hobbies", (req, res) => {
  let newData = req.body;
  console.log(newData);
  fs.writeFileSync(dataHobbies_path, JSON.stringify(newData, null, "\t"));
  res.send(newData);
});
app.put("/admin/footers", (req, res) => {
  let newData = req.body;
  fs.writeFileSync(dataFooters_path, JSON.stringify(newData, null, "\t"));
  res.send(newData);
});
app.put("/admin/accueils", (req, res) => {
  let newData = req.body;
  fs.writeFileSync(dataAccueils_path, JSON.stringify(newData, null, "\t"));
  res.send(newData);
});

app.delete("/admin/experiences/:id", (req, res) => {
  let idToDelete = req.params.id;
  //console.log(idToDelete);
  let data = JSON.parse(fs.readFileSync(dataExperiences_path, null, "\t"));
  if (idToDelete !== -1) {
    data.splice(idToDelete, 1);
    fs.writeFileSync(dataExperiences_path, JSON.stringify(data, null, "\t"));
    res.send(data);
  } else {
    console.log(`Aucun objet avec l'ID ${idToDelete} n'a été trouvé.`);
  }
});
app.delete("/admin/educations/:id", (req, res) => {
  let idToDelete = req.params.id;
  //console.log(idToDelete);
  let data = JSON.parse(fs.readFileSync(dataEducations_path, null, "\t"));
  if (idToDelete !== -1) {
    data.splice(idToDelete, 1);
    fs.writeFileSync(dataEducations_path, JSON.stringify(data, null, "\t"));
    res.send(data);
  } else {
    console.log(`Aucun objet avec l'ID ${idToDelete} n'a été trouvé.`);
  }
});
app.delete("/admin/skills/:id", (req, res) => {
  let idToDelete = req.params.id;
  //console.log(idToDelete);
  let data = JSON.parse(fs.readFileSync(dataSkills_path, null, "\t"));
  let sortedData = data.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });
  //console.log(data)
  //console.log(sortedData)
  if (idToDelete !== -1) {
    sortedData.splice(idToDelete, 1);
    fs.writeFileSync(dataSkills_path, JSON.stringify(sortedData, null, "\t"));
    res.send(sortedData);
  } else {
    console.log(`Aucun objet avec l'ID ${idToDelete} n'a été trouvé.`);
  }
});
app.delete("/admin/hobbies/:id", (req, res) => {
  let idToDelete = req.params.id;
  //console.log(idToDelete);
  let data = JSON.parse(fs.readFileSync(dataHobbies_path, null, "\t"));
  if (idToDelete !== -1) {
    data.splice(idToDelete, 1);
    fs.writeFileSync(dataHobbies_path, JSON.stringify(data, null, "\t"));
    res.send(data);
    console.log("delete effectué");
  } else {
    console.log(`Aucun objet avec l'ID ${idToDelete} n'a été trouvé.`);
  }
});
app.delete("/admin/footers/:id", (req, res) => {
  let idToDelete = req.params.id;
  //console.log(idToDelete);
  let data = JSON.parse(fs.readFileSync(dataFooters_path, null, "\t"));
  if (idToDelete !== -1) {
    data.splice(idToDelete, 1);
    fs.writeFileSync(dataFooters_path, JSON.stringify(data, null, "\t"));
    res.send(data);
  } else {
    console.log(`Aucun objet avec l'ID ${idToDelete} n'a été trouvé.`);
  }
});
app.delete("/admin/accueils/:id", (req, res) => {
  let id = parseInt(req.params.id);
  //console.log(id);
  let data = JSON.parse(fs.readFileSync(dataAccueils_path, "utf8"));
  data[0].recommendations.splice(id, 1);
  fs.writeFileSync(dataAccueils_path, JSON.stringify(data, null, "\t"));
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
