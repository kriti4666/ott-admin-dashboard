import React, { useEffect, useState } from "react";
import style from "../../Utils/Style/login.module.css";
import bg from "../../Assets/Img/login-bg.png";
import logo from "../../Assets/Img/logo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../redux/auth/action";
import ShowAlert from "../../Components/ShowAlert";

const loginData = {
  username: "",
  password: "",
};

const Login = () => {
  // State Management
  const [loginCred, setLoginCred] = useState(loginData);
  const token = localStorage.getItem("token");
  const [alert, setAlert] = useState({ status: "success", message: "" });

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const loginData = useSelector(({ loginReducer }) => loginReducer);

  // Store the Login Info
  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setLoginCred({ ...loginCred, [name]: value });
  };

  // To Submit Login Data
  const handleSubmit = () => {
    // if (!loginData.username || !loginData.password) {
    //   setAlert({ status: "error", message: "Please fill in all the details." });
    //   return;
    // }
    dispatch(authenticate(loginCred));
  };

  // Parvathi123#@!
  // parvathi@annamrajus.com

  // useEffect(() => {
  //   if (loginData.error) {
  //     setAlert({
  //       status: "error",
  //       message: "Login Fail Please Try Again Later.",
  //     });
  //   } else if (loginData.result) {
  //     setAlert({
  //       status: "success",
  //       message: "Login successfully.",
  //     });
  //   }
  // }, [token, loginData.error, loginData.result]);

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <>
      <Box w="100%" h="70px" bg="#141414" display="flex" alignItems="center">
        <img src={logo} alt="myscreen-logo" style={{ marginLeft: "20px" }} />
      </Box>
      <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
        {alert.message && (
          <ShowAlert
            title={alert.status === "success" ? "Success!" : "Error!"}
            desc={alert.message}
            status={alert.status}
          />
        )}
        <Box
          color="white"
          bg="#141414"
          w="450px"
          px="40px"
          py="10px"
          pb="40px"
          m="auto"
          mt="100px"
          borderRadius="8px"
        >
          <Flex w="100%" justifyContent="end" fontSize="30px">
            <AiOutlineCloseCircle />
          </Flex>
          <Text fontSize="30px" fontWeight="600" py="25px" lineHeight="30px">
            Sign in
          </Text>
          <Input
            color="white"
            h="56px"
            border="none"
            bg="#383838"
            borderRadius="6px"
            mt="18px"
            type="text"
            required
            placeholder="Username"
            name="username"
            value={loginCred.username}
            onChange={handleFormChange}
          />
          <Input
            h="56px"
            border="none"
            bg="#383838"
            borderRadius="6px"
            mt="18px"
            type="text"
            required
            placeholder="Create Password"
            name="password"
            value={loginCred.password}
            onChange={handleFormChange}
          />
          <Text w="100%" textAlign="right" fontSize="12px">
            <Link>Forgot password</Link>
          </Text>

          <Button
            _hover={{ bg: "#E50813" }}
            h="56px"
            bg="#E50813"
            mt="45px"
            color="white"
            fontWeight="600"
            w="100%"
            onClick={handleSubmit}
          >
            Sign in
          </Button>
          <Flex gap="10px" justifyContent="center" mt="20px">
            <Text fontSize="10px" mt="5px">
              New to Myscreen?
            </Text>
            <Link to="/register">SIGN UP</Link>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default Login;
