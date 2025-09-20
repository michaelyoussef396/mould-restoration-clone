import { nanoid } from 'nanoid';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'technician' | 'client';
  createdAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

const API_BASE_URL = 'http://localhost:3001/api';

export class AuthService {
  private static readonly TOKEN_KEY = 'auth_token';
  private static readonly USER_KEY = 'auth_user';

  static async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
      }

      const { user, token } = await response.json();

      // Store in localStorage for persistence
      localStorage.setItem(this.TOKEN_KEY, token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));

      return { user, token };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  static logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  static getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem(this.USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getCurrentUser();
  }

  static hasRole(role: User['role']): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  static isAdmin(): boolean {
    return this.hasRole('admin');
  }

  static isTechnician(): boolean {
    return this.hasRole('technician');
  }
}

// Hook for React components
export function useAuth() {
  const [user, setUser] = React.useState<User | null>(AuthService.getCurrentUser());
  const [isLoading, setIsLoading] = React.useState(false);

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

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isTechnician: user?.role === 'technician',
    login,
    logout,
  };
}

// Need to import React for the hook
import React from 'react';