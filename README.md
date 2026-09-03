# Gwiezdny Przewodnik

Statyczna strona astrologiczna (PL): horoskop dzienny, tarot dnia, fazy Księżyca, zgodność znaków, sennik, kamienie i minerały, dziennik kosmiczny oraz artykuły o astrologii. Zbudowana w czystym HTML/CSS/JS, hostowana na Netlify, monetyzowana przez Google AdSense.

🔗 Produkcja: https://gwiezdnyprzewodnik.pl

## Struktura projektu

```
├── index.html                    # Horoskop dzienny (strona główna)
├── tarot-dnia.html                # Karta tarota dnia
├── fazy-ksiezyca.html             # Kalkulator faz Księżyca
├── zgodnosc-znakow.html           # Kalkulator zgodności znaków
├── sennik.html                    # Sennik / interpretacja snów
├── kamienie-mineraly.html         # Kamienie i minerały dla znaków zodiaku
├── dziennik-kosmiczny.html        # Dziennik (zapisy lokalnie w przeglądarce)
├── ksiega-smakow.html             # Przepisy kulinarne pod znaki zodiaku
├── wiedza-astrologiczna.html      # Artykuły o astrologii
├── o-nas.html / kontakt.html      # Strony informacyjne
├── polityka-prywatnosci.html      # Polityka prywatności (RODO + AdSense)
├── regulamin.html                 # Regulamin serwisu
├── style.css                      # Style całej witryny
├── script.js                      # Logika interfejsu i obliczeń
├── consent.js                     # Baner zgody na cookies reklamowe (AdSense)
├── ads.txt                        # Autoryzacja sprzedawców reklam (Google AdSense)
├── netlify.toml                   # Konfiguracja przekierowań Netlify (/api/* → functions)
└── netlify/functions/groq.js      # Funkcja serverless (Netlify Functions, API Groq)
```

## Uruchomienie lokalnie

Strona jest w pełni statyczna, więc wystarczy dowolny serwer plików, np.:

```bash
npx serve .
```

albo w VS Code rozszerzenie **Live Server** → *Go Live*.

Jeśli chcesz przetestować funkcję serverless (`netlify/functions/groq.js`), użyj Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

## Reklamy (Google AdSense)

- Klient AdSense: `ca-pub-6047762879323596` (patrz `ads.txt` i tagi `<ins class="adsbygoogle">` na poszczególnych stronach).
- Przed pierwszym wyświetleniem reklamy użytkownik widzi baner zgody (`consent.js`) i wybiera reklamy **spersonalizowane** albo **tylko niezbędne** (`requestNonPersonalizedAds = 1`), zgodnie z wytycznymi Google dla wydawców z ruchem z EOG/UK: https://support.google.com/adsense/answer/9007336
- Wybór użytkownika jest zapamiętywany w `localStorage` (`gwz_ad_consent`).
- Nowe jednostki reklamowe dodajemy jako `<ins class="adsbygoogle">...</ins>` + `<script>gwzPushAd();</script>` (zamiast domyślnego `push({})`), żeby baner nadal działał poprawnie.

## Deploy

Repozytorium jest podpięte pod Netlify — push do gałęzi głównej wdraża zmiany automatycznie. Ręczny deploy: `netlify deploy --prod`.

## Licencja

Zobacz [LICENSE](./LICENSE) — wszystkie prawa zastrzeżone.
