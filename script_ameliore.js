// ===== Smooth Scroll عند النقر على روابط الفهرس =====
document.addEventListener("DOMContentLoaded", () => {
    // الحصول على جميع روابط الفهرس داخل aside
    const tocLinks = document.querySelectorAll("aside a[href^='#']");

    for (const link of tocLinks) {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // منع التحويل الافتراضي للرابط

            const targetId = link.getAttribute("href").substring(1); // استخراج معرف العنصر
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // حساب موضع العنصر بالنسبة للصفحة
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 20;

                // التمرير بسلاسة إلى العنصر
                window.scrollTo({
                    top: topOffset,
                    behavior: "smooth"
                });
            }
        });
    }
});

