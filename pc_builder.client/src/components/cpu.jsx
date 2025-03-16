function Cpu({ setSelectedCpu }) {

    const cpuList = [
        { name: "Intel i9 ", price: 650.99},
        { name: "Ryzen 9x3D", price: 550.99 }
    ];


    const handleSelect = (cpu) => {
        setSelectedCpu(cpu);
        console.log("Selected GPU:", cpu);
    };

    return (
        <div>
            <h2>Select a CPU component</h2>

            {/* Putting mock table data here for how it might be displayed when back end database is ready*/}

            <div className="table-responsive">
                <table className="table table-boredered mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cpuList.map((cpu, index) => (
                            <tr key={index}>
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