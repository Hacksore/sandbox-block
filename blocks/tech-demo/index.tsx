import { FileBlockProps } from "@githubnext/blocks";
import { Box } from "@primer/react";
import ReactSkinview3d from "react-skinview3d";
import "./index.css";

export default function (_props: FileBlockProps) {
  return (
    <Box p={4}>
      <h2>ReactSkinview3d</h2>
      <ReactSkinview3d
        skinUrl="https://minotar.net/skin/Hacksore"
        height="500"
        width="500"
      />
    </Box>
  );
}
