import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUser from "./AboutMe/AboutMe";
import Navibar from "./Navibar/Navibar";

import PostsList from "./PostsList/PostsList";
import User from "./User/User";

const Index = () => {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
          <Route index path="/" element={<PostsList />} />
          <Route path="about_me" element={<AboutUser />} />
          <Route path="user/:id" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
