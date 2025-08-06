import { EmployeeTable } from "@/components/EmployeeTable";
import { employeeData } from "@/data/employeeData";
import { Users, UserCheck, Clock, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";

export default function EmployeesPage() {
  const totalEmployees = employeeData.length;
  const activeEmployees = employeeData.filter(emp => emp.status === 'active').length;
  const awayEmployees = employeeData.filter(emp => emp.status === 'away').length;
  const offlineEmployees = employeeData.filter(emp => emp.status === 'offline').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          All Employees
        </h1>
        <p className="text-muted-foreground mt-1">
          Complete list of all company employees with their task details
        </p>
      </div>

      {/* Employee Status Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Employees"
          value={totalEmployees}
          description="All registered employees"
          icon={Users}
        />
        <StatsCard
          title="Active Now"
          value={activeEmployees}
          description="Currently working"
          icon={UserCheck}
          className="border-success/20"
        />
        <StatsCard
          title="Away"
          value={awayEmployees}
          description="Temporarily away"
          icon={Clock}
          className="border-warning/20"
        />
        <StatsCard
          title="Offline"
          value={offlineEmployees}
          description="Not active"
          icon={TrendingUp}
          className="border-muted/40"
        />
      </div>

      {/* Full Employee Table */}
      <EmployeeTable employees={employeeData} title="Complete Employee Directory" />
    </div>
  );
}