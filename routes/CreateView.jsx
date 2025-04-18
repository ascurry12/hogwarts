import React from "react";
import { useState } from "react";
import { supabase } from "../src/client";

import "./CreateView.css";

const CreateView = () => {
  const [student, setStudent] = useState({
    name: "",
    house: "Gryffindor",
    year: 1,
    specialty: "Transfiguration",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(name, value);
    console.log(student);
  };

  const createStudent = async (event) => {
    event.preventDefault();

    await supabase
      .from("Students")
      .insert({
        name: student.name,
        house: student.house,
        specialty: student.specialty,
        year: student.year,
      })
      .select();

    window.location = "/student/directory";
  };

  return (
    <div className="create-view">
      <h2>Student Enrollment</h2>
      <form>
        <div>
          <label htmlFor="name"><strong>Name</strong></label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="house"><strong>House</strong></label>
          <div className="houses">
            <label htmlFor="gryffindor">
              Gryffindor{" "}
              <input
                type="radio"
                id="gryffindor"
                name="house"
                value="Gryffindor"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="slytherin">
              Slytherin{" "}
              <input
                type="radio"
                id="slytherin"
                name="house"
                value="Slytherin"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="hufflepuff">
              Hufflepuff{" "}
              <input
                type="radio"
                id="hufflepuff"
                name="house"
                value="Hufflepuff"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="ravenclaw">
              Ravenclaw{" "}
              <input
                type="radio"
                id="ravenclaw"
                name="house"
                value="Ravenclaw"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <br />

        <div>
          <label htmlFor="year"><strong>Year</strong></label>
          <select id="year" name="year" onChange={handleChange}>
            <option value={1}>1st year</option>
            <option value={2}>2nd year</option>
            <option value={3}>3rd year</option>
            <option value={4}>4th year</option>
            <option value={5}>5th year</option>
            <option value={6}>6th year</option>
            <option value={7}>7th year</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="specialty"><strong>Specialty</strong></label>
          <select id="specialty" name="specialty" onChange={handleChange}>
            <option value="Transfiguration">Transfiguration</option>
            <option value="Charms">Charms</option>
            <option value="Potions">Potions</option>
            <option value="History">History of Magic</option>
            <option value="Defense Against the Dark Arts">
              Defense Against the Dark Arts
            </option>
            <option value="Herbology">Herbology</option>
            <option value="Astronomy">Astronomy</option>
          </select>
        </div>

        <br />
        <br />

        <input type="submit" value="Enroll" onClick={createStudent} />
      </form>
    </div>
  );
};

export default CreateView;
