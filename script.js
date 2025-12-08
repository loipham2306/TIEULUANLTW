
const questionBank = {
    web: [
        { q: "HTML là viết tắt của từ gì?", a: ["HyperText Markup Language", "HighText Machine Language", "HyperText Marking Language", "HyperText Machine Language"], correct: 0 },
        { q: "Thẻ nào dùng để tạo liên kết?", a: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
        { q: "Để in đậm văn bản, ta dùng thẻ nào?", a: ["<i>", "<bold>", "<strong>", "<p>"], correct: 2 },
        { q: "CSS là viết tắt của?", a: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], correct: 2 },
        { q: "Thuộc tính nào dùng để đổi màu chữ?", a: ["font-color", "text-color", "color", "background-color"], correct: 2 },
        { q: "Thẻ <ul> dùng để tạo danh sách gì?", a: ["Có thứ tự", "Không thứ tự", "Dạng bảng", "Dạng thả xuống"], correct: 1 },
        { q: "JavaScript là ngôn ngữ chạy ở đâu?", a: ["Chỉ Server", "Chỉ Client (Trình duyệt)", "Cả Client và Server", "Trong Database"], correct: 2 },
        { q: "Làm sao để khai báo biến trong JS?", a: ["var", "let", "const", "Cả 3 đều đúng"], correct: 3 },
        { q: "DOM là viết tắt của?", a: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"], correct: 0 },
        { q: "Sự kiện onClick xảy ra khi nào?", a: ["Khi di chuột", "Khi tải trang", "Khi nhấp chuột", "Khi gõ phím"], correct: 2 },
        { q: "Bootstrap là gì?", a: ["Ngôn ngữ lập trình", "CSS Framework", "Database", "Server"], correct: 1 },
        { q: "Thẻ <br> dùng để làm gì?", a: ["Tạo dòng kẻ ngang", "Xuống dòng", "In đậm", "Tạo khoảng cách"], correct: 1 },
        { q: "Đâu là đơn vị đo kích thước tương đối?", a: ["px", "cm", "rem", "pt"], correct: 2 },
        { q: "Flexbox dùng để làm gì trong CSS?", a: ["Xử lý ảnh", "Tạo bố cục (Layout)", "Tạo Animation", "Kết nối Database"], correct: 1 },
        { q: "JSON là định dạng dữ liệu kiểu gì?", a: ["Dạng bảng", "Dạng cây", "Dạng văn bản (Text)", "Dạng nhị phân"], correct: 2 },
        { q: "Thẻ <img> có thuộc tính bắt buộc nào?", a: ["href", "src", "link", "rel"], correct: 1 },
        { q: "Để comment trong CSS ta dùng?", a: ["// comment", "/* comment */", "<!-- comment -->", "# comment"], correct: 1 },
        { q: "AJAX giúp làm gì?", a: ["Tải lại trang nhanh hơn", "Cập nhật trang không cần tải lại", "Tăng bảo mật", "Vẽ đồ họa 3D"], correct: 1 },
        { q: "ReactJS là thư viện của hãng nào?", a: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"], correct: 1 },
        { q: "Local Storage lưu dữ liệu ở đâu?", a: ["Trên Server", "Trong Trình duyệt người dùng", "Trong file HTML", "Trên Cloud"], correct: 1 }
    ],
    cpp: [
        { q: "Ai là người tạo ra C++?", a: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], correct: 1 },
        { q: "C++ là ngôn ngữ lập trình kiểu gì?", a: ["Hướng thủ tục", "Hướng đối tượng", "Đa mẫu hình (Multi-paradigm)", "Chỉ hướng sự kiện"], correct: 2 },
        { q: "Thư viện nhập xuất chuẩn trong C++ là?", a: ["<stdio.h>", "<iostream>", "<conio.h>", "<math.h>"], correct: 1 },
        { q: "Lệnh cout dùng để làm gì?", a: ["Nhập dữ liệu", "Xuất dữ liệu ra màn hình", "Khai báo biến", "Tạo vòng lặp"], correct: 1 },
        { q: "Toán tử nào dùng để truy cập thành viên của con trỏ?", a: [".", "->", "::", "&"], correct: 1 },
        { q: "int chiếm bao nhiêu byte trong bộ nhớ (thông thường)?", a: ["2 byte", "4 byte", "8 byte", "1 byte"], correct: 1 },
        { q: "Vòng lặp nào kiểm tra điều kiện sau khi thực hiện?", a: ["for", "while", "do-while", "foreach"], correct: 2 },
        { q: "Mảng (Array) bắt đầu từ chỉ số mấy?", a: ["1", "0", "-1", "Tùy ý"], correct: 1 },
        { q: "Từ khóa 'new' dùng để làm gì?", a: ["Tạo biến mới", "Cấp phát bộ nhớ động", "Xóa bộ nhớ", "Kế thừa"], correct: 1 },
        { q: "Hàm hủy (Destructor) có tên bắt đầu bằng ký tự nào?", a: ["#", "~", "!", "$"], correct: 1 },
        { q: "Tính chất nào KHÔNG phải của OOP?", a: ["Đóng gói", "Kế thừa", "Đa hình", "Tối ưu hóa"], correct: 3 },
        { q: "Con trỏ NULL có giá trị là bao nhiêu?", a: ["0", "1", "-1", "Vô cùng"], correct: 0 },
        { q: "Thư viện STL là viết tắt của?", a: ["Standard Template Library", "Simple Text Language", "System Type List", "Source Test Logic"], correct: 0 },
        { q: "Vector trong C++ giống cấu trúc dữ liệu nào?", a: ["Mảng tĩnh", "Mảng động", "Danh sách liên kết", "Hàng đợi"], correct: 1 },
        { q: "Từ khóa 'const' nghĩa là gì?", a: ["Biến toàn cục", "Hằng số (không đổi)", "Biến tĩnh", "Biến tham chiếu"], correct: 1 },
        { q: "Lệnh 'break' dùng để làm gì?", a: ["Thoát khỏi chương trình", "Thoát khỏi vòng lặp/switch", "Bỏ qua 1 lần lặp", "Dừng màn hình"], correct: 1 },
        { q: "Ký hiệu '&&' là toán tử gì?", a: ["Hoặc (OR)", "Và (AND)", "Phủ định (NOT)", "So sánh bằng"], correct: 1 },
        { q: "File header của C++ thường có đuôi là?", a: [".c", ".cpp", ".h hoặc .hpp", ".txt"], correct: 2 },
        { q: "Để comment 1 dòng trong C++ dùng?", a: ["/* */", "//", "#", "--"], correct: 1 },
        { q: "Hàm main() trả về kiểu dữ liệu gì?", a: ["void", "int", "float", "string"], correct: 1 }
    ],
    java: [
        { q: "Java tuân theo nguyên tắc nào?", a: ["Write Once, Run Anywhere", "Write Once, Run Windows", "Write Everywhere, Run Once", "Just in Time"], correct: 0 },
        { q: "Máy ảo Java gọi là gì?", a: ["JDK", "JRE", "JVM", "JIT"], correct: 2 },
        { q: "Biến 'static' thuộc về?", a: ["Đối tượng (Object)", "Lớp (Class)", "Phương thức", "Package"], correct: 1 },
        { q: "Java có hỗ trợ đa kế thừa (Multiple Inheritance) với Class không?", a: ["Có", "Không", "Chỉ phiên bản cũ", "Tùy trình biên dịch"], correct: 1 },
        { q: "Từ khóa 'final' dùng cho biến có ý nghĩa gì?", a: ["Biến không thể thay đổi giá trị", "Biến có thể kế thừa", "Biến tạm", "Biến toàn cục"], correct: 0 },
        { q: "Phương thức khởi tạo (Constructor) có kiểu trả về không?", a: ["Có (void)", "Có (int)", "Không có kiểu trả về", "Tùy ý"], correct: 2 },
        { q: "Gói (Package) mặc định được import trong Java là?", a: ["java.util", "java.io", "java.lang", "java.net"], correct: 2 },
        { q: "String trong Java là?", a: ["Kiểu nguyên thủy", "Lớp (Object)", "Mảng ký tự", "Con trỏ"], correct: 1 },
        { q: "Ngoại lệ (Exception) nào xảy ra khi chia cho 0?", a: ["NullPointerException", "ArithmeticException", "ArrayIndexOutOfBounds", "IOException"], correct: 1 },
        { q: "Interface có thể chứa phương thức có thân hàm (body) không?", a: ["Không bao giờ", "Có (từ Java 8 với default/static)", "Chỉ Java 5", "Tùy ý"], correct: 1 },
        { q: "ArrayList khác gì với Array thường?", a: ["Kích thước cố định", "Kích thước thay đổi động", "Chỉ chứa số nguyên", "Không thể sắp xếp"], correct: 1 },
        { q: "Từ khóa 'super' dùng để làm gì?", a: ["Gọi lớp cha", "Gọi lớp con", "Tạo đối tượng siêu cấp", "Thoát chương trình"], correct: 0 },
        { q: "Phương thức toString() thuộc lớp nào?", a: ["String", "Object", "System", "Class"], correct: 1 },
        { q: "Để so sánh nội dung 2 chuỗi String, ta dùng?", a: ["==", "=", "equals()", "compare()"], correct: 2 },
        { q: "Thread trong Java là gì?", a: ["Luồng xử lý", "Chuỗi ký tự", "Mạng lưới", "Lớp bao đóng"], correct: 0 },
        { q: "Ký hiệu Access Modifier nào có phạm vi rộng nhất?", a: ["private", "default", "protected", "public"], correct: 3 },
        { q: "File mã nguồn Java có đuôi là?", a: [".class", ".java", ".jar", ".exe"], correct: 1 },
        { q: "Sau khi biên dịch, Java tạo ra file gì?", a: [".java", ".class (Bytecode)", ".exe", ".cpp"], correct: 1 },
        { q: "Vòng lặp 'for-each' dùng để làm gì?", a: ["Lặp vô hạn", "Duyệt qua các phần tử của mảng/tập hợp", "Lặp 1 lần", "Kiểm tra điều kiện"], correct: 1 },
        { q: "Garbage Collection (GC) trong Java làm nhiệm vụ gì?", a: ["Dọn rác bộ nhớ tự động", "Xóa file rác ổ cứng", "Quét virus", "Sắp xếp code"], correct: 0 }
    ]
};


let currentQuestions = [];
let currentQuestionIndex = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
let isAnswered = false; 
let transitionTimer; 
let questionTimer;   
let timeLeft = 15;
let startTime;       
let pendingSubject = "";

let quizPage, quizHeader, questionText, answerContainer, currentQSpan, totalQSpan, quizSubject, nextTimerMsg, countdownSpan, resultModal, timerDisplay, timeBar, totalTimeDisplay, questionCard;
let readyModal, readyGoOverlay, readyGoText;


document.addEventListener('DOMContentLoaded', function() {

    if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
    window.scrollTo(0, 0);

    quizPage = document.getElementById('quizPage');
    quizHeader = document.getElementById('quizHeader');
    questionText = document.getElementById('questionText');
    answerContainer = document.getElementById('answerContainer');
    currentQSpan = document.getElementById('currentQ');
    totalQSpan = document.getElementById('totalQ');
    quizSubject = document.getElementById('quizSubject');
    nextTimerMsg = document.getElementById('nextTimerMsg');
    countdownSpan = document.getElementById('countdownSpan');
    resultModal = document.getElementById('resultModal');
    timerDisplay = document.getElementById('timerDisplay');
    timeBar = document.getElementById('timeBar');
    totalTimeDisplay = document.getElementById('totalTimeDisplay');
    questionCard = document.getElementById('questionCard');
    

    readyModal = document.getElementById('readyModal');
    readyGoOverlay = document.getElementById('readyGoOverlay');
    readyGoText = document.getElementById('readyGoText');

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});


function openQuiz(type) {
    if (!questionBank[type]) return alert("Đang cập nhật câu hỏi!");
    
    pendingSubject = type;
    
 
    if(readyModal) readyModal.classList.remove('hidden');
}


function startReadyGoSequence() {

    if(readyModal) readyModal.classList.add('hidden');


    currentQuestions = questionBank[pendingSubject];
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    scoreWrong = 0;
    isAnswered = false;
    startTime = new Date(); 


    setupTheme(pendingSubject);
    if(totalQSpan) totalQSpan.innerText = currentQuestions.length;
 
    if(quizPage) quizPage.classList.remove('hidden');
    if(resultModal) resultModal.classList.add('hidden');
    

    if(questionText) questionText.innerText = "";
    if(answerContainer) answerContainer.innerHTML = "";


    if(readyGoOverlay) readyGoOverlay.classList.remove('hidden');


    if(readyGoText) {
        readyGoText.innerText = "READY";
        readyGoText.className = "text-9xl font-black text-yellow-500 uppercase tracking-tighter drop-shadow-2xl anim-ready-go";
    }

    setTimeout(() => {
        if(readyGoText) {
            readyGoText.innerText = "GO!";
            readyGoText.classList.remove('anim-ready-go');
            void readyGoText.offsetWidth; 
            readyGoText.classList.add('anim-ready-go');
            readyGoText.classList.replace('text-yellow-500', 'text-green-500');
        }

        setTimeout(() => {
            if(readyGoOverlay) readyGoOverlay.classList.add('hidden');
            loadQuestion(); 
        }, 1000);

    }, 1000);
}



function setupTheme(type) {
    if(!quizHeader) return;
    quizHeader.classList.remove('theme-web', 'theme-cpp', 'theme-java');
    
    let title = "";
    if (type === 'web') {
        quizHeader.classList.add('theme-web'); 
        title = "Lập trình Web";
    } else if (type === 'cpp') {
        quizHeader.classList.add('theme-cpp'); 
        title = "Lập trình C++";
    } else if (type === 'java') {
        quizHeader.classList.add('theme-java'); 
        title = "Java & OOP";
    }
    if(quizSubject) quizSubject.innerText = title;
}

function confirmExit() {
    if (confirm("Bạn có chắc muốn thoát?")) {
        closeQuiz();
    }
}

function closeQuiz() {
    if(quizPage) quizPage.classList.add('hidden');
    if(resultModal) resultModal.classList.add('hidden');
    if(readyGoOverlay) readyGoOverlay.classList.add('hidden');
    if(readyModal) readyModal.classList.add('hidden');
    clearInterval(questionTimer);
    clearTimeout(transitionTimer);
    document.body.scrollIntoView({ behavior: 'smooth' });
}

function loadQuestion() {
    isAnswered = false;
    if(nextTimerMsg) nextTimerMsg.style.opacity = "0"; 
   
    if(questionCard) questionCard.classList.remove('critical-alert');
    
    clearInterval(questionTimer); 
    clearTimeout(transitionTimer);

    const q = currentQuestions[currentQuestionIndex];
    if(currentQSpan) currentQSpan.innerText = currentQuestionIndex + 1;
    if(questionText) questionText.innerText = q.q;
    if(answerContainer) answerContainer.innerHTML = '';

    q.a.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = "answer-btn w-full text-left p-5 rounded-2xl bg-white text-slate-700 font-medium text-lg shadow-sm flex items-center gap-4 relative overflow-hidden group";
        
        const safeAns = ans.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        btn.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition shrink-0 border border-slate-200">
                ${String.fromCharCode(65 + index)}
            </div>
            <span class="flex-grow z-10">${safeAns}</span>
            <i class="status-icon fa-solid fa-circle-check opacity-0 text-2xl transition-all duration-300 transform scale-50 z-20"></i>
            <div class="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
        `;

        btn.onclick = () => checkAnswer(btn, index, q.correct);
        if(answerContainer) answerContainer.appendChild(btn);
    });

    startQuestionTimer();
}

function startQuestionTimer() {
    timeLeft = 15;
    if(timerDisplay) timerDisplay.innerText = timeLeft + "s";
    if(timeBar) {
        timeBar.style.width = "100%";
        timeBar.classList.remove('bg-red-500');
        timeBar.classList.add('bg-yellow-400');
    }

    questionTimer = setInterval(() => {
        timeLeft--;
        if(timerDisplay) timerDisplay.innerText = timeLeft + "s";
        
        if(timeBar) {
            const percent = (timeLeft / 15) * 100;
            timeBar.style.width = `${percent}%`;
            
           
            if (timeLeft <= 5) {
                timeBar.classList.remove('bg-yellow-400');
                timeBar.classList.add('bg-red-500');
             
                if(questionCard) questionCard.classList.add('critical-alert');
            }
        }

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            timeOut(); 
        }
    }, 1000);
}


function timeOut() {
    if (isAnswered) return;
    scoreWrong++; 
    
 
    if(questionCard) questionCard.classList.remove('critical-alert');

    const correctIndex = currentQuestions[currentQuestionIndex].correct;
    const buttons = answerContainer.children;
    
  
    const correctBtn = buttons[correctIndex];
    correctBtn.classList.add('correct-anim');
    correctBtn.querySelector('div').classList.replace('bg-slate-100', 'bg-green-200');
    
    const icon = correctBtn.querySelector('.status-icon');
    icon.classList.remove('opacity-0', 'scale-50');
    icon.classList.add('opacity-100', 'scale-100', 'text-green-500');

 
    Array.from(buttons).forEach(btn => {
        btn.disabled = true;
        btn.classList.add('opacity-50');
    });
    correctBtn.classList.remove('opacity-50');

    startTransitionTimer();
}

function checkAnswer(selectedBtn, selectedIndex, correctIndex) {
    if (isAnswered) return;
    isAnswered = true;
    
    if(questionCard) questionCard.classList.remove('critical-alert');
    clearInterval(questionTimer); 

    const buttons = answerContainer.children;
    const icon = selectedBtn.querySelector('.status-icon');

    if (selectedIndex === correctIndex) {
        scoreCorrect++;
        selectedBtn.classList.add('correct-anim');
        selectedBtn.querySelector('div').classList.replace('bg-slate-100', 'bg-green-200');
        icon.classList.remove('opacity-0', 'scale-50', 'fa-circle-check'); 
        icon.classList.add('opacity-100', 'scale-100', 'text-green-500', 'fa-circle-check');
    } else {
        scoreWrong++;
        selectedBtn.classList.add('wrong-anim');
        selectedBtn.querySelector('div').classList.replace('bg-slate-100', 'bg-red-200');
        icon.classList.remove('opacity-0', 'scale-50', 'fa-circle-check');
        icon.classList.add('opacity-100', 'scale-100', 'text-red-500', 'fa-circle-xmark');
        
 
        const correctBtn = buttons[correctIndex];
        correctBtn.classList.add('correct-anim');
        correctBtn.querySelector('div').classList.replace('bg-slate-100', 'bg-green-200');
        const correctIcon = correctBtn.querySelector('.status-icon');
        correctIcon.classList.remove('opacity-0', 'scale-50');
        correctIcon.classList.add('opacity-100', 'scale-100', 'text-green-500');
    }

    Array.from(buttons).forEach(btn => {
        btn.disabled = true;
        if (!btn.classList.contains('correct-anim') && !btn.classList.contains('wrong-anim')) {
            btn.classList.add('opacity-40');
        }
    });

    startTransitionTimer();
}

function startTransitionTimer() {
    let transitionTime = 2; 
    if(nextTimerMsg) nextTimerMsg.style.opacity = "1";
    if(countdownSpan) countdownSpan.innerText = transitionTime;

    transitionTimer = setInterval(() => {
        transitionTime--;
        if(countdownSpan) countdownSpan.innerText = transitionTime;

        if (transitionTime <= 0) {
            clearInterval(transitionTimer);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if(quizPage) quizPage.classList.add('hidden');
    if(resultModal) resultModal.classList.remove('hidden');

    const endTime = new Date();
    const totalTimeInSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(totalTimeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalTimeInSeconds % 60).toString().padStart(2, '0');
    
    if(document.getElementById('correctScore')) document.getElementById('correctScore').innerText = scoreCorrect;
    if(document.getElementById('wrongScore')) document.getElementById('wrongScore').innerText = scoreWrong;
    if(document.getElementById('totalTimeDisplay')) document.getElementById('totalTimeDisplay').innerText = `${minutes}:${seconds}`;
}