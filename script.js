document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const orientr = document.getElementById("orientr").value;

    const selectedService = document.querySelector(
      'input[name="service"]:checked'
    );
    const service = selectedService ? selectedService.value : "";

    const API_KEY = '6495751537:AAFF9wMzatEw02tT9c8bcBGSBlDlOUYRHN4'; //""
    const chatId = "6622574837";

    const message = `Sizga yangi xabar keldi!\nIsmi: ${username}\nTelefon raqami: ${phone}\nManzili: ${address}\nOrientr: ${orientr}\nXizmat turi: ${service}`;

    const url = `https://api.telegram.org/bot${API_KEY}/sendMessage`;
    const params = new URLSearchParams({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    })
      .then((response) => {
        if (response.ok) {
          alert(
            "XABARINGIZ JO'NATILDI. SIZ BILAN TEZ ORADA BOG'LANAMIZ"
          );
          document.getElementById("username").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("address").value = "";
          document.getElementById("orientr").value = "";
          selectedService.checked = false;
        } else {
          alert("NIMADIR XATO BO'LDI. QAYTADAN URINIB KO'RING");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again.");
      });
  });
