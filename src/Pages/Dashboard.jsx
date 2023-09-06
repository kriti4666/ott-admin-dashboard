import React, { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Collapse,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import logo from "../Assets/Img/logo-db.png";
import { CiUser } from "react-icons/ci";
import { VscDashboard, VscHome } from "react-icons/vsc";
import {
  TbCategory2,
  TbSettingsAutomation,
  TbSettingsPlus,
} from "react-icons/tb";
import {
  RiAdminLine,
  RiCoupon3Line,
  RiMovie2Line,
  RiSettings3Line,
} from "react-icons/ri";
import { BiSlideshow, BiTransferAlt, BiUser } from "react-icons/bi";
import {
  MdLanguage,
  MdOutlineFindInPage,
  MdOutlinePayments,
  MdOutlineSlideshow,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { RxAvatar, RxSection } from "react-icons/rx";
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaUsersCog } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { TbSlideshow, TbMovie } from "react-icons/tb";
import NavigationRoute from "../Routes/NavigationRoute";
import { AiOutlineAndroid } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/auth/action";
import ShowAlert from "../Components/ShowAlert";

const NAV_ITEMS = [
  {
    label: <Link to="/">Dashboard</Link>,
    icon: <VscDashboard size={25} />,
  },
  {
    label: <Link to="/language">Languages</Link>,
    icon: <MdLanguage size={25} />,
  },
  {
    label: <Link to="/genres">Genres</Link>,
    icon: <TbCategory2 size={25} />,
  },
  {
    label: <Link to="/movie">Movies</Link>,
    icon: <RiMovie2Line size={25} />,
  },
  {
    label: "Tv Shows",
    icon: <BiSlideshow size={25} />,
    children: [
      {
        label: <Link to="/shows">Shows</Link>,
        icon: <MdOutlineSlideshow size={25} />,
      },
      {
        label: <Link to="/season">Seasons</Link>,
        icon: <TbSlideshow size={25} />,
      },
      {
        label: <Link to="/episodes">Episode</Link>,
        icon: <TbMovie size={25} />,
      },
    ],
  },

  {
    label: <Link to="/artist">Artist</Link>,
    icon: <RxAvatar size={25} />,
  },
  {
    label: <Link to="/technician">Technician</Link>,
    // icon: <FaUsersViewfinder/>,
    icon: <FaUsersCog size={25} />,
  },
  {
    label: "Home",
    icon: <VscHome size={25} />,
    children: [
      {
        label: <Link to="home/slider">Slider</Link>,
        icon: <TfiLayoutSlider size={25} />,
      },
      {
        label: <Link to="home/home_section">Home Section</Link>,
        icon: <RxSection size={25} />,
      },
    ],
  },
  {
    label: "User",
    icon: <RxAvatar size={25} />,
    children: [
      {
        label: <Link to="/users">User</Link>,
        icon: <BiUser size={25} />,
      },
      {
        label: <Link to="/users/sub_admin">Sub Admin</Link>,
        icon: <RiAdminLine size={25} />,
      },
    ],
  },
  {
    label: <Link to="/subscription_plan">Subscription Plan</Link>,
    icon: <MdOutlineSubscriptions size={25} />,
  },
  {
    label: <Link to="/coupons">Coupons</Link>,
    icon: <RiCoupon3Line size={25} />,
  },
  {
    label: <Link to="/#">Transactions</Link>,
    icon: <BiTransferAlt size={25} />,
  },
  {
    label: <Link to="/#">Payment GateWay</Link>,
    icon: <MdOutlinePayments size={25} />,
  },
  {
    label: <Link to="/#">Pages</Link>,
    icon: <MdOutlineFindInPage size={25} />,
    children: [
      {
        label: <Link to="/add_customer">Slider</Link>,
      },
      {
        label: <Link to="/view_customer">Home Section</Link>,
      },
    ],
  },
  {
    label: <Link to="/#">Settings</Link>,
    icon: <RiSettings3Line size={25} />,
    children: [
      {
        label: <Link to="/#">General Setting</Link>,
        icon: <TbSettingsPlus size={25} />,
      },
      {
        label: <Link to="/#">Player Setting</Link>,
        icon: <TbSettingsAutomation size={25} />,
      },
      {
        label: <Link to="/#">Menu</Link>,
        icon: <CgMenuLeftAlt size={25} />,
      },
    ],
  },
  {
    label: <Link to="/#">Android App</Link>,
    icon: <AiOutlineAndroid size={25} />,
    children: [
      {
        label: <Link to="/add_customer">Slider</Link>,
      },
      {
        label: <Link to="/view_customer">Home Section</Link>,
      },
    ],
  },
];

export default function Dashboard({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState("");



  

  return (
    <Box minH="100vh" bg="#0C0C0D">
      
      <SidebarContent
        w="350px"
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        page={page}
        setPage={setPage}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent overflow="auto">
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobile nav */}
      <MobileNav onOpen={onOpen} page={page} setPage={setPage} />

      <Box ml={{ base: 30, md: "350px" }} px="4" pb="4">
        <Box width="100%">
          <NavigationRoute />
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, page, setPage, ...rest }) => {
  return (
    <Box
      overflow="auto"
      transition="3s ease"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        borderRight="3px solid red"
        w="100%"
        justifyContent="center"
      >
        <Image src={logo} alt="My-screen=logo" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box>
        {NAV_ITEMS.map((navItem, i) => (
          <Box
            key={i}
            w="100%"
            m="auto"
            mb="10px"
            fontSize="18px"
            borderRadius="5px"
            alignItems="center"
          >
            <MobileNavItem page={page} setPage={setPage} {...navItem} i={i} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const MobileNavItem = ({ label, icon, setPage, page,children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [childColor, setChildColor] = useState(-1);

  const handleNestedClick = () => {
    if (children && children.length > 0) {
      setPage(page);
    } else if (label) {
      setPage(label.props.children);
    }
  };

  const handleChildLinks = (index) => {
    setPage(children[index].label.props.children);
    setChildColor(index);
  };
  return (
    <>
      <Stack
        w="100%"
        color="white"
        bg="#1C1C1E"
        mt="3px"
        onClick={children && onToggle}
      >
        <Box
          width="100%"
          h={isOpen ? "" : "60px"}
          justifyContent="space-between"
          alignItems="center"
          color={isOpen ? "white" : ""}
          onClick={() => {
            handleNestedClick(); 
          }}
          // _hover={{bg: bgActive ? "#E50813" : "#1C1C1E", borderLeft: bgActive ? "5px solid white" : ""}}
          _hover={{ bg: "#E50813", borderLeft: "5px solid white" }}
          cursor="pointer"
        >
          <Flex
            w="90%"
            h="60px"
            margin="auto"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center" gap="10px">
              <Box m="auto" color="white">
                {icon}
              </Box>
              <Text fontWeight={600}>{label}</Text>
            </Flex>
            {children && (
              <Icon
                fontWeight="700"
                as={ChevronRightIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(90deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
        </Box>
      </Stack>
      <Collapse in={isOpen} animateOpacity>
        <Stack w="100%" m="auto" bg="#1C1C1E">
          <Box w="90%" m="auto" color="grey" mt="-10px" py="10px">
            {children?.map((child, i) => (
              <Link key={i} py={2} href={child.href}>
                <Flex
                  in={isOpen}
                  mt="7px"
                  fontWeight="500"
                  w="100%"
                  textAlign="left"
                  px="10px"
                  py="8px"
                  gap="10px"
                  color="white"
                >
                  {/* <img src={child.icon} alt="icons" /> */}
                  <span style={{ color: childColor === i ? "red" : "white" }}>
                    {child.icon}
                  </span>
                  <Text
                    color={childColor === i ? "red" : "white"}
                    onClick={() => handleChildLinks(i)}
                  >
                    {child.label}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Box>
        </Stack>
      </Collapse>
    </>
  );
};

const MobileNav = ({ onOpen, page, ...rest }) => {
  const dispatch = useDispatch();

  const handelSignout = () => {
    dispatch(Logout());
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Flex width="83%" justifyContent="space-between">
        <Text
          fontSize="30px"
          color="white"
          textTransform="uppercase"
          fontStyle="Roboto"
        >
          {page}
        </Text>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>

      <Flex
        display={{ base: "flex", md: "none" }}
        fontWeight="bold"
        fontSize="22px"
        gap="7px"
        alignItems="center"
        justifyContent="space-between"
      >
        <img src={logo} alt="My-screen-logo" />
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <CiUser color="white" fontSize="30px" fontWeight="600" />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text color="white" fontSize="sm">
                    User
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem></MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>
                {/* <Link to="/login">Sign out</Link> */}
                <Button onClick={handelSignout}>Sign out</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
