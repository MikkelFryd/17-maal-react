import { Header } from './Components/Partials/Header/Header'
import { Footer } from './Components/Partials/Footer/Footer'
// import { Delmålene } from './Pages/Delmålene'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './Components/Partials/Main/Main'
import './App.css'
import { GoalsPage } from './Pages/GoalsPage'
import { SubGoalsPage } from './Pages/SubgoalsPage'
import { ChallengesPage } from './Pages/ChallengesPage'
import { ContactPage } from './Pages/ContactPage'

function App() {

  return (
   <>
   <Router>
       <Main>
       <Header/>
          <Routes>
              <Route path="/goalspage" element={<GoalsPage/>}/>
              <Route path="/subgoalspage" element={<SubGoalsPage/>}/>
              <Route path="/challengespage" element={<ChallengesPage/>}/>
              <Route path="/contactpage" element={<ContactPage/>}/>
              <Route path="/" element={<GoalsPage/>}/>
          </Routes>
          <Footer/>
       </Main>
   </Router>
   </>
  );
}

export default App;
