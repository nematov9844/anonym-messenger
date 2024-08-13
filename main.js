let botsToken;
let chatsId;

// "6625746777:AAFv4iYe_dWyD2Mf11HTUyrX_ShrARp0_2E";
// "-1002013506547";
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  botsToken =
    "6625746777:AAFv4iYe_dWyD2Mf11HTUyrX_ShrARp0_2E" ||
    document.getElementById("botsToken").value;
  chatsId = "-1002013506547" || document.getElementById("chatsId").value;

  console.log(botsToken);
  console.log(chatsId);
});

function sendtelegram() {
  const imageFile = document.getElementById("image").files[0];
  const text = document.getElementById("text").value;

  let botToken = botsToken;
  let chatId = chatsId;
  console.log(botToken);
  console.log(chatId);
  const formData = new FormData();
  formData.append("photo", imageFile);
  formData.append("caption", text);
  formData.append("chat_id", chatId);

  fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      alert("Message sent successfully!");
      document.getElementById("image").value = "";
      document.getElementById("text").value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    });

  return false;
}
