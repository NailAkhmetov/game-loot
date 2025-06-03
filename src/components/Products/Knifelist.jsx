import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";
import ProductKnife from "./ProductKnife";

function KnifeList() {

    const [knife, setKnife] = useState([]);

    useEffect(() => {
        async function fetchKnife() {
            try {
                const res = await a.get('/knife');
                setKnife(res.data);
            }catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchKnife();
    }, []);

    return(
        <div className="card-container">
            {knife.map((knife) => (
                <ProductKnife key={knife.id} knife={knife} />
            ))}
        </div>
    );
}

export default KnifeList;