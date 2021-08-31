import './App.css';
import Look from './components/Look';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Iframe from 'react-iframe'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <NavBar/>

    <div id='app'>
      <br>
      </br>
      <div>
        <h2 style={{textAlign:"center"}}>MISSION STATEMENT </h2>
      </div>
      <div>
      <p style={{textAlign:"justify", margin:10,padding:10}}>Cloud computing has been around for approximately two decades and despite the data pointing to the business efficiencies, cost-benefits, and competitive advantages it holds, a large portion of the business community continues to operate without it. According to a study by the International Data Group, 69% of businesses are already using cloud technology in one capacity or another, and 18% say they plan to implement cloud-computing solutions at some point. At the same time, Dell reports that companies that invest in big data, cloud, mobility, and security enjoy up to 53% faster revenue growth than their competitors. As this data shows, an increasing number of tech-savvy businesses and industry leaders are recognizing the many benefits of the cloud-computing trend. But more than that, they are using this technology to more efficiently run their organizations, better serve their customers, and dramatically increase their overall profit margins. </p>
      </div>
      <ImageSlider slides={SliderData}/>
      <div>
        <iframe width="479" height="330" src="https://www.youtube.com/embed/dH0yz-Osy54" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
        </iframe>
        <iframe width="479" height="330" src="https://www.youtube.com/embed/hB1NVzqn7PU" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <iframe width="479" height="330" src="https://www.youtube.com/embed/DGDtujmOBKc" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <h2 style={{textAlign:"left"}}> Get introduced to the cloud? How can it benefit your business?  How does the cloud work? </h2> 
      </div>
    <br></br><br></br><br></br>
      <h1 style={{textAlign:"center"}}>PRICE ESTIMATOR</h1>
      <br></br>
      <Look/>
      <Footer/>
      
      
      </div>
  </div>

  

  );
}

export default App;

