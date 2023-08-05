import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";

const FileInput = ({
  type = "file",
  label = "file input",
  accept,
  required = false,
  onChange = undefined,
  ref = null,
  selectedFile,
  id = undefined,props
}) => {


  return (
    <>
      <label
        htmlFor={id}
        className="peer-focus:font-medium text-sm flex items-center justify-center"
      >
        {/* <div
          className="rounded-full hover:cursor-pointer h-40 w-40 bg-white flex items-center justify-center "
        >
            <div className="mx-auto">
                <AiOutlineCamera size={82} className="mx-auto"  color="#788292"  />
                <span className="text-center font-thin text-spanText ">Upload Photo</span>
            </div>
        </div> */}
        {!selectedFile ? (
            <div
            className="rounded-full hover:cursor-pointer h-40 w-40 bg-white flex items-center justify-center "
          >
              <div className="mx-auto">
                  <AiOutlineCamera size={82} className="mx-auto"  color="#788292"  />
                  <span className="text-center font-thin text-spanText ">Upload Photo</span>
              </div>
          </div>
          ):
          (
            <img
              className="rounded-full hover:cursor-pointer h-40 w-40"
              style={{ objectFit: 'cover', marginTop: 10, transition: '2s ease-in-out' }}
              src={URL.createObjectURL(selectedFile)}
              alt="upload-img"
            />
          )
          }
      </label>

      <input
        type={type}
        name={`floating_${label}`}
        id={id}
        className="hidden py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        accept={accept}
        required={required}
        onChange={onChange}
        ref={ref}
      />
      {/* <button onClick={handleSubmit}>Upload File</button> */}
    </>
  );
};

export default FileInput;
