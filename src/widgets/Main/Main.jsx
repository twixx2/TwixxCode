import About from './About';
import Contacts from './Contacts';
import './main.css'
import Portfolio from './Portfolio';

const Main = ({ projects, activeIndex, setActiveIndex }) => {
    return (
        <main className="main">
            <About />
            <Portfolio
                projects={projects}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}/>
            <Contacts />
            

        </main>
    );
}

export default Main;