import { useState } from "react";
import { Employee } from "@/data/employeeData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users } from "lucide-react";

interface EmployeeTableProps {
  employees: Employee[];
  title?: string;
}

export function EmployeeTable({ employees, title = "All Employees" }: EmployeeTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = 
      selectedDepartment === "all" || employee.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(employees.map(emp => emp.department))];

  const getStatusBadge = (status: Employee['status']) => {
    const variants = {
      active: "bg-success/10 text-success hover:bg-success/20",
      away: "bg-warning/10 text-warning hover:bg-warning/20",
      offline: "bg-muted text-muted-foreground"
    };
    
    return (
      <Badge variant="secondary" className={variants[status]}>
        {status}
      </Badge>
    );
  };

  const getCompletionBadge = (rate: number) => {
    if (rate >= 85) return "bg-success/10 text-success";
    if (rate >= 70) return "bg-warning/10 text-warning";
    return "bg-destructive/10 text-destructive";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <CardTitle>{title}</CardTitle>
            <Badge variant="secondary" className="ml-2">
              {filteredEmployees.length} employees
            </Badge>
          </div>
        </div>
        
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employees by name, role, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-input bg-background rounded-md text-sm"
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Tasks Completed</TableHead>
                <TableHead>In Progress</TableHead>
                <TableHead>Completion Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {employee.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-muted-foreground">ID: {employee.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{employee.role}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {employee.department}
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-semibold text-success">{employee.tasksCompleted}</div>
                      <div className="text-xs text-muted-foreground">
                        of {employee.totalTasks}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-semibold text-warning">{employee.tasksInProgress}</div>
                      <div className="text-xs text-muted-foreground">active</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={getCompletionBadge(employee.completionRate)}
                    >
                      {employee.completionRate}%
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(employee.status)}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {employee.lastActivity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {filteredEmployees.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No employees found matching your criteria.
          </div>
        )}
      </CardContent>
    </Card>
  );
}