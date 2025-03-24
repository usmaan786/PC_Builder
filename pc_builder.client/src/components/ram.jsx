import { useEffect, useState } from "react";

function Ram({ setSelectedRam }) {

    const [ram, setRam] = useState([]);

    useEffect(() => {
        getRam();
    }, []);

    const getRam = async () => {
        try {
            const response = await fetch("https://localhost:7094/api/ram", {
                method: "GET"
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                setRam(jsonResponse || []);
            }
            else {
                setRam([]);
            }

        }
        catch (error) {
            console.error("Error retrieving GPU data: ", error);
            setRam([]);
        }
    }


    const handleSelect = (ram) => {
        setSelectedRam(ram);
        console.log("Selected GPU:", ram);
    };

    return (
        <div>
            <h2>Select a RAM component</h2>

            <div className="table-responsive">
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ram.map((ram, index) => (
                            <tr key={ram.Id}>
                                <td>{ram.name}</td>
                                <td>£{ram.price.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleSelect(ram)}
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

export default Ram;