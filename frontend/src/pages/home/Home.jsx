import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
    return (
        // <div className="flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden 
        // bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
        //     <Sidebar />
        //     <MessageContainer />
        // </div>
        
        <div className="flex sm:h-[450px] md:h-[550px] bg-white-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-100">
            <Sidebar />
            <MessageContainer />
        </div>

        // <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        //    <Sidebar />
        //    <MessageContainer />
        //</div> 
    );
};


export default Home;