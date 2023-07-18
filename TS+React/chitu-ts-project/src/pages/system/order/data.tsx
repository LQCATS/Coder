import { useLocation } from "react-router-dom"

const data = () => {
    const location = useLocation();
    console.log('location', location);

    return (
        <div>

        </div>
    )
}

export default data