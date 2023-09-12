// import logo from './logo.svg';
import './App.css'
import Header from './COMPONENT/Header';
import Navigation from './COMPONENT/Navigation';
import TopbarStart from './COMPONENT/TopbarStart';
import MainStyle from './Template/MainStyle';
import Sidebar from './Sidebar/Sidebar';
import Article from './Template/Article';
import Popularpost from './Sidebar/Popularpost';
import FeaturedVideo from './Sidebar/FeaturedVideo';
import FlickrPhoto from './Sidebar/FlickrPhoto';
import Newsletter from './Sidebar/Newsletter';
import MoreButton from './Template/MoreButton';
import Footer from './COMPONENT/Footer';

function App() {
    return (
        <>
            <div className="centre">
                <Header />
                <TopbarStart />
                <Navigation />
                <div className="display">
                    <div className='display-1'>
                        <MainStyle />
                        <Article />
                        <MoreButton />
                    </div>

                    <div className='display-1'>
                        <Sidebar />
                        <FeaturedVideo />
                        <Popularpost />
                        <FlickrPhoto />
                        <FeaturedVideo />
                        <Newsletter />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default App;
