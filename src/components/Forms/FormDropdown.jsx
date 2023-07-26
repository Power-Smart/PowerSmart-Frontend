import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function FormDropdown() {
    const options = [
        "Type 1",
        "Type 2",
        "Type 3",
        "Type 4",
        "Type 5",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select Type");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full lg:w-90">
            <div
                className="flex items-center justify-between w-full p-2.5 text-gray-500 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                onClick={handleToggle}
            >
                {selectedOption}
                <FiChevronDown className={`ml-2 ${isOpen && "transform rotate-180"}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full right-0 z-10 w-full bg-white border rounded-md shadow-md mt-1">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="p-2.5 cursor-pointer hover:bg-gray-100 text-gray-700"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FormDropdown;