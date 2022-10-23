export type ReturnedParams<Getter extends (...args: never) => unknown> =
  Awaited<ReturnType<Getter>> extends { paths: { params: infer Params }[] }
    ? { params: Params }
    : never;

export type ReturnedProps<Getter extends (...args: never) => unknown> = Awaited<
  ReturnType<Getter>
> extends { props: infer Props }
  ? Props
  : never;

export function hashify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}
