import type { GuildMember, Message, Role} from 'discord.js';
import discord, {Events, GatewayIntentBits, Partials, User} from 'discord.js';
import type {NextApiRequest, NextApiResponse} from "next";
//
const client = new discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

const BOT_PREFIX = "!"
const VERIFIED_ME_COMMAND = "verified-me"
const UNVERIFIED_ME_COMMAND = "unverified-me"
const INTRO_CHANNEL_ID = '1074747956093276203';
const VERIFIED_ROLE = '1074767769666605066';

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
})

client.on("messageDelete", (message: { channel: { send: (arg0: string) => void; }; }) => {
  message.channel.send("Stop deleting messages")
})

client.on("messageCreate", async (message: Message) => {

  if (message.content === "i like this server") {
    await message.react('👍')
  }

  if (message.content === `${BOT_PREFIX}${VERIFIED_ME_COMMAND}`) {
    await setVerified(message)
  }
  if (message.content === `${BOT_PREFIX}${UNVERIFIED_ME_COMMAND}`) {
    await removeVerified(message)
  }
})

async function setVerified(message: Message) {
  const { member} = message
  member?.roles.remove(VERIFIED_ROLE)
    .then(() => {
      message.reply(`Role removed from ${member.user.username}`);
    })
    .catch(error => message.reply(`Error: ${error}`))
}
async function removeVerified(message: Message) {
  const { member} = message
  const role: Role | undefined = message.guild?.roles.cache.find((r) => r.name === VERIFIED_ROLE);
  if (role) {
    await member?.roles.remove(VERIFIED_ROLE)
    await message.reply(`Role removed from ${member?.user.username}`);
  }
  await message.reply('Role not found');
}


const bot = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({});
};
client.login(process.env.DISCORD_BOT_TOKEN)

export default bot;
