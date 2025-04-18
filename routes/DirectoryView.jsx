import React from "react";
import { supabase } from "../src/client";
import { useState, useEffect } from "react";
import Card from "../src/Components/Card";
import "./DirectoryView.css";

const DirectoryView = (props) => {
  const houseColors = {
    Gryffindor: "#740001",
    Slytherin: "#1A472A",
    Hufflepuff: "#FFD800",
    Ravenclaw: "#0E1A40",
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await supabase
        .from("Students")
        .select()
        .order("created_at", { ascending: false });

      // set state of posts
      setStudents(data);
    };

    setStudents(props.data);
    fetchStudents();
  }, [props]);
  return (
    <div className="enrolled-students">
      {students && students.length > 0 ? (
        students.map((student, index) => (
          <Card
            key={student.id}
            id={student.id}
            name={student.name}
            house={student.house}
            specialty={student.specialty}
            year={student.year}
            color={houseColors[student.house]}
          />
        ))
      ) : (
        <h2>{"No Students Enrolled"}</h2>
      )}
    </div>
  );
};

export default DirectoryView;
