import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { getDepartmentStats, employeeData } from "@/data/employeeData";
import { Building2, Users, Target, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DepartmentsPage() {
  const departmentStats = getDepartmentStats();
  const totalDepartments = departmentStats.length;
  const avgEmployeesPerDept = Math.round(employeeData.length / totalDepartments);
  const topDepartment = departmentStats.reduce((prev, current) => 
    (prev.avgCompletionRate > current.avgCompletionRate) ? prev : current
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Department Statistics
        </h1>
        <p className="text-muted-foreground mt-1">
          Detailed breakdown of performance across all company departments
        </p>
      </div>

      {/* Department Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Departments"
          value={totalDepartments}
          description="Active departments"
          icon={Building2}
        />
        <StatsCard
          title="Avg Employees/Dept"
          value={avgEmployeesPerDept}
          description="Per department"
          icon={Users}
        />
        <StatsCard
          title="Top Department"
          value={`${topDepartment.avgCompletionRate}%`}
          description={topDepartment.name}
          icon={Target}
        />
        <StatsCard
          title="Total Tasks"
          value={departmentStats.reduce((sum, dept) => sum + dept.totalTasks, 0)}
          description="Across all departments"
          icon={TrendingUp}
        />
      </div>

      {/* Department Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Department Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={departmentStats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="name" 
                fontSize={12}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="completedTasks" fill="hsl(var(--success))" name="Completed Tasks" radius={[4, 4, 0, 0]} />
              <Bar dataKey="totalTasks" fill="hsl(var(--muted))" name="Total Tasks" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detailed Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departmentStats.map((dept) => (
          <Card key={dept.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{dept.name}</CardTitle>
                <Badge 
                  variant="secondary" 
                  className={
                    dept.avgCompletionRate >= 85 
                      ? "bg-success/10 text-success" 
                      : dept.avgCompletionRate >= 75 
                      ? "bg-warning/10 text-warning" 
                      : "bg-destructive/10 text-destructive"
                  }
                >
                  {dept.avgCompletionRate}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Employees:</span>
                <span className="font-semibold">{dept.employees}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Tasks:</span>
                <span className="font-semibold">{dept.totalTasks}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Completed:</span>
                <span className="font-semibold text-success">{dept.completedTasks}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Progress:</span>
                  <span className="text-sm font-medium">{dept.avgCompletionRate}%</span>
                </div>
                <Progress value={dept.avgCompletionRate} className="h-2" />
              </div>
              
              <div className="pt-2">
                <div className="text-xs text-muted-foreground">
                  Avg tasks per employee: {Math.round(dept.totalTasks / dept.employees)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}