import React from "react";
import PayButton from "./PayButton";

const PayMethod = () => {
  return (
    <>
      <div className="ml-9 py-5">
        <div>
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">결제 수단</h4>
            </div>
            <PayButton />
          </div>
        </div>

        <div className="my-2 py-5">
          <div className="flex items-center mb-4">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="USA"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              checked
            ></input>
            <label
              htmlFor="country-option-1"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              신용카드 간편결제
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="country-option-2"
              type="radio"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              checked
            ></input>
            <label
              htmlFor="country-option-2"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              신용카드 일반결제
            </label>
          </div>
        </div>
      </div>
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </>
  );
};

export default PayMethod;
