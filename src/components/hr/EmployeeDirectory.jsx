
import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '../ui/table';
import  input  from '../ui/input';
import { Search, Filter, UserPlus, ArrowUpDown } from 'lucide-react';
import Modernbutton from '../ui/Modernbutton';
import { Progress } from '../ui/progress';
import AddEmployee from '../../pages/AddEmployee'; // Import the AddEmployee component

const mockEmployees = [
  { id: 1, name: 'Ravikanth', position: 'Software Engineer', department: 'Testing and marketing', location: 'Hyderabad', status: 'Active', progress: 95 },
  { id: 2, name: 'JP', position: 'CEO', department: 'Chief executive officer', location: 'Hyderabad', status: 'Active', progress: 88 },
  { id: 3, name: 'Sathish', position: 'CTO', department: 'Chief technology officer', location: 'Hyderabad', status: 'Active', progress: 92 },
  { id: 4, name: 'Bharathi', position: 'Full satck developer', department: 'Engineering', location: 'Bangalore', status: 'On Leave', progress: 85 },
  { id: 5, name: 'yamini', position: 'Full stack Developer', department: 'Engineering', location: 'Bangalore', status: 'Active', progress: 78 },
  { id: 6, name: 'Nahida', position: 'Full stack developer', department: 'Engineer', location: 'Sydney', status: 'Active', progress: 85 },
  { id: 7, name: 'Madhuri', position: 'Full stack developer', department: 'Engineering', location: 'Dubai', status: 'Active', progress: 90 },
  { id: 8, name: 'sirisha', position: 'Full stack developer', department: 'Engineering', location: 'USA', status: 'Active', progress: 85 },


];

const EmployeeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(mockEmployees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false); // State to control modal visibility

  const handleSearch = link => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredEmployees(mockEmployees);
      return;
    }

    const filtered = mockEmployees.filter(employee => 
      employee.name.toLowerCase().includes(term.toLowerCase()) ||
      employee.position.toLowerCase().includes(term.toLowerCase()) ||
      employee.department.toLowerCase().includes(term.toLowerCase()) ||
      employee.location.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredEmployees(filtered);
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    setFilteredEmployees([...filteredEmployees].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }));
  };

  const getSortIcon = (name) => {
    if (sortConfig.key !== name) {
      return <ArrowUpDown size={14} className="ml-1 opacity-50" />;
    }
    return sortConfig.direction === 'ascending' ? 
      <ArrowUpDown size={14} className="ml-1" /> : 
      <ArrowUpDown size={14} className="ml-1 transform rotate-180" />;
  };

  const handleAddEmployeeSuccess = () => {
    // Potentially refresh employee list or show a success message
    console.log("Employee added successfully!");
    setShowAddEmployeeModal(false); // Close the modal on success
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#1C2526] dark:text-white">
          Employee Directory
        </h2>
        {/* <div className="flex gap-2">
          <Modernbutton variant="outline" iconLeft={<Filter size={16} />}>
            Filter
          </Modernbutton>
          <Modernbutton 
            variant="primary" 
            iconLeft={<UserPlus size={16} />} 
            withGlow
            onClick={() => setShowAddEmployeeModal(true)} // Open modal on click
          >
            Add Employee
          </Modernbutton>
        </div> */}
      </div>
      
      <div className="mb-4 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" size={18} />
        <input 
          placeholder="Search employees by name, position, department, or location..." 
          className="pl-10 bg-white dark:bg-dark-lighter border-[#D3D3D3] dark:border-dark-lighter focus:border-[#6B48FF]"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-[#D3D3D3] dark:border-dark-lighter shadow-md">
        <Table className="w-full">
          <TableHeader className="bg-[#F3F0FF] dark:bg-dark-lighter">
            <TableRow>
              <TableHead className="cursor-pointer hover:bg-[#E4DCFF]/70 dark:hover:bg-dark-light/50 transition-colors" onClick={() => requestSort('name')}>
                <div className="flex items-center">
                  Name {getSortIcon('name')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-[#E4DCFF]/70 dark:hover:bg-dark-light/50 transition-colors" onClick={() => requestSort('position')}>
                <div className="flex items-center">
                  Position {getSortIcon('position')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-[#E4DCFF]/70 dark:hover:bg-dark-light/50 transition-colors" onClick={() => requestSort('department')}>
                <div className="flex items-center">
                  Department {getSortIcon('department')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-[#E4DCFF]/70 dark:hover:bg-dark-light/50 transition-colors" onClick={() => requestSort('location')}>
                <div className="flex items-center">
                  Location {getSortIcon('location')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-[#E4DCFF]/70 dark:hover:bg-dark-light/50 transition-colors" onClick={() => requestSort('status')}>
                <div className="flex items-center">
                  Status {getSortIcon('status')}
                </div>
              </TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map(employee => (
                <TableRow key={employee.id} className="cursor-pointer hover:bg-[#F3F0FF]/30 dark:hover:bg-dark-light/20 transition-all">
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.location}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === 'Active' 
                        ? 'bg-[#A78BFA]/20 text-[#6B48FF] dark:bg-[#A78BFA]/20 dark:text-[#A78BFA] border border-[#A78BFA]/30' 
                        : 'bg-[#B0B0B0]/20 text-[#666666] dark:bg-[#B0B0B0]/20 dark:text-[#B0B0B0] border border-[#B0B0B0]/30'
                    }`}>
                      {employee.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="w-full flex items-center gap-2">
                      <Progress 
                        value={employee.progress} 
                        className="h-2 bg-[#D3D3D3] dark:bg-dark-light"
                      />
                      <span className="text-xs text-[#6B48FF] dark:text-[#A78BFA]">{employee.progress}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-[#666666] dark:text-[#B0B0B0]">
                  No employees found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {showAddEmployeeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <AddEmployee 
              onClose={() => setShowAddEmployeeModal(false)} 
              onSubmitSuccess={handleAddEmployeeSuccess} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDirectory;
