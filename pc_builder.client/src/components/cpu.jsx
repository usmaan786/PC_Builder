import {useState, useEffect} from "react";

function Cpu({ setSelectedCpu }) {

    const [cpus, setCpus] = useState([]);

    useEffect(() => {
        getCpus([]);
    }, []);

    const getCpus = async () => {
        try {
            const response = await fetch("https://localhost:7094/api/cpus", {
                method: "GET"
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                setCpus(jsonResponse || []);
            }
            else {
                setCpus([]);
            }
        }
        catch (error) {
            console.error("Error retrieving CPU data: ", error);
            setCpus([]);
        }
    }
    
    const handleSelect = (cpu) => {
        setSelectedCpu(cpu);
        console.log("Selected GPU:", cpu);
    };

    return (
        <div>
            <h2>Select a CPU component</h2>

            <div className="table-responsive">
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cpus.map((cpu, index) => (
                            <tr key={cpu.Id}>
                                <td>{cpu.name}</td>
                                <td>£{cpu.price.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleSelect(cpu)}
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

export default Cpu;