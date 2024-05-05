const TelegramBot = require("node-telegram-bot-api");

const token = "6049056801:AAFZlNjzOBamhA-r8IlMh2Q99PhEOQ7xSzA";

const bot = new TelegramBot(token, { polling: true });

const obj = {};

const bootstrap = () => {
  // Commands
  bot.setMyCommands([
    {
      command: "/start",
      description: "Botni ishga tushirish",
    },
    {
      command: "/info",
      description: "Bot haqida ma'lumot",
    },
    {
      command: "/calculate",
      description: "Narxni hisoblash",
    },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        `Assalamu alaykum ${msg.from.first_name} aka. Savdolar bo'lyaptimi?`
      );
    }

    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Botdan foydalanish tartibi: 
  
        💊 /start - botni ishga tushirish,
        💊 /info - bot haqida ma'lumot,
        💊 /calculate - narxni hisoblash`
      );
    }

    if (text === "/calculate") {
      await bot.sendSticker(
        chatId,
        "https://sl.combot.org/p5e3ae53198501d340a642d90_by_stickerfybot/webp/12xf09fa4a3.webp"
      );
      return bot.sendMessage(
        chatId,
        "Tan narx va kgni kiriting, hisoblab beraman"
      );
    }
    const [price, weight] = text.split(" ").map(parseFloat);

    if (!isNaN(price) && !isNaN(weight)) {
      const totalPrice = calculatePrice(price, weight, 1.5, 20, 1);
      return bot.sendMessage(
        chatId,
        `Narxi: ${price} so'm. ${weight} kilogram uchun narx: ${totalPrice} so'm.`
      );
    } else {
      return bot.sendMessage(chatId, "Afsus, sizni tushuna olmadim😕");
    }
  });
};

bootstrap();
function calculatePrice(price, weight, toll, percentage, additional_fee) {
  return (price * (100 + percentage)) / 100 + weight * toll + additional_fee;
}
