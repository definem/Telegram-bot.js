const bot = new Bot(
  "6049056801:AAFZlNjzOBamhA-r8IlMh2Q99PhEOQ7xSzA",
  "5625397913"
);

const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  bot
    .sendMessage(input.value, null, null, true)
    .then((res) => {
      console.log("Success!", bot.sendMessage("Shu userdan: @" + res.result.chat.username));
    })
    .catch((err) => console.log(err));
});