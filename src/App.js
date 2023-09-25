import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/shared/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import WorkPage from "./pages/work-page/WorkPage";
import {Provider} from "react-redux";
import store from "./core/redux/store";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className='body-wrapper'>
                  <NavBar />
                  <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/works' element={<WorkPage />} />
                  </Routes>
              </div>
          </Router>
      </Provider>
  );
}

export default App;