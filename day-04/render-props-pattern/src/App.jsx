// import CarTracker from "./messy/CarTracker";
// import BikeTracker from "./messy/BikeTracker";

// import MouseTracker from "./with-pattern/MouseTracker";

import MouseTrackerWithChildren from "./with-pattern/using-children/MouseTrackerWithChildren";
import UsingToggle from "./with-pattern/using-render-props/UsingToggle";

function App() {
    return (
        <div className="flex flex-col items-center m-2">
            {/*<CarTracker />
      <BikeTracker />

            <MouseTracker
                render={(pos) => (
                    <p>
                        🚗 Car is at ({pos.x}, {pos.y})
                    </p>
                )}
            />

             <MouseTracker
                render={({x, y}) => (
                    <p>
                         🏍️ Bike is at ({x}, {y})
                    </p>
                )}
            />*/}

            <MouseTrackerWithChildren>
                {({ x, y }) => (
                    <p>
                        🚗 Car is at ({x}, {y})
                    </p>
                )}
            </MouseTrackerWithChildren>

            <MouseTrackerWithChildren>
                {({ x, y }) => (
                    <p>
                        🏍️ Bike is at ({x}, {y})
                    </p>
                )}
            </MouseTrackerWithChildren>
            <div className="mt-6">
                <UsingToggle />
            </div>
        </div>
    );
}

export default App;
