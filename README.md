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

1. [Uninstall pnpm](https://pnpm.io/uninstall)
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

## Events Management

Events are all stored in `src/data` as `.json` files.

- [`src/data/events.json`](./src/data/events.json) contains the array of event lines that are listed on the homepage
- [The `src/data/events/ directory](./src/data/events) contains a directory for each of those event lines, each of which contains:
  - `current.json`: Data for the current event shown on and linked to by the homepage
  - `default.json`: Default data for the current event and all historical events in that line
  - `20**.json`: Files for each past year in that event line

Event pages read in that data by utilities in [`src/data/index.ts`](./src/data/index.ts).
See [`src/data/types.ts`](./src/data/types.ts) for the precise data formats expected.

### Adding a New Event Date

Adding a new year for an event generally involves changing the event's current year to a historical event, and adding a new current event:

1. Copy the event's `current.json` to a file with current year (e.g. `2023.json`)
2. Create a new blank `current.json` copying over any data that's the same year-to-year (most likely: `"description"` and `"geolocation"`)
3. Copy over any fields from the past event data to the current event data as they become known

#### Adding Event Sessions

Speaker speaker are stored in order in the event's `sessions` data.
Each `"by"` field should be given a _`kebab-case.jpg`_ image in `public/speakers`.

#### Adding Event Sponsors

Event sponsors are stored under the `"sponsors"` data, within their tier: `"complete"`, `"large"`, `"medium"`, or `"small"`.
Each should have a `"src"` with a path starting with `/logos/` that points to an image under `public/images/`.

If the event's sponsorship is available, it should have a `"sponsorship"` object with the property `"available": true` in its event data.

### Adding a New Event Line

1. Copy and paste an exting event folder into the new slug for the event
2. Delete any historical data from the folder
3. Modify the event's `default.json` and `current.json` for the new event's details
4. Add the event's slug to `src/data/events.json`
5. Add branding images and styles for the new event line:
   1. In `src/components/EventTheme/index.module.css`, add a new class selector for the event slug
   1. Create a new folder for the event's images under `public/events/`
   1. For each of the images referenced in those styles, add it under that new folder

## Contributing

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖
