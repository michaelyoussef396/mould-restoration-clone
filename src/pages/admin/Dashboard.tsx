import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Calendar,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Search
} from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { useNavigate } from 'react-router-dom';

interface DashboardStats {
  totalLeads: number;
  newLeads: number;
  scheduledInspections: number;
  completedThisWeek: number;
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'new': return 'bg-blue-100 text-blue-800';
    case 'qualified': return 'bg-green-100 text-green-800';
    case 'contacted': return 'bg-orange-100 text-orange-800';
    case 'quoted': return 'bg-purple-100 text-purple-800';
    case 'converted': return 'bg-emerald-100 text-emerald-800';
    case 'closed_lost': return 'bg-red-100 text-red-800';
    case 'follow_up': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const formatServiceType = (serviceType: string) => {
  return serviceType
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// DashboardHeader removed - now using AdminLayout navigation

function StatsCards({ stats }: { stats: DashboardStats | null }) {
  if (!stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-8 w-12 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalLeads}</div>
          <p className="text-xs text-muted-foreground">
            All time
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Leads</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.newLeads}</div>
          <p className="text-xs text-muted-foreground">
            Awaiting contact
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.scheduledInspections}</div>
          <p className="text-xs text-muted-foreground">
            Inspections
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.completedThisWeek}</div>
          <p className="text-xs text-muted-foreground">
            This week
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function RecentLeads({ leads }: { leads: LeadWithRelations[] | null }) {
  if (!leads) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Leads</CardTitle>
              <CardDescription>
                Latest inquiries from your website and phone calls
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-48 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>
              Latest inquiries from your website and phone calls
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate('/admin/leads')}>
            <Search className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No leads found</p>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900">
                      {lead.firstName} {lead.lastName}
                    </h3>
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status.toLowerCase().replace('_', ' ')}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {lead.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {lead.phone}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {lead.suburb}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatServiceType(lead.serviceType)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(lead.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentLeads, setRecentLeads] = useState<LeadWithRelations[] | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [dashboardStats, leads] = await Promise.all([
          LeadService.getDashboardStats(),
          LeadService.getRecentLeads(5),
        ]);
        setStats(dashboardStats);
        setRecentLeads(leads);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <AdminLayout>
      <StatsCards stats={stats} />
      <RecentLeads leads={recentLeads} />
    </AdminLayout>
  );
}