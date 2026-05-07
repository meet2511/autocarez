// Simple scroll effect for navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.padding = '15px 10%';
    } else {
        nav.style.background = '#ffffff';
        nav.style.padding = '20px 10%';
    }
});

// Smooth Scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pricing Section Logic
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const checkboxes = document.querySelectorAll('.calc-checkbox');
    const customTotalDisplay = document.getElementById('custom-total');
    const subPriceDisplay = document.getElementById('sub-price');

    // Base prices for Subscription and Custom Spa based on vehicle type
    const pricingData = {
        hatchback: { sub: 799, base: 499 },
        sedan: { sub: 899, base: 599 },
        suv: { sub: 999, base: 699 }
    };

    let currentVehicleType = 'hatchback';

    const subBtn = document.getElementById('btn-sub');
    const customBtn = document.getElementById('btn-custom');

    // Function to calculate custom spa total
    const calculateCustomTotal = () => {
        let total = pricingData[currentVehicleType].base; // Base wash is always included
        
        checkboxes.forEach(cb => {
            if (cb.id !== 'base-wash' && cb.checked) {
                total += parseInt(cb.dataset.price);
            }
        });
        
        customTotalDisplay.textContent = total;

        // Update WhatsApp links
        if (subBtn) {
            const subMessage = `Hi, I'm interested in the Standard Shine Subscription for my ${currentVehicleType.toUpperCase()} (₹${pricingData[currentVehicleType].sub}/mo).`;
            subBtn.href = `https://wa.me/916359985970?text=${encodeURIComponent(subMessage)}`;
        }
        
        if (customBtn) {
            const customMessage = `Hi, I want to book a Custom Spa for my ${currentVehicleType.toUpperCase()}. Estimated Total: ₹${total}.`;
            customBtn.href = `https://wa.me/916359985970?text=${encodeURIComponent(customMessage)}`;
        }
    };

    // Event listeners for vehicle toggles
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');
            
            currentVehicleType = btn.dataset.type;
            
            // Update subscription price visually
            subPriceDisplay.textContent = pricingData[currentVehicleType].sub;
            
            // Recalculate custom total (base price changed)
            calculateCustomTotal();
        });
    });

    // Event listeners for checkboxes
    checkboxes.forEach(cb => {
        if(cb.id !== 'base-wash') {
            cb.addEventListener('change', calculateCustomTotal);
        }
    });

    // Initial calculation
    calculateCustomTotal();
});

// Localization & Theme Logic
const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_pricing: "Pricing",
        nav_book: "Book Now",
        hero_title: "Premium Car Spa <br><span>At Your Doorstep</span>",
        hero_sub: "Ahmedabad & Gandhinagar's Most Trusted Mobile Car Wash.",
        hero_btn1: "Our Services",
        hero_btn2: "View Plans",
        
        serv_title: "Our Services",
        serv_1_title: "Exterior Foam Wash",
        serv_1_desc: "High-pressure snow foam wash using premium shampoos for a scratch-free shine.",
        serv_2_title: "Interior Deep Clean",
        serv_2_desc: "Complete vacuuming, dashboard polishing, and upholstery cleaning.",
        serv_3_title: "Full Detailing",
        serv_3_desc: "Waxing, rubbing, and ceramic coating to make your car look brand new.",
        
        about_title: "Why Choose AutoCarez?",
        about_desc: "AutoCarez is not just a car wash; it's a <strong>Mobile Car Spa</strong> designed for the busy residents of Ahmedabad and Gandhinagar. Driven by our mobile unit, we bring professional-grade equipment right to your doorstep.",
        about_li_1: '<i class="fas fa-check-circle"></i> <strong>Save Time:</strong> No more waiting at local garages.',
        about_li_2: '<i class="fas fa-check-circle"></i> <strong>Eco-Friendly:</strong> Advanced pressure washers that save 70% more water.',
        about_li_3: '<i class="fas fa-check-circle"></i> <strong>Professional Gear:</strong> Inverter-powered setup for silent & efficient cleaning.',
        about_li_4: '<i class="fas fa-check-circle"></i> <strong>Expert Care:</strong> We treat your car like our own.',
        
        feedback_title: "Submit Your Feedback",
        fb_submit: "Submit Feedback",
        fb_success: "Thank you for your feedback!",
        
        price_title: "Our Service Plans",
        price_sub: "Select your vehicle type and plan",
        price_type1: "Hatchback",
        price_type2: "Sedan",
        price_type3: "SUV / Luxury",
        price_badge: "Subscription",
        price_plan1: "Standard Shine",
        price_mo: "/mo",
        price_li_1: "12 Exterior Washes",
        price_li_2: "Tyre Polishing",
        price_li_3: "1 Interior Cleaning",
        price_btn1: "Subscribe",
        price_plan2: "Custom Spa",
        price_sub2: "Add extra services",
        price_opt1: "Foam Wash (Incl.)",
        price_opt2: "Machine Wax (+₹300)",
        price_opt3: "AC Cleaning (+₹400)",
        price_opt4: "Engine Detailing (+₹250)",
        price_total: "Total:",
        price_btn2: "Book Now",
        
        footer_desc: "Ahmedabad's #1 Doorstep Car Spa. We bring the shine to you!",
        
        fb_name_ph: "Your Name",
        fb_loc_ph: "Your Location (e.g. Bopal)",
        fb_rev_ph: "Write your review here..."
    },
    gu: {
        nav_home: "હોમ",
        nav_services: "સેવાઓ",
        nav_about: "અમારા વિશે",
        nav_pricing: "કિંમતો",
        nav_book: "બુક કરો",
        hero_title: "પ્રીમિયમ કાર સ્પા <br><span>તમારા ઘરે</span>",
        hero_sub: "અમદાવાદ અને ગાંધીનગરનું સૌથી વિશ્વસનીય મોબાઈલ કાર વોશ.",
        hero_btn1: "અમારી સેવાઓ",
        hero_btn2: "પ્લાન જુઓ",
        
        serv_title: "અમારી સેવાઓ",
        serv_1_title: "એક્સટીરિયર ફોમ વોશ",
        serv_1_desc: "સ્ક્રેચ-ફ્રી શાઇન માટે પ્રીમિયમ શેમ્પૂનો ઉપયોગ કરીને હાઇ-પ્રેશર સ્નો ફોમ વોશ.",
        serv_2_title: "ઇન્ટિરિયર ડીપ ક્લીન",
        serv_2_desc: "સંપૂર્ણ વેક્યુમિંગ, ડેશબોર્ડ પોલિશિંગ અને અપહોલ્સ્ટરી સફાઈ.",
        serv_3_title: "ફુલ ડિટેલિંગ",
        serv_3_desc: "તમારી કારને એકદમ નવી દેખાડવા માટે વેક્સિંગ, રબિંગ અને સિરામિક કોટિંગ.",
        
        about_title: "શા માટે AutoCarez?",
        about_desc: "AutoCarez માત્ર કાર વૉશ નથી; તે અમદાવાદ અને ગાંધીનગરના વ્યસ્ત રહેવાસીઓ માટે રચાયેલ <strong>મોબાઇલ કાર સ્પા</strong> છે. અમે તમારા ઘરના આંગણે પ્રોફેશનલ સાધનો લાવીએ છીએ.",
        about_li_1: '<i class="fas fa-check-circle"></i> <strong>સમય બચાવો:</strong> હવે ગેરેજમાં રાહ જોવાની જરૂર નથી.',
        about_li_2: '<i class="fas fa-check-circle"></i> <strong>ઇકો-ફ્રેન્ડલી:</strong> 70% વધુ પાણી બચાવતા એડવાન્સ પ્રેશર વોશર.',
        about_li_3: '<i class="fas fa-check-circle"></i> <strong>પ્રોફેશનલ સાધનો:</strong> સાયલન્ટ અને કાર્યક્ષમ સફાઈ માટે ઇન્વર્ટર સંચાલિત સેટઅપ.',
        about_li_4: '<i class="fas fa-check-circle"></i> <strong>એક્સપર્ટ કેર:</strong> અમે તમારી કારની અમારી પોતાની કારની જેમ કાળજી રાખીએ છીએ.',
        
        feedback_title: "તમારો પ્રતિસાદ સબમિટ કરો",
        fb_submit: "પ્રતિસાદ સબમિટ કરો",
        fb_success: "તમારા પ્રતિસાદ બદલ આભાર!",
        
        price_title: "અમારા સર્વિસ પ્લાન",
        price_sub: "તમારો વાહન પ્રકાર અને પ્લાન પસંદ કરો",
        price_type1: "હેચબેક",
        price_type2: "સેડાન",
        price_type3: "SUV / લક્ઝરી",
        price_badge: "સબસ્ક્રિપ્શન",
        price_plan1: "સ્ટાન્ડર્ડ શાઇન",
        price_mo: "/મહિને",
        price_li_1: "12 એક્સટીરિયર વોશ",
        price_li_2: "ટાયર પોલિશિંગ",
        price_li_3: "1 ઇન્ટિરિયર ક્લિનિંગ",
        price_btn1: "સબ્સ્ક્રાઇબ કરો",
        price_plan2: "કસ્ટમ સ્પા",
        price_sub2: "વધારાની સેવાઓ ઉમેરો",
        price_opt1: "ફોમ વોશ (શામેલ છે)",
        price_opt2: "મશીન વેક્સ (+₹300)",
        price_opt3: "AC ક્લિનિંગ (+₹400)",
        price_opt4: "એન્જિન ડિટેલિંગ (+₹250)",
        price_total: "કુલ:",
        price_btn2: "બુક કરો",
        
        footer_desc: "અમદાવાદનું #1 ડોરસ્ટેપ કાર સ્પા. અમે તમારા સુધી શાઇન લાવીએ છીએ!",
        
        fb_name_ph: "તમારું નામ",
        fb_loc_ph: "તમારું લોકેશન (દા.ત. બોપલ)",
        fb_rev_ph: "તમારો રિવ્યૂ અહીં લખો..."
    }
};

let currentLang = localStorage.getItem('autocarez_lang') || 'en';

const langToggleBtn = document.getElementById('lang-toggle');
const updateLanguage = () => {
    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    // Update Placeholder Elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
    langToggleBtn.textContent = currentLang === 'en' ? 'ગુજ' : 'EN';
};

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'gu' : 'en';
    localStorage.setItem('autocarez_lang', currentLang);
    updateLanguage();
});

// Initial language setup
updateLanguage();

// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
let isDarkMode = localStorage.getItem('autocarez_theme') === 'dark';

const updateTheme = () => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
};

themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('autocarez_theme', isDarkMode ? 'dark' : 'light');
    updateTheme();
});

// Initial theme setup
updateTheme();

// Feedback Form Logic
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMsg = document.getElementById('fb-success');
        successMsg.style.display = 'block';
        feedbackForm.reset();
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    });
}
