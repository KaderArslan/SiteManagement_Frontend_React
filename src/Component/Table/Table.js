import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
  
  const Table = ({ rows, columns }) => {
    const [pageSize, setPageSize] = useState(10);
  
    const handlePageSizeChange = (pageSize) => {
      setPageSize(pageSize);
    };

    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
        />
      </div>
    );
  };
  
  export default Table;
  