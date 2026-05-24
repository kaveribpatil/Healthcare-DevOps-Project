import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {

  const [doctor, setDoctor] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");

  const [patients, setPatients] = useState([]);

  /* Fetch Patients */
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5002/patients"
      );

      setPatients(response.data);

    } catch (error) {
      console.log(error);
    }

  };

  /* Add Patient */
  const addPatient = async () => {

    const patientData = {
      doctor,
      name,
      age,
      disease
    };

    try {

      const response = await axios.post(
        "http://localhost:5002/addPatient",
        patientData
      );

      alert(response.data.message);

      fetchPatients();

      setDoctor("");
      setName("");
      setAge("");
      setDisease("");

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1>🏥 Healthcare Dashboard</h1>

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Patient Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
        />

        <button onClick={addPatient}>
          Add Patient
        </button>

        <h2>Patient Records</h2>

        {
          patients.map((patient, index) => (

            <div key={index} className="patient-card">

              <p><b>Doctor:</b> {patient.doctor}</p>
              <p><b>Patient:</b> {patient.name}</p>
              <p><b>Age:</b> {patient.age}</p>
              <p><b>Disease:</b> {patient.disease}</p>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Dashboard;