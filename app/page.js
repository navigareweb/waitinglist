import Image from "next/image";
import copertina from "../public/heromiro.jpg";
import logo from "../public/logo.png";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          Dal 28 Ottobre al 14 Gennaio la mostra Miró a Torino sarà visitabile
          al Mastio Della Cittadella di Torino (C.so Galileo Ferraris, 0, 10121)
          Dal Lunedì al Venerdì: dalle ore 09,30 alle ore 19,30. Sabato e
          Domenica: dalle ore 09,30 alle ore 20,30. Ultimo ingresso trenta
          minuti prima della chiusura. La mostra racchiude all’incirca 100 opere
          tra dipinti, tempere, acquerelli, disegni, sculture e ceramiche
          provenienti da musei francesi e collezionisti privati, completata da
          una serie di opere grafiche, libri e documenti. La curatela è affidata
          al critico d’arte Achille Bonito Oliva, fra i maggiori e più stimati
          in Italia, insieme a Maïthé Vallès-Bled (già direttrice di musei
          francesi) e a Vincenzo Sanfo, esperto d’arte e organizzatore di grandi
          mostre internazionali.
        </p>
        <Link
          href={"https://www.navigaresrl.com/mostra/3573/"}
          className={styles.link}
        >
          Info Mostra
        </Link>
        <h3>
          Iscriviti entro il 15 Ottobre alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h3>
        <h4>* lo sconto verrà applicato SOLO all'acquisto in biglietteria</h4>
      </div>
      <form
        action="https://formsubmit.co/9342ac848191fdbd8f6fdf241baff761"
        method="POST"
        className={styles.form}
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome e cognome"
          required
        />
        <input type="text" id="mail" name="mail" placeholder="Email" required />
        <input
          type="text"
          id="città"
          name="città"
          placeholder="Città"
          required
        />

        <input type="submit" value="Invia" className={styles.submit} />
        <div className={styles.divForm}>
          <p>
            N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati e
            l'invio di mail da parte di NavigareSrl
          </p>
        </div>
      </form>
      <div className={styles.footer}>
        Una produzione di{" "}
        <Link href={"https://www.navigaresrl.com/"}>
          <Image src={logo} width={70} alt="logo"></Image>
        </Link>
      </div>
    </main>
  );
}
