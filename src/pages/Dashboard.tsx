import { StatsCard } from "@/components/StatsCard";
import { EmployeeTable } from "@/components/EmployeeTable";
import { DashboardCharts } from "@/components/DashboardCharts";
import { employeeData } from "@/data/employeeData";
import { 
  Users, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Building2,
  UserCheck,
  Calendar,
  Target
} from "lucide-react";

export default function Dashboard() {
  // Calculate overall stats
  const totalEmployees = employeeData.length;
  const totalTasks = employeeData.reduce((sum, emp) => sum + emp.totalTasks, 0);
  const completedTasks = employeeData.reduce((sum, emp) => sum + emp.tasksCompleted, 0);
  const inProgressTasks = employeeData.reduce((sum, emp) => sum + emp.tasksInProgress, 0);
  const avgCompletionRate = Math.round((completedTasks / totalTasks) * 100);
  
  const activeEmployees = employeeData.filter(emp => emp.status === 'active').length;
  const departments = [...new Set(employeeData.map(emp => emp.department))].length;
  
  // Get top performers
  const topPerformers = employeeData
    .sort((a, b) => b.completionRate - a.completionRate)
    .slice(0, 10);

  // Get recent activities (employees with recent activity)
  const recentlyActive = employeeData
    .filter(emp => {
      const activityMinutes = parseInt(emp.lastActivity.split(' ')[0]);
      return activityMinutes <= 60;
    })
    .sort((a, b) => parseInt(a.lastActivity.split(' ')[0]) - parseInt(b.lastActivity.split(' ')[0]))
    .slice(0, 8);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Company-wide task tracking and employee performance overview
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Last updated</div>
          <div className="font-medium">Just now</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Employees"
          value={totalEmployees}
          description={`${activeEmployees} currently active`}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Total Tasks"
          value={totalTasks.toLocaleString()}
          description={`${completedTasks} completed`}
          icon={Target}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Completion Rate"
          value={`${avgCompletionRate}%`}
          description="Overall performance"
          icon={CheckCircle}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Active Tasks"
          value={inProgressTasks}
          description="Currently in progress"
          icon={Clock}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Departments"
          value={departments}
          description="Active departments"
          icon={Building2}
        />
        <StatsCard
          title="Top Performer"
          value={topPerformers[0]?.completionRate + "%"}
          description={topPerformers[0]?.name}
          icon={UserCheck}
        />
        <StatsCard
          title="This Week"
          value="1,721"
          description="Tasks completed"
          icon={Calendar}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      {/* Charts Section */}
      <DashboardCharts />

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Top Performers */}
        <EmployeeTable 
          employees={topPerformers} 
          title="🏆 Top Performers" 
        />
        
        {/* Recently Active */}
        <EmployeeTable 
          employees={recentlyActive} 
          title="⚡ Recently Active" 
        />
      </div>

      {/* All Employees Table */}
      <EmployeeTable employees={employeeData} title="All Company Employees" />
    </div>
  );
}