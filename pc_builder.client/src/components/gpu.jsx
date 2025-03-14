

function Gpu({ setSelectedGpu }) {

    const gpuList = [
        { name: "Geforce RTX 4060", price: 284.99 },
        { name: "Geforce RTX 4080", price: 1650.00 }
    ];


    const handleSelect = (gpu) => {
        setSelectedGpu(gpu);
        console.log("Selected GPU:", gpu);
    };

    return (
        <div>
            <h2>Select a GPU component</h2>

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
                        {gpuList.map((gpu, index) => (
                            <tr key={index}>
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