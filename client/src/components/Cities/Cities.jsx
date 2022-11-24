import React from "react";

const cities = [
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Eindhoven",
  "Utrecht",
  "Groningen",
  "Tilburg",
  "Breda",
  "Nijmegen",
  "Maastricht",
  "Leiden",
  "Haarlem",
  "Delft",
  "Apeldoorn",
  "Lelystad",
  "'s-Hertogenbosch",
  "Amersfoort",
  "Zaanstad",
  "Zwolle",
].sort();

const Cities = () => {
  return (
    <datalist id="cities">
      {cities.map((city, index) => (
        <option value={city} key={index} />
      ))}
    </datalist>
  );
};

export default Cities;
