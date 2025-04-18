import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";
import "./DetailView.css";

const DetailView = () => {
  const specialtyEmojis = {
    Transfiguration: ["🐈", "🪄"],
    Charms: ["✨","📖"],
    Potions: ["🔮","🧪"],
    History: ["📜","🕰"],
    "Defense Against the Dark Arts": ["⚔️","🕷️"],
    Herbology: ["🌿","🌼"],
    Astronomy: ["🌙","🔭"],
  };

  const houseColors = {
    Gryffindor: "#740001",
    Slytherin: "#1A472A",
    Hufflepuff: "#FFD800",
    Ravenclaw: "#0E1A40",
  };

  const houseEmojis = {
    Gryffindor: "🦁",
    Slytherin: "🐍",
    Hufflepuff: "🦡",
    Ravenclaw: "🦅"
}
  
  const specialtyDescriptions = {
    Transfiguration:
      "Students who enjoy Transfiguration are precise, detail-oriented, and a bit daring. They love a challenge and get a thrill from turning one thing into another—whether it's a matchstick into a needle or something more complex. They're often the type who secretly wants to show off just a little.",
    Charms:
      "Charms students are clever, creative, and practical. They're the ones who find joy in the small, useful spells that make life easier or more fun. They're often curious, quick learners, and good at thinking on their feet.",
    Potions:
      "These students are patient, analytical, and often a little intense. They like following instructions (most of the time) and enjoy experimenting—though sometimes their cauldrons explode. Potions kids are usually sharp and good at keeping secrets.",
    History:
      "These students are often thoughtful, reflective, and full of random facts. They appreciate the past and love connecting it to the present. While some may snooze through Binns' lectures, the true History buffs are low-key obsessed with ancient wizarding lore.",
    "Defense Against the Dark Arts":
      "Brave, bold, and a bit dramatic, these students live for excitement. They want to be prepared for anything and aren't afraid of a duel or a mysterious creature. They're often natural leaders with a strong sense of justice.",
    Herbology:
      "Calm, kind, and hands-on, Herbology students love working with magical plants. They tend to be nurturing, grounded, and good with living things. You'll often find them with dirt on their robes and a smile on their face.",
    Astronomy:
      "Dreamy, thoughtful, and sometimes a bit mysterious, Astronomy students like to look at the big picture—literally. They love the stars, the planets, and asking big questions about the universe. Night owls, through and through.",
  };

  const houseDescriptions = {
    Gryffindor:
      "Bold, brave, and a little reckless, Gryffindor students are the ones charging headfirst into adventure. They stand up for what they believe in and aren't afraid to break the rules if it's for the right cause. Big hearts, big courage.",
    Slytherin:
      "Ambitious, resourceful, and sharp, Slytherin students know what they want and how to get it. They're strategic thinkers, often a bit mysterious, and fiercely loyal to those they care about. Never underestimate them.",
    Hufflepuff:
      "Kind, loyal, and hardworking, Hufflepuffs are the dependable ones you want on your team. They're friendly, fair, and don't seek the spotlight—but they'll stand their ground when it really matters. Soft but strong.",
    Ravenclaw:
      "Curious, clever, and always asking questions, Ravenclaws are the thinkers and dreamers. They value knowledge, wit, and creativity, and you'll often find them reading, inventing, or lost in thought—probably solving a riddle for fun.",
  };

  const params = useParams();
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
  };

  return (
    <div className="detail-view"style={{backgroundColor: houseColors[student.house], color: student.house == "Hufflepuff" ? 'black' : 'white'}}>
      <h2 className="name">
        {student.name} • Year {student.year}
      </h2>
      <div className="house">
        <h3>{houseEmojis[student.house]} House of {student.house} {houseEmojis[student.house]}</h3>
        <h4>{houseDescriptions[student.house]}</h4>
      </div>
      <div className="specialty">
        <h3>
          {specialtyEmojis[student.specialty]} Specialty: {student.specialty}{" "}
          {specialtyEmojis[student.specialty]}
        </h3>
        <h4>{specialtyDescriptions[student.specialty]}</h4>
      </div>
    </div>
  );
};

export default DetailView;
