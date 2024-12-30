export default function Layout({children,}: {children: React.ReactNode
}) {
  return (
    <div>
      {children}
      &copy;NextJS is awesome.
    </div>
  );
};