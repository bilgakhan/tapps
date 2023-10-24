document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;

    const API_KEY = "6496848472:AAHX7F5Zz5DWX59GW4LuTz2MTygr-zvj7TE";
    const chatId = "5692222234";

    const message = `Username: ${username}\nPhone Number: ${phone}`;

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
          alert("Message sent successfully!");
          document.getElementById("username").value = "";
          document.getElementById("phone").value = "";
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again later.");
      });
  });
