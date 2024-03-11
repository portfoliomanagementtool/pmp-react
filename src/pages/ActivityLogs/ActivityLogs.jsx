import React from "react";
import { IoDocument } from "react-icons/io5";

const ActivityLogs = () => {
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <IoDocument className="w-3 h-3 text-blue-800 dark:text-blue-300" />
          </span>
          <p className="text-base text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-black">Carolina Perkins</span>{" "}
            has changed <span className="font-semibold text-black">PD-979</span>{" "}
            status to Completed <span className="font-semibold">08:50 PM</span> {" "} on 19th March.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <IoDocument className="w-3 h-3 text-blue-800 dark:text-blue-300" />
          </span>
          <p className="text-base text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-black">Carolina Perkins</span>{" "}
            has changed <span className="font-semibold text-black">PD-979</span>{" "}
            status to Completed <span className="font-semibold">08:50 PM</span> on
            19th March.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <IoDocument className="w-3 h-3 text-blue-800 dark:text-blue-300" />
          </span>
          <p className="text-base text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-black">Carolina Perkins</span>{" "}
            has changed <span className="font-semibold text-black">PD-979</span>{" "}
            status to Completed <span className="font-semibold">08:50 PM</span> on
            19th March.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <IoDocument className="w-3 h-3 text-blue-800 dark:text-blue-300" />
          </span>
          <p className="text-base text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-black">Carolina Perkins</span>{" "}
            has changed <span className="font-semibold text-black">PD-979</span>{" "}
            status to Completed <span className="font-semibold">08:50 PM</span> on
            19th March.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <IoDocument className="w-3 h-3 text-blue-800 dark:text-blue-300" />
          </span>
          <p className="text-base text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-black">Carolina Perkins</span>{" "}
            has changed <span className="font-semibold text-black">PD-979</span>{" "}
            status to Completed <span className="font-semibold">08:50 PM</span> on
            19th March.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ActivityLogs;
