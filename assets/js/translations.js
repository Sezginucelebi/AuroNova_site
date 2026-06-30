const defaultTranslations = {
  tr: {
    "nav_home": "Ana Sayfa",
    "nav_about": "Hakkımızda",
    "nav_projects": "Projelerimiz",
    "nav_domain": "Domain",
    "nav_hosting": "Hosting",
    "nav_contact": "İletişim",
    "btn_getstarted": "Başlayın",
    "hero_title": "Auro<span class=\"nova-text\">Nova</span> Yazılım'a Hoş Geldiniz",
    "hero_subtitle": "Projenizi hemen başlatın ve başarıya giden yolu hazırlayın",

    // Featured Services
    "feat_title_1": "Yazılım Geliştirme",
    "feat_desc_1": "İhtiyaçlarınıza özel, ölçeklenebilir ve yüksek performanslı yazılım çözümleri sunuyoruz.",
    "feat_title_2": "Domain ve Hosting",
    "feat_desc_2": "Projeniz için en uygun alan adını bulun ve yüksek hızlı sunucularımızda barındırın.",
    "feat_title_3": "Dijital Strateji",
    "feat_desc_3": "Yaratıcı stratejilerle markanızın dijital dünyadaki potansiyelini açığa çıkarın.",
    "feat_title_4": "Mobil Çözümler",
    "feat_desc_4": "Kullanıcı deneyimi odaklı mobil uygulamalarla her an müşterilerinizin yanında olun.",
    "feat_title_5": "Bulut Altyapı",
    "feat_desc_5": "Güçlü ve güvenli bulut sistemleriyle işinizi her yerden yönetme özgürlüğü.",
    "feat_title_6": "Siber Güvenlik",
    "feat_desc_6": "Verilerinizi ve dijital varlıklarınızı en üst düzey güvenlik protokolleri ile koruyoruz.",

    // About Section
    "about_who": "Biz Kimiz?",
    "about_title": "Yaratıcı Stratejilerle Potansiyelinizi Açığa Çıkarıyoruz",
    "about_italic": "AuroNova Yazılım olarak, teknoloji ve yaratıcılığı birleştirerek dijital dünyada fark yaratmanızı sağlıyoruz.",
    "about_li_1": "Kullanıcı odaklı modern arayüz tasarımları ve güçlü altyapılar.",
    "about_li_2": "Kesintisiz destek ve güvenilir teknoloji ortaklığı.",
    "about_li_3": "Küresel standartlarda yazılım geliştirme süreçleri ve inovatif yaklaşımlar.",
    "about_readmore": "Daha Fazla Bilgi",

    // Features Section
    "features_title": "Özellikler",
    "features_subtitle": "Teknolojide mükemmelliği hedefleyen çözümlerimizle tanışın.",
    "features_tab_1_title": "Hızlı ve Güvenilir",
    "features_tab_1_desc": "Projelerinizde hız ve güvenlikten ödün vermeden en iyi performansı sağlıyoruz.",
    "features_tab_2_title": "Ölçeklenebilir Yapı",
    "features_tab_2_desc": "Büyüyen işinizle birlikte esneyebilen ve gelişebilen modern mimariler sunuyoruz.",
    "features_tab_3_title": "7/24 Destek",
    "features_tab_3_desc": "Her türlü teknik sorunuzda uzman ekibimizle yanınızdayız.",

    "feat_detail_1_title": "Yazılımda Verimlilik ve Performans",
    "feat_detail_1_desc": "Geliştirdiğimiz çözümlerde en yüksek performansı ve verimliliği hedefliyoruz. İş süreçlerinizi hızlandıran akıllı sistemlerle zaman ve maliyet tasarrufu sağlayın.",
    "feat_detail_2_title": "Modern Teknoloji ve Geleceğin Vizyonu",
    "feat_detail_2_desc": "En güncel teknolojileri kullanarak projelerinizi geleceğe hazırlıyoruz. Güçlü altyapı ve yenilikçi tasarım anlayışımızla markanızı dijitalde bir adım öne taşıyoruz.",
    "feat_detail_li_1": "Yüksek performanslı kod yapısı ve temiz mimari.",
    "feat_detail_li_2": "Kullanıcı deneyimi odaklı arayüz tasarımları.",
    "feat_detail_li_3": "Esnek ve ölçeklenebilir teknoloji çözümleri.",

    "more_features_title": "İşinizi Geleceğe Taşıyacak Güçlü Özellikler",
    "more_features_desc": "AuroNova ile dijital dönüşüm yolculuğunuzda ihtiyacınız olan tüm araçlara tek bir noktadan erişin.",

    // Services Section
    "services_title": "Hizmetlerimiz",
    "services_subtitle": "Markanızı geleceğe taşıyacak geniş hizmet yelpazemiz.",
    "services_1_title": "Web Tasarım",
    "services_1_desc": "Modern ve etkileyici web siteleri ile dijital kimliğinizi oluşturun.",
    "services_1_full": "Profesyonel web tasarım hizmetimizle, markanızın karakterini yansıtan, kullanıcı dostu ve tüm cihazlarla uyumlu (responsive) web siteleri geliştiriyoruz. SEO uyumlu altyapımızla dijital dünyada fark edilmenizi sağlıyoruz.",
    "services_2_title": "Mobil Uygulama",
    "services_2_desc": "iOS ve Android platformlarında kullanıcı dostu mobil çözümler.",
    "services_2_full": "Fikirlerinizi taşınabilir teknolojilere dönüştürüyoruz. iOS ve Android için geliştirdiğimiz yüksek performanslı native ve hybrid uygulamalarla, müşterilerinizin size her an her yerden ulaşmasını sağlıyoruz.",
    "services_3_title": "Cloud Çözümleri",
    "services_3_desc": "Bulut tabanlı altyapılarla verilerinizi güvenle saklayın ve yönetin.",
    "services_3_full": "İşletmenizin ihtiyacı olan esnekliği bulut teknolojileriyle sağlıyoruz. Veri depolama, sunucu yönetimi ve ölçeklenebilir altyapı hizmetlerimizle maliyetlerinizi düşürüp verimliliğinizi artırıyoruz.",
    "services_4_title": "SEO & Pazarlama",
    "services_4_desc": "Arama motorlarında üst sıralara çıkın ve hedef kitlenize ulaşın.",
    "services_4_full": "Arama motoru optimizasyonu (SEO) ve dijital pazarlama stratejilerimizle markanızın görünürlüğünü artırıyoruz. Doğru hedef kitleye, doğru zamanda ve en etkili kanallar üzerinden ulaşmanızı sağlıyoruz.",
    "services_5_title": "E-Ticaret",
    "services_5_desc": "Satışlarınızı artıracak güçlü ve güvenli e-ticaret platformları.",
    "services_5_full": "Güvenli ödeme sistemleri ve kullanıcı dostu arayüzlerle donatılmış e-ticaret platformları kuruyoruz. Stok yönetimi, sipariş takibi ve detaylı raporlama özellikleriyle satış süreçlerinizi kolaylaştırıyoruz.",
    "services_6_title": "Siber Güvenlik",
    "services_6_desc": "Dijital varlıklarınızı en güncel güvenlik protokolleri ile koruyun.",
    "services_6_full": "Dijital dünyadaki tehditlere karşı işletmenizi koruyoruz. Güvenlik duvarları, sızma testleri ve veri şifreleme yöntemlerimizle en değerli varlığınız olan bilginin güvenliğini sağlıyoruz.",
    "services_readmore": "Detaylı Bilgi",

    // Projects Section
    "projects_title": "Projelerimiz",
    "projects_subtitle": "Yakında projelerimizi sizler ile paylaşacağız.",
    "projects_soon": "Yakında projelerimizi sizler ile paylaşacağız.",
    "project_1_title": "Proje 1",
    "project_1_desc": "Proje açıklaması buraya gelecek.",
    "project_2_title": "Proje 2",
    "project_2_desc": "Proje açıklaması buraya gelecek.",
    "project_3_title": "Proje 3",
    "project_3_desc": "Proje açıklaması buraya gelecek.",
    "project_4_title": "Proje 4",
    "project_4_desc": "Proje açıklaması buraya gelecek.",

    // Pricing Section
    "pricing_title": "Fiyatlandırma",
    "pricing_subtitle": "Her bütçeye uygun profesyonel çözümler.",
    "plan_free": "Ücretsiz Plan",
    "plan_business": "İş Planı",
    "plan_developer": "Geliştirici Planı",
    "plan_popular": "Popüler",
    "plan_month": "aylık",
    "plan_trial": "Denemeye Başla",
    "plan_no_card": "Kredi kartı gerekmez",

    // FAQ Section
    "faq_title": "Sıkça Sorulan Sorular",
    "faq_q1": "Hizmetleriniz için ne kadar sürede teslimat yapıyorsunuz?",
    "faq_a1": "Projeninin kapsamına göre süreler değişiklik göstermektedir, ancak standart web projelerini genellikle 2-4 hafta içinde teslim ediyoruz.",
    "faq_q2": "Teknik destek hizmetiniz var mı?",
    "faq_a2": "Evet, tüm projelerimiz için 7/24 kesintisiz teknik destek sağlıyoruz.",
    "faq_q3": "Ödeme seçenekleriniz nelerdir?",
    "faq_a3": "Kredi kartı, banka havalesi ve EFT gibi güvenli ödeme yöntemlerini kabul ediyoruz.",
    "faq_q4": "Domain ve hosting hizmetlerini ayrı ayrı alabilir miyim?",
    "faq_a4": "Evet, ihtiyacınıza göre sadece domain tescili yapabilir veya mevcut domaininiz için hosting paketlerimizden birini seçebilirsiniz.",
    "faq_q5": "Web sitem mobil uyumlu olacak mı?",
    "faq_a5": "Kesinlikle. Tüm projelerimiz en güncel 'Responsive' teknolojisiyle, akıllı telefon ve tabletlerle %100 uyumlu olarak geliştirilir.",
    "faq_q6": "Projelerimde revizyon hakkım var mı?",
    "faq_a6": "Müşteri memnuniyeti bizim için önceliklidir. Tasarım ve geliştirme aşamalarında belirlediğimiz limitler dahilinde revizyon imkanı sunuyoruz.",

    // Testimonials
    "testimonials_title": "Müşteri Yorumları",
    "testimonials_subtitle": "AuroNova ile çalışan mutlu müşterilerimizin deneyimleri.",

    // Contact Section
    "contact_title": "İletişim Formu",
    "contact_subtitle": "Mesajınızı bize iletiniz.",
    "contact_address_title": "Adres",
    "contact_address": "İstanbul, Türkiye",
    "contact_call_title": "Bizi Arayın",
    "contact_email_title": "E-posta",
    "contact_product_label": "Ürün (*)",
    "contact_help_label": "Neye ihtiyacınız var? (*)",
    "contact_desc_label": "Sorununuzu açıklayın (*)",
    "contact_file_label": "Dosya yükle (PDF, JPG, PNG - Maks 5MB)",
    "contact_name_label": "Adınız (*)",
    "contact_email_label": "E-posta (*)",
    "contact_lang_label": "Dil",
    "contact_name_placeholder": "Adınız",
    "contact_surname_placeholder": "Soyadınız",
    "contact_phone_placeholder": "İletişim Numaranız",
    "contact_email_placeholder": "E-postanız",
    "contact_subject_placeholder": "Konu",
    "contact_message_placeholder": "Mesajınız",
    "contact_send": "Mesajı Gönder",
    "contact_loading": "Yükleniyor",
    "contact_sent_title": "Tebrikler!",
    "contact_sent": "Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.",

    // Domain Specific
    "domain_title": "Domain Sorgulama",
    "domain_hero_title": "Hayalinizdeki Alan Adını Bulun",
    "domain_hero_subtitle": "Auro<span class=\"nova-text\">Nova</span> ile projeniz için en uygun domaini saniyeler içinde sorgulayın ve kaydedin.",
    "domain_search_placeholder": "domainadiniz.com",
    "domain_search_btn": "Sorgula",
    "domain_available": "müsait!",
    "domain_available_short": "Müsait",
    "domain_available_desc": "Bu alan adını hemen kaydedebilirsiniz.",
    "domain_add_to_cart": "Sepete Ekle",
    "domain_suggestions": "Önerilen Alternatifler",

    // Hosting Specific
    "hosting_title": "Hosting Paketleri",
    "hosting_hero_title": "Size En Uygun Paketi Seçin",
    "hosting_hero_subtitle": "Hızlı, güvenli ve ölçeklenebilir hosting çözümleriyle web sitenizi Auro<span class=\"nova-text\">Nova</span> güvencesiyle yayınlayın.",
    "hosting_basic": "Başlangıç Paketi",
    "hosting_pro": "Profesyonel Paket",
    "hosting_ent": "Kurumsal Paket",
    "hosting_buy": "Hemen Al",
    "hosting_free_domain": "Ücretsiz Domain",
    "hosting_basic_f1": "1 Web Sitesi",
    "hosting_basic_f2": "5 GB SSD Disk",
    "hosting_basic_f3": "Sınırsız Trafik",
    "hosting_pro_f1": "10 Web Sitesi",
    "hosting_pro_f2": "20 GB SSD Disk",
    "hosting_pro_f3": "Sınırsız Trafik",
    "hosting_ent_f1": "Sınırsız Web Sitesi",
    "hosting_ent_f2": "50 GB SSD Disk",
    "hosting_ent_f3": "Sınırsız Trafik",

    // Auth Modal
    "auth_login_tab": "Giriş Yap",
    "auth_register_tab": "Kayıt Ol",
    "auth_email_code_label": "E-posta veya Müşteri Kodu",
    "auth_password_label": "Şifre",
    "auth_first_name_placeholder": "Ad",
    "auth_last_name_placeholder": "Soyad",
    "auth_kvkk_label": "KVKK Aydınlatma Metni'ni kabul ediyorum.",
    "auth_verify_title": "Doğrulama Gerekli",
    "auth_verify_desc": "E-postanıza gönderilen kodu girin.",
    "auth_success_title": "Kayıt Başarılı!",
    "auth_customer_code_label": "Müşteri Kodunuz:",
    "auth_continue_btn": "Devam Et",

    // Cart & Footer
    "cart_title": "Sepetiniz",
    "cart_subtotal": "Ara Toplam",
    "cart_tax": "KDV (%20)",
    "cart_total": "Toplam",
    "cart_checkout": "Ödemeye Geç",
    "cart_continue": "Alışverişe Devam Et",
    "footer_useful_links": "Faydalı Bağlantılar",
    "footer_our_services": "Hizmetlerimiz",
    "footer_newsletter": "Bültenimize Katılın",
    "footer_newsletter_desc": "En yeni haberler ve kampanyalar için abone olun.",
    "footer_subscribe": "Abone Ol",
    "brand_software": "Yazılım",
    "footer_rights": "Tüm Hakları Saklıdır",
    "plan_year": "yıl",
    "terms_service": "Kullanım Şartları",
    "privacy_policy": "Gizlilik Politikası",
    "service_details_title": "Hizmet Detayları",
    "services_list_title": "Hizmet Listesi",
    "download_catalog": "Kataloğu İndir",
    "have_question": "Bir Sorunuz mu Var?",
    "starter_page_title": "Başlangıç Sayfası",
    "starter_section_title": "Başlangıç Bölümü",
    "starter_section_desc": "Bu sayfayı kendi özel sayfalarınız için bir başlangıç olarak kullanın.",
    "nav_login": "Üye Girişi",
    "nav_profile": "Hesabım",
    "nav_logout": "Çıkış Yap",
    "contact_us": "Bizimle İletişime Geçin"
  },
  en: {
    "nav_home": "Home",
    "nav_about": "About Us",
    "nav_projects": "Our Projects",
    "nav_domain": "Domain",
    "nav_hosting": "Hosting",
    "nav_contact": "Contact",
    "btn_getstarted": "Get Started",
    "hero_title": "Welcome to Auro<span class=\"nova-text\">Nova</span> Software",
    "hero_subtitle": "Quickly start your project now and set the stage for success",

    // Featured Services
    "feat_title_1": "Software Development",
    "feat_desc_1": "We offer scalable and high-performance software solutions tailored to your needs.",
    "feat_title_2": "Domain and Hosting",
    "feat_desc_2": "Find the best domain for your project and host it on our high-speed servers.",
    "feat_title_3": "Digital Strategy",
    "feat_desc_3": "Unleash your brand's potential in the digital world with creative strategies.",
    "feat_title_4": "Mobile Solutions",
    "feat_desc_4": "Be with your customers at every moment with user experience-oriented mobile applications.",
    "feat_title_5": "Cloud Infrastructure",
    "feat_desc_5": "Freedom to manage your business from anywhere with powerful and secure cloud systems.",
    "feat_title_6": "Cyber Security",
    "feat_desc_6": "We protect your data and digital assets with top-level security protocols.",

    // About Section
    "about_who": "Who We Are?",
    "about_title": "Unleashing Potential with Creative Strategy",
    "about_italic": "As AuroNova Software, we combine technology and creativity to make you stand out in the digital world.",
    "about_li_1": "User-oriented modern interface designs and strong infrastructures.",
    "about_li_2": "Uninterrupted support and reliable technology partnership.",
    "about_li_3": "Global standard software development processes and innovative approaches.",
    "about_readmore": "Read More",

    // Features Section
    "features_title": "Features",
    "features_subtitle": "Meet our solutions that aim for excellence in technology.",
    "features_tab_1_title": "Fast and Reliable",
    "features_tab_1_desc": "We provide the best performance in your projects without compromising on speed and security.",
    "features_tab_2_title": "Scalable Structure",
    "features_tab_2_desc": "We offer modern architectures that can flex and grow with your business.",
    "features_tab_3_title": "24/7 Support",
    "features_tab_3_desc": "We are by your side for any technical questions with our expert team.",

    "feat_detail_1_title": "Efficiency and Performance",
    "feat_detail_1_desc": "We aim for maximum performance and efficiency in our solutions. Save time and cost with smart systems that speed up your business processes.",
    "feat_detail_2_title": "Modern Technology and Future Vision",
    "feat_detail_2_desc": "We prepare your projects for the future using the latest technologies. We carry your brand one step forward with our strong infrastructure and innovative design.",
    "feat_detail_li_1": "High-performance code structure and clean architecture.",
    "feat_detail_li_2": "User experience-oriented interface designs.",
    "feat_detail_li_3": "Flexible and scalable technology solutions.",

    "more_features_title": "Powerful Features to Carry Your Business into the Future",
    "more_features_desc": "Access all the tools you need for your digital transformation journey with AuroNova from a single point.",

    // Services Section
    "services_title": "Services",
    "services_subtitle": "Our wide range of services that will carry your brand to the future.",
    "services_1_title": "Web Design",
    "services_1_desc": "Build your digital identity with modern and impressive websites.",
    "services_1_full": "With our professional web design service, we develop user-friendly, responsive websites that reflect your brand's character. We make you stand out in the digital world with our SEO-compatible infrastructure.",
    "services_2_title": "Mobile App",
    "services_2_desc": "User-friendly mobile solutions on iOS and Android platforms.",
    "services_2_full": "We transform your ideas into portable technologies. With high-performance native and hybrid applications for iOS and Android, we ensure your customers can reach you anytime, anywhere.",
    "services_3_title": "Cloud Solutions",
    "services_3_desc": "Safely store and manage your data with cloud-based infrastructures.",
    "services_3_full": "We provide the flexibility your business needs with cloud technologies. We increase your efficiency and reduce costs with our data storage, server management, and scalable infrastructure services.",
    "services_4_title": "SEO & Marketing",
    "services_4_desc": "Rank higher in search engines and reach your target audience.",
    "services_4_full": "We increase your brand visibility with our SEO and digital marketing strategies. We ensure you reach the right audience at the right time through the most effective channels.",
    "services_5_title": "E-Commerce",
    "services_5_desc": "Powerful and secure e-commerce platforms that will increase your sales.",
    "services_5_full": "We set up e-commerce platforms equipped with secure payment systems and user-friendly interfaces. We simplify your sales processes with stock management, order tracking, and detailed reporting features.",
    "services_6_title": "Cyber Security",
    "services_6_desc": "Protect your digital assets with the latest security protocols.",
    "services_6_full": "We protect your business against digital threats. We ensure the security of your information with firewalls, penetration tests, and data encryption methods.",
    "services_readmore": "Learn More",

    // Projects Section
    "projects_title": "Our Projects",
    "projects_subtitle": "We will share our projects with you soon.",
    "projects_soon": "We will share our projects with you soon.",
    "project_1_title": "Corporate ERP System",
    "project_1_desc": "Customized resource planning solution for large-scale companies.",
    "project_2_title": "Mobile E-Commerce App",
    "project_2_desc": "Fast, secure, and user-friendly mobile shopping experience.",
    "project_3_title": "AI-Powered Analytics",
    "project_3_desc": "Smart analysis engine for data-driven decision-making processes.",
    "project_4_title": "Cyber Security Audit Panel",
    "project_4_desc": "Comprehensive panel for real-time monitoring and protection of your digital assets.",

    // Pricing Section
    "pricing_title": "Pricing",
    "pricing_subtitle": "Professional solutions for every budget.",
    "plan_free": "Free Plan",
    "plan_business": "Business Plan",
    "plan_developer": "Developer Plan",
    "plan_popular": "Popular",
    "plan_month": "per month",
    "plan_trial": "Start Free Trial",
    "plan_no_card": "No credit card required",

    // FAQ Section
    "faq_title": "Frequently Asked Questions",
    "faq_q1": "How long does it take for you to deliver your services?",
    "faq_a1": "Durations vary depending on the scope of the project, but we usually deliver standard web projects within 2-4 weeks.",
    "faq_q2": "Do you have technical support service?",
    "faq_a2": "Yes, we provide 24/7 uninterrupted technical support for all our projects.",
    "faq_q3": "What are your payment options?",
    "faq_a3": "We accept secure payment methods such as credit cards, bank transfers, and EFT.",
    "faq_q4": "Can I purchase domain and hosting services separately?",
    "faq_a4": "Yes, you can either just register a domain or choose one of our hosting packages for your existing domain.",
    "faq_q5": "Will my website be mobile-friendly?",
    "faq_a5": "Absolutely. All our projects are developed using the latest 'Responsive' technology, ensuring 100% compatibility with smartphones and tablets.",
    "faq_q6": "Do I have a right to revisions on my projects?",
    "faq_a6": "Customer satisfaction is our priority. We offer revision possibilities within the limits we set during the design and development phases.",

    // Testimonials
    "testimonials_title": "Testimonials",
    "testimonials_subtitle": "Experiences of our happy customers working with AuroNova.",

    // Contact Section
    "contact_title": "Contact Form",
    "contact_subtitle": "Please send us your message.",
    "contact_address_title": "Address",
    "contact_address": "Istanbul, Turkey",
    "contact_call_title": "Call Us",
    "contact_email_title": "Email Us",
    "contact_product_label": "Product (*)",
    "contact_help_label": "What do you need help with? (*)",
    "contact_desc_label": "Describe your issue (*)",
    "contact_file_label": "Upload file (PDF, JPG, PNG - Max 5MB)",
    "contact_name_label": "Your Name (*)",
    "contact_email_label": "Email (*)",
    "contact_lang_label": "Language",
    "contact_name_placeholder": "Your Name",
    "contact_surname_placeholder": "Last Name",
    "contact_phone_placeholder": "Contact Number",
    "contact_email_placeholder": "Your Email",
    "contact_subject_placeholder": "Subject",
    "contact_message_placeholder": "Message",
    "contact_send": "Send Inquiry",
    "contact_loading": "Loading",
    "contact_sent_title": "Success!",
    "contact_sent": "Your message has been sent successfully. We will get back to you as soon as possible.",

    // Domain Specific
    "domain_title": "Domain Search",
    "domain_hero_title": "Find Your Dream Domain",
    "domain_hero_subtitle": "Search and register the most suitable domain for your project in seconds with Auro<span class=\"nova-text\">Nova</span>.",
    "domain_search_placeholder": "yourdomain.com",
    "domain_search_btn": "Search",
    "domain_available": "is available!",
    "domain_available_short": "Available",
    "domain_available_desc": "You can register this domain name now.",
    "domain_add_to_cart": "Add to Cart",
    "domain_suggestions": "Suggested Alternatives",

    // Hosting Specific
    "hosting_title": "Hosting Plans",
    "hosting_hero_title": "Choose the Best Plan for You",
    "hosting_hero_subtitle": "Launch your website with Auro<span class=\"nova-text\">Nova</span>'s fast, secure, and scalable hosting solutions.",
    "hosting_basic": "Basic Plan",
    "hosting_pro": "Professional Plan",
    "hosting_ent": "Enterprise Plan",
    "hosting_buy": "Buy Now",
    "hosting_free_domain": "Free Domain",
    "hosting_basic_f1": "1 Website",
    "hosting_basic_f2": "5 GB SSD Disk",
    "hosting_basic_f3": "Unlimited Traffic",
    "hosting_pro_f1": "10 Websites",
    "hosting_pro_f2": "20 GB SSD Disk",
    "hosting_pro_f3": "Unlimited Traffic",
    "hosting_ent_f1": "Unlimited Websites",
    "hosting_ent_f2": "50 GB SSD Disk",
    "hosting_ent_f3": "Unlimited Traffic",

    // Auth Modal
    "auth_login_tab": "Login",
    "auth_register_tab": "Register",
    "auth_email_code_label": "Email or Customer Code",
    "auth_password_label": "Password",
    "auth_first_name_placeholder": "First Name",
    "auth_last_name_placeholder": "Last Name",
    "auth_kvkk_label": "I accept the KVKK Clarification Text.",
    "auth_verify_title": "Verification Required",
    "auth_verify_desc": "Enter the code sent to your email.",
    "auth_success_title": "Registration Successful!",
    "auth_customer_code_label": "Your Customer Code:",
    "auth_continue_btn": "Continue",

    // Cart & Footer
    "cart_title": "Your Cart",
    "cart_subtotal": "Subtotal",
    "cart_tax": "VAT (%20)",
    "cart_total": "Total",
    "cart_checkout": "Checkout",
    "cart_continue": "Continue Shopping",
    "footer_useful_links": "Useful Links",
    "footer_our_services": "Our Services",
    "footer_newsletter": "Our Newsletter",
    "footer_newsletter_desc": "Subscribe for the latest news and campaigns.",
    "footer_subscribe": "Subscribe",
    "brand_software": "Software",
    "footer_rights": "All Rights Reserved",
    "plan_year": "year",
    "terms_service": "Terms of Service",
    "privacy_policy": "Privacy Policy",
    "service_details_title": "Service Details",
    "services_list_title": "Services List",
    "download_catalog": "Download Catalog",
    "have_question": "Have a Question?",
    "starter_page_title": "Starter Page",
    "starter_section_title": "Starter Section",
    "starter_section_desc": "Use this page as a starter for your own custom pages.",
    "nav_login": "Login",
    "nav_profile": "My Account",
    "nav_logout": "Logout",
    "contact_us": "Contact Us"
  }
};

let translations = JSON.parse(JSON.stringify(defaultTranslations));

function loadOverrides() {
  const savedOverrides = localStorage.getItem('translationOverrides');
  if (savedOverrides) {
    const overrides = JSON.parse(savedOverrides);
    Object.keys(overrides).forEach(lang => {
      if (translations[lang]) {
        Object.assign(translations[lang], overrides[lang]);
      }
    });
  }

  const savedPrices = localStorage.getItem('priceConfig');
  if (savedPrices) {
    const prices = JSON.parse(savedPrices);
  }
}

let usdExchangeRate = 34.25;

async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    if (data && data.rates && data.rates.TRY) {
      usdExchangeRate = data.rates.TRY;
    }
  } catch (error) {
    console.warn("Could not fetch real-time rate, using fallback:", usdExchangeRate);
  }
}

function updatePrices(lang) {
  const savedPrices = localStorage.getItem('priceConfig');
  const priceMap = savedPrices ? JSON.parse(savedPrices) : {};

  document.querySelectorAll('.price-tag').forEach(element => {
    const adminId = element.getAttribute('data-admin-id');
    if (adminId && priceMap[adminId]) {
      element.setAttribute('data-price-try', priceMap[adminId]);
    }

    const priceTry = parseFloat(element.getAttribute('data-price-try'));
    if (!isNaN(priceTry)) {
      if (lang === 'en') {
        const priceUsd = (priceTry / usdExchangeRate).toFixed(2);
        element.textContent = '$' + priceUsd;
      } else {
        element.textContent = '₺' + priceTry;
      }
    }
  });
}

async function setLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  loadOverrides();

  if (lang === 'en') {
    await fetchExchangeRate();
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', translations[lang][key]);
      } else if (element.tagName === 'SELECT') {
          // Select placeholder not easily translatable via attribute, handled by options or label
      } else if (translations[lang][key].includes('<')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  updatePrices(lang);

  document.querySelectorAll('.lang-switcher a').forEach(btn => {
    if (btn.innerText.toLowerCase() === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'tr';
  loadOverrides();
  setLanguage(savedLang);

  document.querySelectorAll('.lang-switcher a').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.innerText.toLowerCase();
      setLanguage(lang);
    });
  });

  const cartContainer = document.querySelector('.cart-items');
  if (cartContainer) {
    cartContainer.addEventListener('click', (e) => {
      if (e.target.closest('.text-danger')) {
        const cartItem = e.target.closest('.cart-item');
        if (cartItem) {
          cartItem.remove();
          updateCartTotals();
        }
      }
    });
  }

  function updateCartTotals() {
    let subtotal = 0;
    const items = document.querySelectorAll('.cart-item');
    items.forEach(priceEl => {
      const priceText = priceEl.querySelector('.cart-item-price').innerText;
      const priceValue = parseFloat(priceText.replace(/[^\d.-]/g, ''));
      if (!isNaN(priceValue)) subtotal += priceValue;
    });

    const tax = subtotal * 0.20;
    const total = subtotal + tax;

    const subtotalEl = document.querySelector('[data-i18n="cart_subtotal"]')?.nextElementSibling;
    const taxEl = document.querySelector('[data-i18n="cart_tax"]')?.nextElementSibling;
    const totalEl = document.querySelector('[data-i18n="cart_total"]')?.nextElementSibling;
    const badgeEl = document.querySelector('.cart-badge');

    const lang = localStorage.getItem('preferredLang') || 'tr';
    const symbol = lang === 'en' ? '$' : '₺';

    if (subtotalEl) subtotalEl.innerText = symbol + subtotal.toFixed(2);
    if (taxEl) taxEl.innerText = symbol + tax.toFixed(2);
    if (totalEl) totalEl.innerText = symbol + total.toFixed(2);
    if (badgeEl) badgeEl.innerText = items.length;
  }
});
