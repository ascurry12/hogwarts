import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../src/client";

import "./CreateView.css";

const EditView = () => {
  const params = useParams();
  const [currentInfo, setCurrentInfo] = useState({
    name: null,
    house: null,
    year: null,
    specialty: null,
  });

  const [student, setStudent] = useState({
    name: null,
    house: null,
    year: null,
    specialty: null,
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    const { data, error } = await supabase
      .from("Students")
      .select()
      .eq("id", params.id);

    setStudent((prev) => {
      return {
        ...prev,
        name: data[0].name,
        house: data[0].house,
        year: data[0].year,
        specialty: data[0].specialty,
      };
    });

    setCurrentInfo((prev) => {
      return {
        ...prev,
        name: data[0].name,
        house: data[0].house,
        year: data[0].year,
        specialty: data[0].specialty,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const editStudent = async (event) => {
    event.preventDefault();
    console.log(student);
    await supabase
      .from("Students")
      .update({
        name: student.name,
        house: student.house,
        year: student.year,
        specialty: student.specialty,
      })
      .eq("id", params.id);

    window.location = "/student/directory";
  };

  const deleteStudent = async (event) => {
    event.preventDefault();

    await supabase.from("Students").delete().eq("id", params.id);
    window.location = "/student/directory";
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <div className="current-info">
        <h3>Current Information</h3>
        <h4>Name: {currentInfo.name} • House: {currentInfo.house}</h4>
        <h4>Year: {currentInfo.year} • Specialty: {currentInfo.specialty}</h4>
      </div>
      <form>
        <div>
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
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
          <label htmlFor="house">
            <strong>House</strong>
          </label>
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
          <label htmlFor="year">
            <strong>Year</strong>
          </label>
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
          <label htmlFor="specialty">
            <strong>Specialty</strong>
          </label>
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
        <div className="buttons">
          <input type="submit" value="Edit" onClick={editStudent} style={{marginRight: 10}}/>
          <Link
          className="unenroll"
            style={{ color: "white", marginLeft: 10}}
            onClick={deleteStudent}
            to="/"
          >
            Unenroll
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditView;
