
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
import { Search, Filter, UserPlus, ArrowUpDown } from 'lucide-react';
import GlassContainer from '../ui/GlassContainer';
import ModernButton from '../ui/ModernButton';
import GradientText from '../ui/GradientText';
import { Progress } from '../ui/progress';

const mockEmployees = [
  { id: 1, name: 'Emily Johnson', position: 'Software Engineer', department: 'Engineering', location: 'New York', status: 'Active', progress: 95 },
  { id: 2, name: 'Michael Chen', position: 'Product Manager', department: 'Product', location: 'San Francisco', status: 'Active', progress: 88 },
  { id: 3, name: 'Sarah Williams', position: 'HR Specialist', department: 'Human Resources', location: 'London', status: 'Active', progress: 92 },
  { id: 4, name: 'David Rodriguez', position: 'Marketing Director', department: 'Marketing', location: 'Singapore', status: 'On Leave', progress: 45 },
  { id: 5, name: 'Aisha Kumar', position: 'Frontend Developer', department: 'Engineering', location: 'Bangalore', status: 'Active', progress: 78 },
  { id: 6, name: 'James Wilson', position: 'Financial Analyst', department: 'Finance', location: 'Sydney', status: 'Active', progress: 85 },
  { id: 7, name: 'Priya Sharma', position: 'UX Designer', department: 'Design', location: 'Dubai', status: 'Active', progress: 90 },
  { id: 8, name: 'Robert Kim', position: 'Sales Manager', department: 'Sales', location: 'Toronto', status: 'On Leave', progress: 32 },
];

const EmployeeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(mockEmployees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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
          className="pl-10 bg-primary-900/10 border-primary-500/20 focus:border-primary-500 transition-all"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-primary-700/20 shadow-lg">
        <Table className="w-full">
          <TableHeader className="bg-primary-900/30 backdrop-blur-sm">
            <TableRow>
              <TableHead className="cursor-pointer hover:bg-primary-800/30 transition-colors" onClick={() => requestSort('name')}>
                <div className="flex items-center">
                  Name {getSortIcon('name')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-primary-800/30 transition-colors" onClick={() => requestSort('position')}>
                <div className="flex items-center">
                  Position {getSortIcon('position')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-primary-800/30 transition-colors" onClick={() => requestSort('department')}>
                <div className="flex items-center">
                  Department {getSortIcon('department')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-primary-800/30 transition-colors" onClick={() => requestSort('location')}>
                <div className="flex items-center">
                  Location {getSortIcon('location')}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-primary-800/30 transition-colors" onClick={() => requestSort('status')}>
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
                <TableRow key={employee.id} className="cursor-pointer hover:bg-primary-900/20 backdrop-blur-sm transition-all">
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.location}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-300/30' 
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-300/30'
                    }`}>
                      {employee.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="w-full flex items-center gap-2">
                      <Progress value={employee.progress} className="h-2" />
                      <span className="text-xs text-primary-300">{employee.progress}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-gray-500">
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
