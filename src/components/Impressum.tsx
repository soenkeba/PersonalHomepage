import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">
              Impressum
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  Sönke Bartling<br />
                  Paul-Lincke-Ufer 8c<br />
                  10999 Berlin
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Vertreten durch:
                </h3>
                <p>PD Dr. Sönke Bartling</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Kontakt:
                </h3>
                <p>
                  Telefon: 0151-5X858X55X85<br />
                  E-Mail: <a href="mailto:soenkebartling@gmail.com" className="text-primary hover:underline">soenkebartling@gmail.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Umsatzsteuer-ID:
                </h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE318087870
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Aufsichtsbehörde:
                </h3>
                <p>Landesprüfungsamt für Heilberufe beim Versorgungsamt Hannover</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Berufsbezeichnung:
                </h3>
                <p>
                  Ärzte<br />
                  Zuständige Kammer: Ärztekammer Berlin<br />
                  Verliehen durch: Bundesrepublik Deutschland<br />
                  Es gelten folgende berufsrechtliche Regelungen: Arzt-Gesetzbuch Regelungen einsehbar unter:{' '}
                  <a href="http://www.aerztekammer-nrw.de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    http://www.aerztekammer-nrw.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">
                  Haftungsausschluss
                </h2>

                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Haftung für Inhalte
                </h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-900 dark:text-white">
                  Haftung für Links
                </h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                  permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-900 dark:text-white">
                  Urheberrecht
                </h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                  erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                  Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-900 dark:text-white">
                  Datenschutz
                </h3>
                <p>
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
                  Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
                  nicht an Dritte weitergegeben.<br />
                  <br />
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte
                  ist nicht möglich.<br />
                  <br />
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
                  widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                </p>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Impressum

