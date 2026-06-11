import { tick } from 'svelte';

class LanguageState {
  current = $state<'en' | 'ar'>('en');

  constructor() {
    if (typeof window !== 'undefined') {
      // Try to read cookie first
      const cookieMatch = document.cookie.match(/(?:^|; )rak-lang=([^;]*)/);
      const savedCookie = cookieMatch ? cookieMatch[1] : null;
      const savedLocal = localStorage.getItem('rak-lang');
      const saved = savedCookie || savedLocal;

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
      document.cookie = `rak-lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
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
    
    // Services / Products Accordion
    'services.title1': 'Premium Building',
    'services.title2': 'Materials Catalog',
    'services.buy.desc': 'We manufacture premium White Portland Cement (Class 1 & 2) and high-grade Clinker. Offering exceptional strength, purity, and aesthetic versatility, trusted by developers globally.',
    'services.sell.desc': 'Ras Al Khaimah Lime Co. (NOORA) produces high-purity Quick Lime and Hydrated Lime for chemical, metallurgical, and construction industries globally.',
    'services.rent.desc': 'Modern Block Factory (MBF) manufactures high-strength concrete blocks, decorative interlocks, and durable kerbstones to support premium infrastructure projects.',
    'services.footer.text1': 'Our sister companies work in coordination',
    'services.footer.text2': 'to deliver complete construction solutions.',
    'services.footer.btn': 'Contact Sales',
    
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
    'footer.copyright': 'RAK Co. for White Cement. All Rights Reserved.',

    // Adapted keys
    'global.title': 'Global Reach',
    'global.header': 'Exporting Quality to Over 30 Countries.',
    'global.desc': 'Our state-of-the-art production facility in Ras Al Khaimah utilizes advanced technologies to manufacture high-strength White Portland Cement. We export clinker and finished cement worldwide, providing the foundation for iconic landmarks.',
    'global.btn': 'Explore Logistics',
    'arrows.title': 'Purity. Strength. Durability. Innovation.',
    'arrows.lead': 'These are the foundation blocks of RAK White Cement. We don\'t just produce construction materials; we build landmarks that withstand time.',
    'arrows.pipeline.title': 'Our Production Pipeline',
    'arrows.pipeline.lead': 'From raw materials to architectural wonders, we guarantee purity and strength at every step.',
    'arrows.step1.title': 'Limestone Quarrying',
    'arrows.step1.desc': 'Sourcing high-purity limestone from the dry desert mountains of Ras Al Khaimah.',
    'arrows.step2.title': 'Clinker Burning',
    'arrows.step2.desc': 'Fired at 1450°C in modern rotary kilns using high-efficiency European technology.',
    'arrows.step3.title': 'Ultra-fine Milling',
    'arrows.step3.desc': 'Ground to a microscopic powder to ensure consistent, stable, over 90% whiteness.',
    'arrows.step4.title': 'Iconic Structures',
    'arrows.step4.desc': 'Delivered globally to shape premium modern architectural masterpieces.',
    'features.title': 'Our Commitments',
    'features.lead': 'Delivering excellence through advanced technology and responsible operations.',
    'features.1.title': 'Sustainability',
    'features.1.desc': 'Minimizing emissions and optimizing energy use through waste-heat recovery systems.',
    'features.2.title': 'Quality Control',
    'features.2.desc': 'Strict laboratory testing at every stage of production to guarantee over 90% whiteness.',
    'features.3.title': 'Global Logistics',
    'features.3.desc': 'Seamless shipping and dispatch from Saqr Port for fast global delivery.',
    'features.btn': 'Sustainability Info',
    'blog.title': 'Investor Relations & News',
    'blog.lead': 'Stay updated with our latest financial results, stock performance, and corporate disclosures.',
    'blog.1.date': 'June 02, 2026',
    'blog.1.title': 'Annual General Meeting & Dividend Distribution Plan',
    'blog.1.desc': 'The Board of Directors approved the distribution of annual dividends to shareholders registered in the company\'s register.',
    'blog.2.date': 'May 15, 2026',
    'blog.2.title': 'Q1 2026 Financial Results Disclosure',
    'blog.2.desc': 'Ras Al Khaimah Co. for White Cement announces stable profit margins and revenue growth in Q1 2026.',
    'blog.3.date': 'April 20, 2026',
    'blog.3.title': 'SCA’s Unclaimed Dividend Announcement',
    'blog.3.desc': 'Important notification regarding unclaimed dividends for shareholders prior to March 2015.',
    'blog.btn': 'View Disclosures',
    'blog.more_btn': 'View More Disclosures',
    'blog.stock.title': 'RAKWCT Stock (ADX)',
    'blog.stock.price': '1.15 AED',
    'blog.stock.change': '+1.77% (1D)',
    'blog.stock.cap': '575M AED',
    'outro.title': 'Building For Tomorrow.',
    'outro.btn': 'Contact Us'
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
    
    // Services / Products Accordion
    'services.title1': 'كتالوج مواد',
    'services.title2': 'البناء الفاخرة',
    'services.buy.desc': 'نقوم بتصنيع إسمنت بورتلاند أبيض فاخر (الفئة ١ و ٢) وكلنكر عالي الجودة. يوفر متانة استثنائية ونقاءً فائقاً وتنوعاً جمالياً يثق به المطورون عالمياً.',
    'services.sell.desc': 'تنتج شركة رأس الخيمة لصناعة الجير (نورة) الجير الحي والجير المطفأ عالي النقاء للتطبيقات الكيميائية والمعدنية والإنشائية عالمياً.',
    'services.rent.desc': 'يقوم مصنع الطابوق الحديث (MBF) بتصنيع طابوق خرساني عالي المقاومة وإنترلوك ديكوري وكربستون متين لدعم مشاريع البنية التحتية الفاخرة.',
    'services.footer.text1': 'تعمل شركاتنا الشقيقة بالتنسيق والتعاون',
    'services.footer.text2': 'لتقديم حلول بناء إنشائية متكاملة.',
    'services.footer.btn': 'اتصل بالمبيعات',
    
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
    'footer.copyright': 'شركة رأس الخيمة لصناعة الإسمنت الأبيض والمواد الإنشائية. جميع الحقوق محفوظة.',

    // Adapted keys
    'global.title': 'حضور عالمي',
    'global.header': 'تصدير الجودة الفائقة إلى أكثر من ٣٠ دولة حول العالم.',
    'global.desc': 'يستخدم مصنعنا الحديث في رأس الخيمة أحدث التقنيات لإنتاج الإسمنت الأبيض عالي القوة. نقوم بتصدير الكلنكر والإسمنت المجهز لجميع أنحاء العالم، ليكون ركيزة أساسية لأشهر المعالم المعمارية.',
    'global.btn': 'استكشف الخدمات اللوجستية',
    'arrows.title': 'النقاء. القوة. المتانة. الابتكار.',
    'arrows.lead': 'هذه هي الركائز الأساسية لإسمنت رأس الخيمة الأبيض. نحن لا ننتج مواد بناء فحسب، بل نبني معالم تقاوم الزمن.',
    'arrows.pipeline.title': 'مراحل خط الإنتاج لدينا',
    'arrows.pipeline.lead': 'من المواد الخام إلى العجائب المعمارية، نضمن النقاء والصلابة في كل خطوة.',
    'arrows.step1.title': 'استخراج الحجر الجيري',
    'arrows.step1.desc': 'الحصول على حيار جيري عالي النقاء من جبال صحراء رأس الخيمة الجافة.',
    'arrows.step2.title': 'حرق الكلنكر',
    'arrows.step2.desc': 'يُحرق في أفران دوارة حديثة عند ١٤٥٠ درجة مئوية باستخدام تقنيات أوروبية عالية الكفاءة.',
    'arrows.step3.title': 'الطحن فائق النعومة',
    'arrows.step3.desc': 'يُطحن إلى مسحوق مجهري لضمان درجة بياض متناسقة ومستقرة تتجاوز ٩٠٪.',
    'arrows.step4.title': 'هياكل معمارية أيقونية',
    'arrows.step4.desc': 'يُشحن عالمياً لتشكيل روائع معمارية حديثة ومتميزة.',
    'features.title': 'التزاماتنا',
    'features.lead': 'نقدم التميز من خلال التكنولوجيا المتقدمة والعمليات المسؤولية.',
    'features.1.title': 'الاستدامة والبيئة',
    'features.1.desc': 'تقليل الانبعاثات وتحسين استخدام الطاقة من خلال أنظمة استعادة الحرارة المهدرة.',
    'features.2.title': 'مراقبة الجودة',
    'features.2.desc': 'اختبارات معملية صارمة في كل مرحلة لضمان درجة بياض تتجاوز ٩٠٪.',
    'features.3.title': 'الخدمات اللوجستية',
    'features.3.desc': 'شحن وتوزيع سلس من ميناء صقر لضمان التوصيل السريع لجميع أنحاء العالم.',
    'features.btn': 'معلومات الاستدامة',
    'blog.title': 'علاقات المستثمرين والأخبار',
    'blog.lead': 'ابق على اطلاع بأحدث النتائج المالية وأداء السهم والإفصاحات المؤسسية.',
    'blog.1.date': '٠٢ يونيو ٢٠٢٦',
    'blog.1.title': 'الاجتماع السنوي العام وخطة توزيع الأرباح',
    'blog.1.desc': 'وافق مجلس الإدارة على توزيع الأرباح السنوية على المساهمين المقيدين في سجل الشركة.',
    'blog.2.date': '١٥ مايو ٢٠٢٦',
    'blog.2.title': 'الإفصاح عن النتائج المالية للربع الأول ٢٠٢٦',
    'blog.2.desc': 'شركة رأس الخيمة للإسمنت الأبيض تعلن عن هوامش ربح مستقرة ونمو في الإيرادات للربع الأول من ٢٠٢٦.',
    'blog.3.date': '٢٠ أبريل ٢٠٢٦',
    'blog.3.title': 'إعلان هيئة الأوراق المالية بشأن الأرباح غير المطالب بها',
    'blog.3.desc': 'إشعار هام بشأن الأرباح غير المطالب بها للمساهمين قبل مارس ٢٠١٥.',
    'blog.btn': 'عرض الإفصاحات',
    'blog.more_btn': 'عرض المزيد من الإفصاحات',
    'blog.stock.title': 'سهم رأس الخيمة للإسمنت الأبيض (ADX)',
    'blog.stock.price': '١.١٥ د.إ',
    'blog.stock.change': '+١.٧٧٪ (يومي)',
    'blog.stock.cap': '٥٧٥ مليون د.إ',
    'outro.title': 'نبني للغد.',
    'outro.btn': 'اتصل بنا'
  }
};

export function t(key: keyof typeof translations.en): string {
  return translations[langState.current][key] || translations.en[key] || '';
}
