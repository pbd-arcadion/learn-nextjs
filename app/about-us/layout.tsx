export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        &copy; Next JS is great!
      </body>
    </html>
  );
}
