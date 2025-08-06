import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { employeeData } from "@/data/employeeData";
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

const COLORS = ['hsl(262 83% 58%)', 'hsl(142 76% 36%)', 'hsl(38 92% 50%)', 'hsl(0 84% 60%)'];

export default function AnalyticsPage() {
  // Analytics data preparation
  const monthlyTrend = [
    { month: 'Jan', tasks: 1850, completed: 1580, efficiency: 85 },
    { month: 'Feb', tasks: 1920, completed: 1650, efficiency: 86 },
    { month: 'Mar', tasks: 2100, completed: 1800, efficiency: 86 },
    { month: 'Apr', tasks: 2050, completed: 1750, efficiency: 85 },
    { month: 'May', tasks: 2200, completed: 1900, efficiency: 86 },
    { month: 'Jun', tasks: 2180, completed: 1890, efficiency: 87 },
  ];

  const statusDistribution = [
    { name: 'Active', value: employeeData.filter(emp => emp.status === 'active').length, color: COLORS[1] },
    { name: 'Away', value: employeeData.filter(emp => emp.status === 'away').length, color: COLORS[2] },
    { name: 'Offline', value: employeeData.filter(emp => emp.status === 'offline').length, color: COLORS[3] },
  ];

  const taskDistribution = [
    { name: 'Completed', value: employeeData.reduce((sum, emp) => sum + emp.tasksCompleted, 0), color: COLORS[1] },
    { name: 'In Progress', value: employeeData.reduce((sum, emp) => sum + emp.tasksInProgress, 0), color: COLORS[2] },
    { name: 'Pending', value: employeeData.reduce((sum, emp) => sum + emp.tasksPending, 0), color: COLORS[3] },
  ];

  const departmentEfficiency = [
    { dept: 'Engineering', efficiency: 87 },
    { dept: 'Design', efficiency: 83 },
    { dept: 'Marketing', efficiency: 81 },
    { dept: 'Sales', efficiency: 84 },
    { dept: 'HR', efficiency: 85 },
    { dept: 'Finance', efficiency: 89 },
  ];

  const hourlyActivity = [
    { hour: '9 AM', activity: 15 },
    { hour: '10 AM', activity: 35 },
    { hour: '11 AM', activity: 45 },
    { hour: '12 PM', activity: 25 },
    { hour: '1 PM', activity: 20 },
    { hour: '2 PM', activity: 40 },
    { hour: '3 PM', activity: 50 },
    { hour: '4 PM', activity: 45 },
    { hour: '5 PM', activity: 30 },
    { hour: '6 PM', activity: 15 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Advanced Analytics
        </h1>
        <p className="text-muted-foreground mt-1">
          Deep insights and data analysis for strategic decision making
        </p>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Task Velocity"
          value="87.3/day"
          description="Avg tasks completed daily"
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Team Efficiency"
          value="86%"
          description="Overall productivity score"
          icon={BarChart3}
          trend={{ value: 3, isPositive: true }}
        />
        <StatsCard
          title="Active Hours"
          value="8.2h"
          description="Avg daily active time"
          icon={Activity}
        />
        <StatsCard
          title="Growth Rate"
          value="+12%"
          description="Performance improvement"
          icon={PieChart}
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      {/* Main Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Trend (6 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
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
                  dataKey="efficiency" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Employee Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Task Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={[{ name: 'Tasks', ...Object.fromEntries(taskDistribution.map(item => [item.name, item.value])) }]}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip />
                <Area type="monotone" dataKey="Completed" stackId="1" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.6} />
                <Area type="monotone" dataKey="In Progress" stackId="1" stroke={COLORS[2]} fill={COLORS[2]} fillOpacity={0.6} />
                <Area type="monotone" dataKey="Pending" stackId="1" stroke={COLORS[3]} fill={COLORS[3]} fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Efficiency */}
        <Card>
          <CardHeader>
            <CardTitle>Department Efficiency Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentEfficiency} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis dataKey="dept" type="category" fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} width={80} />
                <Tooltip />
                <Bar dataKey="efficiency" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Hourly Activity Pattern */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Activity Pattern</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyActivity}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="hour" 
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
              <Area 
                type="monotone" 
                dataKey="activity" 
                stroke="hsl(var(--success))" 
                fill="hsl(var(--success))"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-success/20">
          <CardHeader>
            <CardTitle className="text-success">📈 Top Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Engineering team shows highest efficiency (87%)</li>
              <li>• Peak productivity hours: 3-4 PM</li>
              <li>• 15% improvement in task velocity this month</li>
              <li>• 86% of employees maintain active status</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-warning/20">
          <CardHeader>
            <CardTitle className="text-warning">⚠️ Areas to Watch</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Marketing team efficiency below average</li>
              <li>• Slight dip in afternoon productivity</li>
              <li>• 12% of tasks remain pending</li>
              <li>• 4 employees need performance support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">🎯 Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Implement flexible hours for peak productivity</li>
              <li>• Provide additional training for underperformers</li>
              <li>• Cross-team collaboration between high/low performers</li>
              <li>• Review task allocation strategies</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}