import { useEffect, useState } from "react";

function Gpu({ setSelectedGpu }) {

    const [gpus, setGpus] = useState([]);

    useEffect(() => {
        getGpus();
    }, []);

    const getGpus = async () => {
        try {
            const response = await fetch("https://localhost:7094/api/gpus", {
                method: "GET"
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                setGpus(jsonResponse || []);
            }
            else {
                setGpus([]);
            }

        }
        catch (error) {
            console.error("Error retrieving GPU data: ", error);
            setGpus([]);
        }
    }


    const handleSelect = (gpu) => {
        setSelectedGpu(gpu);
        console.log("Selected GPU:", gpu);
    };

    return (
        <div>
            <h2>Select a GPU component</h2>

            <div className="table-responsive">
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gpus.map((gpu, index) => (
                            <tr key={gpu.Id}>
                                <td>{gpu.name}</td>
                                <td>£{gpu.price.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleSelect(gpu)}
                                    >
                                    Select
                                    </button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Gpu;