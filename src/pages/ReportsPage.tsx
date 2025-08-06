import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { employeeData, getDepartmentStats, getRoleStats } from "@/data/employeeData";
import { FileText, Download, Calendar, TrendingUp, Users, Building2 } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";

export default function ReportsPage() {
  const departmentStats = getDepartmentStats();
  const roleStats = getRoleStats();
  
  const totalTasks = employeeData.reduce((sum, emp) => sum + emp.totalTasks, 0);
  const completedTasks = employeeData.reduce((sum, emp) => sum + emp.tasksCompleted, 0);
  const avgCompletionRate = Math.round((completedTasks / totalTasks) * 100);

  const reports = [
    {
      title: "Monthly Performance Report",
      description: "Comprehensive overview of employee performance for this month",
      lastGenerated: "2 hours ago",
      size: "2.4 MB",
      type: "PDF",
      status: "Ready"
    },
    {
      title: "Department Efficiency Analysis",
      description: "Detailed breakdown of productivity across all departments",
      lastGenerated: "1 day ago",
      size: "1.8 MB",
      type: "Excel",
      status: "Ready"
    },
    {
      title: "Task Completion Trends",
      description: "Weekly and monthly task completion patterns and insights",
      lastGenerated: "3 hours ago",
      size: "1.2 MB",
      type: "PDF",
      status: "Ready"
    },
    {
      title: "Employee Productivity Dashboard",
      description: "Interactive dashboard showing individual employee metrics",
      lastGenerated: "5 hours ago",
      size: "3.1 MB",
      type: "HTML",
      status: "Ready"
    },
    {
      title: "Role-based Performance Comparison",
      description: "Comparative analysis of performance across different job roles",
      lastGenerated: "6 hours ago",
      size: "2.0 MB",
      type: "PDF",
      status: "Ready"
    },
    {
      title: "Quarterly Business Review",
      description: "Executive summary of company-wide performance metrics",
      lastGenerated: "1 week ago",
      size: "4.5 MB",
      type: "PowerPoint",
      status: "Pending Update"
    }
  ];

  const quickStats = [
    { label: "Total Employees", value: employeeData.length },
    { label: "Active Departments", value: departmentStats.length },
    { label: "Different Roles", value: roleStats.length },
    { label: "Total Tasks", value: totalTasks },
    { label: "Completed Tasks", value: completedTasks },
    { label: "Overall Completion Rate", value: `${avgCompletionRate}%` }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Reports & Analytics
        </h1>
        <p className="text-muted-foreground mt-1">
          Generate and download comprehensive reports on employee performance and company metrics
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button className="bg-gradient-to-r from-primary to-primary-glow">
          <FileText className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Report
        </Button>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export All Data
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Reports Generated"
          value="247"
          description="This month"
          icon={FileText}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Data Exports"
          value="89"
          description="Last 30 days"
          icon={Download}
        />
        <StatsCard
          title="Scheduled Reports"
          value="15"
          description="Active schedules"
          icon={Calendar}
        />
        <StatsCard
          title="Report Views"
          value="1,234"
          description="This month"
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Available Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{report.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                    </div>
                    <Badge 
                      variant={report.status === 'Ready' ? 'default' : 'secondary'}
                      className={report.status === 'Ready' ? 'bg-success/10 text-success' : ''}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>Last generated: {report.lastGenerated}</span>
                    <span>{report.size} • {report.type}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Statistics Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Quick Statistics Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-muted/30">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Employee Data Export
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Export All Employee Data (CSV)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Export Performance Metrics (Excel)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Export Task Summary (PDF)
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Department Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Department Performance Analysis
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Cross-Department Comparison
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Resource Allocation Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}