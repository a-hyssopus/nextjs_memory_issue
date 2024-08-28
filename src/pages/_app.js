import React from "react";

import NormalRequestButton from "../components/NormalRequestButton";
import HugeRequestButton from "../components/HugeRequestButton";

export default function App() {
  return <div style={{ display: "flex", justifyContent: "space-between", width: "500px" }}>
    <NormalRequestButton />
    <HugeRequestButton />
  </div>;
}
