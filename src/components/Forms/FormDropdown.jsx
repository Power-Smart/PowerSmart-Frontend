import React from "react";

export default function FormDropdown() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <label>Select Type
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>ReactJS Dropdown</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                </select>
            </label>
        </div>
    );
}