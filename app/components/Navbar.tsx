import SlidingTabs from "./SlidingTabs";

export default function Navbar() {
    return(
        <div className="flex absolute mx-auto left-1/2 transform -translate-x-1/2 justify-center items center">
            <SlidingTabs></SlidingTabs>
        </div>
    )
}