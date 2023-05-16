import './App.css';
import MyHeader from './components/Header/MyHeader';
import { Layout } from 'antd';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BecomeAnInfluencer from './components/pages/BecomeAnInfluencer';
import BrowseInfluencers from './components/pages/BrowseInfluencers';
import HowItWorks from './components/pages/HowItWorks';
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import routes from './components/pages/routes';
import MyFooter from './components/Footer/MyFooter';
import ShopInfluencerBox from './components/ShopInfluencerBox/ShopInfluencerBox';

const {Header , Content , Footer} = Layout;
function App() {
  return (
      <Layout >
        <Router>
          <Header>
            <MyHeader />
          </Header>
          <Content className='content'>
            <Routes>
              <Route path={routes.becomeAnInfluencer} element={<BecomeAnInfluencer />} />
              <Route path={routes.browseInfluencers} element={<BrowseInfluencers />} />
              <Route path={routes.howItWorks} element={<HowItWorks />} />
              <Route path={routes.signIn} element={<SignIn />} />
              <Route path={routes.signUp} element={<SignUp />} />
            </Routes>
          </Content>
          <Footer className='footer'>
            <ShopInfluencerBox />
            <MyFooter />
          </Footer>
        </Router>
      </Layout> 
  );
}
export default App;
