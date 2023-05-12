import './App.css';
import MyHeader from './components/Header/Header';
import { Layout } from 'antd';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BecomeAnInfluencer from './components/pages/BecomeAnInfluencer';
import BrowseInfluencers from './components/pages/BrowseInfluencers';
import HowItWorks from './components/pages/HowItWorks';
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'

const{Header , Content , Footer} = Layout;


function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Header>
            <MyHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/BecomeAnInfluencer' element={<BecomeAnInfluencer />}/>
              <Route path='/BrowseInfluencers' element={<BrowseInfluencers />}/>
              <Route path='/HowItWorks' element={<HowItWorks />}/>
              <Route path='/SignIn' element={<SignIn />}/>
              <Route path='/SignUp' element={<SignUp />}/>
            </Routes>
          </Content>
        </Router>
      </Layout> 
    </div>
  );
}

export default App;
