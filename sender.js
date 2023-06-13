// const bot = new Bot(
//   "6049056801:AAFZlNjzOBamhA-r8IlMh2Q99PhEOQ7xSzA",
//   "5625397913"
// );

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   bot
//     .sendMessage(input.value, null, null, true)
//     .then((res) => {
//       console.log("Success!", bot.sendMessage("Shu userdan: @" + res.result.chat.username));
//     })
//     .catch((err) => console.log(err));
// });

const form = document.querySelector("#form");

let bot = {
  TOKEN: "6049056801:AAFZlNjzOBamhA-r8IlMh2Q99PhEOQ7xSzA",
  chatID: "-1001652497227",
};

form.addEventListener("submit", e => {
  e.preventDefault();

  let message = document.querySelector("#input");

  fetch(
    `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message.value}`,
    {
      method: "GET",
    })
    .then(success => {
      alert("Message sent successfully!");
    }, error => {
      alert("Message failed to be sent");
      console.log(error);
    }
    
    )
})