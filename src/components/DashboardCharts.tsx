import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { getDepartmentStats, getRoleStats } from "@/data/employeeData";

const COLORS = ['hsl(262 83% 58%)', 'hsl(142 76% 36%)', 'hsl(38 92% 50%)', 'hsl(0 84% 60%)', 'hsl(262 100% 75%)', 'hsl(240 5% 64%)', 'hsl(217 91% 60%)', 'hsl(25 95% 53%)'];

const weeklyData = [
  { name: 'Mon', completed: 245, inProgress: 52 },
  { name: 'Tue', completed: 287, inProgress: 48 },
  { name: 'Wed', completed: 312, inProgress: 45 },
  { name: 'Thu', completed: 298, inProgress: 55 },
  { name: 'Fri', completed: 334, inProgress: 43 },
  { name: 'Sat', completed: 156, inProgress: 28 },
  { name: 'Sun', completed: 89, inProgress: 15 },
];

export function DashboardCharts() {
  const departmentStats = getDepartmentStats();
  const roleStats = getRoleStats();

  const departmentChartData = departmentStats.map(dept => ({
    name: dept.name,
    tasks: dept.totalTasks,
    completed: dept.completedTasks,
    rate: dept.avgCompletionRate
  }));

  const roleChartData = roleStats.map(role => ({
    name: role.role,
    value: role.totalTasks,
    count: role.count
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Department Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Department Task Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentChartData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="name" 
                fontSize={12}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="completed" fill="hsl(var(--success))" name="Completed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tasks" fill="hsl(var(--muted))" name="Total" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Role Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Task Distribution by Role</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roleChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {roleChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Weekly Progress */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Weekly Task Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="name" 
                fontSize={12}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--success))', strokeWidth: 2 }}
                name="Completed Tasks"
              />
              <Line 
                type="monotone" 
                dataKey="inProgress" 
                stroke="hsl(var(--warning))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--warning))', strokeWidth: 2 }}
                name="In Progress"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}