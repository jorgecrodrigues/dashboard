import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Center } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { VscActivateBreakpoints } from "react-icons/vsc";
import Menu from "./Menu";
import { sidebarMenuModeStorageManager } from "../../../storage-manager";

type SidebarProps = {
  expanded: boolean;
  onDimension?: (width: number, height: number) => void;
};

export default function Sidebar({
  expanded,
  onDimension,
}: SidebarProps): React.ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleSidebarMenuMode = () => {
    sidebarMenuModeStorageManager.set(
      !isExpanded ? "expanded" : "not-expanded"
    );
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  useEffect(() => {
    const { current } = targetRef;
    onDimension?.(current?.offsetWidth ?? 0, current?.offsetHeight ?? 0);
  }, [isExpanded, onDimension]);

  return (
    <Box as="div" top={0} left={0} h="100%" position="fixed" ref={targetRef}>
      <Box
        w="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex mx={1} my={2}>
            <Center fontSize="2.5rem">
              <VscActivateBreakpoints />
            </Center>
            {isExpanded && (
              <>
                <Center ml={2} fontWeight="bold">
                  Dashboard
                </Center>
                <Center fontWeight="bold" color="red">
                  .
                </Center>
              </>
            )}
          </Flex>
        </Box>
        <Menu expanded={isExpanded} />
        <Box>
          <Button w="100%" borderRadius={0} onClick={toggleSidebarMenuMode}>
            {isExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
