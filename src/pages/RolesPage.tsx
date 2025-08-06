import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getRoleStats, employeeData } from "@/data/employeeData";
import { UserCheck, Crown, Users, Target } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  'hsl(262 83% 58%)', 'hsl(142 76% 36%)', 'hsl(38 92% 50%)', 
  'hsl(0 84% 60%)', 'hsl(262 100% 75%)', 'hsl(240 5% 64%)', 
  'hsl(217 91% 60%)', 'hsl(25 95% 53%)', 'hsl(195 100% 50%)'
];

export default function RolesPage() {
  const roleStats = getRoleStats();
  const totalRoles = roleStats.length;
  const seniorRoles = roleStats.filter(role => 
    ['CEO', 'Co-founder', 'HR Director', 'Team Captain', 'Team Lead'].includes(role.role)
  );
  const topRole = roleStats.reduce((prev, current) => 
    (prev.avgCompletionRate > current.avgCompletionRate) ? prev : current
  );

  const pieChartData = roleStats.map(role => ({
    name: role.role,
    value: role.count,
    tasks: role.totalTasks
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Role Analysis
        </h1>
        <p className="text-muted-foreground mt-1">
          Comprehensive analysis of employee roles and their performance metrics
        </p>
      </div>

      {/* Role Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Roles"
          value={totalRoles}
          description="Different job positions"
          icon={UserCheck}
        />
        <StatsCard
          title="Leadership Roles"
          value={seniorRoles.length}
          description="Senior positions"
          icon={Crown}
        />
        <StatsCard
          title="Top Performing Role"
          value={`${topRole.avgCompletionRate}%`}
          description={topRole.role}
          icon={Target}
        />
        <StatsCard
          title="Total People"
          value={roleStats.reduce((sum, role) => sum + role.count, 0)}
          description="Across all roles"
          icon={Users}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Distribution Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Distribution by Role</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
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

        {/* Role Performance Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance by Role</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roleStats}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="role" 
                  fontSize={10}
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis fontSize={12} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="avgCompletionRate" 
                  fill="hsl(var(--primary))" 
                  name="Completion Rate %" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roleStats.map((role, index) => (
          <Card key={role.role} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  {['CEO', 'Co-founder'].includes(role.role) && <Crown className="w-4 h-4 text-warning" />}
                  {role.role}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className={
                    role.avgCompletionRate >= 85 
                      ? "bg-success/10 text-success" 
                      : role.avgCompletionRate >= 75 
                      ? "bg-warning/10 text-warning" 
                      : "bg-destructive/10 text-destructive"
                  }
                >
                  {role.avgCompletionRate}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">People in Role:</span>
                <span className="font-semibold">{role.count}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Tasks:</span>
                <span className="font-semibold">{role.totalTasks}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Completed:</span>
                <span className="font-semibold text-success">{role.completedTasks}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Performance:</span>
                  <span className="text-sm font-medium">{role.avgCompletionRate}%</span>
                </div>
                <Progress value={role.avgCompletionRate} className="h-2" />
              </div>
              
              <div className="pt-2 text-xs text-muted-foreground">
                Avg tasks per person: {Math.round(role.totalTasks / role.count)}
              </div>

              {/* Role Priority Indicator */}
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-xs text-muted-foreground">
                  {['CEO', 'Co-founder'].includes(role.role) 
                    ? 'Executive Level' 
                    : role.role.includes('Lead') || role.role.includes('Captain') || role.role.includes('Director')
                    ? 'Management Level'
                    : role.role === 'Intern' 
                    ? 'Entry Level'
                    : 'Professional Level'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}