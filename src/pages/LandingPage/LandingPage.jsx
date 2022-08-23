import React, { useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import Chart from "chart.js";
import { BsFillBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
import {
  AiFillSetting,
  AiOutlineSearch,
  AiOutlineCalendar,
} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import CustomBtn from "../../components/CustomBtn";
import { graphConfig, orderData } from "../../data";
import OrderItems from "./order-items/OrderItems";

const LandingPage1 = () => {
  useEffect(() => {
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, graphConfig);
  }, []);

  return (
    <div>
      <div className='relative px-20 py-6'>
        <div className='flex space-x-40'>
          {/* LEFT: CONTAINER */}
          <div className='flex space-x-10'>
            <h3 className='text-2xl font-bold'>Zupa</h3>

            <div className='flex font-semibold md:flex space-x-10'>
              <a className='hover:text-primaryColor' href='/product'>
                Dashboard
              </a>

              <a className='hover:text-primaryColor' href='/feature'>
                Orders
              </a>

              <a className='hover:text-primaryColor' href='/about'>
                Analytics
              </a>

              <a className='hover:text-primaryColor' href='/partner'>
                Manage
              </a>
            </div>
          </div>

          {/* INPUT */}
          <div className='relative flex items-center w-full -mt-2'>
            <AiOutlineSearch className='w-5 h-5 absolute ml-3 text-gray-400' />

            <CustomInput
              inputStyle={
                "px-10 py-3 rounded-lg bg-gray-200 font-medium text-dark w-3/5 border"
              }
              inputProps={{
                type: "text",
                name: "text",
                placeholder: "Search for names, phone numbers or address",
              }}
            />

            <div className='flex ml-10 space-x-10'>
              <div className='flex items-center text-gray-400 space-x-5'>
                <BsFillBellFill className='w-6 h-6 hover:text-dark' />
                <BsFillQuestionCircleFill className='w-6 h-6 hover:text-dark' />
                <AiFillSetting className='w-6 h-6 hover:text-dark' />

                <div className='flex'>
                  <div>
                    <img
                      className='h-12 w-12 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>

                  <div className='mt-2 text-black'>
                    <MdArrowDropDown className='w-8 h-8' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='flex items-center justify-center bg-orange-200 py-5'>
          <h4 className='grow text-center'>
            Your free trail has expired!{" "}
            <span className='font-semibold'>Please add your card</span> details
            to keep using zupa
          </h4>
          <RiCloseLine className='w-8 h-8 bg-gray-100 py-2 px-2 ml-5 mr-5 rounded-full' />
        </div>

        <div className='bg-slate-100 px-40 py-10'>
          <div className=''>
            <div className='flex items-center justify-between shadow-lg py-10 px-10 bg-white rounded-xl'>
              <div className='flex flex-col space-y-2'>
                <h1 className='text-2xl font-bold'>
                  Welcome Back, Lula Hughes
                </h1>
                <p className='text-lg font-medium'>
                  Here is your statistics for the month of June, 20
                </p>
              </div>

              <div className='flex -mt-2'>
                <CustomBtn
                  type='submit'
                  btnStyle={
                    "bg-primaryColor text-white mt-5 py-3 px-2 font-semibold rounded-lg"
                  }
                >
                  <span className='flex space-x-1'>
                    <AiOutlineCalendar className='w-6 h-6 font-bold' />
                    <span>This Month</span>
                    <MdArrowDropDown className='w-6 h-6 font-bold' />
                  </span>
                </CustomBtn>
              </div>
            </div>

            {/* Overview */}
            <div id='overview' className='py-10'>
              <h3 className='text-lg font-bold text-gray-500 py-5 pl-5'>
                Overview
              </h3>

              <div className='flex space-x-10'>
                <div className='shadow flex flex-col items-center justify-center bg-white border rounded-lg w-48 px-10 py-8'>
                  <h2 className='text-sm font-bold text-gray-500'>
                    TOTAL ORDERS
                  </h2>

                  <h2 className='text-3xl font-extrabold py-3'>1,314</h2>
                  <div className='flex items-center justify-center space-x-2'>
                    <MdArrowDropDown className='w-5 h-5 text-white bg-green-500 rounded-full' />
                    <p className='text-sm font-medium'>15.8%</p>
                  </div>
                </div>

                <div className='shadow flex flex-col items-center justify-center bg-white border rounded-lg w-48 px-10 py-8'>
                  <h2 className='text-sm font-bold text-gray-500'>
                    TOTAL SALES
                  </h2>

                  <h2 className='text-3xl font-extrabold py-3'>N984K</h2>
                  <div className='flex items-center justify-center space-x-2'>
                    <MdArrowDropDown className='w-5 h-5 text-white bg-green-500 rounded-full' />
                    <p className='text-sm font-medium'>15.8%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Monthly Sales */}
            <div id='overview' className='py-10'>
              <div className='flex items-center justify-between py-5 pl-5'>
                <h3 className='text-lg font-bold text-gray-500 '>
                  Your Monthly Sales
                </h3>
                <h3 className='text-lg font-bold text-primaryColor'>
                  View Analytics
                </h3>
              </div>

              <div className='space-x-10 bg-white rounded-lg py-10 text-gray-500'>
                <h2 className='text-xl font-semibold pl-10'>Sales value</h2>

                <div className='p-4 flex-auto'>
                  {/* Chart */}
                  <div className='relative h-350-px'>
                    <canvas id='line-chart'></canvas>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Orders */}
            <div id='overview' className='py-10'>
              <div className='flex items-center justify-between py-5'>
                <h3 className='text-lg font-bold text-gray-500 '>
                  Latest Order
                </h3>
                <h3 className='text-lg font-bold text-primaryColor'>
                  View All
                </h3>
              </div>

              <div className='shadow border rounded-lg bg-white py-10 px-10'>
                <div className='flex justify-between'>
                  {/* left: container */}
                  <div className='flex space-x-10'>
                    <div className='flex'>
                      <CustomInput
                        inputStyle={
                          "w-4 h-4 bg-gray-300 rounded border-gray-300"
                        }
                        inputProps={{
                          type: "check",
                          name: "text",
                        }}
                      />

                      <p className='text-md text-gray-500 font-semibold ml-2 -mt-1'>
                        Select All
                      </p>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                      <p className='text-md text-primaryColor font-semibold -mt-6'>
                        Action
                      </p>
                      <MdArrowDropDown className='w-5 h-5 -mt-6' />
                    </div>
                  </div>

                  {/* Right: container */}
                  <div className='relative flex items-center w-96 -mt-2'>
                    <AiOutlineSearch className='w-5 h-5 absolute ml-3 text-gray-400' />

                    <CustomInput
                      inputStyle={
                        "px-10 py-3 rounded-lg bg-gray-200 font-medium text-dark border w-96"
                      }
                      inputProps={{
                        type: "text",
                        name: "text",
                        placeholder: "Search for names, phone numbers",
                      }}
                    />
                  </div>
                </div>

                <hr className='border my-10' />

                {/* Table Start */}
                <div className='overflow-x-auto relative'>
                  <table className='w-full text-sm text-left'>
                    <thead className='text-xs text-gray-400 uppercase'>
                      <tr>
                        <th scope='col' className='py-3 px-0'>
                          <CustomInput
                            inputStyle={
                              "w-4 h-4 bg-white rounded border border-gray-300 p-0"
                            }
                            inputProps={{ type: "check" }}
                          />
                        </th>

                        <th scope='col' className='py-3 px-0'>
                          Customer Name
                        </th>

                        <th scope='col' className='py-3 px-0'>
                          Address
                        </th>
                        <th scope='col' className='py-3 px-0'>
                          qty
                        </th>
                        <th scope='col' className='py-3 px-0'>
                          Amount
                        </th>
                        <th scope='col' className='py-3 px-0'>
                          Status
                        </th>
                        <th scope='col' className='py-3 px-0'>
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody className='py-40'>
                      {orderData.map((order) => (
                        <OrderItems key={order.id} order={order} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
