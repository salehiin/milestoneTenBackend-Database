
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);
        // https://ibb.co.com/zxHYGHW
        // https://ibb.co.com/sQVkP5c
        // https://ibb.co.com/0f8XmQH

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h2 className="text-3xl font-extrabold">Add Coffee</h2>
            <form onSubmit={handleAddCoffee} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                </div>
                {/* form supplier & taste row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Taste</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                </div>
                {/* form category & daetails row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Category</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Details</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                    {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        {/* <input type="text" placeholder="Coffee Name" className="file-input file-input-bordered w-full max-w-xs" /> */}
                            {/* <span className="label-text-alt">Name</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>
                </div>
                <input className="btn btn-block" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;