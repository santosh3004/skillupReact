import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Cover from './Components/Cover/Cover';
import Categories from './Components/Categories/Categories';
import FeaturedCourses from './Components/FeaturedCourses/FeaturedCourses';
import ServiceInformation from './Components/ServiceInformation/ServiceInformation';
import Instructors from './Components/Instructors/Instructors';
import NewsArticle from './Components/NewsArticle/NewsArticle';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cover/>
      <Categories/>
      <FeaturedCourses/>
      <ServiceInformation/>
      <Instructors/>
      <NewsArticle/>
      <Footer/>
    </div>
  );
}

export default App;
