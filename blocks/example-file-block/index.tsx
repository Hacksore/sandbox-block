import { FileBlockProps } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { useState } from "react";
import "./index.css";

export default function (props: FileBlockProps) {
  const [count, setCount] = useState(0)
  return (
    <Box p={4}>
      <div>Hello world</div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>add count</button>
    </Box>
  );
}