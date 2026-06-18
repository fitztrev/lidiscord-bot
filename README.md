# enbotsant

A bot for the Lichess Discord.

## Usage

1. Copy `.env.sample` to `.env` and set values
2. `pnpm install`
3. `pnpm build`
4. `pnpm start`

Installation URL: https://discord.com/oauth2/authorize?client_id=1302310157338021968&permissions=275146427392&integration_type=0&scope=bot

Required permissions:

- Manage roles
- View channels
- Send Messages
- Send Messages in Threads
- Embed Links
- Read Message History
- Manage messages (only in the log channel)

### Test Docker build locally

```bash
docker build . -t lidiscord-bot

docker run --rm -it lidiscord-bot
```
