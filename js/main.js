(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

const translations = {
    en: {
        navigation: "Navigation",
        home: "Home",
        about: "About Me",
        experience: "Experience",
        service: "Service",
        portfolio: "Portfolio",
        contact: "Contact",
        intro: "I'm",
        roles: "Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer, IT Support",
        resume: "Resume",
        hire: "Hire Me",
        about_text: "A Information Systems student at Bina Sarana Informatika University with 2 years of experience in the IT field. Skilled in website development, management applications, and office equipment maintenance. Passionate about developing technological solutions to enhance business efficiency.",
        changeLanguage: "Change Language",
        desk_exper1: "- Managed and prepared documents for incoming and outgoing vehicles.<br>- Inspected and sorted wood based on quality standards.<br>- Assisted in collecting and disposing of wood waste.",
        experience: "My Experience",
        desk_education1: "Computer and Network Engineering | Average Score: 83.73",
        desk_education2: "Bachelor’s Degree in Information Systems | Currently in Semester 5",
        desk_exper2: "- Conducted sales and rental of costumes, ensuring customer satisfaction.<br>- Managed costume inventory, including monitoring availability and product condition.",
        desk_exper3: "- Developed and maintained company websites (kaizen.co.id, sewaalphard.com, sewamobil.com).<br>- Designed and managed admin systems and employee attendance systems.<br>- Performed maintenance and repairs on office equipment.",
        desk_exper4: "- Produced electrical equipment such as light switches and lamps.<br>- Ensured product quality through routine checks.<br>- Achieved and maintained daily production targets.",
        service0 : "What can I do.??",
        service1 : "Skilled in building responsive websites using JavaScript, PHP, Laravel, and Node.js.",
        service2 : "Experienced in maintaining and repairing office equipment to ensure smooth operations.",
        service3 : "Developed IoT-based solutions, including voice-controlled smart power outlets.",
        service4 : "Proficient in creating designs using Canva, Adobe Photoshop, and PicCollage.",
        review1 : "'Fauzi is a highly dedicated IT professional. During his time at PT Kaizen Indotama Sinergi, he successfully developed and maintained various company websites and employee attendance systems that significantly improved operational efficiency.'",
        review2 : "Fauzi has exceptional skills in web development and management systems. Additionally, he has successfully designed IoT-based solutions such as the Smart Power Outlet, which is highly innovative and practical.",
        review3 : "As a young entrepreneur, Fauzi has successfully managed a local internet business and an online gaming tournament platform. He has strong leadership skills and the ability to adapt quickly to various situations." 
    
    },
    id: {
        navigation: "Navigasi",
        home: "Beranda",
        about: "Tentang Saya",
        experience: "Pengalaman",
        service: "Layanan",
        portfolio: "Portofolio",
        contact: "Kontak",
        intro: "Saya",
        roles: "Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer, IT Support",
        resume: "Unduh CV",
        hire: "Rekrut Saya",
        about_text: "Mahasiswa Sistem Informasi di Universitas Bina Sarana Informatika dengan pengalaman 2 tahun di bidang IT. Berpengalaman dalam pengembangan website, aplikasi manajemen, dan perawatan perangkat kantor. Memiliki minat besar dalam mengembangkan solusi teknologi untuk meningkatkan efisiensi bisnis.",
        changeLanguage: "Ganti Bahasa",
        desk_exper1: "- ✔ Mengelola dan menyiapkan surat serta dokumen kendaraan yang masuk dan keluar.<br>- ✔ Memeriksa dan menyortir kayu berdasarkan standar kualitas.<br>- ✔ Membantu pengumpulan dan pembuangan limbah kayu.",
        experience: "Pengalaman Saya",
        desk_education1: "Teknik Komputer dan Jaringan | Nilai Rata-Rata: 83.73",
        desk_education2: "S1 Sistem Informasi | Sedang menempuh Semester 5",
        desk_exper2: "- ✔ Melakukan penjualan dan penyewaan kostum, memastikan kepuasan pelanggan melalui pelayanan yang optimal.<br>- ✔ Mengelola inventaris kostum, termasuk pemantauan ketersediaan dan kondisi produk.",
        desk_exper3: "- ✔ Mengembangkan dan memelihara website perusahaan, termasuk kaizen.co.id, sewaalphard.com, dan sewamobil.com.<br>- ✔ Merancang dan mengelola sistem admin serta sistem absensi karyawan untuk meningkatkan efisiensi operasional.<br>- ✔ Melakukan pemeliharaan dan perbaikan perangkat kantor, memastikan kelancaran operasional harian.",
        desk_exper4: "- ✔ Memproduksi alat kelistrikan seperti saklar lampu dan lampu sesuai spesifikasi yang ditetapkan.<br>- ✔ Memastikan kualitas produk melalui pengecekan rutin selama proses produksi.<br>- ✔ Mencapai dan menjaga target produksi harian secara konsisten.",
        service0 : "Apa yang bisa saya kerjakan.??",
        service1 : "Terampil dalam membangun situs web responsif menggunakan JavaScript, PHP, Laravel, dan Node.js.",
        service2 : "Berpengalaman dalam merawat dan memperbaiki peralatan kantor untuk menjamin kelancaran operasional.",
        service3 : "Mengembangkan solusi berbasis IoT, termasuk outlet listrik pintar yang dikontrol suara.",
        service4 : "Mahir membuat desain menggunakan Canva, Adobe Photoshop, dan PicCollage.",    
        review1 : "Fauzi adalah seorang profesional IT yang berdedikasi tinggi. Selama berada di PT Kaizen Indotama Sinergi, beliau berhasil mengembangkan dan memelihara berbagai perusahaan situs web dan sistem kehadiran karyawan yang meningkatkan operasional secara signifikan efisiensi.",
        review2 : "Fauzi memiliki keterampilan luar biasa dalam pengembangan web dan sistem manajemen. Selain itu, ia telah berhasil merancang solusi berbasis IoT seperti Smart Power Outlet yang sangat inovatif dan praktis.",
        review3 : "Sebagai pengusaha muda, Fauzi sukses mengelola internet lokal bisnis dan platform turnamen game online. Dia memiliki kepemimpinan yang kuat keterampilan dan kemampuan beradaptasi dengan cepat terhadap berbagai situasi." 
    }
};


function changeLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Menggunakan innerHTML agar <br> berfungsi
        }
    });
}

function sendEmail(event) {
    event.preventDefault(); // Mencegah reload halaman

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Format isi email
    var body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    // Buat mailto link
    var mailtoLink = `mailto:fauz1169611@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Redirect ke mailto link
    window.location.href = mailtoLink;
}


