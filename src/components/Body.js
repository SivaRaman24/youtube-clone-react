import { useSelector } from 'react-redux';
import SideNavRenderer from './SideNavRenderer';
import VideoList from './VideoList';

const Body = () => {
    const sideNavType = useSelector((state) => state.app.sideNavType);
    return (
        <div className="grid grid-flow-col">
            <div className="col-span-2">
                <SideNavRenderer type={sideNavType} />
            </div>
            <div className="main-container col-span-10 flex flex-col pt-6">
                <VideoList />
            </div>
        </div>
    );
}

export default Body;
