import { useParams, Navigate } from 'react-router-dom';
import { suburbsData } from '@/data/suburbData';
import { lazy, Suspense } from 'react';

// Loading component
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading location page...</p>
    </div>
  </div>
);

// Error fallback component
const LocationNotFound = ({ suburb }: { suburb: string }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h1>
      <p className="text-gray-600 mb-6">
        The location page for {suburb} could not be loaded.
      </p>
      <a href="/areas" className="text-blue-600 hover:underline">
        View All Service Areas →
      </a>
    </div>
  </div>
);

export const DynamicLocationPage = () => {
  const { suburb } = useParams<{ suburb: string }>();

  if (!suburb) {
    return <Navigate to="/areas" replace />;
  }

  // Find suburb data
  const suburbData = suburbsData.find(s => s.slug === suburb);

  if (!suburbData) {
    return <Navigate to="/areas" replace />;
  }

  // Convert slug to component name format
  const componentName = suburb
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  try {
    // Dynamically import the location component
    const LocationComponent = lazy(() =>
      import(`../pages/locations/${componentName}.tsx`)
        .then(module => ({ default: module[componentName] || module.default }))
        .catch(() => {
          console.error(`Failed to load component for ${suburb}`);
          throw new Error(`Component not found for ${suburb}`);
        })
    );

    return (
      <Suspense fallback={<LoadingPage />}>
        <LocationComponent />
      </Suspense>
    );
  } catch (error) {
    console.error(`Error loading location page for ${suburb}:`, error);
    return <LocationNotFound suburb={suburb} />;
  }
};