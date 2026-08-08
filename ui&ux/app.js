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

  // --- 8. ORG TREE TOGGLE LOGIC ---
  const toggleOrgTreeBtn = document.getElementById("btn-toggle-org-tree");
  const orgTreeCard = document.getElementById("org-tree-card");
  if (toggleOrgTreeBtn && orgTreeCard) {
    toggleOrgTreeBtn.addEventListener("click", () => {
      if (orgTreeCard.style.display === "none") {
        orgTreeCard.style.display = "block";
        toggleOrgTreeBtn.textContent = "📋 Xem Dạng Bảng (Table View)";
      } else {
        orgTreeCard.style.display = "none";
        toggleOrgTreeBtn.textContent = "🌳 Xem Sơ Đồ Tổ Chức (Org Chart)";
      }
    });
  }
});
