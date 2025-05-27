export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-muted shadow-sm">
      <div className="container flex flex-col items-center justify-center h-16 px-4 md:px-6">
        <span className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pobre Animes - Todos os direitos reservados.
        </span>
        <span className="text-xs text-center text-muted-foreground">
          Este site não hospeda nenhum arquivo de vídeo, apenas os cataloga.
        </span>
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";
