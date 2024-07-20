import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import "./App.css";
import RootRouter from './navigation/RootRouter';
import HotWallet from './store/HotWallet';
import Footer from './ui/Footer';
import Header from './ui/Header';
import Loader from './ui/Loader';

// Make page fixed or scrollable
const StyledMain = styled.main`
 ${(props : {fixed : boolean}) => props.fixed ? `height: calc(100vh - 104px)` : 'min-height: 100%'};
`

const App = observer(() => {

  const location = useLocation();

  // TODO : Return loader
  if (!HotWallet.here) return <Loader />;

  return(
    <div>
        {HotWallet.user && <Header/>}
        <StyledMain fixed={(HotWallet.user ?? false)  && (location.pathname == '/' || location.pathname == '/submit')}>
          <RootRouter/> 
        </StyledMain>
        {HotWallet.user && <Footer/>}
    </div>
  )

})

export default App;
