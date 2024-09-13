import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const createPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-4 p-4 border-t border-gray-200">
      <div className="text-sm text-gray-500">
        Showing {currentPage * 10 - 9} to {Math.min(currentPage * 10, totalPages * 10)} of {totalPages * 10} entries
      </div>

      <div className="flex items-center space-x-1">
        {/* Previous Button */}
        <button
          className={`px-3 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {createPageNumbers().map((page) => (
          <button
            key={page}
            className={`px-3 py-2 rounded-md ${
              currentPage === page ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-purple-400`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-3 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
