import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import CustomInput from "../../../components/CustomInput";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPrinter } from "react-icons/fi";

const OrderItems = ({ order }) => {
  // Determines which color the order status text should have
  const orderStatusColor = (orderStatus) => {
    switch (orderStatus) {
      case "Dispatched":
        return "green-500";
      case "Pending":
        return "yellow-700";
      case "Processing":
        return "blue-800";
      default:
        break;
    }
  };

  return (
    <tr className='bg-white'>
      <th>
        <CustomInput
          inputStyle={"w-4 h-4 bg-white rounded border border-gray-300 p-0"}
          inputProps={{ type: "check" }}
        />
      </th>

      <th scope='row' className='py-4 px-0 font-semibold text-gray-700'>
        {order.customerName}
      </th>

      <td className='py-4 px-0'>{order.address}</td>

      <td className='py-4 px-0 font-semibold'>{order.qty}</td>

      <td className='py-4 px-0 font-semibold'>{order.amount}</td>

      <td className='py-4 px-0'>
        <div className='flex items-center'>
          <p
            className={`text-md text-${orderStatusColor(
              order.status
            )} font-bold -mt-2`}
          >
            {order.status}
          </p>
          <MdArrowDropDown className='w-5 h-5 -mt-2' />
        </div>
      </td>

      <td>
        <div className='flex space-x-5'>
          <FiPrinter className='w-5 h-5' />
          <RiDeleteBin6Line className='w-5 h-5' />
        </div>
      </td>
    </tr>
  );
};

export default OrderItems;
