import React, { useState } from "react";

function Dashboard() {
  const [patients, setPatients] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");

  const addPatient = () => {
    const newPatient = {
      name,
      age,
      disease,
      doctor,
    };

    setPatients([...patients, newPatient]);

    setName("");
    setAge("");
    setDisease("");
    setDoctor("");
  };

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Healthcare Management Dashboard
      </h1>

      {/* Form */}
      <div className="form-box">

        <input
          type="text"
          placeholder="Enter Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />

        <button onClick={addPatient}>
          Add Patient
        </button>

      </div>

      {/* Patient Cards */}
      <div className="card-container">

        {patients.map((patient, index) => (
          <div className="patient-card" key={index}>

            <h2>{patient.name}</h2>

            <p>
              <strong>Age:</strong> {patient.age}
            </p>

            <p>
              <strong>Disease:</strong> {patient.disease}
            </p>

            <p>
              <strong>Doctor:</strong> {patient.doctor}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;