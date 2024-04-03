// import FilterPopover from "./FilterPopover";
import { useEffect, useRef, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import FilterPopOver from "./FilterPopOver";

const Filters = ({ title, columnFilters, setColumnFilters, categories, handleModal }) => {
  const filterRef = useRef(null);
  const assetName = columnFilters.find((f) => f.id === "name")?.value || "";
  const [filterDropdown, showFilterDropdown] = useState(false);

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  useEffect(() => {
    if (filterDropdown) {
      document.addEventListener("click", handleClickOutside);

      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [filterDropdown]);

  const handleClickOutside = (event) => {
    event.preventDefault();

    if (filterRef.current && !filterRef.current.contains(event.target)) {
      showFilterDropdown(false);
    }
  };

  return (
    <div className="lg:flex items-center justify-between mb-4">
      <h3 className="mb-4 lg:mb-0">{title}</h3>
      <div className="flex flex-col lg:flex-row  lg:items-center">
        <span className="input-wrapper lg:my-1 max-w-md md:w-52 md:mb-0 mb-4">
          <div className="input-suffix-start ml-2">
            <FiSearch />
          </div>

          <input
            className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.125rem]"
            value={assetName}
            type="text"
            placeholder="Search asset"
            onChange={(e) => onFilterChange("name", e.target.value)}
          />
        </span>

        {title !== "Add Asset" && (
          <div>
            <div ref={filterRef} className="dropdown">
              <div
                className="dropdown-toggle"
                onClick={() => showFilterDropdown(!filterDropdown)}
              >
                <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm block md:inline-block md:ml-2 md:mr-2 md:mb-0 mb-4">
                  <span className="flex items-center justify-center">
                    <span className="text-lg">
                      <CiFilter />
                    </span>
                    <span className="ml-1 mr-1">Filter</span>
                  </span>
                </button>
              </div>
              {filterDropdown && (
                <FilterPopOver
                  columnFilters={columnFilters}
                  setColumnFilters={setColumnFilters}
                  categories={categories}
                />
              )}
            </div>
          </div>
        )}
        {title === "My Watchlist" && (
          <div onClick={handleModal} className="block lg:inline-block md:mb-0 mb-4">
            <button className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-9 px-3 py-2 text-sm w-full">
              <span className="flex items-center justify-center">
                <span className="text-lg mr-1">
                  <IoIosAddCircle />
                </span>
                <span className="ml-1 mr-1">Add Asset</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Filters;
