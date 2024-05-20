import React, { FC, useRef } from "react";
interface FormType {
  save: (arg: PhoneType) => void;
  loading: boolean;
}
interface PhoneType {
  name: string | undefined;
  price: number | undefined | string;
  description: string | undefined;
  status: string;
  category_id: string;
}
const Form: FC<FormType> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const discriptionRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    if (!nameRef.current?.value) {
      alert("Please enter name of product !");
      nameRef.current?.focus();
      return false;
    }
    if (!priceRef.current?.value) {
      alert("Please enter price of product !");
      priceRef.current?.focus();
      return false;
    }
    if (!discriptionRef.current?.value) {
      alert("Please enter discription of product !");
      discriptionRef.current?.focus();
      return false;
    }
    return true;
  };
  function handelSave(event: React.MouseEvent) {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      const phone: PhoneType = {
        name: nameRef.current?.value,
        price: priceRef.current?.value,
        description: discriptionRef.current?.value,
        status: "active",
        category_id: "2",
      };
      props.save(phone);
      if (nameRef?.current?.value) {
        nameRef.current.value = "";
      }
      if (priceRef?.current?.value) {
        priceRef.current.value = "";
      }
      if (discriptionRef?.current?.value) {
        discriptionRef.current.value = "";
      }
    }
  }
  return (
    <div>
      <h1 className="font-bold text-[28px]  pl-[480px] text-slate-600 pb-3">
        CRUB PHONES
      </h1>
      <form className="  w-[600px] h-[350px] translate-x-[280px] flex flex-col  gap-3 p-4 bg-white rounded-lg  justify-center items-center shadow-lg px-12">
        <span className="flex flex-col w-full pb-2 ">
          <label className="text-black" htmlFor="input1">
            Enter Name
          </label>
          <input
            ref={nameRef}
            className="p-2 rounded-lg border-2 bg-[#FAFAFA] w-full"
            type="text"
            name=""
            id="input1"
            placeholder="Nomini kiriting "
          />
        </span>
        <span className="flex flex-col w-full pb-2">
          <label className="text-black" htmlFor="input2">
            Enter Price
          </label>
          <input
            ref={priceRef}
            className="p-2 rounded-lg border-2 bg-[#FAFAFA] w-full"
            type="number"
            name=""
            id="input2"
            placeholder="Narxini kiriting"
          />
        </span>
        <span className="flex flex-col w-full pb-2">
          <label className="text-black" htmlFor="input3">
            Enter description
          </label>
          <textarea
            style={{ resize: "none" }}
            ref={discriptionRef}
            className="p-2 h-12   rounded-lg border-2 bg-[#FAFAFA] w-full"
            name=""
            id="input3"
            placeholder="Tavsifini kiriting "
          ></textarea>
        </span>
        <button
          onClick={handelSave}
          className={`${props.loading ? "bg-emerald-700	" : "bg-blue-700"} ${
            props.loading ? "hover:bg-stone-700" : "hover:bg-blue-800"
          } cursor-pointer transition duraticon-250 w-full mb-5 font-bold text-white py-2 mt-6 px-4 rounded-lg `}
          disabled={props.loading ? true : false}
        >
          {props.loading ? "Loading" : " SAVE"}
        </button>
      </form>
    </div>
  );
};

export default Form;
