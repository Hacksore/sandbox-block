import { FileBlockProps } from "@githubnext/blocks";
import { Box } from "@primer/react";
import ReactSkinview3d from "react-skinview3d";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;

  console.log({ context, content, metadata, onUpdateMetadata });

  return (
    <Box p={4}>
      <ReactSkinview3d
        skinUrl="https://minotar.net/skin/Hacksore"
        height="500"
        width="500"
      />
    </Box>
  );
}
