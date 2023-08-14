// ul vai ser alimentada por conteudo dinamico,
// mas só vai mostrar uma quantidade limitada de links

function SideBar() {
  return (
    <div>
      <h2 className="mb-2 font-subtitle text-sm font-semibold uppercase tracking-tight">
        Posts
      </h2>
      <ul className="font-title">
        {/* AS LI são links TAMBEM */}
        <li>Receitas da sua mainha</li>
        <li>O segredo da caipora</li>
        <li>Pato a tucupi ou teu cu na boca do pato?</li>
      </ul>
    </div>
  );
}

export default SideBar;
