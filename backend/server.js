const express = require("express");
const cors = require("cors");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Home Route */
app.get("/", (req, res) => {
  res.send("Healthcare Backend Running Successfully");
});

/* Patient Array */
let patients = [];

/* Add Patient API */
app.post("/addPatient", (req, res) => {

  const patient = {
    name: req.body.name,
    age: req.body.age,
    disease: req.body.disease
  };

  patients.push(patient);

  res.json({
    message: "Patient Added Successfully",
    patients
  });

});

/* Get Patients API */
app.get("/patients", (req, res) => {
  res.json(patients);
});

/* Server */
const PORT = 5002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});