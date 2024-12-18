import { FaEye } from "react-icons/fa";
import Title from "../Title";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";

const Products = ({ loadedCoffe }) => {
  const [coffes,setCoffes]= useState(loadedCoffe)
  const handleDeleteCoffe = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffes/${id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
          if(data.deletedCount>0){
            const remaning = coffes.filter(coffe => coffe._id !== id);
            setCoffes(remaning)
            // toast.success("Coffe Deleted Sucessfully!")
            Swal.fire({
              title: "Deleted!",
              text: "Your coffe has been deleted.",
              icon: "success"
            });
            return
          }
        })
      }
    });
  }
  return (
    <div className="p-24">
      <Title subTitle="--- Sip & Savor ---" title="Our Popular Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {
          coffes.length >0 ? (
            coffes?.map((coffe) => (
              <div
                key={coffe._id}
                className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 bg-[#F5F4F1] shadow-md rounded-[8px] p-5">
                <img src={coffe.photo} alt="coffe_img" />
                <div className="space-y-4">
                  <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                    Name :{" "}
                    <span className="text-[#5c5b5b] text-[16px] font-normal">
                      {coffe.name}
                    </span>
                  </h4>
                  <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                    Chef :{" "}
                    <span className="text-[#5c5b5b] text-[16px] font-normal">
                      {coffe.chef}
                    </span>
                  </h4>
                  <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                    Price :{" "}
                    <span className="text-[#5c5b5b] text-[16px] font-normal">
                      {coffe.price} Taka
                    </span>
                  </h4>
                </div>
                <div className="flex md:flex-col gap-10 md:gap-6 text-white">
                  <Link to={`/coffe-details/${coffe._id}`} className="p-2 w-[30px] bg-[#D2B48C] rounded-[5px] shadow-sm">
                    <FaEye />
                  </Link>
                  <Link to={`/update-coffe/${coffe._id}`} className="p-2 w-[30px] bg-[#3C393B] rounded-[5px] shadow-sm">
                    <MdEdit />
                  </Link>
                  <button onClick={()=>handleDeleteCoffe(coffe._id)} className="p-2 w-[30px] bg-[#EA4744] rounded-[5px] shadow-sm">
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          ) : ( <div className="w-ful h-[70vh] flex items-center justify-center">
            <h2 className="text-2xl font-bold flex items-center">
              Coffe Not Found
            </h2>
          </div>)
        }
      </div>
    </div>
  );
};

export default Products;
