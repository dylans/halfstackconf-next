export type PolymorphicProps<
  As extends React.ElementType,
  CustomProps
> = CustomProps & Omit<React.ComponentPropsWithoutRef<As>, keyof CustomProps>;
