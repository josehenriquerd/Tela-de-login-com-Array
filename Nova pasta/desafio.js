let dados = [
  {
    usuario: "usuario",
    senha: "usuario"
  },
  {
    usuario: "usuario1",
    senha: "usuario1",
  },
  {
    usuario: "usuario2",
    senha: "usuario2",
  },
  {
    usuario: "usuario3",
    senha: "usuario3",
  },
  {
    usuario: "usuario4",
    senha: "usuario4",
  },
  {
    usuario: "usuario5",
    senha: "usuario5",
  },
];
function adicionar(){
    let newusuario=document.getElementById("usuario").value
    usuario=usuario.toLowerCase
    dados.push(newusuario)

    let newsenha=document.getElementById('senha').value
    newsenha=newsenha.toLowerCase
    dados.push(newsenha)
}

function login() {
  let usuario = document.getElementById("usuario").value;
  usuario = usuario.toLowerCase();

  let senha = document.getElementById("senha").value;
  senha = senha.toLowerCase();

  for (var i = 0; i < dados.length; i++) {
    if (usuario == dados[i].usuario && senha == dados[i].senha) {
      console.log(`parabens,vc conseguiu acessar`);
      window.location.href="bv.html"
      return;
    } else {
      alert("usuario ou senha invalida");
      break;
    }
  }
}