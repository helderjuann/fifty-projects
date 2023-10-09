const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Trabalhei com literalmente centenas de desenvolvedores de HTML/CSS e devo dizer que o primeiro lugar vai para esse cara. Esse cara é um desenvolvedor incrível. Ele enfatiza um código bom e limpo e presta atenção aos detalhes. Adoro desenvolvedores que respeitam cada aspecto de um design cuidadosamente pensado e fazem o melhor para colocá-lo em código. Ele vai além e transforma ARTE em PIXELS - sem falhas, sempre.",
  },
  {
    name: 'June Cha',
    position: 'Engenheira de Software',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Essa moça é uma desenvolvedora frontend incrível que entregou a tarefa exatamente como precisávamos, faça um favor a si mesmo e contrate-a, você não ficará desapontado com o trabalho entregue. Ela fará um esforço extra para garantir que você esteja satisfeito com seu projeto. Com certeza trabalharei novamente com ela!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Entrada de Dados',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Essa mulher é uma trabalhadora esforçada. A comunicação com ela também foi muito boa e ela foi muito receptiva o tempo todo, algo que não é fácil de encontrar em muitos freelancers. Definitivamente vamos repetir com ela.",
  },
  {
    name: 'Renee Sims',
    position: 'Recepcionista',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "A Renee faz tudo o que pode para fazer o trabalho direito. Esta é a segunda vez que o contrato e irei contratá-la novamente no futuro.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Designer Gráfico',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Fiquei preocupado porque, devido ao prazo apertado, este projeto não poderia ser realizado. Mas esse cara provou que eu estava errado, não só entregou um trabalho excelente, mas também conseguiu entregar 1 dia antes do prazo. E quando pedi algumas revisões ele as fez em MINUTOS. Estou ansioso para trabalhar com ele novamente e o recomendo totalmente. Obrigado novamente!",
  },
  {
    name: 'Sasha Ho',
    position: 'Contador',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Esse cara é um designer e desenvolvedor front-end de primeira linha. Ele se comunica bem, trabalha rápido e produz um trabalho de qualidade. Tivemos sorte de trabalhar com ele!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Diretor',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Esse cara é um profissional de TI jovem e talentoso, proativo e responsável, com uma forte ética de trabalho. Ele é muito forte em conversões PSD2HTML e tecnologia HTML/CSS. Ele aprende rápido e está ansioso por aprender novas tecnologias. Ele é focado e tem boa dinâmica para cumprir prazos e resultados excelentes.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)