import React from "react";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    // fetchCars();
    // getInstaPosts();
    // getPagePosts();
  }, [token]);

  

  // async function getInstaPosts() {
  //   try {
  //     let response = await axios.get(`https://graph.facebook.com/v13.0/me/accounts?access_token=${accessToken}`, {
  //       headers: {
  //         Authorization: "Bearer " + token,

  //       },
        
  //     });
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // media = "https://graph.facebook.com/v13.0/17841405822304914/media?access_token={access-token}"
  // businessPage = "https://graph.facebook.com/v13.0/168900265252875?fields=instagram_business_account&access_token="

  // const [picture, setPicture] = useState([]);

  // async function getPagePosts() {
  //   try {
  //     let response = await axios.get(`https://graph.facebook.com/v13.0/17881204013536233?fields=media_url&access_token=${accessToken}`, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     console.log(response.data)
  //     setPicture(response.data)
  //     console.log(picture)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  




  // console.log(picture)
  return (
    <div className="container">
      <h1>Home Page for {user.username}! Welcome to Camaro Cab</h1>
      {/* <img src={picture.media_url}/> */}
      <Carousel />
    </div>
  );
};

export default HomePage;
