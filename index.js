const qrFormEl = document.getElementById("qrform");
const qrimageEl = document.getElementById("qrimage");
const qrcontainerEl = document.getElementById("qrcontainerEl");
const qrinputTextEl = document.getElementById("qrInputTextEl");
const generateBtnEl = document.getElementById("generateBtn");

const renderQRCode = (url) => {
    if (!url) return;
    generateBtnEl.innerText = "Generating Qr code...";
    qrimageEl.src = url;
   

    const onimageload = () => {
        const interval = setInterval(() => {
        qrcontainerEL.classList.add("show");
        clearInterval(interval);
        generateBtnEl.innerText = "Genrate QR code";
        }, 500);
        
    };

    qrimageEl.addEventListener('load', onimageload);
    
};

qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    const qrcodeUrl = 'https://miro.medium.com/v2/resize:fit:261/1*HqUUgU5sD0pTeMBIpjkbSA.png' + text;
  
    renderQRCode(qrcodeUrl);
  });
  

    qrInputTextEl.addEventListener("keyup", () => {
        
        if (!qrInputTextEl.value.trim()) {
            qrcontainerEl.classList.remove("show");
        }
    });