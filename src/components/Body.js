import VideoList from './VideoList';

const Body = () => {
    return (
        <div className="grid grid-flow-col">
            <div className="main-container col-span-10 flex flex-col pt-6">
                <VideoList />
            </div>
        </div>
    );
}

export default Body;
