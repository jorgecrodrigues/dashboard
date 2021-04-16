import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

type MenuLinkProps = {
  label: string;
  to: string;
  activeOnlyWhenExact: boolean;
  expanded: boolean;
  icon?: React.ReactElement;
};

export default function MenuLink({
  label,
  to,
  activeOnlyWhenExact,
  expanded,
  icon,
}: MenuLinkProps) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <Box
      my={1}
      px={6}
      py={3}
      backgroundColor={match ? "rgba(0,0,0,0.2)" : "transparent"}
      borderLeftWidth={2}
      borderLeftColor={match ? "rgba(0,0,0,0.8)" : "transparent"}
      borderRightRadius="20px"
      role={`menu-link${match ? "-active" : ""}`}
      aria-label={`Menu link ${label}`}
      title={label}
    >
      <Link to={to}>
        <Box
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent={expanded ? "flex-start" : "center"}
        >
          {icon ? icon : <LinkIcon boxSize="2rem" />}
          {expanded ? (
            <Box as="span" marginLeft={2}>
              {label}
            </Box>
          ) : null}
        </Box>
      </Link>
    </Box>
  );
}
