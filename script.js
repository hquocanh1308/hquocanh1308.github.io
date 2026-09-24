
// QR code: the current page URL is encoded automatically.
// This means the QR points to the actual deployed page, not to a local file.
document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("qrcode");
  if (!target || typeof QRCode === "undefined") return;

  const url = window.location.href;
  target.innerHTML = "";

  new QRCode(target, {
    text: url,
    width: 160,
    height: 160,
    correctLevel: QRCode.CorrectLevel.M
  });
});
