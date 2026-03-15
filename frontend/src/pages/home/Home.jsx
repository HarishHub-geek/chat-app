import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar"
import SingleContainer from '../../components/SingleContainer';
import useScreenWidth from '../../zustand/useScreenWidth';

const Home = () => {
    const { screenWidth, setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
  };

    return (
        // <div className="flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden 
        // bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
        //     <Sidebar />
        //     <MessageContainer />
        // </div>
        
        // <div className="flex sm:h-[450px] md:h-[550px] bg-white-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-100">
        //     <Sidebar />
        //     <MessageContainer />
        // </div>

        <div className='flex sm:h-[450px] md:h-[550px] bg-white-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-100'>
      {console.log(screenWidth)}
      {screenWidth < 510 ? (
        <SingleContainer />
      ) : (
        <>
          <Sidebar />
          <MessageContainer />
        </>
      )}
    </div>
    );
};


export default Home;