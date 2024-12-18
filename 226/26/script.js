document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      // 建立全屏背景
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "1000";

      // 加入放大的圖片
      const enlargedImg = document.createElement("img");
      enlargedImg.src = img.src;
      enlargedImg.style.maxWidth = "90%";
      enlargedImg.style.maxHeight = "90%";
      enlargedImg.style.border = "5px solid white";

      // 點擊背景關閉圖片
      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
        document.querySelectorAll('nav a').forEach(link => {
          link.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止默認跳轉行為
            const targetId = this.getAttribute('href'); // 獲取目標區塊的 ID
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 平滑滾動到目標區塊
          });
        });        
      });
    });
  });
});

