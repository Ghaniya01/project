import React, { useState } from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/index";
import Navbar from "../components/Navbar2";

const LogIn = () => {
  const onSubmitHandler = (form, callback) => {
    console.log("Sign In submitted: ", form);
    callback();
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <SFixedContainer size={275}>
        <Form
          title={"Sign In"}
          formArr={formArr}
          submitBtn={"Sign In"}
          onSubmit={onSubmitHandler}
          redirect={{
            label: "Don't have an account?",
            link: {
              label: "Register",
              to: "/register",
            },
          }}
        />
      </SFixedContainer>
    </>
  );
};

const formArr = [
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
];

export default LogIn;
