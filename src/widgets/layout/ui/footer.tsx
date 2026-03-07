export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="text-muted-foreground container mx-auto flex justify-between px-4 py-4 text-sm">
        <span>© {year}</span>
        <a
          href="https://github.com/kate0305"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};
