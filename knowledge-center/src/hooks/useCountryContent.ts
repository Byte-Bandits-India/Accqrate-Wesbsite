// hooks/useCountryContent.ts
import { useCountry } from "@/contexts/CountryContext";
import { getCountryContent } from "@/lib/countryContent";

interface UseCountryContentProps {
  countryCode?: string;
}

export const useCountryContent = (props?: UseCountryContentProps) => {
  try {
    const { selectedCountry } = useCountry();
    
    // Priority: prop > context > default
    const countryCode = props?.countryCode || selectedCountry?.code || 'SA';
    
    // Validate country code
    if (!countryCode || typeof countryCode !== 'string') {
      console.warn('Invalid countryCode, defaulting to SA');
      const defaultContent = getCountryContent('SA');
      return {
        countryContent: defaultContent,
        selectedCountry: 'SA'
      };
    }
    
    const countryContent = getCountryContent(countryCode);
    
    return {
      countryContent,
      selectedCountry: countryCode
    };
  } catch (error) {
    console.error('Error in useCountryContent:', error);
    // Return default content if hook fails
    const defaultContent = getCountryContent('SA');
    return {
      countryContent: defaultContent,
      selectedCountry: 'SA'
    };
  }
};