import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";
import ProductPerch from "./Productperch";

function PerchList() {

    const [perch, setPerch] = useState([]);

    useEffect(() => {
        async function fetchPerch() {
            try {
                const res = await a.get('/perch');
                setPerch(res.data);
            }catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchPerch();
    }, []);

    return(
        <div className="card-container">
            {perch.map((perch) => (
                <ProductPerch key={perch.id} perch={perch} />
            ))}
        </div>
    );
}

export default PerchList;