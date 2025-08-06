import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Settings, Bell, Users, Shield, Database, Mail } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Configure your admin dashboard preferences and system settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Your Company Name" defaultValue="Tech Solutions Inc." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin-email">Admin Email</Label>
              <Input id="admin-email" type="email" placeholder="admin@company.com" defaultValue="admin@techsolutions.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                <option>UTC+05:30 (India Standard Time)</option>
                <option>UTC+00:00 (GMT)</option>
                <option>UTC-05:00 (Eastern Time)</option>
                <option>UTC-08:00 (Pacific Time)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <Switch id="dark-mode" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="auto-refresh">Auto Refresh Dashboard</Label>
              <Switch id="auto-refresh" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive email updates</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Task Completion Alerts</Label>
                <p className="text-sm text-muted-foreground">When employees complete tasks</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Performance Alerts</Label>
                <p className="text-sm text-muted-foreground">Low performance warnings</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Automated weekly summaries</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label>Notification Frequency</Label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                <option>Real-time</option>
                <option>Hourly digest</option>
                <option>Daily digest</option>
                <option>Weekly digest</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Auto-approve new employees</Label>
                <p className="text-sm text-muted-foreground">Automatically approve new registrations</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Require email verification</Label>
                <p className="text-sm text-muted-foreground">Users must verify email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label>Default user role</Label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                <option>Intern</option>
                <option>Employee</option>
                <option>Team Member</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Session timeout (minutes)</Label>
              <Input type="number" placeholder="120" defaultValue="120" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-factor authentication</Label>
                <p className="text-sm text-muted-foreground">Require 2FA for admin access</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Login attempt limits</Label>
                <p className="text-sm text-muted-foreground">Lock account after failed attempts</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label>Password requirements</Label>
              <div className="space-y-1">
                <Badge variant="outline" className="mr-2">Min 8 characters</Badge>
                <Badge variant="outline" className="mr-2">Special characters</Badge>
                <Badge variant="outline">Numbers required</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label>API rate limiting</Label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                <option>100 requests/minute</option>
                <option>500 requests/minute</option>
                <option>1000 requests/minute</option>
                <option>Unlimited</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Data & Backup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data & Backup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Automatic backups</Label>
                <p className="text-sm text-muted-foreground">Schedule regular data backups</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label>Backup frequency</Label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Data retention (months)</Label>
              <Input type="number" placeholder="12" defaultValue="24" />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Database className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" size="sm">
                <Database className="w-4 h-4 mr-2" />
                Backup Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Email Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>SMTP Server</Label>
              <Input placeholder="smtp.gmail.com" defaultValue="smtp.company.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Port</Label>
                <Input placeholder="587" defaultValue="587" />
              </div>
              <div className="space-y-2">
                <Label>Encryption</Label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                  <option>TLS</option>
                  <option>SSL</option>
                  <option>None</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>From Email</Label>
              <Input placeholder="noreply@company.com" defaultValue="noreply@techsolutions.com" />
            </div>

            <Button variant="outline" size="sm">
              Test Email Configuration
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Save Settings */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="bg-gradient-to-r from-primary to-primary-glow">
          Save Settings
        </Button>
      </div>
    </div>
  );
}