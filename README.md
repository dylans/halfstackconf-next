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

## Contributing

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖

### TODO

- Set up `~/` tsconfig path prefixes
- Add end-to-end test for accessibility
- Add end-to-end test for console warnings
- Add .env file setup for Google Maps API key
- Switch background patterns and icons to SVGs, so we can use currentColor
- Make "Other Past Events" data dynamic
- Use tRPC or similar to optimize data needs per-page
- Runbooks for:
  - Making a new event
  - Marking an event as completed
  - Opening sponsorship for an event
  - Making a new year of an event (and moving the previous to historical)
  - Adding a trailer for an event
  - Removing an event
