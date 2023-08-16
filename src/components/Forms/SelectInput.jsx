import { forwardRef } from 'react';

const SelectInput = forwardRef(({
  required = false,
  onChange = () => { },
  selectedOption,
  categories,
  id = undefined,
}, ref) => {
  return (
    <>
      <select
        name={id}
        id={id}
        className="block py-2.5 px-1 w-full text-sm rounded-md bg-slate-700 text-gray-900 bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-slate-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-slate-900 peer"
        required={required}
        onChange={onChange}
        ref={ref}
        value={selectedOption}
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </>
  );
});

export default SelectInput;
