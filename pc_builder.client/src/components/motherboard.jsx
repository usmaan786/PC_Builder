import { useEffect, useState } from "react";

function Motherboard({ setSelectedMotherboard }) {

    const [motherboards, setMotherboards] = useState([]);

    useEffect(() => {
        getMotherboards();
    }, []);

    const getMotherboards = async () => {
        try {
            const response = await fetch("https://localhost:7094/api/motherboards", {
                method: "GET"
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                setMotherboards(jsonResponse || []);
            }
            else {
                setMotherboards([]);
            }

        }
        catch (error) {
            console.error("Error retrieving Motherboard data: ", error);
            setMotherboards([]);
        }
    }


    const handleSelect = (motherboard) => {
        setSelectedMotherboard(motherboard);
        console.log("Selected Motherboard:", motherboard);
    };

    return (
        <div>
            <h2>Select a Motherboard component</h2>

            <div className="table-responsive">
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {motherboards.map((motherboard, index) => (
                            <tr key={motherboard.Id}>
                                <td>{motherboard.name}</td>
                                <td>£{motherboard.price.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleSelect(motherboard)}
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

export default Motherboard;