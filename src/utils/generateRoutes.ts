import { suburbsData } from '@/data/suburbData';

// Function to dynamically import location components
export const getLocationComponent = async (suburb: string) => {
  try {
    // Convert slug back to component name format
    const componentName = suburb
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    const module = await import(`../pages/locations/${componentName}.tsx`);
    return module[componentName] || module.default;
  } catch (error) {
    console.error(`Failed to load component for ${suburb}:`, error);
    return null;
  }
};

// Generate route configurations for all suburbs
export const generateLocationRoutes = () => {
  return suburbsData.map(suburb => ({
    path: `/locations/${suburb.slug}`,
    componentName: suburb.slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(''),
    suburb: suburb
  }));
};

// Get all location component imports for App.tsx
export const getLocationImports = () => {
  return suburbsData.map(suburb => {
    const componentName = suburb.slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    return {
      componentName,
      importStatement: `import { ${componentName} } from "./pages/locations/${componentName}";`,
      route: `<Route path="/locations/${suburb.slug}" element={<${componentName} />} />`
    };
  });
};