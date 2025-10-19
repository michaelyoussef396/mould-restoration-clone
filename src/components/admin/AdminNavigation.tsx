import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Home,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Menu,
  User,
  LogOut,
  ChevronDown,
  Plus,
  Phone,
  Mail,
  Clock,
  Target,
  TrendingUp,
  FileText,
  Camera,
  MapPin,
  Zap,
  Activity
} from 'lucide-react';
import { NotificationBell } from '@/components/notifications/NotificationBell';
import { UserProfileDropdown } from '@/components/layout/UserProfileDropdown';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
  description?: string;
  children?: NavigationItem[];
}

export function AdminNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: <Home className="h-4 w-4" />,
      description: 'Overview and key metrics',
    },
    {
      id: 'leads',
      label: 'Lead Management',
      href: '/admin/leads',
      icon: <Users className="h-4 w-4" />,
      badge: '3 new',
      description: 'Manage customer leads and prospects',
      children: [
        {
          id: 'leads-table',
          label: 'Leads Table',
          href: '/admin/leads',
          icon: <FileText className="h-3 w-3" />,
        },
        {
          id: 'leads-kanban',
          label: 'Kanban Board',
          href: '/admin/leads/kanban',
          icon: <Target className="h-3 w-3" />,
        },
        {
          id: 'lead-new',
          label: 'Add New Lead',
          href: '/admin/leads/new',
          icon: <Plus className="h-3 w-3" />,
        },
        {
          id: 'phone-lead',
          label: 'Phone Lead Entry',
          href: '/admin/leads?phoneEntry=true',
          icon: <Phone className="h-3 w-3" />,
        },
      ],
    },
    {
      id: 'inspections',
      label: 'Inspections',
      href: '/admin/inspections',
      icon: <Calendar className="h-4 w-4" />,
      badge: '5 today',
      description: 'Schedule and manage inspections',
      children: [
        {
          id: 'inspection-calendar',
          label: 'Calendar View',
          href: '/admin/inspections',
          icon: <Calendar className="h-3 w-3" />,
        },
        {
          id: 'schedule-inspection',
          label: 'Schedule Inspection',
          href: '/admin/inspections?create=true',
          icon: <Plus className="h-3 w-3" />,
        },
        {
          id: 'technician-routes',
          label: 'Technician Routes',
          href: '/admin/inspections?view=routes',
          icon: <MapPin className="h-3 w-3" />,
        },
      ],
    },
    {
      id: 'notifications',
      label: 'Notifications',
      href: '/admin/notifications',
      icon: <Bell className="h-4 w-4" />,
      description: 'View and manage all notifications',
    },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/admin/dashboard') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const getActiveItem = () => {
    return navigationItems.find(item => isActiveRoute(item.href)) || navigationItems[0];
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  const NavItem = ({ item, level = 0 }: { item: NavigationItem; level?: number }) => {
    const isActive = isActiveRoute(item.href);
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className={`w-full justify-start gap-2 min-h-[48px] h-auto py-3 ${level > 0 ? 'pl-6' : ''}`}
            >
              {item.icon}
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto text-xs">
                  {item.badge}
                </Badge>
              )}
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {item.children.map((child) => (
              <DropdownMenuItem
                key={child.id}
                onClick={() => handleNavigation(child.href)}
                className="cursor-pointer"
              >
                {child.icon}
                <span className="ml-2">{child.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={`w-full justify-start gap-2 min-h-[48px] h-auto py-3 ${level > 0 ? 'pl-6' : ''}`}
        onClick={() => handleNavigation(item.href)}
      >
        {item.icon}
        <span className="flex-1 text-left">{item.label}</span>
        {item.badge && (
          <Badge variant="secondary" className="ml-auto text-xs">
            {item.badge}
          </Badge>
        )}
      </Button>
    );
  };

  return (
    <>
      {/* Desktop Navigation Header */}
      <div className="hidden md:flex h-16 items-center justify-between border-b bg-background px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M&R</span>
            </div>
            <span className="font-semibold text-lg">CRM System</span>
          </div>

          <nav className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>

          <NotificationBell />

          {user && <UserProfileDropdown user={user} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex h-16 items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M&R</span>
          </div>
          <span className="font-semibold">CRM</span>
        </div>

        <div className="flex items-center gap-2">
          <NotificationBell />

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">M&R</span>
                  </div>
                  CRM System
                </SheetTitle>
                <SheetDescription>
                  Mould & Restoration Co. Management System
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <NavItem item={item} />
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <NavItem key={child.id} item={child} level={1} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => handleNavigation('/admin/profile')}>
                  <User className="h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 text-red-600 hover:text-red-600" onClick={logout}>
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="text-sm font-medium">{user?.name || 'Admin User'}</div>
                <div className="text-xs text-muted-foreground">{user?.email || 'admin@mouldandrestoration.com.au'}</div>
                <div className="text-xs text-muted-foreground mt-1">Role: {user?.role || 'Administrator'}</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Breadcrumb for current page */}
      <div className="hidden md:flex h-12 items-center border-b bg-muted/30 px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Admin</span>
          <span>/</span>
          <span className="text-foreground font-medium">{getActiveItem().label}</span>
          {getActiveItem().description && (
            <>
              <span>-</span>
              <span>{getActiveItem().description}</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}