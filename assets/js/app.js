$(document).ready(function() {
    // DROPDOWN MENU
    // 1 Khi click vào icon drop-down thì cho hiển thị sub-menu
    $("ul.dropdown-menu .menu-icon").click(function() {
        // 1.1 Khi click vào icon-menu tìm đến sub-menu nằm ngay sau và cùng cấp
        // console.log("ok");
        $(this).nextAll("ul.sub-menu").slideToggle();
        // 1.2 Khi sub-menu xuất hiện thì icon xuay ngang, khi sub-menu ẩn thì icon xuay xuống dưới
        $(this).toggleClass("rotate-icon");
    });
});