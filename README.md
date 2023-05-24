# HalfStack Website: Next

> The next version of halfstackconf.com. ✨

## Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/halfstackconf-next
cd halfstackconf-next
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

You'll now be able to run a local Next.js dev server with:

```shell
pnpm dev
```

### Building a Static Site

To create a full static site build and serve it locally:

```shell
pnpm build
pnpm start
```

### Other Commands

#### Formatting

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

Alternately, you can manually format everything with:

```shell
pnpm format:write
```

#### Linting

This package includes several forms of linting to enforce consistent code quality and styling.
Each should be shown in VS Code, and can be run manually on the command-line:

- `pnpm lint` ([ESLint](https://eslint.org) with [typescript-eslint](https://typescript-eslint.io)): Lints JavaScript and TypeScript source files
- `pnpm lint:md` ([Markdownlint](https://github.com/DavidAnson/markdownlint)): Checks Markdown source files
- `pnpm lint:package` ([npm-package-json-lint](https://npmpackagejsonlint.org/)): Lints the `package.json` file
- `pnpm lint:packages` ([pnpm-deduplicate](https://github.com/ocavue/pnpm-deduplicate)): Deduplicates packages in the `pnpm-lock.yml` file
- `pnpm lint:prune` ([ts-prune](https://github.com/nadeesha/ts-prune)): Detects unused exports in TypeScript source files
- `pnpm lint:spelling` ([cspell](https://cspell.org)): Spell checks across all source files

### Type Checking

Run [TypeScript](https://typescriptlang.org) locally to type check and build source files from `src/` into output files in `lib/`:

```shell
pnpm tsc --watch
```

You should also see suggestions from TypeScript in your editor.

### Updating the Lockfile

Sometimes the `pnpm-lock.yaml` file can get out of sync if different versions of pnpm are used over time.
When that happens, to refresh it:

1. Uninstall pnpm
1. [Install the latest version of pnpm](https://pnpm.io)
1. `rm -rf pnpm-lock.yaml node_modules`
1. _(Optional, for if you want the latest version of everything)_ `npx npm-check-updates -u`
1. `pnpm install`

## Deployment (Testbed)

This runs on a cron and picks up changes every 5 minutes. Saving the commands here for reference.

```shell
# Stop pm2
pm2 stop "pnpm testbed"

echo "Updating main"
git fetch
git reset --hard origin/main
pnpm install

# Start pm2
pm2 start "pnpm testbed"
```

## Deployment (Production)

This has to be manually run as the `website` user. Navigate to the production directory, then:

```shell
# Stop pm2
pm2 stop "pnpm production"

echo "Updating main"
git fetch
git reset --hard origin/main
pnpm install

# Start pm2
pm2 start "pnpm production"
```

## Contributing

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖
