import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/context";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import SearchResult from "./Components/SearchResult";
import "./App.scss";
import VideoElement from "./Components/VideoElement";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />

          <Route path="/searchResult/:search" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoElement />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
