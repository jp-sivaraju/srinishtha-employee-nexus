
import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '../ui/table';
import { Input } from '../ui/input';
import { Search, Filter, UserPlus } from 'lucide-react';
import GlassContainer from '../ui/GlassContainer';
import ModernButton from '../ui/ModernButton';
import GradientText from '../ui/GradientText';

const mockEmployees = [
  { id: 1, name: 'Emily Johnson', position: 'Software Engineer', department: 'Engineering', location: 'New York', status: 'Active' },
  { id: 2, name: 'Michael Chen', position: 'Product Manager', department: 'Product', location: 'San Francisco', status: 'Active' },
  { id: 3, name: 'Sarah Williams', position: 'HR Specialist', department: 'Human Resources', location: 'London', status: 'Active' },
  { id: 4, name: 'David Rodriguez', position: 'Marketing Director', department: 'Marketing', location: 'Singapore', status: 'On Leave' },
  { id: 5, name: 'Aisha Kumar', position: 'Frontend Developer', department: 'Engineering', location: 'Bangalore', status: 'Active' },
  { id: 6, name: 'James Wilson', position: 'Financial Analyst', department: 'Finance', location: 'Sydney', status: 'Active' },
  { id: 7, name: 'Priya Sharma', position: 'UX Designer', department: 'Design', location: 'Dubai', status: 'Active' },
  { id: 8, name: 'Robert Kim', position: 'Sales Manager', department: 'Sales', location: 'Toronto', status: 'On Leave' },
];

const EmployeeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(mockEmployees);

  const handleSearch = (e) => {
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

  return (
    <GlassContainer className="p-6">
      <div className="flex justify-between items-center mb-6">
        <GradientText as="h2" className="text-2xl font-semibold" gradient="night-owl">
          Employee Directory
        </GradientText>
        <div className="flex gap-2">
          <ModernButton variant="outline" iconLeft={<Filter size={16} />}>
            Filter
          </ModernButton>
          <ModernButton variant="glow" iconLeft={<UserPlus size={16} />} withGlow>
            Add Employee
          </ModernButton>
        </div>
      </div>
      
      <div className="mb-4 relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <Input 
          placeholder="Search employees by name, position, department, or location..." 
          className="pl-10"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map(employee => (
                <TableRow key={employee.id} className="cursor-pointer hover:bg-primary-900/10">
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.location}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
                    }`}>
                      {employee.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                  No employees found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </GlassContainer>
  );
};

export default EmployeeDirectory;
