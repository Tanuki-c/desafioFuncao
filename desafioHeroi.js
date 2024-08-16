/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

  */

  class Heroi{
       constructor(Name, age, tipe){
        this.Name = Name
        this.age = age
        this.tipe = tipe
       }
     atack(){
          let atack;
       switch (this.tipe) {
          case 'mago': 
                atack = "magia"
                console.log("o "+ this.tipe, "atacou usando " + atack )
               break;
          case 'guerreiro':
               atack = "espada"
               console.log("o "+ this.tipe, "atacou usando " + atack )
                break;
          case 'monge':
               atack = "artes marcias"
               console.log("o "+ this.tipe, "atacou usando " + atack )
               break;
          case 'ninja':
                atack = "shuriken"
                console.log("o "+ this.tipe, "atacou usando " + atack )
               break;     
          default:
               console.log("escolha um heroi")
               break;
       }

     }

  }


  const heroiMago =  new Heroi("Alanzoka",18,"mago")
  const heroiGuerreiro = new Heroi("yusha",27,"guerreiro")
  const heroiMonge = new Heroi("nieLi",13,"monge")
  const heroiNinja = new Heroi("Donatello",400,"ninja")

  heroiMago.atack()
  heroiGuerreiro.atack()
  heroiMonge.atack()
  heroiNinja.atack()