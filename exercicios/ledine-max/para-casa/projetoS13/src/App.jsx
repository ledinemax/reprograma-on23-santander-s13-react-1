import './App.css'
import Bio from './components/Bio'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Header />
      <Bio />
      <Card
        Title="Musicas"
        image="https://media.tenor.com/LSUUwlrg3pgAAAAC/taylor-swift-meme.gif"
        description="Musica é o que me move todos os dias, sem musica não sei viver. Ouço estilos
        de musica variados, mas Taylor Swift, Mariana Sena, Jão e alguns (muitos) grupos de K-POP 
        estão sempre sendo priorizados."
        imageAlt="Taylor Swift com vestido lilas em um palco ajoelhada."
      />

        <Card
        Title="Bitch, Ima girl gammer!"
        description="Não tem muito o que falar aqui, adoro jogos, cresci envolta de variados jogos 
        por conta dos meus irmãos, e assim como musica não sei viver sem. Ultimamente tenho adoro jogar
        Overwatch e alguns jogos de terror."
        image="https://64.media.tumblr.com/5a8cda3acf4622c983acb45c3fd957bf/tumblr_pje0u3sYZ51s6ub5do4_400.gif"
        imageAlt="Mercy, personagem do jogo Overwatch, segurando uma pistola dourando,
        vestida com uma roupa de fada lilas, rosa claro e azul claro, usando oculos preto."
      />
        <Footer name="Lê"/>
    </>
  )
}

export default App
