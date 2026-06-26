function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const selectedProduct = getQueryParam("product");
const detailsBox = document.getElementById("inquiry-details");

if (selectedProduct && detailsBox) {
  detailsBox.value = `I am interested in ${selectedProduct}. Please send price, MOQ, packaging, shipping, and export document details.`;
}

const form = document.getElementById("inquiry-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("buyer-name").value.trim();
    const company = document.getElementById("company-name").value.trim();
    const email = document.getElementById("buyer-email").value.trim();
    const country = document.getElementById("destination-country").value.trim();
    const details = document.getElementById("inquiry-details").value.trim();

    const subject = "Sri Lankan Rice Export Inquiry";
    const body = [
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      `Destination country: ${country}`,
      "",
      "Inquiry details:",
      details
    ].join("\n");

    const mailtoLink = `mailto:yourbusiness@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}
