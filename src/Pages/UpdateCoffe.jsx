
import { useLoaderData, useNavigate } from 'react-router-dom';
import BackButton from './../Components/BackButton';
import { toast } from 'react-toastify';
const UpdateCoffe = () => {
    const navigate = useNavigate()
    const coffe = useLoaderData()
    const handleUpdateCoffe = e =>{
        e.preventDefault();
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const chef = form.chef.value.trim();
        const price = form.price.value.trim();
        const taste = form.taste.value.trim();
        const category = form.category.value.trim();
        const details = form.details.value.trim();
        const photo = form.photo.value.trim();
        const updatedCoffe = { name, chef, price, taste, category, details, photo };
        fetch(`http://localhost:5000/coffes/${coffe._id}`,{
            method: "PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(updatedCoffe)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success("Coffe Updated Sucessfully!");
                navigate("/")
                return
            }
        })
    }
    return (
        <div>
        <div className="py-4 px-12">
          <BackButton />
        </div>
        <div className="flex justify-center p-6 mx-16 mb-16 bg-[#f4f3f0] shadow-md rounded">
          <div>
            <h2 className="text-gray-700 text-[45px] text-center font-normal font-rancho">
            Update Existing Coffee Details
            </h2>
            <p className="max-w-[932px] text-center text-[#1a1919]/70 text-1xl md:text-lg font-normal font-relway leading-[30px]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleUpdateCoffe} className="py-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[#1a1919]/80 text-xl font-semibold font-relway leading-[30px]">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    defaultValue={coffe.name}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter coffee name"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#1a1919]/80 text-xl font-semibold font-['Raleway'] leading-[30px]">
                    Chef
                  </label>
                  <input
                    name="chef"
                    type="text"
                    defaultValue={coffe.chef}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter coffee chef"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#1a1919]/80 text-xl font-semibold font-['Raleway'] leading-[30px]">
                    Price
                  </label>
                  <input
                    name="price"
                    type="number"
                    defaultValue={coffe.price}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter coffee supplier"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#1a1919]/80 text-xl font-semibold font-['Raleway'] leading-[30px]">
                    Taste
                  </label>
                  <input
                    name="taste"
                    type="text"
                    defaultValue={coffe.taste}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter coffee taste"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#1a1919]/80 text-xl font-semibold font-['Raleway'] leading-[30px]">
                    Category
                  </label>
                  <input
                    name="category"
                    type="text"
                    defaultValue={coffe.category}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter coffee category"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#1a1919]/80 text-xl font-semibold font-['Raleway'] leading-[30px]">
                    Details
                  </label>
                  <input
                    name="details"
                    type="text"
                    defaultValue={coffe.details}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter coffee details"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-[#1a1919]/80 text-xl font-semibold font-['Raleway'] leading-[30px]">
                  Photo
                </label>
                <input
                  name="photo"
                  type="text"
                  defaultValue={coffe.photo}
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all "
                  placeholder="Enter photo URL"
                  required
                />
              </div>
  
              <div className="!mt-12 w-full">
                <button
                  type="submit"
                  className="py-2.5 px-7 w-full text-2xl font-semibold tracking-wider rounded-md bg-[#d2b48c] border-[2px] border-[#331A15] text-[#331A15] font-rancho  focus:outline-none">
                  Update Coffee Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffe;