const Body = () => {
    return (
        <div className="grid grid-flow-col">
            <nav className="side-nav col-span-1 border border-gray-500">Side Nav</nav>
            <div className="main-container col-span-11 flex flex-col">
                <div className="chips-wrapper">Chips wrapper</div>
                <div className="content">Video Contents</div>
            </div>
        </div>
    );
}

export default Body;