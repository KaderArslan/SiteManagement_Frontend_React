import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../Services/axios';

const columns = [
  {field: "apartmentId",headerName: "ID",sortable: false,},
  {field: "apartmentBlock",headerName: "Block",sortable: false,},
  {field: "apartmentIsEmpty",headerName: "IsEmpty",sortable: false,},
  {field: "apartmentType",headerName: "Type",sortable: false,},
  {field: "apartmentFloor",headerName: "Floor",sortable: false,},
  {field: "apartmentNumber",headerName: "Number",sortable: false,},
  {field: "apartmentIsOwner",headerName: "IsOwner",sortable: false,},
  {field: "apartmentStartDate",headerName: "StartDate",sortable: false,},
  {field: "apartmentEndDate",headerName: "EndDate",sortable: false,},
];

export default function Deneme() {

const [apartmentList, setApartmentList] = useState([]);

  useEffect(() => {
    axios
    .get('/api/ApartmentAdmin/GetAllApartments')
    .then((response) => {
      console.log(response.data);
      setApartmentList(response.data);
    });
    }, [])

    const [pageSize, setPageSize] = useState(10);
    const handlePageSizeChange = (pageSize) => {
      setPageSize(pageSize);
    };
    
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={apartmentList}
            columns={columns}
            pageSize={pageSize}   
            onPageSizeChange={handlePageSizeChange}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
          />
        </div>
      );
}