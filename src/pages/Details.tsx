import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";

interface PhoneType {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
}
function Details() {
  const [phone, setPhone] = useState<PhoneType>();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      fetch(`https://auth-rg69.onrender.com/api/products/${params.id}`).then(
        (res) =>
          res
            .json()
            .then((data) => {
              setPhone(data);
            })
            .catch((err) => {
              console.log(err);
            })
      );
    } else {
      navigate("/");
    }
  }, []);
  console.log(phone);

  return (
    <>
      <h2 className="flex  justify-center translate-y-20 text-[20px] font-bold text-slate-600 -translate-x-3">
        Details of this product
      </h2>
      <div className="w-[300px] px-12 py-8 mx-auto mt-20 text-[#000000] flex justify-center">
        {phone ? (
          <>
            <div>
              <h2 className="text-black font-bold">
                <span>Name:</span> {phone.name}
              </h2>
              <h3 className="text-black font-bold">
                <span>Description:</span> {phone.description}
              </h3>
              <h3 className="text-black font-bold">
                <span>Price:</span> ${phone.price}
              </h3>
              <h3 className="text-black font-bold">
                <span>Status:</span> {phone.status}
              </h3>
            </div>
          </>
        ) : (
          <p className="font-bold">Loading please wait....</p>
        )}
      </div>
      <Link
        to="/"
        className="relative left-[960px] top-[20px] bg-slate-300 px-6 py-2 rounded-lg font-bold flex  items-center gap-2 w-40 justify-center"
      >
        Crub <RxExit />
      </Link>
    </>
  );
}

export default Details;
