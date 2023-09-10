import  { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const userData = localStorage.getItem("chat-app-user");
      if (userData) {
        const user = JSON.parse(userData);
        if (user && user.username) {
          setUserName(user.username);
        } else {
          // Handle the case where user data is incomplete
          console.error("User data is incomplete");
        }
      } else {
        // Handle the case where user data is missing
        console.error("User data not found in localStorage");
      }
    };
  
    fetchdata();
  }, []);
  

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;