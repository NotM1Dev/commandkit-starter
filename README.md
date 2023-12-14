# 🚀 CommandKit Starter Project

This is a starter project you can use for your new Discord.js bot. It uses [CommandKit](https://github.com/underctrl-io/commandkit) for its command handler and CLI.

## Usage
1. Clone this repository:
```sh
git clone https://github.com/m1-dev/commandkit-starter.git
```

2. Install dependencies (you may also use pnpm or yarn):
```sh
npm install
```

3. Add environment variables:
> Tip: CommandKit handles environment variables for you, so you do not need a package like dotenv.
- Head to the [Discord Developer Portal](https://discord.com/developers/applications) and grab your bot's token.
- Create a new `.env` file in the root directory, similar in structure to the `.env.example` file.
- Set `DISCORD_TOKEN` to your bot's token e.g. `DISCORD_TOKEN=xxxxxxxxx`

4. Run your app:
- During Development:
```sh
npm run dev
```
- During Production:
```sh
npm run build
npm start
```

🎉 Congratulations, you now have a Discord bot with CommandKit!
