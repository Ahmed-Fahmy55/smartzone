/* Smart Zone site: content, language/theme, release info and page rendering.
   Each page sets <body data-page="…" data-root="…">; privacy pages keep their policy text in the HTML. */
(function () {
  'use strict';

  var WA_NUM = '201551157197';
  var wa = function (m) { return 'https://wa.me/' + WA_NUM + (m ? '?text=' + encodeURIComponent(m) : ''); };
  var body = document.body;
  var PAGE = body.getAttribute('data-page') || 'home';
  var ROOT = body.getAttribute('data-root') || '';

  var T = {
    ar: {
      navLabel: 'القائمة الرئيسية', home: 'الرئيسية', contact: 'تواصل معانا', privacy: 'سياسة الخصوصية',
      privacyShop: 'خصوصية ⁦Z Shop⁩', privacyGym: 'خصوصية ⁦Z Gym⁩',
      langLabel: 'English', langAria: 'Switch to English', themeAria: 'تغيير الوضع الفاتح والغامق', menuAria: 'القائمة',
      whatsapp: 'واتساب', whatsappLong: 'كلّمنا على واتساب', fwd: 'arrow_back', prevIcon: 'chevron_right', nextIcon: 'chevron_left',
      heroEyebrow: 'برامج ويندوز للمحلات والجيمات',
      heroTitle: 'برامج بسيطة تدير شغلك، حتى لو النت قطع',
      heroSub: 'سمارت زون بتعمل برامج عربي لأصحاب المحلات والجيمات في مصر. بياناتك على جهازك، ونسخة احتياطية على درايفك، والدعم على واتساب.',
      heroShotAlt: 'مكان صورة شاشة البيع في ⁦Z Shop⁩',
      trust: ['شغّال من غير نت', 'جرّب 7 أيام ببلاش', 'دعم على واتساب'],
      productsEyebrow: 'برامجنا', productsTitle: 'اختار البرنامج اللي يناسب شغلك',
      downloadFree: 'حمّل ببلاش', learnMore: 'اعرف أكتر', soon: 'قريباً',
      moreTitle: 'برامج تانية في الطريق', moreSub: 'بنشتغل على برامج لأنشطة تانية. قولنا شغلك إيه، يمكن يكون البرنامج الجاي.', moreCta: 'قولنا على واتساب',
      whyEyebrow: 'في كل برامجنا', whyTitle: 'ليه سمارت زون؟',
      why: [
        { icon: 'wifi_off', t: 'شغّال من غير إنترنت', d: 'البيع مايقفش لو النت قطع. كل البيانات على جهازك انت، مش على سيرفر حد.' },
        { icon: 'backup', t: 'نسخة احتياطية على درايفك', d: 'نسخة كل يوم أوتوماتيك على ⁦Google Drive⁩ بتاعك، وترجّعها على جهاز جديد بضغطة. البرنامج شايف بس الملفات اللي هو رفعها.', note: 'متاح في ⁦Z Shop⁩ · قريباً في ⁦Z Gym⁩' },
        { icon: 'system_update', t: 'تحديثات لوحدها', d: 'البرنامج بيلاقي النسخة الجديدة، يتأكد من توقيع المطوّر، وياخد نسخة من بياناتك قبل ما يحدّث.' },
        { icon: 'key', t: 'جرّب 7 أيام ببلاش', d: 'بعدها مفتاح تفعيل خاص بجهازك: تبعتلنا كود الجهاز على واتساب ونبعتلك المفتاح.' },
        { icon: 'translate', t: 'عربي بالكامل', d: 'الشاشات والفواتير والتقارير عربي، وكل موظف يشوف بس اللي مسموحله بيه.' },
        { icon: 'chat', t: 'دعم على واتساب', d: 'زرار واتساب جوّه البرنامج يوصّلك بينا على طول.' }
      ],
      howEyebrow: '3 خطوات', howTitle: 'تبدأ إزاي؟',
      how: [
        { icon: 'download', t: 'حمّل البرنامج', d: 'ملف واحد من غير تسطيب، على ويندوز 10 أو 11.' },
        { icon: 'schedule', t: 'جرّب 7 أيام ببلاش', d: 'كل المميزات مفتوحة من أول يوم.' },
        { icon: 'chat', t: 'فعّل على واتساب', d: 'ابعتلنا كود الجهاز، ونبعتلك مفتاح التفعيل.' }
      ],
      testiTitle: 'بيقولوا إيه عننا', testiPh: '«مكان رأي العميل: جملة أو اتنين عن تجربته مع البرنامج.»', testiName: 'اسم العميل', avatarAlt: 'صورة العميل',
      testiWho: ['محل · المدينة', 'جيم · المدينة', 'محل · المدينة'],
      faqTitle: 'أسئلة بتتكرر',
      faq: [
        { q: 'البرنامج محتاج إنترنت؟', a: 'لأ. البيع والتقارير وكل حاجة شغّالة من غير نت. النت بيلزم بس للنسخة الاحتياطية على درايف، والتحديثات، ومزامنة الفروع لو عندك الإضافة دي.' },
        { q: 'بياناتي بتروح فين؟', a: 'بتفضل على جهازك انت، وإحنا مابنستقبلش أي بيانات. ولو فعّلت النسخ الاحتياطي، النسخ بتروح على حساب ⁦Google Drive⁩ بتاعك.' },
        { q: 'التجربة المجانية فيها إيه؟', a: '7 أيام بكل المميزات. بعدها البرنامج بيطلب مفتاح تفعيل.' },
        { q: 'التفعيل بيتم إزاي؟', a: 'البرنامج بيطلعلك كود الجهاز. ابعته على واتساب ⁦01551157197⁩ ونبعتلك المفتاح. المفتاح مربوط بالجهاز ده.' },
        { q: 'ويندوز بيقول ⁦Windows protected your PC⁩، أعمل إيه؟', a: 'ده تحذير عادي بيظهر لأي برنامج جديد. اضغط ⁦More info⁩ وبعدين ⁦Run anyway⁩. في صفحة كل برنامج فيه صورة للخطوة دي.' },
        { q: 'بيشتغل على أي ويندوز؟', a: 'ويندوز 10 أو 11 نسخة ⁦64-bit⁩.' }
      ],
      bandTitle: 'عندك سؤال؟ كلّمنا على واتساب', bandSub: 'ابعتلنا واحنا نرد عليك ونساعدك تبدأ.', otherWays: 'طرق تواصل تانية',
      crumbAria: 'مسار الصفحة', relInfo: 'تفاصيل آخر إصدار', loadingRel: 'بنجيب تفاصيل الإصدار', dlNote: 'ويندوز ⁦10/11⁩ · ⁦64-bit⁩ · من غير تسطيب',
      ver: 'الإصدار', date: 'بتاريخ', size: 'الحجم',
      guidePdf: 'دليل الاستخدام (PDF)', allVersions: 'كل الإصدارات والجديد',
      featEyebrow: 'المميزات', galleryTitle: 'صور من البرنامج', close: 'إغلاق', prev: 'السابقة', next: 'التالية', zoom: 'تكبير',
      reqTitle: 'المتطلبات', req: ['ويندوز 10 أو 11 (⁦64-bit⁩)', 'من غير تسطيب: ملف واحد تشغّله', 'مش محتاج إنترنت عشان يشتغل'], hwTitle: 'الأجهزة المدعومة',
      addon: 'إضافة مدفوعة', contactWa: 'كلّمنا على واتساب',
      guideEyebrow: 'بعد التحميل', guideTitle: 'أول تشغيل في 5 خطوات',
      guide: [
        { t: 'انقل الملف لفولدر ثابت', d: 'انقل ملف البرنامج من ⁦Downloads⁩ لفولدر مش هتمسحه، مثلاً ⁦C:\\Smart Zone⁩، واعمله اختصار على سطح المكتب.' },
        { t: 'لو ويندوز حذّرك، ده عادي', d: 'أول مرة ممكن يظهر ⁦Windows protected your PC⁩. اضغط ⁦More info⁩، وبعدين ⁦Run anyway⁩.', smart: true },
        { t: 'ابدأ التجربة', d: '7 أيام بكل المميزات، من غير أي تسجيل.' },
        { t: 'فعّل البرنامج', d: 'من شاشة التفعيل انسخ كود الجهاز وابعته على واتساب ⁦01551157197⁩، وهنبعتلك المفتاح.' },
        { t: 'غيّر كلمة السر الافتراضية', d: 'أول ما تدخل، غيّر كلمة سر المدير من الإعدادات.' }
      ],
      ssAlt: 'خطوتين: اضغط ⁦More info⁩، وبعدين ⁦Run anyway⁩', ssArabicWin: 'لو ويندوز عندك بالعربي: اضغط «مزيد من المعلومات» وبعدين «تشغيل على أي حال».',
      readyTitle: 'جاهز تجرّب؟', readySub: '7 أيام ببلاش بكل المميزات. ولو احتجت مساعدة إحنا على واتساب.', askWa: 'اسأل على واتساب',
      dsTitle: 'التحميل بدأ', dsRetry: 'لو مابدأش، اضغط هنا.', dsNext: 'الخطوات الجاية',
      dsSteps: ['افتح الملف من التنزيلات وانقله لفولدر ثابت.', 'لو ظهر تحذير ويندوز، اضغط:', 'استخدم البرنامج 7 أيام ببلاش.', 'للتفعيل، ابعتلنا كود الجهاز على واتساب.'],
      dsWa: 'محتاج مساعدة؟ كلّمنا', dsGuide: 'شرح أول تشغيل بالصور',
      cTitle: 'تواصل معانا', cSub: 'أسرع طريقة هي واتساب، للأسئلة والتفعيل والدعم.', sendMsg: 'ابعت رسالة', email: 'الإيميل', location: 'العنوان',
      actTitle: 'عايز تفعّل البرنامج؟', actBody: 'ابعتلنا على واتساب اسم البرنامج (⁦Z Shop⁩ أو ⁦Z Gym⁩) وكود الجهاز اللي ظاهر في شاشة التفعيل، ونبعتلك المفتاح.',
      pTitle: 'سياسة الخصوصية', pNote: 'النص الكامل للسياسة (بالإنجليزي)', pUpdated: 'آخر تحديث 27 سبتمبر 2026',
      footAbout: 'برامج ويندوز عربي للمحلات والجيمات. شغّالة من غير نت، وبياناتك على جهازك.', footNav: 'روابط الموقع', footProducts: 'البرامج', footCompany: 'سمارت زون',
      waHello: 'أهلاً سمارت زون، عندي سؤال', waMore: 'أهلاً، أنا عندي نشاط: ', waBranches: 'أهلاً، عايز أعرف عن إضافة الفروع في Z Shop',
      waAct: function (n) { return 'أهلاً، عايز أفعّل ' + n + '. كود الجهاز: '; },
      dlLabel: function (n) { return 'حمّل ' + n; }, dsSub: function (n) { return 'بيتحمّل ' + n + ' دلوقتي.'; }, backLabel: function (n) { return 'صفحة ' + n; },
      heroAlt: function (n) { return 'مكان صورة من ' + n; }
    },
    en: {
      navLabel: 'Main menu', home: 'Home', contact: 'Contact', privacy: 'Privacy policy',
      privacyShop: 'Z Shop privacy', privacyGym: 'Z Gym privacy',
      langLabel: 'عربي', langAria: 'التحويل للعربي', themeAria: 'Toggle light and dark mode', menuAria: 'Menu',
      whatsapp: 'WhatsApp', whatsappLong: 'Chat on WhatsApp', fwd: 'arrow_forward', prevIcon: 'chevron_left', nextIcon: 'chevron_right',
      heroEyebrow: 'Windows apps for shops and gyms',
      heroTitle: 'Simple software that runs your business, even offline',
      heroSub: 'Arabic Windows apps for shops and gyms in Egypt. Your data stays on your PC, backups go to your Drive, and support is on WhatsApp.',
      heroShotAlt: 'Z Shop point-of-sale screenshot placeholder',
      trust: ['Works offline', '7-day free trial', 'WhatsApp support'],
      productsEyebrow: 'Products', productsTitle: 'Pick the app for your business',
      downloadFree: 'Download free', learnMore: 'Learn more', soon: 'Coming soon',
      moreTitle: 'More apps on the way', moreSub: 'Tell us what your business does. It might be our next app.', moreCta: 'Tell us on WhatsApp',
      whyEyebrow: 'In every app', whyTitle: 'Why Smart Zone',
      why: [
        { icon: 'wifi_off', t: 'Fully offline', d: 'Keep selling when the internet drops. Your data stays on your own PC.' },
        { icon: 'backup', t: 'Backup to your Google Drive', d: 'Automatic daily copies, one-click restore on a new PC. The app only sees files it uploaded.', note: 'In Z Shop · Coming to Z Gym' },
        { icon: 'system_update', t: 'Automatic updates', d: 'Checks the developer’s signature and backs up your data before updating.' },
        { icon: 'key', t: '7-day free trial', d: 'Then a licence key for your PC, sent over WhatsApp.' },
        { icon: 'translate', t: 'Fully Arabic', d: 'Arabic screens and printouts, with staff roles.' },
        { icon: 'chat', t: 'WhatsApp support', d: 'Reach us straight from inside the app.' }
      ],
      howEyebrow: '3 steps', howTitle: 'How it works',
      how: [
        { icon: 'download', t: 'Download', d: 'One file, no installation. Windows 10 or 11.' },
        { icon: 'schedule', t: 'Try it free for 7 days', d: 'Every feature unlocked.' },
        { icon: 'chat', t: 'Activate on WhatsApp', d: 'Send us your device code, get your key.' }
      ],
      testiTitle: 'What customers say', testiPh: '“Customer quote placeholder: one or two sentences about their experience.”', testiName: 'Customer name', avatarAlt: 'Customer photo',
      testiWho: ['Shop · City', 'Gym · City', 'Shop · City'],
      faqTitle: 'FAQ',
      faq: [
        { q: 'Does it need the internet?', a: 'No. Selling and reports work offline. Internet is only used for Drive backup, updates and branch sync.' },
        { q: 'Where is my data?', a: 'On your own PC. We receive nothing. Backups go to your own Google Drive.' },
        { q: 'What is in the free trial?', a: '7 days with every feature. Then the app asks for a licence key.' },
        { q: 'How do I activate?', a: 'Send the device code shown in the app to WhatsApp 01551157197. The key is tied to that PC.' },
        { q: 'Windows says “Windows protected your PC”', a: 'That is normal for new apps. Click More info, then Run anyway.' },
        { q: 'Which Windows versions?', a: 'Windows 10 or 11, 64-bit.' }
      ],
      bandTitle: 'Questions? Message us on WhatsApp', bandSub: 'We will reply and help you get started.', otherWays: 'Other ways to reach us',
      crumbAria: 'Breadcrumb', relInfo: 'Latest release', loadingRel: 'Loading release details', dlNote: 'Windows 10/11 · 64-bit · no installation',
      ver: 'Version', date: 'Released', size: 'Size',
      guidePdf: 'User guide (PDF)', allVersions: 'All versions & what’s new',
      featEyebrow: 'Features', galleryTitle: 'Screenshots', close: 'Close', prev: 'Previous', next: 'Next', zoom: 'Enlarge',
      reqTitle: 'Requirements', req: ['Windows 10 or 11 (64-bit)', 'No installation, one file', 'No internet needed to run'], hwTitle: 'Supported hardware',
      addon: 'Paid add-on', contactWa: 'Contact us on WhatsApp',
      guideEyebrow: 'After downloading', guideTitle: 'First run in 5 steps',
      guide: [
        { t: 'Move the file to a fixed folder', d: 'For example C:\\Smart Zone, then pin a desktop shortcut.' },
        { t: 'SmartScreen warning is normal', d: 'Click More info, then Run anyway.', smart: true },
        { t: 'Start the trial', d: '7 days, every feature.' },
        { t: 'Activate', d: 'Copy the device code and send it on WhatsApp.' },
        { t: 'Change the default password', d: 'Do this first, in Settings.' }
      ],
      ssAlt: 'Two steps: click More info, then Run anyway', ssArabicWin: 'On Arabic Windows the buttons read «مزيد من المعلومات» and «تشغيل على أي حال».',
      readyTitle: 'Ready to try it?', readySub: '7 days free, every feature.', askWa: 'Ask on WhatsApp',
      dsTitle: 'Your download has started', dsRetry: 'Not starting? Click here.', dsNext: 'Next steps',
      dsSteps: ['Open the file and move it to a fixed folder.', 'If Windows warns you, click:', 'Use it free for 7 days.', 'Send your device code on WhatsApp to activate.'],
      dsWa: 'Need help? Message us', dsGuide: 'First-run guide with pictures',
      cTitle: 'Contact', cSub: 'WhatsApp is fastest, for questions, activation and support.', sendMsg: 'Send a message', email: 'Email', location: 'Location',
      actTitle: 'Activating?', actBody: 'Send the app name (Z Shop or Z Gym) and the device code from the activation screen.',
      pTitle: 'Privacy policy', pNote: '', pUpdated: 'Last updated 27 September 2026',
      footAbout: 'Arabic Windows apps for shops and gyms. Offline, and your data stays on your PC.', footNav: 'Site links', footProducts: 'Products', footCompany: 'Smart Zone',
      waHello: 'Hi Smart Zone, I have a question', waMore: 'Hi, my business is: ', waBranches: 'Hi, I want to know about the Z Shop branches add-on',
      waAct: function (n) { return 'Hi, I want to activate ' + n + '. Device code: '; },
      dlLabel: function (n) { return 'Download ' + n; }, dsSub: function (n) { return n + ' is downloading now.'; }, backLabel: function (n) { return 'Back to ' + n; },
      heroAlt: function (n) { return n + ' screenshot placeholder'; }
    }
  };

  var PRODUCTS = [
    {
      id: 'shop', name: 'Z Shop', repo: 'Ahmed-Fahmy55/ShopManagement-Releases', exe: 'ShopManagement.exe', icon: 'storefront',
      guidePdf: 'docs/ShopManagement-User-Guide.pdf', privacy: 'privacy.html',
      extraDocs: [
        { href: 'docs/ShopManagement-GoogleDrive-Backup.pdf', ar: 'النسخ الاحتياطي على ⁦Google Drive⁩ (PDF)', en: 'Google Drive backup (PDF)' },
        { href: 'docs/ShopManagement-Excel-Import.pdf', ar: 'استيراد المديونية من ⁦Excel⁩ (PDF)', en: 'Excel debt import (PDF)' }
      ],
      ar: {
        kind: 'إدارة المحل', forWho: 'للمحلات', tagline: 'كاشير ومخزون ومديونية في برنامج واحد',
        desc: 'بيع بالباركود أو بالوزن، اطبع فواتير عربي على أي طابعة حرارية، وتابع المخزون والديون والأرباح. شغّال من غير نت.',
        highlights: ['بيع بالباركود أو بالوزن والمتر', 'فواتير وليبلز باركود بالعربي', 'مخزون ومديونية وصافي ربح'],
        featTitle: 'كل اللي المحل محتاجه في مكان واحد',
        features: [
          { icon: 'point_of_sale', t: 'البيع (الكاشير)', items: ['باركود أو بحث أو اختيار من قائمة المنتجات', 'علّق الفاتورة وكمّلها بعدين', 'خصومات، وكاش أو فيزا مع حساب الباقي', 'البيع كله من الكيبورد من غير ماوس', 'بيع بالوزن أو الكسور (كيلو، متر) والسعر بيتحسب لوحده'] },
          { icon: 'print', t: 'الطباعة', items: ['فواتير عربي على طابعات 58 و 80 مم', 'حتى الطابعات اللي مفيهاش خط عربي', 'إعادة طباعة أي فاتورة قديمة', 'ليبلز باركود وأسعار، ورول بكذا ستيكر', 'طابعة ليبلز منفصلة'] },
          { icon: 'inventory_2', t: 'المخزون', items: ['أقسام، واستلام بضاعة', 'تعديل الكمية مع كتابة السبب', 'جرد', 'حركة كاملة لكل صنف', 'تنبيه لما صنف يقرب يخلص أو يخلص'] },
          { icon: 'account_balance_wallet', t: 'المديونية والموردين والمصاريف', items: ['بيع بالآجل، ورصيد كل زبون، وفلترة بالمنطقة', 'انقل دفتر الديون الورق أو شيت الإكسل مرة واحدة، بالتواريخ', 'حساب كل مورد: مشتريات، مدفوع، باقي', 'مصاريف الشهر (إيجار، كهربا، مرتبات) بتتخصم من صافي الربح'] },
          { icon: 'monitoring', t: 'الإحصائيات', items: ['الإيراد والتكلفة والربح وصافي الربح', 'رسم للإيراد اليومي، والأكثر مبيعاً', 'الإيراد حسب القسم، ومقارنة بالشهر اللي فات', 'سجل المبيعات بتفاصيل الدفع، وتصدير ⁦CSV⁩'] },
          { icon: 'badge', t: 'المستخدمين', items: ['مدير وكاشير، والدخول بـ ⁦PIN⁩', 'لو نسيت ⁦PIN⁩ المدير، ترجّعه بمفتاح من سمارت زون', 'ثيم فاتح أو غامق لكل كاشير'] }
        ],
        hardware: ['طابعات فواتير حرارية 58 و 80 مم', 'قارئ باركود', 'طابعة ليبلز باركود'],
        gallery: ['شاشة البيع', 'فاتورة 80 مم', 'المخزون', 'المديونية', 'الإحصائيات', 'الفروع'],
        mb: { title: 'عندك أكتر من فرع؟', sub: 'إضافة الكاشيرات المتعددة والفروع: كذا كاشير في نفس المحل، أو كذا فرع، كلهم متزامنين عن طريق سحابة سمارت زون.', items: ['مخزن رئيسي، وتحويلات بضاعة بين الفروع والمخزن', 'تشوف أي فرع أو كل الفروع مع بعض: الرئيسية، المخزون، المبيعات، المديونيات، المصاريف، الإحصائيات', 'البيع شغّال من غير نت، ويتزامن لما النت يرجع', 'كل فرع بيبيع بس المنتجات اللي عنده', 'لو جهاز ضاع، يترجّع من السيرفر'], branches: ['فرع 1', 'فرع 2', 'فرع 3'], cloud: 'سحابة سمارت زون', warehouse: 'المخزن الرئيسي', caption: 'كل فرع بيبيع أوفلاين ويتزامن لما النت يرجع' }
      },
      en: {
        kind: 'Shop management', forWho: 'for shops', tagline: 'Point of sale, stock and credit in one app',
        desc: 'Sell by barcode or weight, print Arabic receipts on any thermal printer, and track stock, debts and profit. Works offline.',
        highlights: ['Sell by barcode, weight or metre', 'Arabic receipts and barcode labels', 'Stock, credit and net profit'],
        featTitle: 'Everything a shop needs',
        features: [
          { icon: 'point_of_sale', t: 'Selling (POS)', items: ['Barcode, search or product list', 'Hold and resume carts', 'Discounts; cash or card with change', 'Keyboard-only checkout', 'Sell by weight or fraction (kg, m)'] },
          { icon: 'print', t: 'Printing', items: ['Arabic receipts on 58 and 80 mm printers', 'Works on printers without Arabic fonts', 'Reprint any past sale', 'Barcode and price labels, multi-sticker rolls'] },
          { icon: 'inventory_2', t: 'Stock', items: ['Categories and deliveries', 'Adjustments with a reason', 'Stock-taking and full item history', 'Low and out-of-stock alerts'] },
          { icon: 'account_balance_wallet', t: 'Credit, suppliers, expenses', items: ['Credit sales, balances, filter by area', 'Import a paper debt book or Excel once', 'Supplier accounts', 'Monthly expenses deducted from net profit'] },
          { icon: 'monitoring', t: 'Statistics', items: ['Revenue, cost, profit, net profit', 'Daily chart, best sellers, by category', 'Month-over-month, CSV export'] },
          { icon: 'badge', t: 'Users', items: ['Admin and cashier with PIN login', 'Admin PIN recovery key', 'Light or dark theme per till'] }
        ],
        hardware: ['58 / 80 mm thermal receipt printers', 'Barcode scanners', 'Barcode label printers'],
        gallery: ['Selling screen', '80 mm receipt', 'Stock', 'Credit', 'Statistics', 'Branches'],
        mb: { title: 'Several branches?', sub: 'The multi-till and multi-branch add-on syncs every till and branch through Smart Zone’s cloud.', items: ['Main warehouse and stock transfers', 'See one branch or all together', 'Sells offline, syncs when back online', 'Each branch sells only its own products', 'Restore a lost PC from the server'], branches: ['Branch 1', 'Branch 2', 'Branch 3'], cloud: 'Smart Zone cloud', warehouse: 'Main warehouse', caption: 'Each branch sells offline and syncs later' }
      }
    },
    {
      id: 'gym', name: 'Z Gym', repo: 'Ahmed-Fahmy55/ZGym-Releases', exe: 'GymManager.exe', icon: 'fitness_center',
      guidePdf: 'docs/ZGym-User-Guide.pdf', privacy: 'gym/privacy.html', extraDocs: [],
      ar: {
        kind: 'إدارة الجيم', forWho: 'للجيمات', tagline: 'اشتراكات وبوابات وموظفين في برنامج واحد',
        desc: 'البوابة بتفتح بس للاشتراك الساري. وتابع المشتركين والتجديدات والموظفين والمرتبات والمكمّلات والتقارير.',
        highlights: ['اشتراكات بعدد حصص وأيام تجميد', 'بوابات وبصمة ⁦ZKTeco⁩ و ⁦Hikvision⁩', 'موظفين ومرتبات وتقارير أوقات الذروة'],
        featTitle: 'كل اللي الجيم محتاجه في مكان واحد',
        features: [
          { icon: 'card_membership', t: 'المشتركين والاشتراكات', items: ['بروفايل بالصورة والمنطقة وأيام ومواعيد التمرين', 'باقات بمدة وسعر وعدد حصص وأقصى أيام تجميد', 'تجديد وتجميد وفك تجميد، والتجميد بيخلص لوحده', 'خصم بمبلغ أو نسبة', 'كاش أو فيزا أو تحويل، ومحسوب على الموظف المسؤول'] },
          { icon: 'fingerprint', t: 'الدخول والبوابات', items: ['كارت عضوية ⁦QR⁩ أو باركود (اطبعه أو احفظه)، أو بصمة', 'تحكم مباشر في بوابات وأبواب ⁦ZKTeco⁩ و ⁦Hikvision⁩', 'الباب يفتح للاشتراك الساري بس، ويفضل مقفول لو منتهي أو متجمّد أو الحصص خلصت', 'ألوان فورية على شاشة الدخول', 'عدد اللي جوّه الجيم دلوقتي، وسجل يومي: مشتركين وموظفين وضيوف'] },
          { icon: 'redeem', t: 'مزايا الباقات والدعوات', items: ['كل باقة فيها عدد مزايا، زي دعوات الضيوف', 'الضيوف اللي المشترك بيعزمهم بيتسجلوا'] },
          { icon: 'payments', t: 'المدفوعات', items: ['الإيراد لأي فترة', 'قائمة اللي محتاجين تجديد: منتهي أو فاضله 7 أيام', 'تصدير ⁦CSV⁩'] },
          { icon: 'fitness_center', t: 'المدربين والبرامج', items: ['المدربين', 'برامج بمواعيد وعدد أماكن', 'تسجيل المشتركين في البرامج'] },
          { icon: 'groups', t: 'الموظفين والمرتبات', items: ['موظفين بالقسم والوظيفة، ولكل واحد دخول خاص', 'حضور بالـ ⁦QR⁩ أو البصمة', 'مرتبات بالحوافز، وإجازات سنوية ومرضي وبدون مرتب', 'ملخص حضور شهري'] },
          { icon: 'storefront', t: 'محل المكمّلات', items: ['منتجات ومخزون', 'المبيعات بتتسجل على الموظف، وعلى المشترك لو حبيت', 'تقرير مبيعات للمدير'] },
          { icon: 'bar_chart', t: 'التقارير', items: ['الإيراد ناقص المرتبات = الصافي', 'الحضور اليومي، والجديد مقابل التجديد', 'الساري والمنتهي، والإيراد حسب الباقة', 'التسجيل حسب المدرب، والمشتركين حسب المنطقة', 'أوقات الذروة والهدوء، وأيام التمرين المفضلة', 'فلترة بالتاريخ، ⁦CSV⁩، وملخص للطباعة'] },
          { icon: 'chat', t: 'واتساب', items: ['رسالة ترحيب للمشترك الجديد', 'إشعارات أوتوماتيك للمدير عن طريق ⁦WhatsApp Business API⁩'] },
          { icon: 'palette', t: 'شكل الجيم بتاعك', items: ['لوجو الجيم على الكروت والإيصالات', 'كذا ثيم ألوان', 'جولة تعريفية جوّه البرنامج'] },
          { icon: 'backup', t: 'نسخة احتياطية على ⁦Google Drive⁩', badge: 'قريباً', items: ['نسخة يومية على درايفك، وترجيع بضغطة على جهاز جديد'] }
        ],
        hardware: ['بوابات وأبواب وأجهزة بصمة ⁦ZKTeco⁩', 'بوابات وأبواب ⁦Hikvision⁩', 'قارئ ⁦QR⁩ أو باركود', 'طابعة حرارية للإيصالات'],
        gallery: ['شاشة الدخول', 'بروفايل مشترك', 'الاشتراكات', 'كارت العضوية', 'الموظفين', 'التقارير']
      },
      en: {
        kind: 'Gym management', forWho: 'for gyms', tagline: 'Memberships, turnstiles and staff in one app',
        desc: 'The door opens only for a valid membership. Track members, renewals, staff, salaries, supplements and reports.',
        highlights: ['Plans with session limits and freezes', 'ZKTeco and Hikvision doors and fingerprint', 'Staff, salaries and peak-hour reports'],
        featTitle: 'Everything a gym needs',
        features: [
          { icon: 'card_membership', t: 'Members & subscriptions', items: ['Profiles with photo, area, usual days', 'Plans with sessions and max freeze days', 'Renew, freeze, auto-unfreeze', 'Discounts; cash, card or transfer'] },
          { icon: 'fingerprint', t: 'Check-in & access', items: ['QR/barcode cards or fingerprint', 'Controls ZKTeco and Hikvision doors', 'Stays shut if expired, frozen or out of sessions', '“Inside now” count and daily log'] },
          { icon: 'redeem', t: 'Plan perks & guests', items: ['Perks per plan, like guest passes', 'Invited guests are logged'] },
          { icon: 'payments', t: 'Payments', items: ['Revenue for any period', 'Due for renewal within 7 days', 'CSV export'] },
          { icon: 'fitness_center', t: 'Trainers & programs', items: ['Programs with schedule and capacity', 'Member enrolment'] },
          { icon: 'groups', t: 'Staff & HR', items: ['Own login, QR or fingerprint attendance', 'Salaries, bonuses and leave', 'Monthly attendance summary'] },
          { icon: 'storefront', t: 'Supplements shop', items: ['Products and stock', 'Sales per employee or member'] },
          { icon: 'bar_chart', t: 'Reports', items: ['Revenue minus salaries = net', 'Peak and quiet hours', 'Revenue by plan, members by area', 'CSV and printable summary'] },
          { icon: 'chat', t: 'WhatsApp', items: ['Welcome message for new members', 'Manager alerts via WhatsApp Business API'] },
          { icon: 'palette', t: 'Your gym’s look', items: ['Your logo on cards and receipts', 'Colour themes and a guided tour'] },
          { icon: 'backup', t: 'Google Drive backup', badge: 'Soon', items: ['Daily copies and one-click restore'] }
        ],
        hardware: ['ZKTeco turnstiles, doors, fingerprint', 'Hikvision turnstiles and doors', 'QR / barcode scanners', 'Thermal receipt printers'],
        gallery: ['Check-in', 'Member profile', 'Subscriptions', 'Membership card', 'Staff', 'Reports']
      }
    }
  ];

  // ---------- helpers ----------
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var ic = function (name, extra) { return '<span class="ms"' + (extra ? ' style="' + extra + '"' : '') + ' aria-hidden="true">' + name + '</span>'; };
  var map = function (arr, fn) { return (arr || []).map(fn).join(''); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };
  var href = function (path) { return ROOT + path; };
  var pageHref = { home: href('') || './', shop: href('shop/'), gym: href('gym/'), contact: href('contact/') };
  var dlUrl = function (p) { return 'https://github.com/' + p.repo + '/releases/latest/download/' + p.exe; };
  var relUrl = function (p) { return 'https://github.com/' + p.repo + '/releases'; };
  var startUrl = function (p) { return href('download/?app=' + p.id + '&start=1'); };
  var product = function (id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; };

  // ---------- state ----------
  var qsLang = new URLSearchParams(location.search).get('lang');
  var lang = qsLang === 'en' || qsLang === 'ar' ? qsLang : (store.get('sz-lang') === 'en' ? 'en' : 'ar');
  var rel = {};
  var faqOpen = 0;
  var lbIndex = -1;

  function theme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  // ---------- release info ----------
  function loadRel(p) {
    var ctl = 'AbortController' in window ? new AbortController() : null;
    var to = setTimeout(function () { if (ctl) ctl.abort(); }, 8000);
    rel[p.id] = { st: 'loading' };
    fetch('https://api.github.com/repos/' + p.repo + '/releases/latest', { signal: ctl ? ctl.signal : undefined, headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { clearTimeout(to); if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then(function (j) {
        var a = (j.assets || []).filter(function (x) { return /\.exe$/i.test(x.name); })[0];
        rel[p.id] = { st: 'ok', tag: j.tag_name, date: j.published_at, size: a ? a.size : null };
      })
      .catch(function () { rel[p.id] = { st: 'failed' }; })
      .then(function () { renderRelSlots(); });
  }

  function relData(p) {
    var r = rel[p.id] || { st: 'loading' };
    var t = T[lang];
    if (r.st !== 'ok' || !r.tag) return { st: r.st === 'ok' ? 'failed' : r.st, items: [], line: '' };
    var date = r.date ? new Date(r.date).toLocaleDateString(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
    var size = r.size ? (r.size / 1048576).toFixed(1) + ' MB' : '';
    var items = [{ icon: 'new_releases', label: t.ver, value: r.tag }];
    if (date) items.push({ icon: 'schedule', label: t.date, value: date });
    if (size) items.push({ icon: 'download', label: t.size, value: size });
    return { st: 'ok', items: items, line: [r.tag, date, size].filter(Boolean).join(' · ') };
  }

  // Release details live in [data-rel] slots so they update in place when the request returns.
  function renderRelSlots() {
    var t = T[lang];
    Array.prototype.forEach.call(document.querySelectorAll('[data-rel]'), function (el) {
      var p = product(el.getAttribute('data-rel'));
      var kind = el.getAttribute('data-rel-kind');
      var d = relData(p);
      if (kind === 'line') {
        el.textContent = d.line;
        el.hidden = d.st !== 'ok';
      } else {
        if (d.st === 'loading') {
          el.innerHTML = '<div class="dl-skel" role="status" aria-live="polite"><i style="width:64px"></i><i style="width:92px"></i><i style="width:52px"></i><span class="sr-only">' + esc(t.loadingRel) + '</span></div>';
        } else if (d.st === 'ok') {
          el.innerHTML = '<ul class="dl-meta" aria-label="' + esc(t.relInfo) + '">' + map(d.items, function (m) {
            return '<li>' + ic(m.icon) + '<span>' + esc(m.label) + '</span><strong>' + esc(m.value) + '</strong></li>';
          }) + '</ul>';
        } else {
          el.innerHTML = '';
        }
      }
    });
  }

  // ---------- chrome ----------
  function header() {
    var t = T[lang];
    var items = [['home', t.home], ['shop', 'Z Shop'], ['gym', 'Z Gym'], ['contact', t.contact]];
    var links = map(items, function (n) {
      return '<a href="' + pageHref[n[0]] + '"' + (n[0] === PAGE ? ' aria-current="page"' : '') + '>' + esc(n[1]) + '</a>';
    });
    return '<div class="wrap hdr">' +
      '<a class="brand" href="' + pageHref.home + '" aria-label="Smart Zone"><span class="mark">SZ</span><span class="brand-txt"><b>Smart Zone</b><small>سمارت زون</small></span></a>' +
      '<nav class="nav-d only-d" aria-label="' + esc(t.navLabel) + '">' + links + '</nav>' +
      '<div class="hdr-tools">' +
        '<button type="button" class="icon-btn" data-act="lang" aria-label="' + esc(t.langAria) + '">' + esc(t.langLabel) + '</button>' +
        '<button type="button" class="icon-btn sq" data-act="theme" aria-label="' + esc(t.themeAria) + '">' + ic(theme() === 'dark' ? 'light_mode' : 'dark_mode') + '</button>' +
        '<a class="btn btn-wa hdr-wa only-d" href="' + wa(t.waHello) + '" target="_blank" rel="noopener">' + ic('chat') + esc(t.whatsapp) + '</a>' +
        '<button type="button" class="icon-btn sq only-m" data-act="menu" aria-expanded="false" aria-controls="nav-m" aria-label="' + esc(t.menuAria) + '">' + ic('menu', 'font-size:22px') + '</button>' +
      '</div></div>' +
      '<nav id="nav-m" class="nav-m" aria-label="' + esc(t.navLabel) + '">' + links +
      '<a class="btn btn-wa" href="' + wa(t.waHello) + '" target="_blank" rel="noopener">' + ic('chat') + esc(t.whatsappLong) + '</a></nav>';
  }

  function footer() {
    var t = T[lang];
    return '<div class="wrap ft">' +
      '<div class="ft-about"><span><span class="mark">SZ</span><strong>Smart Zone</strong></span><p>' + esc(t.footAbout) + '</p></div>' +
      '<nav class="ft-nav" aria-label="' + esc(t.footNav) + '">' +
        '<div><span>' + esc(t.footProducts) + '</span>' + map(PRODUCTS, function (p) { return '<a href="' + pageHref[p.id] + '">' + p.name + '</a>'; }) + '</div>' +
        '<div><span>' + esc(t.footCompany) + '</span><a href="' + pageHref.contact + '">' + esc(t.contact) + '</a>' +
          map(PRODUCTS, function (p) { return '<a href="' + href(p.privacy) + '">' + esc(p.id === 'shop' ? t.privacyShop : t.privacyGym) + '</a>'; }) + '</div>' +
      '</nav></div>' +
      '<div class="wrap ft-bottom"><span>© ' + new Date().getFullYear() + ' Smart Zone</span><span class="ltr">WhatsApp 01551157197 · Zone 8</span></div>';
  }

  function fab() {
    if (PAGE === 'contact') return '';
    return '<a class="fab" href="' + wa(T[lang].waHello) + '" target="_blank" rel="noopener" aria-label="' + esc(T[lang].whatsappLong) + '">' + ic('chat') + '</a>';
  }

  // ---------- shared blocks ----------
  function windowFrame(name, alt, ph) {
    return '<div class="window"><div class="window-bar"><i></i><i></i><i></i><span>' + esc(name) + '</span></div>' +
      '<div class="shot" role="img" aria-label="' + esc(alt) + '">' + esc(ph) + '</div></div>';
  }
  function dlLink(p, cls, label, iconSize) {
    return '<a class="' + cls + '" href="' + dlUrl(p) + '" data-dl="' + p.id + '">' + ic('download', iconSize ? 'font-size:' + iconSize + 'px' : '') + esc(label) + '</a>';
  }

  // ---------- pages ----------
  function homePage() {
    var t = T[lang];
    return '' +
      '<section class="wrap hero" data-screen-label="Home">' +
        '<div class="hero-copy">' +
          '<span class="hero-eyebrow">' + ic('desktop_windows') + esc(t.heroEyebrow) + '</span>' +
          '<h1>' + esc(t.heroTitle) + '</h1>' +
          '<p class="hero-sub">' + esc(t.heroSub) + '</p>' +
          '<div class="hero-ctas">' + map(PRODUCTS, function (p, i) {
            var c = p[lang];
            return '<a class="btn ' + (i === 0 ? 'btn-gold' : 'btn-alt') + '" href="' + pageHref[p.id] + '">' + ic(p.icon) + '<span>' + p.name + '</span><span class="for">· ' + esc(c.forWho) + '</span></a>';
          }) + '</div>' +
          '<ul class="checks">' + map(t.trust, function (x) { return '<li>' + ic('check_circle') + esc(x) + '</li>'; }) + '</ul>' +
        '</div>' +
        '<div class="hero-shot">' + windowFrame('Z Shop', t.heroShotAlt, 'screenshot · Z Shop POS screen (1600×1000)') + '</div>' +
      '</section>' +

      '<section id="products" class="wrap" style="padding-top:clamp(24px,4vw,48px);padding-bottom:clamp(56px,8vw,112px)">' +
        '<div class="sec-head"><span class="eyebrow">' + esc(t.productsEyebrow) + '</span><h2 class="h2">' + esc(t.productsTitle) + '</h2></div>' +
        '<div class="cards">' + map(PRODUCTS, function (p) {
          var c = p[lang];
          return '<article class="pcard">' +
            '<div class="pid"><div class="plogo" role="img" aria-label="' + esc(p.name + ' logo') + '">' + ic(p.icon) + '</div>' +
            '<div class="pname"><h3>' + p.name + '</h3><span>' + esc(c.kind) + '</span></div></div>' +
            '<p class="ptag">' + esc(c.tagline) + '</p>' +
            '<ul class="ticks">' + map(c.highlights, function (h) { return '<li>' + ic('check') + '<span>' + esc(h) + '</span></li>'; }) + '</ul>' +
            '<div class="pcard-ctas">' + dlLink(p, 'btn btn-gold', t.downloadFree, 20) +
              '<a class="btn btn-ghost" href="' + pageHref[p.id] + '">' + esc(t.learnMore) + ic(t.fwd) + '</a></div>' +
            '<p class="relline" data-rel="' + p.id + '" data-rel-kind="line" hidden></p>' +
          '</article>';
        }) +
        '<article class="pcard more"><span class="pill">' + esc(t.soon) + '</span><h3>' + esc(t.moreTitle) + '</h3><p>' + esc(t.moreSub) + '</p>' +
          '<a href="' + wa(t.waMore) + '" target="_blank" rel="noopener">' + esc(t.moreCta) + '</a></article>' +
        '</div>' +
      '</section>' +

      '<section class="band"><div class="wrap sec">' +
        '<div class="sec-head" style="max-width:640px;margin-bottom:36px"><span class="eyebrow">' + esc(t.whyEyebrow) + '</span><h2 class="h2">' + esc(t.whyTitle) + '</h2></div>' +
        '<div class="why-grid">' + map(t.why, function (w) {
          return '<div class="why"><span class="ibox">' + ic(w.icon) + '</span><h3>' + esc(w.t) + '</h3><p>' + esc(w.d) + '</p>' +
            (w.note ? '<span class="note">' + esc(w.note) + '</span>' : '') + '</div>';
        }) + '</div>' +
      '</div></section>' +

      '<section class="wrap sec">' +
        '<div class="sec-head" style="margin-bottom:36px"><span class="eyebrow">' + esc(t.howEyebrow) + '</span><h2 class="h2">' + esc(t.howTitle) + '</h2></div>' +
        '<ol class="steps">' + map(t.how, function (s, i) {
          return '<li><div class="top"><span class="num">' + (i + 1) + '</span>' + ic(s.icon) + '</div><h3>' + esc(s.t) + '</h3><p>' + esc(s.d) + '</p></li>';
        }) + '</ol>' +
      '</section>' +

      '<section class="wrap" style="padding-bottom:clamp(56px,8vw,112px)">' +
        '<h2 class="h2-sm" style="margin-bottom:28px">' + esc(t.testiTitle) + '</h2>' +
        '<div class="quotes">' + map(t.testiWho, function (who) {
          return '<figure><blockquote>' + esc(t.testiPh) + '</blockquote><figcaption><span class="avatar" role="img" aria-label="' + esc(t.avatarAlt) + '"></span>' +
            '<span><strong>' + esc(t.testiName) + '</strong><small>' + esc(who) + '</small></span></figcaption></figure>';
        }) + '</div>' +
      '</section>' +

      '<section class="band"><div class="wrap faq-wrap sec">' +
        '<h2 class="h2" style="margin-bottom:24px">' + esc(t.faqTitle) + '</h2>' +
        '<div class="faq">' + map(t.faq, function (f, i) {
          var open = faqOpen === i;
          return '<div><h3><button type="button" id="fq' + i + '" data-faq="' + i + '" aria-expanded="' + open + '" aria-controls="fa' + i + '"><span>' + esc(f.q) + '</span>' + ic('expand_more') + '</button></h3>' +
            '<div id="fa' + i + '" role="region" aria-labelledby="fq' + i + '"' + (open ? '' : ' hidden') + '>' + esc(f.a) + '</div></div>';
        }) + '</div>' +
      '</div></section>' +

      '<section class="wrap sec"><div class="dark-band">' +
        '<div class="txt"><h2>' + esc(t.bandTitle) + '</h2><p>' + esc(t.bandSub) + '</p></div>' +
        '<div class="acts"><a class="btn btn-wa btn-lg" href="' + wa(t.waHello) + '" target="_blank" rel="noopener">' + ic('chat', 'font-size:22px') + '<span class="ltr">01551157197</span></a>' +
        '<a class="btn btn-dark-ghost btn-lg" href="' + pageHref.contact + '">' + esc(t.otherWays) + '</a></div>' +
      '</div></section>';
  }

  function productPage(p) {
    var t = T[lang], c = p[lang];
    var docs = '<a class="link-gold" href="' + href(p.guidePdf) + '">' + ic('description') + esc(t.guidePdf) + '</a>' +
      map(p.extraDocs, function (d) { return '<a class="link-gold" href="' + href(d.href) + '">' + ic('description') + esc(d[lang]) + '</a>'; }) +
      '<a class="link-gold" href="' + relUrl(p) + '" target="_blank" rel="noopener">' + ic('new_releases') + esc(t.allVersions) + '</a>';

    var mb = '';
    if (c.mb) {
      mb = '<section id="branches" class="wrap sec-top"><div class="mb">' +
        '<div class="txt"><span class="pill">' + esc(t.addon) + '</span><h2 class="h2">' + esc(c.mb.title) + '</h2><p>' + esc(c.mb.sub) + '</p>' +
          '<ul class="ticks">' + map(c.mb.items, function (b) { return '<li>' + ic('check') + '<span>' + esc(b) + '</span></li>'; }) + '</ul>' +
          '<a class="btn btn-wa btn-lg" href="' + wa(t.waBranches) + '" target="_blank" rel="noopener">' + ic('chat', 'font-size:22px') + esc(t.contactWa) + '</a></div>' +
        '<div class="mb-diag" aria-hidden="true">' +
          '<div class="mb-row">' + map(c.mb.branches, function (b) { return '<div class="mb-node">' + ic('storefront') + esc(b) + '</div>'; }) + '</div>' +
          '<div class="mb-line"></div><div class="mb-cloud">' + ic('cloud_sync') + esc(c.mb.cloud) + '</div><div class="mb-line down"></div>' +
          '<div class="mb-node">' + ic('warehouse') + esc(c.mb.warehouse) + '</div><p class="mb-cap">' + esc(c.mb.caption) + '</p>' +
        '</div></div></section>';
    }

    return '' +
      '<section class="wrap hero product" data-screen-label="' + p.name + '">' +
        '<div class="hero-copy" style="gap:20px">' +
          '<nav class="crumbs" aria-label="' + esc(t.crumbAria) + '"><a href="' + pageHref.home + '">' + esc(t.home) + '</a><span aria-hidden="true">/</span><span class="ltr" style="color:var(--text)">' + p.name + '</span></nav>' +
          '<div class="pid"><div class="plogo lg" role="img" aria-label="' + esc(p.name + ' logo') + '">' + ic(p.icon) + '</div><div class="pname"><b>' + p.name + '</b><span>' + esc(c.kind) + '</span></div></div>' +
          '<h1>' + esc(c.tagline) + '</h1>' +
          '<p class="hero-sub">' + esc(c.desc) + '</p>' +
          '<div class="dl-block">' + dlLink(p, 'btn btn-gold btn-xl', t.dlLabel(p.name)) +
            '<div data-rel="' + p.id + '" data-rel-kind="meta"></div>' +
            '<p class="dl-note">' + esc(t.dlNote) + '</p></div>' +
          '<div class="doc-links">' + docs + '</div>' +
        '</div>' +
        '<div class="hero-shot" style="flex-basis:460px">' + windowFrame(p.name, t.heroAlt(p.name), 'screenshot · ' + p.name + ' main screen (1600×1000)') + '</div>' +
      '</section>' +

      '<section class="band"><div class="wrap" style="padding-block:clamp(56px,8vw,104px)">' +
        '<div class="sec-head"><span class="eyebrow">' + esc(t.featEyebrow) + '</span><h2 class="h2">' + esc(c.featTitle) + '</h2></div>' +
        '<div class="feat-grid">' + map(c.features, function (f) {
          return '<article class="feat"><div class="feat-h"><span class="ibox">' + ic(f.icon) + '</span><h3>' + esc(f.t) + '</h3>' +
            (f.badge ? '<span class="pill">' + esc(f.badge) + '</span>' : '') + '</div>' +
            '<ul class="dots">' + map(f.items, function (it) { return '<li><span>' + esc(it) + '</span></li>'; }) + '</ul></article>';
        }) + '</div>' +
      '</div></section>' +

      mb +

      '<section class="wrap sec-top">' +
        '<h2 class="h2-sm" style="margin-bottom:24px">' + esc(t.galleryTitle) + '</h2>' +
        '<div class="gallery" role="list">' + map(c.gallery, function (g, i) {
          return '<div role="listitem"><button type="button" data-lb="' + i + '" aria-label="' + esc(t.zoom + ': ' + g) + '"><span class="shot" style="display:grid">screenshot ' + (i + 1) + ' · 1600×1000</span></button>' +
            '<span class="cap">' + esc(g) + '</span></div>';
        }) + '</div>' +
      '</section>' +

      '<section class="wrap sec-top two-cards">' +
        '<div class="box"><h2>' + ic('desktop_windows') + esc(t.reqTitle) + '</h2><ul class="ticks">' + map(t.req, function (r) { return '<li>' + ic('check') + '<span>' + esc(r) + '</span></li>'; }) + '</ul></div>' +
        '<div class="box"><h2>' + ic('print') + esc(t.hwTitle) + '</h2><ul class="ticks">' + map(c.hardware, function (h) { return '<li>' + ic('check') + '<span>' + esc(h) + '</span></li>'; }) + '</ul></div>' +
      '</section>' +

      '<section id="first-run" class="wrap sec-top">' +
        '<div class="sec-head" style="margin-bottom:28px"><span class="eyebrow">' + esc(t.guideEyebrow) + '</span><h2 class="h2">' + esc(t.guideTitle) + '</h2></div>' +
        '<ol class="guide">' + map(t.guide, function (s, i) {
          return '<li class="' + (s.smart ? 'smart' : '') + '"><div class="row"><span class="onum">' + (i + 1) + '</span><div><h3>' + esc(s.t) + '</h3><p>' + esc(s.d) + '</p></div></div>' +
            (s.smart ? smartScreen(p) : '') + '</li>';
        }) + '</ol>' +
      '</section>' +

      '<section class="wrap" style="padding-block:clamp(56px,8vw,104px)"><div class="gold-band">' +
        '<div class="txt"><h2 class="h2-sm" style="line-height:1.3">' + esc(t.readyTitle) + '</h2><p>' + esc(t.readySub) + '</p></div>' +
        '<div class="acts">' + dlLink(p, 'btn btn-gold btn-lg', t.dlLabel(p.name), 22) +
          '<a class="btn btn-wa btn-lg" href="' + wa(t.waHello) + '" target="_blank" rel="noopener">' + ic('chat', 'font-size:22px') + esc(t.askWa) + '</a></div>' +
      '</div></section>' +

      '<div class="lb" id="lb" role="dialog" aria-modal="true" hidden></div>';
  }

  function smartScreen(p) {
    var t = T[lang];
    return '<div class="ss" role="img" aria-label="' + esc(t.ssAlt) + '">' +
      '<div class="ss-win"><span class="ss-badge">1</span><span class="ss-title">Windows protected your PC</span>' +
        '<span class="ss-body">Microsoft Defender SmartScreen prevented an unrecognized app from starting.</span>' +
        '<span class="ss-link ss-hl">More info</span><span style="height:34px"></span>' +
        '<span class="ss-btns"><span class="ss-btn">Don\'t run</span></span></div>' +
      '<div class="ss-win" style="gap:10px"><span class="ss-badge">2</span><span class="ss-title">Windows protected your PC</span>' +
        '<span class="ss-body" style="line-height:1.7">App: ' + esc(p.exe) + '<br>Publisher: Unknown publisher</span>' +
        '<span class="ss-btns"><span class="ss-btn run ss-hl">Run anyway</span><span class="ss-btn">Don\'t run</span></span></div>' +
      '</div><p class="ss-note">' + esc(t.ssArabicWin) + '</p>';
  }

  function downloadPage(p) {
    var t = T[lang];
    return '<section class="narrow" data-screen-label="Download started">' +
      '<div class="ds-head"><span class="ds-icon">' + ic('download') + '</span>' +
        '<h1 role="status">' + esc(t.dsTitle) + '</h1>' +
        '<p>' + esc(t.dsSub(p.name)) + ' <a href="' + dlUrl(p) + '">' + esc(t.dsRetry) + '</a></p>' +
        '<p class="ltr" style="font-size:14px" data-rel="' + p.id + '" data-rel-kind="line" hidden></p></div>' +
      '<div class="ds-card"><h2>' + esc(t.dsNext) + '</h2><ol class="ds-steps">' + map(t.dsSteps, function (s, i) {
        return '<li><span class="num">' + (i + 1) + '</span><div><span>' + esc(s) + '</span>' +
          (i === 1 ? '<span class="chips"><span class="a">More info</span>' + ic('arrow_forward') + '<span class="b">Run anyway</span></span>' : '') + '</div></li>';
      }) + '</ol></div>' +
      '<div class="ds-acts"><a class="btn btn-wa" href="' + wa(t.waAct(p.name)) + '" target="_blank" rel="noopener">' + ic('chat', 'font-size:22px') + esc(t.dsWa) + '</a>' +
        '<a class="btn btn-ghost" href="' + pageHref[p.id] + '">' + esc(t.backLabel(p.name)) + '</a></div>' +
      '<a class="link-gold" style="align-self:flex-start;font-size:16px" href="' + pageHref[p.id] + '#first-run">' + ic('shield') + esc(t.dsGuide) + '</a>' +
    '</section>';
  }

  function contactPage() {
    var t = T[lang];
    return '<section class="wrap contact" data-screen-label="Contact">' +
      '<div class="page-head"><h1>' + esc(t.cTitle) + '</h1><p>' + esc(t.cSub) + '</p></div>' +
      '<div class="c-grid">' +
        '<div class="c-card wa">' + ic('chat') + '<h2>' + esc(t.whatsapp) + '</h2><span class="big">01551157197</span>' +
          '<a class="btn btn-wa" href="' + wa(t.waHello) + '" target="_blank" rel="noopener">' + esc(t.sendMsg) + '</a></div>' +
        '<div class="c-card">' + ic('mail') + '<h2>' + esc(t.email) + '</h2><a class="mail" href="mailto:ahmedfahmydev55@gmail.com">ahmedfahmydev55@gmail.com</a></div>' +
        '<div class="c-card">' + ic('location_on') + '<h2>' + esc(t.location) + '</h2><span class="big">Zone 8</span></div>' +
      '</div>' +
      '<div class="act-note">' + ic('key') + '<div><h2>' + esc(t.actTitle) + '</h2><p>' + esc(t.actBody) + '</p></div></div>' +
    '</section>';
  }

  // Privacy pages keep the policy in the HTML; only the localized heading is rendered here.
  function privacyHead() {
    var t = T[lang];
    var id = PAGE === 'privacy-gym' ? 'gym' : 'shop';
    var el = document.getElementById('policy-head');
    if (!el) return;
    el.innerHTML = '<h1>' + esc(t.pTitle) + ' — <span class="ltr">' + product(id).name + '</span></h1>' +
      '<p class="meta">' + esc(t.pUpdated) + '</p>' +
      '<nav class="policy-switch" aria-label="' + esc(t.privacy) + '">' + map(PRODUCTS, function (p) {
        return '<a href="' + href(p.privacy) + '"' + (p.id === id ? ' aria-current="page"' : '') + '>' + ic(p.icon) + '<span class="ltr">' + p.name + '</span></a>';
      }) + '</nav>';
    var note = document.getElementById('policy-note');
    if (note) { note.textContent = t.pNote; note.hidden = !t.pNote; }
    var sum = document.querySelector('.ar-sum');
    if (sum) sum.style.order = lang === 'ar' ? '0' : '5';
  }

  // ---------- lightbox ----------
  function galleryCaps() { var p = product(PAGE); return p ? p[lang].gallery : []; }
  function renderLb() {
    var el = document.getElementById('lb');
    if (!el) return;
    if (lbIndex < 0) { el.hidden = true; el.innerHTML = ''; return; }
    var t = T[lang], caps = galleryCaps();
    el.setAttribute('aria-label', caps[lbIndex]);
    el.innerHTML = '<div class="lb-top"><span>' + esc(caps[lbIndex]) + ' <small>' + (lbIndex + 1) + ' / ' + caps.length + '</small></span>' +
      '<button type="button" class="lb-btn lb-x" data-act="lb-close" aria-label="' + esc(t.close) + '">' + ic('close') + '</button></div>' +
      '<div class="lb-img" data-stop>screenshot ' + (lbIndex + 1) + ' · full size</div>' +
      '<div class="lb-btns" data-stop><button type="button" class="lb-btn" data-act="lb-prev" aria-label="' + esc(t.prev) + '">' + ic(t.prevIcon) + '</button>' +
      '<button type="button" class="lb-btn" data-act="lb-next" aria-label="' + esc(t.next) + '">' + ic(t.nextIcon) + '</button></div>';
    el.hidden = false;
    var x = el.querySelector('.lb-x'); if (x) x.focus();
  }
  function lbStep(d) { var n = galleryCaps().length; lbIndex = (lbIndex + d + n) % n; renderLb(); }

  // ---------- render ----------
  function render() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('site-header').innerHTML = header();
    document.getElementById('site-footer').innerHTML = footer();
    document.getElementById('site-fab').innerHTML = fab();

    var main = document.getElementById('app');
    var p = product(PAGE);
    if (PAGE === 'home') main.innerHTML = homePage();
    else if (p) main.innerHTML = productPage(p);
    else if (PAGE === 'download') main.innerHTML = downloadPage(product(new URLSearchParams(location.search).get('app')) || PRODUCTS[0]);
    else if (PAGE === 'contact') main.innerHTML = contactPage();
    else privacyHead();

    var title = document.querySelector('meta[name="sz-title-' + lang + '"]');
    if (title) document.title = title.getAttribute('content');
    renderRelSlots();
    renderLb();
  }

  // ---------- events ----------
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act],[data-dl],[data-faq],[data-lb]') : null;
    var lb = document.getElementById('lb');
    if (lb && !lb.hidden && e.target === lb) { lbIndex = -1; renderLb(); return; }
    if (!el) return;
    if (el.hasAttribute('data-dl')) {
      // Go to the "download started" page, which starts the file itself.
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      location.href = startUrl(product(el.getAttribute('data-dl')));
      return;
    }
    if (el.hasAttribute('data-faq')) {
      var i = +el.getAttribute('data-faq');
      faqOpen = faqOpen === i ? -1 : i;
      Array.prototype.forEach.call(document.querySelectorAll('[data-faq]'), function (b) {
        var j = +b.getAttribute('data-faq'), open = j === faqOpen;
        b.setAttribute('aria-expanded', String(open));
        document.getElementById('fa' + j).hidden = !open;
      });
      return;
    }
    if (el.hasAttribute('data-lb')) { lbIndex = +el.getAttribute('data-lb'); renderLb(); return; }
    var act = el.getAttribute('data-act');
    if (act === 'lang') {
      lang = lang === 'ar' ? 'en' : 'ar';
      store.set('sz-lang', lang);
      render();
    } else if (act === 'theme') {
      var th = theme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', th);
      store.set('sz-theme', th);
      el.innerHTML = ic(th === 'dark' ? 'light_mode' : 'dark_mode');
    } else if (act === 'menu') {
      var nav = document.getElementById('nav-m');
      var open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      el.setAttribute('aria-expanded', String(open));
      el.innerHTML = ic(open ? 'close' : 'menu', 'font-size:22px');
    } else if (act === 'lb-close') { lbIndex = -1; renderLb(); }
    else if (act === 'lb-prev') lbStep(-1);
    else if (act === 'lb-next') lbStep(1);
  });

  document.addEventListener('keydown', function (e) {
    if (lbIndex < 0) return;
    var rtl = lang === 'ar';
    if (e.key === 'Escape') { lbIndex = -1; renderLb(); }
    else if (e.key === 'ArrowRight') lbStep(rtl ? -1 : 1);
    else if (e.key === 'ArrowLeft') lbStep(rtl ? 1 : -1);
  });

  // ---------- boot ----------
  render();
  // Content is drawn after load, so jump to a #section link ourselves.
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }
  var needs = PAGE === 'home' ? PRODUCTS : [product(PAGE) || (PAGE === 'download' ? product(new URLSearchParams(location.search).get('app')) || PRODUCTS[0] : null)].filter(Boolean);
  needs.forEach(loadRel);

  if (PAGE === 'download') {
    var params = new URLSearchParams(location.search);
    var dp = product(params.get('app')) || PRODUCTS[0];
    if (params.get('start') === '1') {
      // Drop the flag first so reloading or going back does not download a second copy.
      params.delete('start');
      history.replaceState(null, '', location.pathname + '?' + params.toString());
      setTimeout(function () { location.href = dlUrl(dp); }, 400);
    }
  }
})();
