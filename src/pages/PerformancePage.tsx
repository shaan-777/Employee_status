import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { employeeData } from "@/data/employeeData";
import { TrendingUp, Award, Target, Users } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

export default function PerformancePage() {
  // Top performers (completion rate >= 85%)
  const topPerformers = employeeData
    .filter(emp => emp.completionRate >= 85)
    .sort((a, b) => b.completionRate - a.completionRate);

  // Underperformers (completion rate < 75%)
  const underperformers = employeeData
    .filter(emp => emp.completionRate < 75)
    .sort((a, b) => a.completionRate - b.completionRate);

  // Average performers (75% <= completion rate < 85%)
  const averagePerformers = employeeData
    .filter(emp => emp.completionRate >= 75 && emp.completionRate < 85);

  // Performance distribution data for charts
  const performanceData = [
    { name: 'Excellent (85%+)', value: topPerformers.length, percentage: 85 },
    { name: 'Good (75-84%)', value: averagePerformers.length, percentage: 80 },
    { name: 'Needs Improvement (<75%)', value: underperformers.length, percentage: 70 },
  ];

  // Scatter plot data
  const scatterData = employeeData.map(emp => ({
    name: emp.name,
    totalTasks: emp.totalTasks,
    completionRate: emp.completionRate,
    role: emp.role
  }));

  // Weekly performance trend (mock data)
  const weeklyTrend = [
    { week: 'Week 1', performance: 78 },
    { week: 'Week 2', performance: 82 },
    { week: 'Week 3', performance: 85 },
    { week: 'Week 4', performance: 83 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Performance Analytics
        </h1>
        <p className="text-muted-foreground mt-1">
          Detailed performance analysis and employee productivity insights
        </p>
      </div>

      {/* Performance Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Top Performers"
          value={topPerformers.length}
          description="85%+ completion rate"
          icon={Award}
          className="border-success/20"
        />
        <StatsCard
          title="Average Performers"
          value={averagePerformers.length}
          description="75-84% completion rate"
          icon={Target}
          className="border-warning/20"
        />
        <StatsCard
          title="Need Improvement"
          value={underperformers.length}
          description="Below 75% completion"
          icon={TrendingUp}
          className="border-destructive/20"
        />
        <StatsCard
          title="Overall Average"
          value={`${Math.round(employeeData.reduce((sum, emp) => sum + emp.completionRate, 0) / employeeData.length)}%`}
          description="Company-wide performance"
          icon={Users}
        />
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Trend (Last 4 Weeks)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="week" 
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
                  dataKey="performance" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance vs Tasks Scatter */}
        <Card>
          <CardHeader>
            <CardTitle>Performance vs Task Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={scatterData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  type="number" 
                  dataKey="totalTasks" 
                  name="Total Tasks"
                  fontSize={12}
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="completionRate" 
                  name="Completion Rate"
                  fontSize={12}
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Scatter dataKey="completionRate" fill="hsl(var(--primary))" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performers */}
        <Card className="border-success/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <Award className="w-5 h-5" />
              Top Performers ({topPerformers.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topPerformers.slice(0, 8).map((emp) => (
              <div key={emp.id} className="flex items-center justify-between p-2 rounded-lg bg-success/5">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs bg-success/10 text-success">
                      {emp.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{emp.name}</div>
                    <div className="text-xs text-muted-foreground">{emp.role}</div>
                  </div>
                </div>
                <Badge className="bg-success/10 text-success">
                  {emp.completionRate}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Average Performers */}
        <Card className="border-warning/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <Target className="w-5 h-5" />
              Good Performers ({averagePerformers.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {averagePerformers.slice(0, 8).map((emp) => (
              <div key={emp.id} className="flex items-center justify-between p-2 rounded-lg bg-warning/5">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs bg-warning/10 text-warning">
                      {emp.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{emp.name}</div>
                    <div className="text-xs text-muted-foreground">{emp.role}</div>
                  </div>
                </div>
                <Badge className="bg-warning/10 text-warning">
                  {emp.completionRate}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Needs Improvement */}
        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <TrendingUp className="w-5 h-5" />
              Needs Support ({underperformers.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {underperformers.slice(0, 8).map((emp) => (
              <div key={emp.id} className="flex items-center justify-between p-2 rounded-lg bg-destructive/5">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs bg-destructive/10 text-destructive">
                      {emp.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{emp.name}</div>
                    <div className="text-xs text-muted-foreground">{emp.role}</div>
                  </div>
                </div>
                <Badge className="bg-destructive/10 text-destructive">
                  {emp.completionRate}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}