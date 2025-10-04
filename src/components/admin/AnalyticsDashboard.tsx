import React, { useState, useEffect } from 'react';
import { AdminLayout } from './AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { Label } from '@/components/ui/label';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  Star,
  MapPin,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Filter,
  Zap,
  Award,
  BarChart3
} from 'lucide-react';
import { reportingService, BusinessAnalytics, TechnicianPerformance } from '@/lib/services/reportingService';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface KPICard {
  title: string;
  value: string | number;
  change: number;
  trend: 'UP' | 'DOWN' | 'STABLE';
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  name: string;
  value: number;
  change?: number;
  color?: string;
}

export function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<BusinessAnalytics | null>(null);
  const [technicianPerformance, setTechnicianPerformance] = useState<TechnicianPerformance[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<{ start: string; end: string }>({
    start: format(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
  });
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [comparisonPeriod, setComparisonPeriod] = useState('previous');

  useEffect(() => {
    loadAnalyticsData();
  }, [selectedPeriod]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    try {
      const [analyticsData, techPerformance] = await Promise.all([
        reportingService.getBusinessAnalytics(selectedPeriod),
        reportingService.getTechnicianPerformanceReport(),
      ]);

      setAnalytics(analyticsData);
      setTechnicianPerformance(techPerformance.technicians);
    } catch (error) {
      toast.error('Failed to load analytics data');
      console.error('Analytics load error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const getTrendIcon = (trend: 'UP' | 'DOWN' | 'STABLE') => {
    switch (trend) {
      case 'UP':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'DOWN':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <div className="h-4 w-4" />;
    }
  };

  const getTrendColor = (trend: 'UP' | 'DOWN' | 'STABLE') => {
    switch (trend) {
      case 'UP':
        return 'text-green-600';
      case 'DOWN':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const kpiCards: KPICard[] = analytics ? [
    {
      title: 'Total Revenue',
      value: formatCurrency(analytics.revenue.total),
      change: analytics.revenue.growth,
      trend: analytics.revenue.growth > 0 ? 'UP' : analytics.revenue.growth < 0 ? 'DOWN' : 'STABLE',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'text-green-600',
    },
    {
      title: 'Lead Conversion',
      value: formatPercentage(analytics.leads.conversion),
      change: analytics.leads.conversion,
      trend: analytics.leads.conversion > 50 ? 'UP' : 'DOWN',
      icon: <Target className="h-5 w-5" />,
      color: 'text-blue-600',
    },
    {
      title: 'Total Leads',
      value: analytics.leads.total,
      change: 0,
      trend: 'STABLE',
      icon: <Users className="h-5 w-5" />,
      color: 'text-purple-600',
    },
    {
      title: 'Inspections Completed',
      value: analytics.inspections.completed,
      change: 0,
      trend: 'UP',
      icon: <CheckCircle className="h-5 w-5" />,
      color: 'text-emerald-600',
    },
    {
      title: 'Customer Satisfaction',
      value: formatPercentage(analytics.customers.satisfaction),
      change: analytics.customers.satisfaction,
      trend: analytics.customers.satisfaction > 90 ? 'UP' : 'DOWN',
      icon: <Star className="h-5 w-5" />,
      color: 'text-yellow-600',
    },
    {
      title: 'Schedule Efficiency',
      value: formatPercentage(analytics.operations.scheduleEfficiency),
      change: analytics.operations.scheduleEfficiency,
      trend: analytics.operations.scheduleEfficiency > 85 ? 'UP' : 'DOWN',
      icon: <Clock className="h-5 w-5" />,
      color: 'text-indigo-600',
    },
  ] : [];

  const revenueChartData = analytics?.revenue.breakdown.map(item => ({
    name: format(new Date(item.month), 'MMM'),
    revenue: item.amount,
    target: analytics.revenue.target / 12,
  })) || [];

  const leadSourcesData = analytics?.leads.sources.map(source => ({
    name: source.source.replace('_', ' '),
    value: source.count,
    conversion: source.conversion,
  })) || [];

  const pipelineData = analytics?.leads.pipeline.map(stage => ({
    name: stage.status.replace('_', ' '),
    count: stage.count,
    value: stage.value,
  })) || [];

  const geographyData = analytics?.customers.geography.slice(0, 10).map(geo => ({
    name: geo.suburb,
    count: geo.count,
  })) || [];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiCards.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                  <p className="text-2xl font-bold mt-2">{kpi.value}</p>
                  <div className="flex items-center mt-2">
                    {getTrendIcon(kpi.trend)}
                    <span className={`text-sm ml-1 ${getTrendColor(kpi.trend)}`}>
                      {kpi.change > 0 ? '+' : ''}{formatPercentage(kpi.change)}
                    </span>
                  </div>
                </div>
                <div className={`${kpi.color}`}>
                  {kpi.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Performance</CardTitle>
          <CardDescription>Monthly revenue vs target comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={revenueChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="revenue" fill="#0088FE" name="Actual Revenue" />
              <Bar dataKey="target" fill="#E0E0E0" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Lead Sources and Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Distribution of lead acquisition channels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {leadSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {leadSourcesData.map((source, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span>{source.name}</span>
                  </div>
                  <span className="text-gray-600">{formatPercentage(source.conversion)} conversion</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Pipeline</CardTitle>
            <CardDescription>Current leads by status</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pipelineData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => formatCurrency(value)} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Bar dataKey="value" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      {/* Technician Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold mt-2">
                  {technicianPerformance.length > 0
                    ? (technicianPerformance.reduce((sum, t) => sum + t.averageRating, 0) / technicianPerformance.length).toFixed(1)
                    : '0.0'
                  }
                </p>
              </div>
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Inspections</p>
                <p className="text-2xl font-bold mt-2">
                  {technicianPerformance.reduce((sum, t) => sum + t.inspectionsCompleted, 0)}
                </p>
              </div>
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold mt-2">
                  {formatCurrency(technicianPerformance.reduce((sum, t) => sum + t.totalRevenue, 0))}
                </p>
              </div>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Efficiency</p>
                <p className="text-2xl font-bold mt-2">
                  {technicianPerformance.length > 0
                    ? formatPercentage(technicianPerformance.reduce((sum, t) => sum + t.efficiency, 0) / technicianPerformance.length)
                    : '0%'
                  }
                </p>
              </div>
              <Zap className="h-5 w-5 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technician Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Individual Technician Performance</CardTitle>
          <CardDescription>Detailed performance metrics by technician</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Technician</th>
                  <th className="text-right p-3">Inspections</th>
                  <th className="text-right p-3">Revenue</th>
                  <th className="text-right p-3">Avg Rating</th>
                  <th className="text-right p-3">Efficiency</th>
                  <th className="text-center p-3">Performance</th>
                </tr>
              </thead>
              <tbody>
                {technicianPerformance.map((tech) => (
                  <tr key={tech.technicianId} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div className="font-medium">{tech.name}</div>
                    </td>
                    <td className="text-right p-3">{tech.inspectionsCompleted}</td>
                    <td className="text-right p-3">{formatCurrency(tech.totalRevenue)}</td>
                    <td className="text-right p-3">
                      <div className="flex items-center justify-end">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {tech.averageRating.toFixed(1)}
                      </div>
                    </td>
                    <td className="text-right p-3">{formatPercentage(tech.efficiency)}</td>
                    <td className="text-center p-3">
                      <Badge
                        className={
                          tech.efficiency >= 90
                            ? 'bg-green-100 text-green-800'
                            : tech.efficiency >= 75
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }
                      >
                        {tech.efficiency >= 90 ? 'Excellent' : tech.efficiency >= 75 ? 'Good' : 'Needs Improvement'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inspections by Technician</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={technicianPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="inspectionsCompleted" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue by Technician</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={technicianPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Bar dataKey="totalRevenue" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderGeographyTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Customer distribution across Melbourne suburbs</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={geographyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884D8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Suburbs</CardTitle>
            <CardDescription>Highest customer concentration areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographyData.slice(0, 5).map((suburb, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{suburb.name}</p>
                      <p className="text-sm text-gray-600">{suburb.count} customers</p>
                    </div>
                  </div>
                  <MapPin className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Coverage</CardTitle>
            <CardDescription>Market penetration insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Suburbs Served</span>
                <span className="font-bold">{geographyData.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average per Suburb</span>
                <span className="font-bold">
                  {geographyData.length > 0
                    ? (geographyData.reduce((sum, s) => sum + s.count, 0) / geographyData.length).toFixed(1)
                    : '0'
                  }
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Market Concentration</span>
                <Badge className="bg-green-100 text-green-800">Strong in Inner Melbourne</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
          <span className="ml-2 text-gray-600">Loading analytics...</span>
        </div>
      </AdminLayout>
    );
  }

  // Show error state if analytics failed to load
  if (!analytics) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Business Analytics</h1>
              <p className="text-gray-600">Comprehensive insights into your business performance</p>
            </div>
          </div>

          <Card>
            <CardContent className="p-12 text-center">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Analytics Data Available</h2>
              <p className="text-gray-600 mb-4">
                Unable to load analytics data. This could be because:
              </p>
              <ul className="text-sm text-gray-600 mb-6 text-left max-w-md mx-auto space-y-2">
                <li>• The API backend is not running</li>
                <li>• No data exists for the selected period</li>
                <li>• There was a connection error</li>
              </ul>
              <Button onClick={loadAnalyticsData}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Business Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into your business performance</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadAnalyticsData}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Period Selector */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Label className="text-sm font-medium">Period:</Label>
            <Select value="30days" onValueChange={() => {}}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">This year</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>

            <Label className="text-sm font-medium">Compare to:</Label>
            <Select value={comparisonPeriod} onValueChange={setComparisonPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="previous">Previous period</SelectItem>
                <SelectItem value="year">Same period last year</SelectItem>
                <SelectItem value="none">No comparison</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="geography">Geography</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {renderOverviewTab()}
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          {renderPerformanceTab()}
        </TabsContent>

        <TabsContent value="geography" className="space-y-6">
          {renderGeographyTab()}
        </TabsContent>
      </Tabs>
      </div>
    </AdminLayout>
  );
}