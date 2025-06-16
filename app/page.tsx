<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAPA Rooftop Tender - EDGE Construction</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #fafafa;
            color: #1a365d;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .header {
            background: linear-gradient(135deg, #1a365d, #2d5282);
            color: white;
            padding: 40px 0;
            text-align: center;
        }

        .logo {
            max-width: 150px;
            margin-bottom: 20px;
        }

        .language-toggle {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .language-toggle:hover {
            background: rgba(255,255,255,0.3);
        }

        .section {
            padding: 40px 0;
            border-bottom: 1px solid #e2e8f0;
        }

        .section-title {
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 30px;
            color: #1a365d;
            text-align: center;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }

        .card {
            background: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: #1a365d;
        }

        .price-highlight {
            background: #1a365d;
            color: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin: 40px 0;
        }

        .price-amount {
            font-size: 3rem;
            font-weight: 300;
            margin-bottom: 10px;
        }

        .timeline {
            position: relative;
            padding-left: 30px;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #e2e8f0;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 30px;
            padding-left: 30px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -37px;
            top: 8px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #1a365d;
        }

        .features-list {
            list-style: none;
            margin-top: 20px;
        }

        .features-list li {
            padding: 8px 0;
            border-bottom: 1px solid #f1f5f9;
        }

        .features-list li:before {
            content: '✓';
            color: #10b981;
            font-weight: bold;
            margin-right: 10px;
        }

        .cta-section {
            background: #f8fafc;
            text-align: center;
            padding: 60px 0;
        }

        .btn {
            display: inline-block;
            background: #1a365d;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 6px;
            margin: 10px;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .btn:hover {
            background: #2d5282;
            transform: translateY(-2px);
        }

        .contact-info {
            background: white;
            padding: 30px;
            border-radius: 8px;
            margin-top: 20px;
        }

        .qr-code {
            text-align: center;
            margin-top: 30px;
        }

        .qr-code img {
            max-width: 150px;
            border-radius: 8px;
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 15px;
            }
            
            .price-amount {
                font-size: 2rem;
            }
            
            .section-title {
                font-size: 1.5rem;
            }
            
            .timeline {
                padding-left: 20px;
            }
            
            .timeline-item {
                padding-left: 20px;
            }
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="header">
        <button class="language-toggle" onclick="toggleLanguage()">EN / TH</button>
        <div class="container">
            <img src="https://drive.google.com/uc?export=view&id=11ASs8D4xUu1xzFjurcnKpJ2DMphlkzJY" alt="EDGE Construction" class="logo">
            <h1 id="main-title-en">NAPA Rooftop Bar Extension</h1>
            <h1 id="main-title-th" class="hidden">โครงการขยาย NAPA Rooftop Bar</h1>
            <p id="subtitle-en">Siam Mandarina Hotel - Premium Construction Solution</p>
            <p id="subtitle-th" class="hidden">โรงแรม Siam Mandarina - โซลูชันก่อสร้างระดับพรีเมียม</p>
        </div>
    </div>

    <div class="container">
        <!-- Price Section -->
        <div class="price-highlight">
            <div id="price-title-en">Total Project Investment</div>
            <div id="price-title-th" class="hidden">มูลค่าการลงทุนทั้งโครงการ</div>
            <div class="price-amount">34.84M</div>
            <div id="price-subtitle-en">THB (Including VAT 7%)</div>
            <div id="price-subtitle-th" class="hidden">บาท (รวม VAT 7%)</div>
        </div>

        <!-- Key Advantages -->
        <div class="section">
            <h2 id="advantages-title-en" class="section-title">Why Choose EDGE</h2>
            <h2 id="advantages-title-th" class="section-title hidden">ทำไมต้องเลือก EDGE</h2>
            <div class="grid">
                <div class="card">
                    <h3 id="exp-title-en" class="card-title">5-Star Hotel Experience</h3>
                    <h3 id="exp-title-th" class="card-title hidden">ประสบการณ์โรงแรม 5 ดาว</h3>
                    <ul class="features-list">
                        <li id="exp-1-en">Zero guest disruption methodology</li>
                        <li id="exp-1-th" class="hidden">วิธีการทำงานที่ไม่รบกวนแขก</li>
                        <li id="exp-2-en">24/7 professional coordination</li>
                        <li id="exp-2-th" class="hidden">การประสานงานระดับมืออาชีพ 24/7</li>
                        <li id="exp-3-en">International safety standards</li>
                        <li id="exp-3-th" class="hidden">มาตรฐานความปลอดภัยระดับสากล</li>
                    </ul>
                </div>
                <div class="card">
                    <h3 id="tech-title-en" class="card-title">Advanced Rooftop Technology</h3>
                    <h3 id="tech-title-th" class="card-title hidden">เทคโนโลยีก่อสร้างดาดฟ้าขั้นสูง</h3>
                    <ul class="features-list">
                        <li id="tech-1-en">Specialized mobile crane system</li>
                        <li id="tech-1-th" class="hidden">ระบบเครนเคลื่อนที่เฉพาะทาง</li>
                        <li id="tech-2-en">Modular construction approach</li>
                        <li id="tech-2-th" class="hidden">วิธีก่อสร้างแบบโมดูลาร์</li>
                        <li id="tech-3-en">Real-time quality monitoring</li>
                        <li id="tech-3-th" class="hidden">การตรวจสอบคุณภาพแบบเรียลไทม์</li>
                    </ul>
                </div>
                <div class="card">
                    <h3 id="materials-title-en" class="card-title">Premium Materials</h3>
                    <h3 id="materials-title-th" class="card-title hidden">วัสดุพรีเมียม</h3>
                    <ul class="features-list">
                        <li id="mat-1-en">Arte Wallpaper OSMANTHUS Collection</li>
                        <li id="mat-1-th" class="hidden">วอลเปเปอร์ Arte คอลเลกชัน OSMANTHUS</li>
                        <li id="mat-2-en">Stainless Steel HL Gold & Black</li>
                        <li id="mat-2-th" class="hidden">สแตนเลสผิว HL ทองและดำ</li>
                        <li id="mat-3-en">Red Travertine Natural Stone</li>
                        <li id="mat-3-th" class="hidden">หินธรรมชาติ Red Travertine</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Timeline -->
        <div class="section">
            <h2 id="timeline-title-en" class="section-title">6-Month Construction Timeline</h2>
            <h2 id="timeline-title-th" class="section-title hidden">ไทม์ไลน์การก่อสร้าง 6 เดือน</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h4 id="phase1-title-en">Phase 1: Structure & Foundation (Month 1-2)</h4>
                    <h4 id="phase1-title-th" class="hidden">ระยะที่ 1: โครงสร้างและฐานราก (เดือน 1-2)</h4>
                    <p id="phase1-desc-en">Site preparation, structural work, and waterproofing systems</p>
                    <p id="phase1-desc-th" class="hidden">เตรียมพื้นที่ งานโครงสร้าง และระบบกันน้ำ</p>
                </div>
                <div class="timeline-item">
                    <h4 id="phase2-title-en">Phase 2: MEP & Interior Framework (Month 3-4)</h4>
                    <h4 id="phase2-title-th" class="hidden">ระยะที่ 2: MEP และโครงสร้างภายใน (เดือน 3-4)</h4>
                    <p id="phase2-desc-en">Electrical, plumbing, HVAC installation and interior structure</p>
                    <p id="phase2-desc-th" class="hidden">ติดตั้งระบบไฟฟ้า ประปา แอร์ และโครงสร้างภายใน</p>
                </div>
                <div class="timeline-item">
                    <h4 id="phase3-title-en">Phase 3: Premium Finishing (Month 5-6)</h4>
                    <h4 id="phase3-title-th" class="hidden">ระยะที่ 3: งานตกแต่งพรีเมียม (เดือน 5-6)</h4>
                    <p id="phase3-desc-en">Installation of premium materials and final testing</p>
                    <p id="phase3-desc-th" class="hidden">ติดตั้งวัสดุพรีเมียมและการทดสอบสุดท้าย</p>
                </div>
            </div>
        </div>

        <!-- Value Added Services -->
        <div class="section">
            <h2 id="value-title-en" class="section-title">Complimentary Services</h2>
            <h2 id="value-title-th" class="section-title hidden">บริการเสริมฟรี</h2>
            <div class="grid">
                <div class="card">
                    <h3 id="warranty-title-en" class="card-title">Extended Warranty</h3>
                    <h3 id="warranty-title-th" class="card-title hidden">การรับประกันขยาย</h3>
                    <ul class="features-list">
                        <li id="war-1-en">3-year structure warranty</li>
                        <li id="war-1-th" class="hidden">รับประกันโครงสร้าง 3 ปี</li>
                        <li id="war-2-en">5-year waterproofing guarantee</li>
                        <li id="war-2-th" class="hidden">รับประกันระบบกันน้ำ 5 ปี</li>
                        <li id="war-3-en">2-year premium materials coverage</li>
                        <li id="war-3-th" class="hidden">รับประกันวัสดุพรีเมียม 2 ปี</li>
                    </ul>
                </div>
                <div class="card">
                    <h3 id="support-title-en" class="card-title">Operational Support</h3>
                    <h3 id="support-title-th" class="card-title hidden">การสนับสนุนการดำเนินงาน</h3>
                    <ul class="features-list">
                        <li id="sup-1-en">24/7 project hotline</li>
                        <li id="sup-1-th" class="hidden">สายด่วนโครงการ 24/7</li>
                        <li id="sup-2-en">Daily site cleaning</li>
                        <li id="sup-2-th" class="hidden">ทำความสะอาดพื้นที่ทุกวัน</li>
                        <li id="sup-3-en">Hotel liaison specialist</li>
                        <li id="sup-3-th" class="hidden">ผู้เชี่ยวชาญประสานงานโรงแรม</li>
                    </ul>
                </div>
            </div>
            <p id="value-note-en" style="text-align: center; margin-top: 30px; font-style: italic;">
                Total value of complimentary services: 1.8 Million Baht
            </p>
            <p id="value-note-th" class="hidden" style="text-align: center; margin-top: 30px; font-style: italic;">
                มูลค่าบริการเสริมฟรีรวม: 1.8 ล้านบาท
            </p>
        </div>
    </div>

    <!-- Contact Section -->
    <div class="cta-section">
        <div class="container">
            <h2 id="contact-title-en" class="section-title">Ready to Begin</h2>
            <h2 id="contact-title-th" class="section-title hidden">พร้อมเริ่มต้น</h2>
            <p id="contact-desc-en">Download our detailed proposal and get in touch</p>
            <p id="contact-desc-th" class="hidden">ดาวน์โหลดข้อเสนอรายละเอียดและติดต่อเรา</p>
            
            <div style="margin: 30px 0;">
                <a href="https://drive.google.com/file/d/1FTmZJvclnqoVlOfB8Ug4_fHmrDChqkwJ/view?usp=sharing" class="btn" target="_blank" id="proposal-btn-en">
                    Download Proposal PDF
                </a>
                <a href="https://drive.google.com/file/d/1FTmZJvclnqoVlOfB8Ug4_fHmrDChqkwJ/view?usp=sharing" class="btn hidden" target="_blank" id="proposal-btn-th">
                    ดาวน์โหลดข้อเสนอ PDF
                </a>
                
                <a href="https://drive.google.com/open?id=1dJjhv0r1D9lYR7KKWc67wbof0DBv8Loj&usp=drive_fs" class="btn" target="_blank" id="profile-btn-en">
                    Company Profile
                </a>
                <a href="https://drive.google.com/open?id=1dJjhv0r1D9lYR7KKWc67wbof0DBv8Loj&usp=drive_fs" class="btn hidden" target="_blank" id="profile-btn-th">
                    โปรไฟล์บริษัท
                </a>
            </div>

            <div class="contact-info">
                <h3 id="contact-info-title-en">Contact Information</h3>
                <h3 id="contact-info-title-th" class="hidden">ข้อมูลติดต่อ</h3>
                <p style="margin: 10px 0;">
                    <strong id="email-label-en">Email:</strong>
                    <strong id="email-label-th" class="hidden">อีเมล:</strong>
                    <a href="mailto:edge.dept@gmail.com">edge.dept@gmail.com</a>
                </p>
            </div>

            <div class="qr-code">
                <p id="qr-text-en">Scan for quick access</p>
                <p id="qr-text-th" class="hidden">สแกนเพื่อเข้าถึงอย่างรวดเร็ว</p>
                <img src="https://drive.google.com/uc?export=view&id=1EXP8x_eiZJQD9znKSWRspiftW-pgH_ry" alt="QR Code">
            </div>
        </div>
    </div>

    <script>
        let currentLang = 'en';

        function toggleLanguage() {
            const elements = document.querySelectorAll('[id$="-en"], [id$="-th"]');
            
            elements.forEach(element => {
                element.classList.toggle('hidden');
            });
            
            currentLang = currentLang === 'en' ? 'th' : 'en';
            
            // Update language toggle button
            const toggleBtn = document.querySelector('.language-toggle');
            toggleBtn.textContent = currentLang === 'en' ? 'EN / TH' : 'TH / EN';
        }

        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    </script>
</body>
</html>
