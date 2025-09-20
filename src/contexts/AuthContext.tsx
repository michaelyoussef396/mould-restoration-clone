import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, LoginCredentials, AuthService } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isTechnician: boolean;
  login: (credentials: LoginCredentials) => Promise<{ user: User; token: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on mount
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const result = await AuthService.login(credentials);
      setUser(result.user);
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isTechnician: user?.role === 'technician',
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({
  children,
  requireAdmin = false,
  fallback = <div>Access Denied</div>
}: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>;
  }

  if (!isAuthenticated) {
    // Redirect to login page
    window.location.href = '/admin/login';
    return null;
  }

  if (requireAdmin && !isAdmin) {
    return fallback;
  }

  return <>{children}</>;
}