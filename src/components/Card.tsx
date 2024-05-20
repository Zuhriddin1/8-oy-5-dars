import { FC } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
interface CardType {
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    status: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
  };
  deletItem: (arg: string) => void;
  beingDeleted: {
    id?: string;
    beingDelete?: boolean;
  };
}
const Card: FC<CardType> = (props) => {
  const navigate = useNavigate();
  function handelDelet() {
    const isDelit = confirm("Are you want to delete?");
    if (isDelit) {
      props.deletItem(props.data.id);
    }
  }
  function handelDetails() {
    navigate(`details/${props.data.id}`);
  }
  return (
    <div className="shadow-xl w-[200px] p-4 rounded-lg  bg-white cursor-pointer border-2 border-[#EFEFEF] text-[#8F95A0] transition duration-300 hover:scale-[1.02]">
      <h3 className="text-[12px] font-bold text-black">
        <span className="text-gray-600">Name : {props.data.name}</span>
      </h3>
      <h3 className="text-[12px] font-bold text-black">
        <span className="text-gray-600">Price : {props.data.price} $</span>
      </h3>
      <h3 className="text-[12px] font-bold text-black">
        <span className="text-gray-600">Status : {props.data.status}</span>
      </h3>
      <h3 className="text-[12px] font-bold text-black">
        <span className="text-gray-600">
          Description : {props.data.description}
        </span>
      </h3>
      <div className="flex items-end gap-5 mt-6">
        {!(
          props.beingDeleted?.beingDelete &&
          props.beingDeleted?.id == props.data?.id
        ) ? (
          <FaTrashAlt
            onClick={handelDelet}
            style={{ color: "red", marginTop: "25px" }}
            className="text-[25px]"
            color="#8F95A0"
          />
        ) : (
          "O'chirilmoqda"
        )}

        <FaEdit onClick={handelDetails} className="text-2xl"></FaEdit>
      </div>
    </div>
  );
};

export default Card;
