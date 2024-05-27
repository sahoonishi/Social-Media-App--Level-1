import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/postliststore";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
