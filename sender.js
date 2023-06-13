// <- ---- Bismillah ---- ->

const form = document.querySelector("#form");

let bot = {
  TOKEN: "6049056801:AAFZlNjzOBamhA-r8IlMh2Q99PhEOQ7xSzA",
  chatID: "-1001652497227",
};

// // For msgs

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

// // For imgs

// console.log("Test");

// net::ERR_SSL_PROTOCOL_ERROR
// TypeError: Failed to fetch

let form2 = document.querySelector("#form2")
.addEventListener("submit", e => {
  e.preventDefault();

  const imageUrl = document.querySelector("#img_url").value;
  
  fetch(`https://api.telegra.org/bot${bot.TOKEN}/sendPhoto?chat_id=${bot.chatID}&photo=${imageUrl}`)
  .then(succ => {
    console.log(succ);
  }, err => {
    console.log(err);
  })
});