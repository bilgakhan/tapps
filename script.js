document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const orientr = document.getElementById("orientr").value;

    const API_KEY = "6496848472:AAHX7F5Zz5DWX59GW4LuTz2MTygr-zvj7TE";
    const chatId = "5692222234";

    const message = `Username: ${username}\nPhone Number: ${phone}\nManzil: ${address}\nOrientri: ${orientr}`;

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
            "Xabaringiz yuborildi. Orqada qaytishingiz mumkun. Siz bilan yaqin orada bog'lanamiz"
          );
          document.getElementById("username").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("address").value = "";
          document.getElementById("orientr").value = "";
        } else {
          alert("Oppps. Xabaringiz yuborilmadi. Qaytadan urunib ko'ring");
        }
      })
      .catch((error) => {
        console.error("Xabarni yuborishda xatolik:", error);
        alert("Xatolik yuzaga keladi. Qayta urunib ko'ring");
      });
  });
