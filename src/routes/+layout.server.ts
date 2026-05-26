import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies, request }) => {
  let lang = cookies.get('rak-lang');
  
  if (!lang) {
    // Automatically detect language from the Accept-Language header
    const acceptLang = request.headers.get('accept-language') || '';
    lang = acceptLang.toLowerCase().includes('ar') ? 'ar' : 'en';
  }
  
  return {
    lang: lang === 'ar' ? 'ar' : 'en'
  };
};
