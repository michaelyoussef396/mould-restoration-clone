import React from 'react';
import { AdminNavigation } from './AdminNavigation';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { ProtectedRoute } from '@/contexts/AuthContext';

interface AdminLayoutProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export function AdminLayout({ children, requireAdmin = true }: AdminLayoutProps) {
  return (
    <ProtectedRoute requireAdmin={requireAdmin}>
      <div className="min-h-screen bg-background">
        <AdminNavigation />
        <main className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <OfflineIndicator />
          </div>
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}