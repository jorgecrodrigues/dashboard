import React from "react";
import { Box } from "@chakra-ui/react";
import MenuLink from "./MenuLink";
import { FaHome, FaLayerGroup, FaInfoCircle } from "react-icons/fa";

type MenuProps = {
  expanded: boolean;
};

export default function Menu({ expanded }: MenuProps): React.ReactElement {
  return (
    <Box display="flex" flexDirection="column">
      <MenuLink
        label="Home"
        icon={<FaHome fontSize={"1.5rem"} />}
        to="/"
        activeOnlyWhenExact={true}
        expanded={expanded}
      />
      <MenuLink
        label="Dashboard"
        icon={<FaLayerGroup fontSize={"1.5rem"} />}
        to="/dashboard"
        activeOnlyWhenExact={true}
        expanded={expanded}
      />
      <MenuLink
        label="About"
        icon={<FaInfoCircle fontSize={"1.5rem"} />}
        to="/about"
        activeOnlyWhenExact={true}
        expanded={expanded}
      />
    </Box>
  );
}
