/* ==========================================================================
   HR PLATFORM — INTERACTIVE APPLICATION LOGIC (UI/UX)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("HR Platform UI/UX Engine Initialized!");

  // --- 1. MODULE SWITCHER NAVIGATION ---
  const navItems = document.querySelectorAll(".nav-item");
  const moduleViews = document.querySelectorAll(".module-view");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetModule = item.getAttribute("data-module");

      // Update active nav state
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // Switch active view
      moduleViews.forEach((view) => {
        if (view.id === `view-${targetModule}`) {
          view.style.display = "block";
          view.classList.add("active");
        } else {
          view.style.display = "none";
          view.classList.remove("active");
        }
      });
    });
  });

  // --- 2. SIDEBAR COLLAPSE TOGGLE ---
  const sidebar = document.getElementById("sidebar");
  const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");

  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // --- 3. DARK / LIGHT THEME SWITCHER ---
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const htmlTag = document.documentElement;

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlTag.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlTag.setAttribute("data-theme", newTheme);
    });
  }

  // --- 4. LIVE DIGITAL CLOCK & CLOCK-IN TIMER ---
  const liveClockEl = document.getElementById("live-clock");
  if (liveClockEl) {
    setInterval(() => {
      const now = new Date();
      liveClockEl.textContent = now.toLocaleTimeString("vi-VN");
    }, 1000);
  }

  const mainClockBtn = document.getElementById("main-clock-btn");
  let isClockedIn = false;

  if (mainClockBtn) {
    mainClockBtn.addEventListener("click", () => {
      isClockedIn = !isClockedIn;
      if (isClockedIn) {
        mainClockBtn.textContent = "🛑 CHẤM CÔNG RA (CLOCK OUT)";
        mainClockBtn.className = "btn btn-success";
        alert("✅ Chấm công VÀO thành công lúc " + new Date().toLocaleTimeString("vi-VN") + "\nVị trí: Tòa nhà Bitexco (Hợp lệ)");
      } else {
        mainClockBtn.textContent = "⚡ CHẤM CÔNG VÀO (CLOCK IN)";
        mainClockBtn.className = "btn btn-primary";
        alert("🛑 Chấm công RA thành công lúc " + new Date().toLocaleTimeString("vi-VN"));
      }
    });
  }

  // --- 5. SLIDE-OVER DRAWER FOR EMPLOYEE PROFILE ---
  const drawerOverlay = document.getElementById("drawer-overlay");
  const profileDrawer = document.getElementById("profile-drawer");
  const closeDrawerBtn = document.getElementById("close-drawer-btn");
  const openDrawerBtns = document.querySelectorAll(".btn-open-drawer");

  const openDrawer = () => {
    if (drawerOverlay && profileDrawer) {
      drawerOverlay.classList.add("active");
      profileDrawer.classList.add("active");
    }
  };

  const closeDrawer = () => {
    if (drawerOverlay && profileDrawer) {
      drawerOverlay.classList.remove("active");
      profileDrawer.classList.remove("active");
    }
  };

  openDrawerBtns.forEach((btn) => btn.addEventListener("click", openDrawer));
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  // --- 6. CONFIDENTIAL PAYSLIP PIN UNLOCK ---
  const unlockPayslipBtn = document.getElementById("btn-unlock-payslip");
  const payslipPinInput = document.getElementById("payslip-pin-input");
  const payslipData = document.getElementById("confidential-payslip-data");

  if (unlockPayslipBtn && payslipPinInput && payslipData) {
    unlockPayslipBtn.addEventListener("click", () => {
      const pin = payslipPinInput.value.trim();
      if (pin === "123456" || pin.length === 6) {
        payslipData.style.display = "block";
        alert("🔓 Mở khóa phiếu lương cá nhân thành công!");
      } else {
        alert("⚠️ Mã PIN không đúng! Vui lòng thử lại (Ví dụ PIN: 123456).");
      }
    });
  }

  // --- 7. GLOBAL COMMAND PALETTE (CTRL + K) ---
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      alert("🔍 Global Search Command Palette triggered!\nNhập từ khóa tìm kiếm nhanh nhân sự, phòng ban hoặc báo cáo...");
    }
  });

  const cmdPaletteBtn = document.getElementById("cmd-palette-btn");
  if (cmdPaletteBtn) {
    cmdPaletteBtn.addEventListener("click", () => {
      alert("🔍 Global Search Command Palette triggered!\nNhập từ khóa tìm kiếm nhanh nhân sự, phòng ban hoặc báo cáo...");
    });
  }

  // --- 9. OKR SLIDERS & KUDOS WALL LOGIC ---
  const okr1 = document.getElementById("okr-slider-1");
  const okrVal1 = document.getElementById("okr-val-1");
  if (okr1 && okrVal1) {
    okr1.addEventListener("input", (e) => {
      okrVal1.textContent = e.target.value + "%";
    });
  }

  const okr2 = document.getElementById("okr-slider-2");
  const okrVal2 = document.getElementById("okr-val-2");
  if (okr2 && okrVal2) {
    okr2.addEventListener("input", (e) => {
      okrVal2.textContent = e.target.value + "%";
    });
  }

  const sendKudosBtn = document.getElementById("btn-send-kudos");
  const kudosFeed = document.getElementById("kudos-feed");
  if (sendKudosBtn && kudosFeed) {
    sendKudosBtn.addEventListener("click", () => {
      const recipient = prompt("Nhập tên đồng nghiệp bạn muốn vinh danh:", "Trần Thanh Tâm");
      const message = prompt("Nhập lời nhắn vinh danh:", "Xuất sắc hoàn thành dự án!");
      if (recipient && message) {
        const newCard = document.createElement("div");
        newCard.style.padding = "10px";
        newCard.style.border = "1px solid var(--border-color)";
        newCard.style.borderRadius = "var(--radius-md)";
        newCard.style.background = "var(--bg-app)";
        newCard.innerHTML = `<div style="display:flex; align-items:center; gap:8px; font-weight:700;"><span>🌟 ${recipient}</span><span class="badge badge-active">Team Player</span></div><div style="font-size:12px; color:var(--text-muted); margin-top:4px;">"${message}"</div>`;
        kudosFeed.prepend(newCard);
        alert("🌟 Đã gửi Kudos thành công!");
      }
    });
  }

  // --- 10. PII DATA MASKING TOGGLE LOGIC ---
  const togglePiiBtn = document.getElementById("btn-toggle-pii-mask");
  let isPiiMasked = true;
  if (togglePiiBtn) {
    togglePiiBtn.addEventListener("click", () => {
      isPiiMasked = !isPiiMasked;
      if (isPiiMasked) {
        togglePiiBtn.textContent = "🛡️ Che Mờ Dữ Liệu PII (ON)";
        togglePiiBtn.className = "btn btn-secondary";
        alert("🛡️ Đã bật chế độ che mờ số CCCD, Số điện thoại & Mức lương PII!");
      } else {
        togglePiiBtn.textContent = "🔓 Hiển Thị Dữ Liệu PII (OFF)";
        togglePiiBtn.className = "btn btn-primary";
        alert("⚠️ Đã mở hiển thị đầy đủ thông tin cá nhân PII!");
      }
    });
  }
});
