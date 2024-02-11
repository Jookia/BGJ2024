"use client";

import { locations } from "@/data/locations";
import { useState } from "react";
import GameOutput from "@/components/GameOutput";

export default function Page() {
  const [player, setPlayer] = useState({
    name: "Peter",
    pronouns: "they/them",
  });
  const [location, setLocation] = useState(locations["intro"]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        BGJ2024
      </h1>
      <GameOutput
        player={player}
        setPlayer={setPlayer}
        location={location}
        setLocation={(name) =>
          setLocation(locations[name] ?? locations["lost"])
        }
      />
    </>
  );
}
