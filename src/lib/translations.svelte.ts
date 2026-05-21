import { tick } from 'svelte';

class LanguageState {
  current = $state<'en' | 'ar'>('en');

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rak-lang');
      if (saved === 'en' || saved === 'ar') {
        this.current = saved;
      } else {
        const docLang = document.documentElement.lang;
        if (docLang === 'ar') {
          this.current = 'ar';
        }
      }
      this.updateDocument();
    }
  }

  setLanguage(lang: 'en' | 'ar') {
    this.current = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('rak-lang', lang);
      this.updateDocument();
    }
  }

  toggle() {
    this.setLanguage(this.current === 'en' ? 'ar' : 'en');
  }

  private updateDocument() {
    if (typeof window === 'undefined') return;
    const isRtl = this.current === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = this.current;
  }
}

export const langState = new LanguageState();

export const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.info': 'Info',
    'nav.brands': 'Our Brands',
    'nav.products': 'Products',
    'nav.contact': 'Contact Us',
    'nav.phone': '+971 7 203 4343',
    'nav.general_enquiry': 'General Enquiry: +971 7 203 4343',
    
    // Hero
    'hero.badge': 'Important',
    'hero.announcement': 'SCA’s Unclaimed Dividend Announcement',
    'hero.title.line1': 'RAK CO. FOR',
    'hero.title.line2': 'WHITE CEMENT &',
    'hero.title.line3': 'CONSTRUCTION',
    'hero.title.line4': 'MATERIALS',
    'hero.lead': 'The foundation of modern architecture. Building the future with absolute purity since 1986.',
    'hero.discover': 'Discover Our Products',
    
    // Why Choose Us
    'why.title': 'Why Choose Us.',
    'why.subtitle': 'Elevating standards across the Emirates.',
    'why.01.num': '01',
    'why.01.title': 'We Push For Excellence',
    'why.01.desc': 'Continuous innovation in white cement and construction materials, defining the very cutting edge of modern structural integrity.',
    'why.02.num': '02',
    'why.02.title': 'Deliver Unmatched Quality',
    'why.02.desc': 'Stringent quality control ensuring the highest purity standards for luxury builds and heavy infrastructural demands.',
    'why.03.num': '03',
    'why.03.title': 'Provide Flexible Service',
    'why.03.desc': 'Tailored solutions meeting the nuanced demands of global modern architecture, right down to the microscopic composite level.',
    
    // Products Gallery
    'prod.title': 'Products & Applications',
    'prod.tab.all': 'All Products',
    'prod.tab.white_cement': 'White Cement',
    'prod.tab.concrete_block': 'Concrete Block',
    'prod.tab.interlock': 'Interlock & Kerbstone',
    'prod.tab.lime': 'Quick/Hydrated Lime',
    'prod.view_details': 'View Details',
    
    // Company Logos (Sister Companies)
    'sister.title': 'A Legacy of \nExcellence',
    'sister.desc': 'Powered by our sister companies, we deliver comprehensive construction solutions across the UAE and beyond.',
    'sister.noora': 'Ras Al Khaimah Lime Co. (NOORA)',
    'sister.mbf': 'Modern Block Factory (MBF)',
    
    // Testimonials
    'test.title': 'Client Trust.',
    'test.quote1': 'NOORA Lime Co. is a long-term supplier for us and we are really happy to be associated with them.',
    'test.author1': 'Sembcorp Gulf O&M Limited',
    'test.quote2': 'Having a White Cement Supplier like RAK White Cement is what makes us successful.',
    'test.author2': 'Light Stone Factory',
    'test.quote3': 'Our association with NOORA Lime Company is highly valued by us.',
    'test.author3': 'Cochin Minerals and Rutile Limited',
    
    // Contact Form
    'contact.tab.sales': 'Sales Enquiry',
    'contact.tab.product': 'Product Information',
    'contact.tab.feedback': 'Customer Feedback',
    'contact.title': 'Contact Us',
    'contact.placeholder.name': 'Your name here',
    'contact.placeholder.email': 'Your email',
    'contact.placeholder.phone': 'Phone',
    'contact.placeholder.company': 'Company Name',
    'contact.select.choose': '---Choose Option---',
    'contact.option.wpc1': 'White Portland Cement 1',
    'contact.option.wpc2': 'White Portland Cement 2',
    'contact.option.wcc': 'White Cement Clinker',
    'contact.option.ql': 'Quick Lime (Lumps/Powder)',
    'contact.option.hl': 'Hydrated Lime',
    'contact.option.dl': 'Dolomitic Lime',
    'contact.option.blocks': 'Blocks',
    'contact.option.interlocks': 'Interlocks',
    'contact.option.kerbstones': 'Kerbstones',
    'contact.placeholder.message': 'Your message',
    'contact.captcha.label': 'Captcha',
    'contact.captcha.placeholder': 'Captcha',
    'contact.submit': 'Send Message',
    
    // Footer
    'footer.title': 'Building For Tomorrow.',
    'footer.desc': 'We push for excellence, delivering quality cement and concrete products since 1986.',
    'footer.col.company': 'Company',
    'footer.col.company.about': 'About Us',
    'footer.col.company.leadership': 'Leadership',
    'footer.col.company.sustainability': 'Sustainability',
    'footer.col.products': 'Products',
    'footer.col.products.wc': 'White Cement',
    'footer.col.products.lime': 'Noora Lime',
    'footer.col.products.blocks': 'MBF Blocks',
    'footer.col.contact': 'Contact',
    'footer.col.contact.address': 'Ras Al Khaimah, UAE',
    'footer.copyright': 'RAK Co. for White Cement. All Rights Reserved.'
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.info': 'معلومات عنا',
    'nav.brands': 'شركاتنا الشقيقة',
    'nav.products': 'المنتجات',
    'nav.contact': 'اتصل بنا',
    'nav.phone': '+٩٧١ ٧ ٢٠٣ ٤٣٤٣',
    'nav.general_enquiry': 'الاستفسارات العامة: +٩٧١ ٧ ٢٠٣ ٤٣٤٣',
    
    // Hero
    'hero.badge': 'هام',
    'hero.announcement': 'إعلان شركة رأس الخيمة للأسمنت الأبيض بشأن الأرباح غير المطالب بها',
    'hero.title.line1': 'شركة رأس الخيمة',
    'hero.title.line2': 'للإسمنت الأبيض و',
    'hero.title.line3': 'المواد الإنشائية',
    'hero.title.line4': '(ش.م.ع)',
    'hero.lead': 'أساس العمارة الحديثة. نبني المستقبل بنقاء مطلق منذ عام ١٩٨٦.',
    'hero.discover': 'اكتشف منتجاتنا',
    
    // Why Choose Us
    'why.title': 'لماذا نحن.',
    'why.subtitle': 'الارتقاء بالمعايير في جميع أنحاء الإمارات.',
    'why.01.num': '٠١',
    'why.01.title': 'نسعى للتميز دائماً',
    'why.01.desc': 'ابتكار مستمر في مجال الإسمنت الأبيض ومواد البناء، لنرسم آفاقاً جديدة للمتانة الهيكلية والجمال المعماري الحديث.',
    'why.02.num': '٠٢',
    'why.02.title': 'جودة استثنائية لا تضاهى',
    'why.02.desc': 'رقابة صارمة على الجودة لضمان أعلى معايير النقاء لتلبية متطلبات المشاريع الفاخرة والبنية التحتية العملاقة.',
    'why.03.num': '٠٣',
    'why.03.title': 'خدمات مرنة ومخصصة',
    'why.03.desc': 'حلول مصممة خصيصاً لتلبية المتطلبات الدقيقة للعمارة الحديثة محلياً وعالمياً، حتى أدق التفاصيل المجهرية.',
    
    // Products Gallery
    'prod.title': 'المنتجات والتطبيقات',
    'prod.tab.all': 'جميع المنتجات',
    'prod.tab.white_cement': 'الإسمنت الأبيض',
    'prod.tab.concrete_block': 'الطابوق الخرساني',
    'prod.tab.interlock': 'الإنترلوك والكربستون',
    'prod.tab.lime': 'الجير الحي والمطفأ',
    'prod.view_details': 'عرض التفاصيل',
    
    // Company Logos (Sister Companies)
    'sister.title': 'إرث من\nالتميز والريادة',
    'sister.desc': 'بدعم وتكامل من شركاتنا الشقيقة، نقدم حلول بناء شاملة ومتميزة في دولة الإمارات وخارجها.',
    'sister.noora': 'شركة رأس الخيمة لصناعة الجير (نورة)',
    'sister.mbf': 'مصنع الطابوق الحديث (MBF)',
    
    // Testimonials
    'test.title': 'ثقة عملائنا.',
    'test.quote1': 'تعد شركة نورة لصناعة الجير شريكاً ومورداً استراتيجياً لنا على المدى الطويل، ونحن سعداء جداً بهذا التعاون المثمر.',
    'test.author1': 'سيمبكورب الخليج لتشغيل وصيانة الفنادق المحدودة',
    'test.quote2': 'إن وجود مورد للإسمنت الأبيض بمستوى جودة وموثوقية إسمنت رأس الخيمة الأبيض هو سر نجاحنا.',
    'test.author2': 'مصنع لايت ستون للرخام والجرانيت',
    'test.quote3': 'إن شراكتنا الطويلة والقوية مع شركة نورة لصناعة الجير هي شراكة نعتز بها ونقدرها للغاية.',
    'test.author3': 'كوشين للمعادن والروتيل المحدودة',
    
    // Contact Form
    'contact.tab.sales': 'استفسار المبيعات',
    'contact.tab.product': 'معلومات المنتج',
    'contact.tab.feedback': 'آراء وملحوظات العملاء',
    'contact.title': 'اتصل بنا',
    'contact.placeholder.name': 'اكتب اسمك هنا',
    'contact.placeholder.email': 'البريد الإلكتروني',
    'contact.placeholder.phone': 'رقم الهاتف',
    'contact.placeholder.company': 'اسم الشركة',
    'contact.select.choose': '---اختر خياراً---',
    'contact.option.wpc1': 'إسمنت بورتلاند أبيض ١',
    'contact.option.wpc2': 'إسمنت بورتلاند أبيض ٢',
    'contact.option.wcc': 'كلنكر الإسمنت الأبيض',
    'contact.option.ql': 'الجير الحي (كتل/بودرة)',
    'contact.option.hl': 'الجير المطفأ',
    'contact.option.dl': 'جير دولوميتي',
    'contact.option.blocks': 'طابوق خرساني',
    'contact.option.interlocks': 'إنترلوك',
    'contact.option.kerbstones': 'كربستون (بردورات)',
    'contact.placeholder.message': 'رسالتك',
    'contact.captcha.label': 'رمز التحقق',
    'contact.captcha.placeholder': 'أدخل رمز التحقق',
    'contact.submit': 'إرسال الرسالة',
    
    // Footer
    'footer.title': 'نبني للغد.',
    'footer.desc': 'نسعى للتميز دائماً في تقديم أجود أنواع الإسمنت والمنتجات الخرسانية المتكاملة منذ عام ١٩٨٦.',
    'footer.col.company': 'الشركة',
    'footer.col.company.about': 'معلومات عنا',
    'footer.col.company.leadership': 'أعضاء مجلس الإدارة',
    'footer.col.company.sustainability': 'الاستدامة والبيئة',
    'footer.col.products': 'منتجاتنا',
    'footer.col.products.wc': 'الإسمنت الأبيض',
    'footer.col.products.lime': 'جير نورة',
    'footer.col.products.blocks': 'طابوق MBF',
    'footer.col.contact': 'اتصل بنا',
    'footer.col.contact.address': 'رأس الخيمة، الإمارات العربية المتحدة',
    'footer.copyright': 'شركة رأس الخيمة لصناعة الإسمنت الأبيض والمواد الإنشائية. جميع الحقوق محفوظة.'
  }
};

export function t(key: keyof typeof translations.en): string {
  return translations[langState.current][key] || translations.en[key] || '';
}
