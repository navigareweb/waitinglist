import Image from "next/image";
import copertina from "../public/heromiro.jpg";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image src={copertina} width={"100%"} className={"img"} />
        <p>
          La mostra racchiude all’incirca 100 opere tra dipinti, tempere,
          acquerelli, disegni, sculture e ceramiche provenienti da musei
          francesi e collezionisti privati, completata da una serie di opere
          grafiche, libri e documenti. La curatela è affidata al critico d’arte
          Achille Bonito Oliva, fra i maggiori e più stimati in Italia, insieme
          a Maïthé Vallès-Bled (già direttrice di musei francesi) e a Vincenzo
          Sanfo, esperto d’arte e organizzatore di grandi mostre internazionali.
        </p>
        <Link
          href={"https://www.navigaresrl.com/mostra/3573/"}
          className={styles.link}
        >
          Info Mostra
        </Link>
        <h3>
          Iscriviti alla nostra Waiting List per ricevere uno sconto del 30%
        </h3>
        <h4>* lo sconto verrà applicato SOLO all'acquisto in biglietteria</h4>
      </div>
      <form className={styles.form}>
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
      <div className={styles.footer}></div>
    </main>
  );
}
