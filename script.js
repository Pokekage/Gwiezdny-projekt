// ============================================================
// GWIEZDNY PRZEWODNIK — script.js (wersja rozszerzona)
// ============================================================
 
// --- 1. BAZA DANYCH ---
 
// 28 przepisów (4 tygodnie bez powtórzeń)
const allRecipes = [
    { t: "Złociste Risotto", d: "Wzmacnia pewność siebie i dodaje blasku.", m: "Składniki: Ryż arborio, szafran, parmezan, bulion warzywny.\n\nGotuj powoli, podlewając bulionem łyżką po łyżce i mieszając, aż ziarna będą kremowe i al dente. Na koniec, już po zdjęciu z ognia, dodaj zimne masło i świeżo starty parmezan — to sekret kremowej konsystencji. Podawaj natychmiast." },
    { t: "Zupa Dyniowa", d: "Rozgrzewa duszę i koi zmysły.", m: "Upiecz dynię hokkaido z czosnkiem w 200°C przez 30 min, aż zmięknie. Zblenduj z mleczkiem kokosowym, świeżym imbirem i szczyptą gałki muszkatołowej. Podawaj z prażonymi pestkami dyni i kroplą oleju z chili." },
    { t: "Sałatka Mocy", d: "Daje witalność i jasność umysłu.", m: "Połącz świeży szpinak, ziarna granatu, prażone orzechy włoskie i pokruszony ser kozi. Skrop dresingiem: łyżka miodu, łyżka musztardy francuskiej, 3 łyżki oliwy extra virgin, sól, pieprz. Podawaj od razu." },
    { t: "Napar Intuicji", d: "Oczyszcza umysł i otwiera trzecie oko.", m: "Zaparzaj świeżą miętę, plasterki ogórka i sok z połowy cytryny przez 5 minut w gorącej wodzie. Możesz dodać szczyptę soli himalajskiej dla uziemienia i łyżeczkę miodu manuka dla słodyczy. Pij w ciszy." },
    { t: "Gnocchi Mędrca", d: "Starożytny smak spokoju.", m: "Podsmaż gotowe gnocchi na klarowanym maśle z dużą ilością świeżej szałwii, aż staną się złociste i chrupiące. Posyp płatkami chili, tartym twardym serem (np. Grana Padano) i świeżo mielonym czarnym pieprzem." },
    { t: "Eliksir Słońca", d: "Poprawia humor i dodaje energii.", m: "Wyciśnij sok z dwóch dużych pomarańczy i połowy grejpfruta. Dodaj pół łyżeczki kurkumy w proszku, odrobinę płynnego miodu i szczyptę świeżo mielonego czarnego pieprzu (aktywuje kurkuminę). Wymieszaj energicznie i pij od razu." },
    { t: "Bataty z Rozmarynem", d: "Uziemia energię rozbieganą w gwiazdach.", m: "Pokrój bataty w słupki, wymieszaj z oliwą, dużą ilością świeżego rozmarynu, solą wędzoną i odrobiną czosnku w proszku. Piecz w 200°C przez 25 minut, przewracając w połowie czasu. Na koniec posyp płatkami soli morskiej." },
    { t: "Zaczarowana Owsianka", d: "Napełnia energią na cały poranek.", m: "Gotuj płatki owsiane w mleku roślinnym (2:1). Dodaj łyżeczkę cynamonu, szczyptę kardamonu i odrobinę wanilii. Podawaj z gruszką pokrojoną w plasterki, łyżką masła migdałowego i skropioną syropem klonowym." },
    { t: "Pasta Buraczana", d: "Wzmacnia krew i odwagę ducha.", m: "Ugotuj lub upiecz 3 buraki. Zblenduj z łyżką tahini, sokiem z cytryny, ząbkiem czosnku, oliwą i solą. Podawaj z chrupiącym chlebem pita i garścią prażonych orzeszków piniowych na wierzchu." },
    { t: "Tagliatelle z Truflami", d: "Luksus dla podniebienia i duszy.", m: "Ugotuj tagliatelle al dente. Na patelni rozpuść masło, dodaj odrobinę wody po makaronie. Wrzuć makaron, intensywnie mieszając. Na talerzu zetrzyj świeżą truflę (lub dodaj kilka kropel olejku truflowego) i posyp parmezanem." },
    { t: "Zupa Miso z Tofu", d: "Japońska mądrość w każdej łyżce.", m: "Rozpuść 2 łyżki pasty miso (nie gotuj!) w gorącym bulionie dashi. Dodaj pokrojone w kostkę tofu jedwabiste, wakame z paczki i cienko pokrojone dymki. Podawaj natychmiast z kilkoma kroplami oleju sezamowego." },
    { t: "Placki Ziemniaczane Babuni", d: "Ciepło domu i bezpieczeństwo przeszłości.", m: "Zetrzyj 4 ziemniaki i 1 cebulę, odciśnij wodę. Dodaj jajko, 2 łyżki mąki, sól i pieprz. Smaż na oleju z obu stron na złoto. Podawaj ze śmietaną i sosem jabłkowym — klasyk doskonały." },
    { t: "Smoothie Zorzy Polarnej", d: "Barwy północy w szklance.", m: "Zblenduj: garść mrożonych jagód, pół banana, łyżkę siemienia lnianego, szklankę mleka owsianego i łyżeczkę spiruliny (doda szmaragdowego koloru). Przelej do wysokiej szklanki i udekoruj świeżymi jagodami." },
    { t: "Curry z Ciecierzycą", d: "Indyjski ogień otwierający czakry.", m: "Podsmaż cebulę, czosnek i imbir. Dodaj 2 łyżki pasty curry, puszkę ciecierzycy i puszkę pomidorów. Gotuj 20 minut. Na końcu dodaj mleczko kokosowe i sporą garść świeżego szpinaku. Podawaj z ryżem basmati i chlebkiem naan." },
    { t: "Zupa Ogórkowa z Koprem", d: "Chłód i lekkość letniego poranka.", m: "Zblenduj 2 duże ogórki z jogurtem greckim, dużą garścią koperku, ząbkiem czosnku, sokiem z cytryny, solą i oliwą. Podawaj schłodzoną z kostkami lodu i dekoracyjnym plasterkiem ogórka." },
    { t: "Pieczona Ryba z Ziołami", d: "Czystość morza i mądrość głębin.", m: "Natrzyj filet z dorsza lub sandacza oliwą, solą, pieprzem, tymiankiem i rozmarynem. Piecz w 180°C przez 15-18 minut. Podawaj ze świeżym sosem z kaparów, pietruszki, cytryny i oliwy." },
    { t: "Tarta Cytrynowa Księżyca", d: "Kwaskowata jak tajemnica, słodka jak spełnienie.", m: "Wymieszaj sok i skórkę z 4 cytryn z 4 jajkami i 150g cukru. Gotuj na wolnym ogniu ciągle mieszając do zgęstnienia. Dodaj 100g masła. Wlej do upieczonego spodu kruchego i studź 2 godziny." },
    { t: "Ryż z Mango i Kokosem", d: "Tropikalna brama do innych wymiarów.", m: "Ugotuj kleisty ryż (mochi rice) w mleczku kokosowym z cukrem i solą. Podawaj ciepły z pokrojonym dojrzałym mango i posypany prażonymi sezamem. Klasyczny tajski deser — prosty i magiczny." },
    { t: "Penne all'Arrabbiata", d: "Ognisty charakter dla odważnych dusz.", m: "Podsmaż 4 ząbki czosnku i sporą ilość chili w oliwie. Dodaj puszkę pomidorów San Marzano, sól i szczyptę cukru. Gotuj 15 minut. Wymieszaj z ugotowanym penne i posyp świeżą bazylią oraz parmezanem." },
    { t: "Zupa Soczewicowa Proroka", d: "Pożywienie starożytnych myślicieli.", m: "Podsmaż cebulę, czosnek, kminek i kurkumę. Dodaj czerwoną soczewicę, bulion warzywny i gotuj 20 minut do miękkości. Zblenduj połowę zupy dla kremowej konsystencji. Podawaj z chrupiącą cebulą i sokiem z cytryny." },
    { t: "Avocado Toast Kosmiczny", d: "Nowoczesny rytuał porannej energii.", m: "Rozgnieć dojrzałe awokado z sokiem z limonki, solą i pieprzem. Nałóż na grillowany chleb na zakwasie. Posyp płatkami chili, pestkami granatu, ziarnami konopi i skrop wysokiej jakości oliwą. Udekoruj jajkiem w koszulce." },
    { t: "Herbatka Wieczornych Gwiazd", d: "Kołysze umysł ku spokojnym snom.", m: "Zaparzaj przez 7 minut: 1 łyżeczkę lawendy, 1 łyżeczkę rumianku, 1 łyżeczkę lipy. Przelej przez sitko, dodaj łyżeczkę miodu i kilka kropel ekstraktu z wanilii. Pij w ciepłym, przyciemnionym miejscu przed snem." },
    { t: "Pieczona Dynia z Fetą", d: "Kontrasty smaku jak balans we wszechświecie.", m: "Pokrój dynię butternut w półksiężyce, skrop oliwą, solą, pieprzem i płatkami chili. Piecz 25 minut w 200°C. Posyp pokruszoną fetą, świeżą miętą i granatem. Skrop miodem przed podaniem." },
    { t: "Pancakes Jutrzenki", d: "Złoty początek nowego dnia.", m: "Wymieszaj: 1 szklanka mąki, 1 łyżka cukru, 1 łyżeczka proszku do pieczenia, szczypta soli. Dodaj 1 jajko, 3/4 szklanki mleka, 2 łyżki roztopionego masła. Smaż na gorącej patelni. Podawaj z syropem klonowym i jagodami." },
    { t: "Sałatka Nieba i Ziemi", d: "Łączy to, co wyższe z tym, co zakorzenione.", m: "Pokrój 2 gruszki i 2 buraki (pieczone) w cienkie plasterki. Ułóż na rukoli z orzechami włoskimi i serem pleśniowym. Polej dresingiem balsamicznym: 2 łyżki octu balsamicznego, 1 łyżka miodu, 3 łyżki oliwy." },
    { t: "Wok z Tofu i Warzywami", d: "Azjatycka harmonia pięciu żywiołów.", m: "Na rozgrzanym woku podsmaż twarde tofu na złoto. Dodaj: paprykę, brokuły, marchew i kiełki fasoli. Polej sosem: sos sojowy, ocet ryżowy, imbir, czosnek, odrobina miodu. Smaż 3 minuty. Podawaj z ryżem." },
    { t: "Czekoladowa Fontanna Nocy", d: "Gorzki sekret wszechświata.", m: "Rozpuść 200g gorzkiej czekolady (min. 70%) z 100ml gorącej śmietanki. Dodaj szczyptę soli morskiej, szczyptę chili i łyżeczkę kawy espresso. Podawaj jako fondue z owocami: truskawki, banan, gruszka." },
    { t: "Zupa Pomidorowa Słońca", d: "Esencja letniego południa.", m: "Podsmaż cebulę i czosnek, dodaj 1kg dojrzałych pomidorów (lub 2 puszki), garść bazylii i szczyptę cukru. Gotuj 25 minut. Zblenduj i dopraw. Podawaj z łyżką mascarpone w środku i grzanką z czosnkiem." }
];
 
// 49 tekstów horoskopów (7 tygodni bez powtórzeń)
const horoscopeTexts = [
    "Dzisiejsze gwiazdy sprzyjają Twoim planom finansowym. Uważaj jednak na gwałtowne emocje — Merkury w opozycji ostrzega przed pochopnymi decyzjami.",
    "Intuicja poprowadzi Cię przez trudne decyzje. Zaufaj głosowi serca, nawet gdy rozum protestuje.",
    "To idealny moment na porządki — zarówno w domu, jak i w relacjach z bliskimi. Wenus harmonizuje Twoją przestrzeń.",
    "Twoja energia jest dziś zaraźliwa! Wykorzystaj to, by zainspirować kogoś ważnego dla Ciebie.",
    "Kosmos radzi: zwolnij. Czasem mniej znaczy więcej, a odpoczynek to też forma pracy nad sobą.",
    "Czeka Cię niespodziewana wiadomość, która zmieni Twoje spojrzenie na nadchodzący tydzień.",
    "Wibracje Twojego znaku sugerują skupienie na kreatywności. Stwórz coś pięknego — świat czeka na Twój dar.",
    "Saturn sprzyja dziś cierpliwości. To, czego szukasz, już jest w drodze do Ciebie — nie wyprzedzaj wydarzeń.",
    "Jowisz otwiera Ci drzwi do nowych możliwości zawodowych. Bądź gotowy na nieoczekiwane zaproszenia.",
    "Twój znak rezonuje dziś z energią wody. Idź na spacer nad rzekę lub weź długą kąpiel — to przywróci równowagę.",
    "Mars aktywuje Twój potencjał przywódczy. Inni będą patrzeć na Ciebie z podziwem — bądź tego wart.",
    "Wenus w Twoim znaku przynosi harmonię w miłości. To dobry dzień na szczere rozmowy z partnerem.",
    "Uran przynosi dziś zaskoczenie — ale nie panikuj. Chaos jest często wstępem do nowego porządku.",
    "Twoja chakra serca jest dziś szczególnie otwarta. Podaruj komuś bliskiemu chwilę prawdziwej uwagi.",
    "Księżyc w pełni wzmacnia Twoje zdolności twórcze. Zapisz sny z ubiegłej nocy — mogą zawierać wskazówki.",
    "Trygon Słońca i Neptuna maluje Twój dzień w barwy inspiracji. Muzyka i sztuka będą dziś Twoim lekiem.",
    "Energia dnia sprzyja nauce i zdobywaniu nowych umiejętności. Otwórz książkę lub zapisz się na kurs.",
    "Chiron dotyka dziś Twojego znaku, wzywając do uzdrowienia starych ran. Wybaczenie zaczyna się od siebie.",
    "Merkury przyspiesza Twoje myśli — masz dziś wyjątkową zdolność do komunikacji i negocjacji.",
    "Pluton transformuje Twoje głęboko zakorzenione przekonania. To może boleć, ale przyniesie wolność.",
    "Gwiazdy wskazują na spotkanie z osobą, która zmieni Twoje życie. Bądź otwarty na nowe znajomości.",
    "Twój znak jest dziś w harmonii z żywiołem ziemi. Dotknij natury, posadź coś lub po prostu chodź boso.",
    "Słońce w sekstylu do Saturna przynosi nagrody za wcześniej włożoną pracę. Cierpliwość się opłaciła.",
    "Czujesz się rozdarty między dwoma drogami? Dziś Merkury da Ci znak — słuchaj rozmów wokół siebie.",
    "Twoja intuicja dziś mówi głośno — szczególnie w sprawach sercowych. Uwierz w to, co czujesz.",
    "Aspekty dnia sprzyjają podróżom — nawet krótka wycieczka za miasto naładuje Twoje baterie.",
    "Marte wchodzi w Twój dom kariery. To może być przełomowy tydzień — działaj odważnie.",
    "Wenus kwadrat do Saturna przestrzega przed romantyczną iluzją. Patrz na fakty, nie tylko na marzenia.",
    "Dzień wymaga od Ciebie elastyczności. Plany mogą się zmienić, ale to doprowadzi Cię do lepszego miejsca.",
    "Twoja aura dziś przyciąga życzliwych ludzi. Sieć kontaktów, którą zbudujesz, okaże się bezcenna.",
    "Neptun koi Twoje nerwy. Medytacja lub głębokie oddychanie da Ci dziś wyjątkowe rezultaty.",
    "Energia Koziorożca w tle sprzyja organizacji. Stwórz plan, a gwiazdy zadba o resztę.",
    "Jowisz powiększa Twoją hojność — gest uprzejmości wobec nieznajomego wróci do Ciebie trójnasób.",
    "Dziś wyjątkowo silna jest energia Twojego elementu. Czujesz to? Nie bój się działać instynktownie.",
    "Słońce w zenicie Twojego horyzontu czyni Cię dziś szczególnie widocznym. Czas zabłysnąć.",
    "Bliźniacza energia Merkurego sprawia, że możesz dziś prowadzić dwa projekty jednocześnie — i oba zakończyć sukcesem.",
    "Ciemnia przed świtem — dziś możesz czuć się zmęczony, ale gwiazdy zapewniają: jutro przyniesie przełom.",
    "Twój znak i znak Skorpiona tworzą dziś tajemnicze połączenie. Coś skrytego wyjdzie na jaw.",
    "Energia dnia to czysta magia połączeń. Zadzwoń do kogoś, z kim dawno nie rozmawiałeś.",
    "Raki i Ryby wysyłają Ci dziś falę empatii. Twoja zdolność do słuchania jest dziś darem dla innych.",
    "Strzałka Strzelca wskazuje w górę — myśl szeroko, planuj globalnie, zacznij lokalnie.",
    "Kosmiczna cisza przed burzą. Dziś zbierz siły — wielkie rzeczy zaczną się dziać już jutro.",
    "Twój znak rezonuje z gwiazdozbiorem Oriona — masz dziś hart myśliwego i cel widoczny jak nigdy.",
    "Aspekt Wenus i Marsa tworzy iskrę. W relacjach coś ważnego może się dziś zacząć lub zakończyć.",
    "Libra wprowadza balans w Twoje życie. To idealny dzień na trudne kompromisy i dyplomatyczne rozmowy.",
    "Dziś gwiazdy mówią: zadbaj o ciało. Spacer, ruch, dobry posiłek — to Twój rytuał na dziś.",
    "Twoja mądrość tego dnia pochodzi z wnętrza, nie z zewnątrz. Zamknij oczy i zapytaj siebie — znasz odpowiedź.",
    "Energia transformacji Plutona zbliża się do kulminacji w Twoim znaku. Coś się definitywnie kończy — i to dobrze.",
    "Gwiezdny taniec dobiega końca tygodnia. Podsumuj, czego się nauczyłeś, i wejdź w nowy cykl z wdzięcznością."
];
 
const moonPhases = [
    {
        name: "Nów", icon: "🌑",
        desc: "Czas na nowe początki i głęboką introspekcję. Zasiej ziarna intencji — to co zaczniesz teraz, urośnie razem z księżycem.",
        elixir: "Napar z lawendy i lotosu",
        doList: ["Pisz listy intencji i marzeń", "Medytuj i słuchaj ciszy", "Zacznij nowy projekt lub nawyk", "Oczyść przestrzeń domową"],
        avoidList: ["Podejmowania ważnych publicznych decyzji", "Forsowania się fizycznie", "Kłótni i konfrontacji", "Wydawania dużych sum pieniędzy"]
    },
    {
        name: "Przybywający Sierp", icon: "🌒",
        desc: "Moment na ustalanie intencji i siew nasion przyszłości. Energia rośnie — działaj z wiarą i entuzjazmem.",
        elixir: "Woda z cytryną i miętą",
        doList: ["Rób pierwsze kroki w nowych planach", "Buduj kontakty i sieć znajomości", "Ucz się nowych rzeczy", "Dbaj o optymizm i pozytywne myślenie"],
        avoidList: ["Zniechęcania się przy pierwszych trudnościach", "Rozpraszania uwagi na zbyt wiele spraw", "Lenistwa i odkładania na później", "Pesymistycznych rozmów"]
    },
    {
        name: "Pierwsza Kwadra", icon: "🌓",
        desc: "Budowanie siły i pokonywanie przeszkód. To faza decyzji — działaj zdecydowanie, nawet gdy jest trudno.",
        elixir: "Zielona herbata z imbirem",
        doList: ["Podejmuj trudne decyzje", "Ćwicz i dbaj o kondycję", "Rozwiązuj konflikty wprost", "Buduj solidne fundamenty"],
        avoidList: ["Ucieczki od problemów", "Niezdecydowania i wahania", "Zaniedbywania zdrowia", "Kompromisów kosztem własnych wartości"]
    },
    {
        name: "Przybywający Księżyc", icon: "🌔",
        desc: "Dopracowywanie planów i cierpliwe oczekiwanie. Zbliżasz się do szczytu — skup się i nie spuszczaj celu z oczu.",
        elixir: "Sok z granatu z cytryną",
        doList: ["Dopracowuj szczegóły projektów", "Wzmacniaj relacje z bliskimi", "Praktykuj wdzięczność", "Zbieraj informacje i analizuj"],
        avoidList: ["Pośpiechu i skrótów", "Angażowania się w plotki", "Nadmiernego perfekcjonizmu blokującego działanie", "Zaciągania nowych zobowiązań"]
    },
    {
        name: "Pełnia", icon: "🌕",
        desc: "Kulminacja energii — czas celebracji, wdzięczności i manifestacji. Twoje intencje z nowiu dojrzały. Świętuj i zauważaj efekty.",
        elixir: "Woda różana z miodem",
        doList: ["Świętuj sukcesy i osiągnięcia", "Spędź czas z bliskimi", "Oczyszczaj kryształy i przedmioty pod światłem księżyca", "Praktykuj rytuały wdzięczności"],
        avoidList: ["Podejmowania pochopnych decyzji (emocje są intensywniejsze)", "Kłótni — energia jest bardzo naładowana", "Przejadania się i nadużywania używek", "Zaczynania nowych projektów"]
    },
    {
        name: "Ubywający Księżyc", icon: "🌖",
        desc: "Czas dzielenia się i dawania. Energia powoli opada — korzystaj z owoców pracy i przekazuj wiedzę dalej.",
        elixir: "Napar z szałwii i rumianku",
        doList: ["Podsumuj i oceń rezultaty", "Pomagaj innym i dziel się wiedzą", "Porządkuj dokumenty i sprawy administracyjne", "Odpoczywaj i regeneruj się"],
        avoidList: ["Rozpoczynania wielkich przedsięwzięć", "Nadmiernej aktywności społecznej", "Siedzenia po nocach", "Angażowania się emocjonalnie w cudze problemy"]
    },
    {
        name: "Ostatnia Kwadra", icon: "🌗",
        desc: "Uwalnianie i oczyszczenie. Czas odpuścić to, co Ci nie służy — przekonania, relacje, nawyki. Rób miejsce na nowe.",
        elixir: "Ciepłe kakao ze szczyptą chili",
        doList: ["Wyrzucaj zbędne rzeczy i rób porządki", "Odpuszczaj stare urazy i wybaczaj", "Kończ niedokończone sprawy", "Reflektuj nad minionymi tygodniami"],
        avoidList: ["Zaczynania czegokolwiek nowego", "Angażowania się w konflikty", "Dramatyzowania i roztrząsania przeszłości", "Nadmiernej konsumpcji mediów"]
    },
    {
        name: "Ubywający Sierp", icon: "🌘",
        desc: "Głęboki odpoczynek i regeneracja. To najcichsza faza cyklu — poddaj się jej rytmowi i ładuj baterie przed nowym nowiem.",
        elixir: "Melisa z lipą i lawendą",
        doList: ["Śpij dłużej i odpoczywaj", "Medytuj i praktykuj uważność", "Spędź czas w naturze i ciszy", "Planuj intencje na nadchodzący nów"],
        avoidList: ["Forsowania się i nadmiernego wysiłku", "Ważnych spotkań biznesowych", "Zaczynania diety lub intensywnych ćwiczeń", "Podejmowania długoterminowych zobowiązań"]
    }
];
 
// --- 2. FUNKCJE DATY ---
function getDayOfYear() {
    const now = new Date();
    return Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
}
 
// Horoskop: każdy znak inny tekst każdego dnia, powtórzenia po 49 dniach
function getDailyIndex(arr, signIndex = 0) {
    return (getDayOfYear() * 3 + signIndex * 7) % arr.length;
}
 
// Przepis: każdy znak dostaje INNY przepis tego samego dnia
// Używamy innego przesunięcia (signIndex * 3) by znaki nie nakładały się
function getDailyRecipeIndex(signIndex) {
    const day = getDayOfYear();
    // Przesunięcie co 3 przepisy na znak — przy 28 przepisach i 12 znakach
    // każdy znak ma inny przepis, i zmienia się codziennie
    return (day + signIndex * 3) % allRecipes.length;
}
 
// --- 3. INICJALIZACJA ---
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('zodiac-grid');
    const signs = [
        { name: "Baran", sym: "♈" }, { name: "Byk", sym: "♉" },
        { name: "Bliźnięta", sym: "♊" }, { name: "Rak", sym: "♋" },
        { name: "Lew", sym: "♌" }, { name: "Panna", sym: "♍" },
        { name: "Waga", sym: "♎" }, { name: "Skorpion", sym: "♏" },
        { name: "Strzelec", sym: "♐" }, { name: "Koziorożec", sym: "♑" },
        { name: "Wodnik", sym: "♒" }, { name: "Ryby", sym: "♓" }
    ];
 
    grid.innerHTML = "";
    signs.forEach((s, index) => {
        const card = document.createElement('div');
        card.className = 'sign-card';
        card.innerHTML = `<span class="sign-symbol">${s.sym}</span><p>${s.name}</p>`;
        card.onclick = () => showHoroscope(s.name, index);
        grid.appendChild(card);
    });
 
    // Cząsteczki gwiezdnego tła
    createStarParticles();
});
 
// --- 4. CZĄSTECZKI (GWIAZDY W TLE) --- wyłączone dla wydajności
function createStarParticles() {
    // Gwiazdki wyłączone - zbyt duże obciążenie dla przeglądarki
}
 
// --- 5. NAWIGACJA ---
function showTab(idOrEvent, btnOrId) {
    // Support both old: showTab(event, 'id') and new: showTab('id', btnEl)
    let id, btn;
    if (typeof idOrEvent === 'string') {
        id = idOrEvent;
        btn = btnOrId;
    } else {
        id = btnOrId;
        btn = idOrEvent ? idOrEvent.currentTarget : null;
    }
 
    document.querySelectorAll('.tab-content').forEach(t => {
        t.classList.remove('active');
        t.style.animation = '';
    });
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
 
    const target = document.getElementById(id);
    if (!target) return;
    target.classList.add('active');
    target.style.animation = 'fadeInUp 0.5s ease forwards';
 
    if (btn && typeof btn.classList !== 'undefined') {
        btn.classList.add('active');
    }
 
    if (id === 'recipes-tab') renderRecipes();
    if (id === 'sennik-tab') renderDreamHistory();
}
 
// --- 6. HOROSKOP ---
async function showHoroscope(sign, signIndex) {
    lastSelectedSign = sign;
    lastSelectedSignIndex = signIndex;
    const recipeIndex = getDailyRecipeIndex(signIndex);
    const recipe = allRecipes[recipeIndex];
 
    const display = document.getElementById('horoscope-display');
    display.style.display = 'block';
    display.style.animation = 'fadeInUp 0.5s ease forwards';
    document.getElementById('selected-sign').innerText = sign;
    display.scrollIntoView({ behavior: 'smooth', block: 'center' });
 
    // Pokaż loader
    const horoEl = document.getElementById('horoscope-text');
    horoEl.innerHTML = `<span style="color:var(--gold);font-style:italic;opacity:0.7;">✨ Gwiazdy przemawiają... ✨</span>`;
 
    const today = new Date();
    const dateStr = today.toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
 
    const prompt = `Jesteś doświadczonym astrologiem piszącym dla polskiej witryny mistycznej. 
Napisz horoskop dzienny dla znaku ${sign} na dzień ${dateStr}.
 
Horoskop musi być:
- Napisany po polsku, pięknym poetyckim językiem
- Podzielony na 3 krótkie akapity (każdy 2-3 zdania)
- Akapit 1: ogólna energia dnia, planety, nastrój
- Akapit 2: miłość / relacje / emocje  
- Akapit 3: praca / finanse / zdrowie + motywujące zakończenie
- Tajemniczy, mistyczny, ale konkretny i pomocny
- BEZ nagłówków, BEZ gwiazdek, BEZ cudzysłowów — tylko czysty tekst z pustą linią między akapitami
- Długość: ok. 120-150 słów łącznie`;
 
    try {
        const text = await callGemini(prompt);
        // Renderuj z ładnym formatowaniem — akapity jako osobne bloki
        const paragraphs = text.trim().split(/\n\n+/);
        horoEl.innerHTML = paragraphs
            .map(p => `<p style="margin-bottom:14px;line-height:1.85;">${p.trim()}</p>`)
            .join('');
    } catch (e) {
        // Fallback na statyczny tekst jeśli AI zawiedzie
        const textIndex = getDailyIndex(horoscopeTexts, signIndex);
        typewriterEffect('horoscope-text', horoscopeTexts[textIndex]);
    }
 
    document.getElementById('daily-dish-hint').innerHTML = `
        <p style="font-size:0.9rem; margin-bottom: 10px;">🍲 Magiczny posiłek gwiazd na dziś: <strong style="color:var(--gold)">${recipe.t}</strong></p>
        <button class="action-btn" onclick="goToDailyRecipe()">ODKRYJ PRZEPIS ✨</button>
    `;
}
 
function typewriterEffect(elementId, text) {
    const el = document.getElementById(elementId);
    el.textContent = '';
    let i = 0;
    // Budujemy string osobno i przypisujemy za jednym razem — unikamy
    // problemu z gubionymi spacjami przy polskich znakach i innerText +=
    let built = '';
    const interval = setInterval(() => {
        if (i < text.length) {
            built += text[i];
            el.textContent = built;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 22);
}
 
// Zapamiętany znak z horoskopu
let lastSelectedSign = null;
let lastSelectedSignIndex = null;
 
function goToDailyRecipe() {
    showTab('recipes-tab', null);
}
 
// --- 7. PRZEPISY ---
async function renderRecipes() {
    const list = document.getElementById('recipes-list');
    const now = new Date();
    const dateStr = now.toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const todayKey = now.toISOString().slice(0, 10); // YYYY-MM-DD
 
    // Wybrany znak (jeśli user kliknął horoskop) lub fallback
    const sign = lastSelectedSign || 'Baran';
    const cacheKey = `recipe_${sign}_${todayKey}`;
 
    // Sprawdź cache w localStorage
    let cached = null;
    try { cached = JSON.parse(localStorage.getItem(cacheKey)); } catch(e) {}
 
    // Statyczne przepisy zawsze widoczne
    list.innerHTML = '';
 
    // Karta dnia na górze — AI lub loader
    const dailyCard = document.createElement('div');
    dailyCard.className = 'recipe-card daily-highlight';
    dailyCard.id = 'daily-recipe-card';
 
    if (cached) {
        // Mamy cache — pokaż od razu
        dailyCard.innerHTML = buildDailyCardHTML(cached.title, cached.desc, cached.recipe, sign, dateStr);
        dailyCard.onclick = () => openModal(cached.title, cached.recipe);
    } else {
        // Loader
        dailyCard.innerHTML = `
            <span class="daily-badge">🌟 PRZEPIS GWIAZD NA DZIŚ 🌟</span>
            <p style="color:var(--gold);font-family:'Cinzel',serif;font-size:0.85rem;margin:10px 0;">✨ Gwiazdy komponują przepis dla ${sign}... ✨</p>
        `;
    }
    list.appendChild(dailyCard);
 
    // Statyczne przepisy poniżej
    allRecipes.forEach((r, i) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.animationDelay = `${i * 0.05}s`;
        card.innerHTML = `<h3>${r.t}</h3><p>${r.d}</p>`;
        card.onclick = () => openModal(r.t, r.m);
        list.appendChild(card);
    });
 
    // Generuj AI jeśli brak cache
    if (!cached) {
        try {
            const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
            const prompt = `Jesteś astrologicznym kucharzem. Stwórz unikalny przepis kulinarny na dziś (dzień ${dayOfYear} roku ${now.getFullYear()}) dla znaku zodiaku ${sign}.
 
Przepis musi być:
- Po polsku, z poetycką, mistyczną nazwą nawiązującą do astrologii lub natury
- Dopasowany energetycznie do znaku ${sign} i jego żywiołu
- Inny niż poprzednie dni — dziś jest dzień ${dayOfYear}/365 roku
- Realny do wykonania w domu (max 6 składników)
- Może być danie główne, zupa, deser, napój lub śniadanie
 
Odpowiedz TYLKO w formacie JSON (bez żadnego tekstu przed ani po):
{
  "title": "Nazwa przepisu",
  "desc": "Jednozdaniowy opis mistyczny/astrologiczny (max 15 słów)",
  "ingredients": "Składniki: składnik1, składnik2, składnik3...",
  "steps": "Kroki przygotowania w 3-4 zdaniach."
}`;
 
            const text = await callGemini(prompt);
            const clean = text.replace(/```json|```/g, '').trim();
            const data = JSON.parse(clean);
            const recipe = `${data.ingredients}\n\n${data.steps}`;
 
            // Zapisz do cache
            localStorage.setItem(cacheKey, JSON.stringify({
                title: data.title,
                desc: data.desc,
                recipe: recipe
            }));
 
            // Aktualizuj kartę
            const card = document.getElementById('daily-recipe-card');
            if (card) {
                card.innerHTML = buildDailyCardHTML(data.title, data.desc, recipe, sign, dateStr);
                card.onclick = () => openModal(data.title, recipe);
            }
        } catch(e) {
            // Fallback na statyczny przepis
            const fallback = allRecipes[getDailyIndex(allRecipes, 0)];
            const card = document.getElementById('daily-recipe-card');
            if (card) {
                card.innerHTML = buildDailyCardHTML(fallback.t, fallback.d, fallback.m, sign, dateStr);
                card.onclick = () => openModal(fallback.t, fallback.m);
            }
        }
    }
}
 
function buildDailyCardHTML(title, desc, recipe, sign, dateStr) {
    return `
        <span class="daily-badge">🌟 PRZEPIS GWIAZD DLA ${sign.toUpperCase()} — DZIŚ 🌟</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <span style="font-size:0.75rem;color:rgba(212,175,55,0.6);margin-top:8px;display:block;">Kliknij, by zobaczyć przepis ✨</span>
    `;
}
 
// --- 8. MODAL ---
function openModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    // Zamień \n na <br> dla lepszego formatowania
    document.getElementById('modal-body').innerHTML = text.replace(/\n/g, '<br>');
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'block';
    setTimeout(() => modal.querySelector('.modal-content').style.transform = 'scale(1)', 10);
}
 
function closeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}
 
// --- 9. LUNACJA ---
function getMoonPhaseForDate(date) {
    const refDate = new Date(2000, 0, 6);
    const days = (date - refDate) / (1000 * 60 * 60 * 24);
    const cycle = 29.530588853;
    const pos = ((days % cycle) + cycle) % cycle;
    const index = Math.floor(pos / (cycle / 8)) % 8;
    return { phase: moonPhases[index], pos: pos, cycle: cycle };
}
 
function renderMoonResult(phase, pos, cycle, containerId) {
    const res = document.getElementById(containerId);
    res.style.display = 'block';
    res.style.animation = 'fadeInUp 0.6s ease forwards';
 
    const iconEl = res.querySelector('.moon-icon-el');
    iconEl.style.transform = 'scale(0)';
    iconEl.textContent = phase.icon;
    setTimeout(() => {
        iconEl.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        iconEl.style.transform = 'scale(1)';
    }, 100);
 
    res.querySelector('.moon-name-el').textContent = phase.name;
    res.querySelector('.moon-desc-el').textContent = phase.desc;
    res.querySelector('.moon-elixir-el').textContent = '✨ Zalecany eliksir: ' + phase.elixir;
 
    // Pasek cyklu (jak daleko w cyklu 29.53 dni)
    const pct = Math.round((pos / cycle) * 100);
    const bar = res.querySelector('.moon-cycle-bar-fill');
    if (bar) {
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = pct + '%'; }, 200);
        res.querySelector('.moon-cycle-label').textContent = `Dzień ${Math.round(pos)} z 29 cyklu księżycowego`;
    }
 
    // Listy co robić / czego unikać
    const doEl = res.querySelector('.moon-do-list');
    const avoidEl = res.querySelector('.moon-avoid-list');
    if (doEl) {
        doEl.innerHTML = phase.doList.map(i => `<li>✓ ${i}</li>`).join('');
        avoidEl.innerHTML = phase.avoidList.map(i => `<li>✗ ${i}</li>`).join('');
    }
 
    res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
 
function showTodayMoon() {
    const { phase, pos, cycle } = getMoonPhaseForDate(new Date());
    renderMoonResult(phase, pos, cycle, 'moon-today-result');
}
 
function calculateMoonPhase() {
    const dateVal = document.getElementById('birth-date').value;
    if (!dateVal) return alert("Proszę wybrać datę urodzenia!");
    const { phase, pos, cycle } = getMoonPhaseForDate(new Date(dateVal));
    renderMoonResult(phase, pos, cycle, 'moon-result');
}
 
window.onclick = (event) => {
    const modal = document.getElementById('recipe-modal');
    if (event.target === modal) closeModal();
    const tarotModal = document.getElementById('tarot-modal');
    if (event.target === tarotModal) closeTarotModal();
};
 
// ============================================================
// --- 10. TAROT DNIA ---
// ============================================================
const tarotCards = [
    { name: "Mag", num: "I", sym: "🪄", meaning: "Masz wszystkie narzędzia, by osiągnąć swój cel. Czas działać z pełną mocą i świadomością. Wszechświat wspiera Twoją sprawczość.", shadow: "Uważaj na manipulację — własną lub cudzą." },
    { name: "Kapłanka", num: "II", sym: "📜", meaning: "Odpowiedzi, których szukasz, leżą głęboko w Tobie. Zaufaj intuicji, zatrzymaj się i wsłuchaj w ciszę między słowami.", shadow: "Nie chowaj się za tajemnicą — czasem trzeba mówić." },
    { name: "Cesarzowa", num: "III", sym: "🌸", meaning: "Czas rozkwitu, płodności i obfitości. Pielęgnuj to, co stwarzasz — projekty, relacje, siebie samego. Natura jest po Twojej stronie.", shadow: "Nie uzależniaj swojej wartości od cudzej uwagi." },
    { name: "Cesarz", num: "IV", sym: "⚔️", meaning: "Struktura i porządek są dziś Twoją siłą. Działaj z autorytetem, wyznacz granice i weź odpowiedzialność za swoje królestwo.", shadow: "Kontrola staje się więzieniem, gdy nie ma w niej miejsca na elastyczność." },
    { name: "Kapłan", num: "V", sym: "🕍", meaning: "Szukaj mądrości u tych, którzy byli przed Tobą. To dobry dzień na naukę, mentoring i odnajdywanie sensu w tradycji.", shadow: "Dogmat to skostniała mądrość — pytaj, nie tylko słuchaj." },
    { name: "Kochankowie", num: "VI", sym: "💞", meaning: "Stoisz przed ważnym wyborem wartości — nie tylko w miłości. Wybierz to, co jest zgodne z Twoim sercem, nie z oczekiwaniami innych.", shadow: "Unikanie wyboru to też wybór." },
    { name: "Rydwan", num: "VII", sym: "🏆", meaning: "Zwycięstwo jest w zasięgu ręki, ale wymaga dyscypliny i skupienia. Kontroluj sprzeczne impulsy i jedź naprzód — siłą woli.", shadow: "Brutalna siła bez kierunku to tylko chaos." },
    { name: "Moc", num: "VIII", sym: "🦁", meaning: "Twoja prawdziwa siła pochodzi z łagodności i odwagi — nie z dominacji. Okiełznaj wewnętrzną bestię czułością, nie strachem.", shadow: "Tłumione emocje wybuchną tam, gdzie najmniej się spodziewasz." },
    { name: "Eremita", num: "IX", sym: "🕯️", meaning: "Wycofaj się na chwilę od zgiełku świata. Samotność to nie izolacja — to święta przestrzeń, w której odnajdujesz siebie.", shadow: "Zbyt długie milczenie staje się murą, nie schronieniem." },
    { name: "Koło Fortuny", num: "X", sym: "🎡", meaning: "Wszystko się zmienia — i to jest jedyna stała. Cykl, w którym jesteś, zmierza ku górze. Bądź gotowy na zwrot akcji.", shadow: "Nie jesteś ofiarą losu — współtworzysz go swoimi wyborami." },
    { name: "Sprawiedliwość", num: "XI", sym: "⚖️", meaning: "Karma wyrównuje rachunki. Działaj uczciwie, bo każdy czyn wraca do nadawcy. To też czas na przyjęcie konsekwencji z godnością.", shadow: "Perfekcjonizm w ocenianiu innych to forma unikania siebie." },
    { name: "Wisielec", num: "XII", sym: "🙃", meaning: "Zatrzymaj się. Zmień perspektywę o 180 stopni — to, co wygląda jak porażka, może być największym prezentem. Poczekaj, zanim zadziałasz.", shadow: "Wieczne odkładanie to nie mądrość, to strach." },
    { name: "Śmierć", num: "XIII", sym: "🦋", meaning: "Coś się kończy, by mogło zacząć się coś nowego. Nie opłakuj zamkniętych drzwi — za nimi jest korytarz pełen możliwości.", shadow: "Trzymanie się przeszłości blokuje przyszłość." },
    { name: "Umiarkowanie", num: "XIV", sym: "🏺", meaning: "Harmonia, cierpliwość i równowaga są dziś Twoim darem. Mieszaj różne elementy życia z gracją — nic nie jest ani za dużo, ani za mało.", shadow: "Nadmierna ostrożność to też forma strachu." },
    { name: "Diabeł", num: "XV", sym: "⛓️", meaning: "Spójrz uczciwie na to, co Cię zniewala — nałogi, przekonania, toksyczne wzorce. Łańcuchy, które widzisz, często wiszą luźno. Wystarczy je zdjąć.", shadow: "Zaprzeczanie jest najmocniejszą pętlą." },
    { name: "Wieża", num: "XVI", sym: "⚡", meaning: "Nagła zmiana burzy stare struktury — ale tylko te zbudowane na kłamstwie. To, co prawdziwe, przetrwa każdą burzę. Oddech, nie panika.", shadow: "Opór przed zmianą czyni uderzenie boleśniejszym." },
    { name: "Gwiazda", num: "XVII", sym: "⭐", meaning: "Po burzy przychodzi spokój i nadzieja. Jesteś prowadzony — nawet gdy tego nie czujesz. Uwierz w swój potencjał i otwórz się na uzdrowienie.", shadow: "Nadzieja bez działania to tylko marzenie." },
    { name: "Księżyc", num: "XVIII", sym: "🌙", meaning: "Rzeczy nie są tym, czym się wydają. Iluzje, lęki i sny wysyłają dziś ważne sygnały. Zanurkuj w podświadomość — ale nie zgub się w niej.", shadow: "Nie każde przeczucie to prawda — sprawdzaj." },
    { name: "Słońce", num: "XIX", sym: "☀️", meaning: "Radość, sukces i jasność! To jeden z najpomyślniejszych dni. Twoje światło jest widoczne dla innych — nie chowaj go. Świętuj życie.", shadow: "Zbytni optymizm bywa ślepotą na rzeczywistość." },
    { name: "Sąd", num: "XX", sym: "🎺", meaning: "Nadchodzi moment przebudzenia i rozliczenia. Usłysz swoje prawdziwe powołanie i odpowiedz na nie bez zwłoki. Czas wstać ze swojego grobu nawyków.", shadow: "Samokrytyka to nie ta sama rzecz co samoświadomość." },
    { name: "Świat", num: "XXI", sym: "🌍", meaning: "Jesteś u kresu i początku jednocześnie. Cykl się domknął — świętuj to, czego dokonałeś, i wejdź w nowy rozdział z pełnią siebie.", shadow: "Zatrzymanie się na sukcesie to stagnacja." },
    { name: "Głupiec", num: "0", sym: "🎒", meaning: "Skok w nieznane! Bądź jak dziecko — ciekaw, otwarty i bez balastu przeszłości. Nowa przygoda zaczyna się dokładnie tam, gdzie stoisz.", shadow: "Beztroska bez uważności to lekkomyślność." }
];
 
function renderTarot() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const cardIndex = dayOfYear % tarotCards.length;
    const card = tarotCards[cardIndex];
 
    document.getElementById('tarot-sym').textContent = card.sym;
    document.getElementById('tarot-num').textContent = card.num;
    document.getElementById('tarot-name').textContent = card.name;
    document.getElementById('tarot-meaning').textContent = card.meaning;
    document.getElementById('tarot-shadow').textContent = '🌑 Cień: ' + card.shadow;
 
    // Animacja karty
    const cardEl = document.getElementById('tarot-card-display');
    cardEl.classList.remove('flipped');
    void cardEl.offsetWidth; // reflow
    setTimeout(() => cardEl.classList.add('flipped'), 100);
}
 
function openTarotModal() {
    document.getElementById('tarot-modal').style.display = 'flex';
    renderTarot();
}
 
function closeTarotModal() {
    document.getElementById('tarot-modal').style.display = 'none';
}
 
// ============================================================
// --- 11. ZGODNOŚĆ ZNAKÓW ---
// ============================================================
// Macierz zgodności (0-100) dla 12 znaków
// Indeksy: Baran=0, Byk=1, Bliźnięta=2, Rak=3, Lew=4, Panna=5,
//           Waga=6, Skorpion=7, Strzelec=8, Koziorożec=9, Wodnik=10, Ryby=11
const compatMatrix = [
//  ♈  ♉  ♊  ♋  ♌  ♍  ♎  ♏  ♐  ♑  ♒  ♓
    [75, 55, 80, 40, 95, 60, 70, 50, 90, 55, 65, 45], // Baran
    [55, 80, 50, 85, 60, 90, 55, 75, 45, 95, 40, 70], // Byk
    [80, 50, 75, 55, 75, 50, 85, 45, 80, 50, 90, 55], // Bliźnięta
    [40, 85, 55, 80, 55, 70, 45, 90, 40, 65, 50, 95], // Rak
    [95, 60, 75, 55, 80, 55, 75, 60, 85, 50, 65, 45], // Lew
    [60, 90, 50, 70, 55, 75, 60, 80, 55, 85, 45, 65], // Panna
    [70, 55, 85, 45, 75, 60, 80, 50, 75, 55, 90, 60], // Waga
    [50, 75, 45, 90, 60, 80, 50, 85, 55, 70, 55, 95], // Skorpion
    [90, 45, 80, 40, 85, 55, 75, 55, 80, 50, 70, 50], // Strzelec
    [55, 95, 50, 65, 50, 85, 55, 70, 50, 80, 60, 75], // Koziorożec
    [65, 40, 90, 50, 65, 45, 90, 55, 70, 60, 75, 60], // Wodnik
    [45, 70, 55, 95, 45, 65, 60, 95, 50, 75, 60, 80]  // Ryby
];
 
const compatComments = {
    "90-100": ["Kosmiczne przeznaczenie — ta para pisana jest w gwiazdach!", "Rzadka magia harmonii — razem możecie wszystko.", "Energia między Wami jest niemal nadprzyrodzona."],
    "75-89":  ["Silna i naturalna więź — rozumiecie się bez słów.", "Dobra chemia i wzajemne uzupełnianie. Warto pielęgnować.", "Gwiazdy sprzyjają tej relacji — jest w niej prawdziwy potencjał."],
    "55-74":  ["Przeciętna zgodność — różnice mogą Was wzbogacić, jeśli będziecie cierpliwi.", "Relacja wymaga pracy, ale może być bardzo wartościowa.", "Różne energie — klucz to wzajemny szacunek i komunikacja."],
    "0-54":   ["Trudna para — kosmos stawia przed Wami wyzwania. Ale cuda się zdarzają!", "Duże różnice w podejściu do życia. Wymagana duża dojrzałość.", "Ogień i woda — może być gorąco, ale też twórczo."]
};
 
function getCompatComment(score) {
    if (score >= 90) return compatComments["90-100"][Math.floor(Math.random() * 3)];
    if (score >= 75) return compatComments["75-89"][Math.floor(Math.random() * 3)];
    if (score >= 55) return compatComments["55-74"][Math.floor(Math.random() * 3)];
    return compatComments["0-54"][Math.floor(Math.random() * 3)];
}
 
function calculateCompatibility() {
    const s1 = parseInt(document.getElementById('compat-sign1').value);
    const s2 = parseInt(document.getElementById('compat-sign2').value);
 
    if (isNaN(s1) || isNaN(s2)) return alert("Wybierz oba znaki zodiaku!");
 
    const score = compatMatrix[s1][s2];
    const comment = getCompatComment(score);
 
    const resultEl = document.getElementById('compat-result');
    resultEl.style.display = 'block';
    resultEl.style.animation = 'fadeInUp 0.5s ease forwards';
 
    // Pasek postępu
    const bar = document.getElementById('compat-bar-fill');
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = score + '%'; }, 100);
 
    document.getElementById('compat-score').textContent = score + '%';
    document.getElementById('compat-comment').textContent = comment;
 
    // Kolor paska w zależności od wyniku
    if (score >= 90)      bar.style.background = 'linear-gradient(90deg, #d4af37, #fff07a)';
    else if (score >= 75) bar.style.background = 'linear-gradient(90deg, #a0c878, #d4af37)';
    else if (score >= 55) bar.style.background = 'linear-gradient(90deg, #7a9fd4, #a0c878)';
    else                  bar.style.background = 'linear-gradient(90deg, #c87a7a, #7a9fd4)';
 
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
 
// ============================================================
// --- 12. DZIENNIK KOSMICZNY ---
// ============================================================
function loadJournal() {
    const entries = getJournalEntries();
    renderJournalEntries(entries);
}
 
function getJournalEntries() {
    try {
        return JSON.parse(localStorage.getItem('cosmicJournal') || '[]');
    } catch { return []; }
}
 
function saveJournalEntry() {
    const text = document.getElementById('journal-input').value.trim();
    if (!text) return alert("Napisz coś przed zapisaniem ✨");
 
    const entries = getJournalEntries();
    const now = new Date();
    entries.unshift({
        id: Date.now(),
        date: now.toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        time: now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
        text: text,
        moon: getMoonEmoji()
    });
 
    localStorage.setItem('cosmicJournal', JSON.stringify(entries));
    document.getElementById('journal-input').value = '';
    renderJournalEntries(entries);
 
    // Potwierdzenie
    const btn = document.getElementById('journal-save-btn');
    btn.textContent = '✓ ZAPISANO';
    btn.style.background = '#4a8c4a';
    setTimeout(() => { btn.textContent = 'ZAPISZ W GWIAZDACH ✨'; btn.style.background = ''; }, 2000);
}
 
function getMoonEmoji() {
    // Aktualna faza księżyca (uproszczona)
    const now = new Date();
    const refDate = new Date(2000, 0, 6);
    const days = (now - refDate) / (1000 * 60 * 60 * 24);
    const pos = ((days % 29.53) + 29.53) % 29.53;
    const icons = ['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'];
    return icons[Math.floor(pos / (29.53 / 8)) % 8];
}
 
function deleteJournalEntry(id) {
    const entries = getJournalEntries().filter(e => e.id !== id);
    localStorage.setItem('cosmicJournal', JSON.stringify(entries));
    renderJournalEntries(entries);
}
 
function renderJournalEntries(entries) {
    const container = document.getElementById('journal-entries');
    if (entries.length === 0) {
        container.innerHTML = '<p style="color:rgba(255,255,255,0.3); text-align:center; padding: 30px 0; font-style:italic;">Twój dziennik jest pusty. Gwiazdy czekają na Twoje słowa...</p>';
        return;
    }
    container.innerHTML = entries.map(e => `
        <div class="journal-entry" style="animation: fadeInUp 0.4s ease forwards;">
            <div class="journal-entry-header">
                <span class="journal-moon">${e.moon}</span>
                <span class="journal-date">${e.date} · ${e.time}</span>
                <button class="journal-delete" onclick="deleteJournalEntry(${e.id})" title="Usuń wpis">×</button>
            </div>
            <p class="journal-text">${e.text.replace(/\n/g, '<br>')}</p>
        </div>
    `).join('');
}
 
// ============================================================
// --- 13. BLOG / WIEDZA ASTROLOGICZNA ---
// ============================================================
 
const staticArticles = [
    {
        id: 'art_001',
        tag: 'Astrologia podstawy',
        title: 'Czym różni się znak Słońca od Ascendentu?',
        excerpt: 'Większość ludzi zna tylko swój znak zodiaku — czyli znak Słońca. Ale astrologia to znacznie więcej. Ascendent, zwany też znakiem wschodzącym, opisuje to, jak postrzegają Cię inni i jak wchodzisz w kontakt ze światem.',
        date: '12 maja 2025',
        body: `<p>Większość ludzi zna tylko jeden znak zodiaku — ten wynikający z daty urodzenia. Jest to <strong style="color:var(--gold)">znak Słońca</strong>, który opisuje Twoją głęboką naturę, ego i życiowe powołanie. To fundament Twojej osobowości.</p>
 
<p style="margin-top:16px;">Jednak horoskop urodzeniowy (natal chart) to znacznie bogatsza mapa. <strong style="color:var(--gold)">Ascendent</strong> — zwany też znakiem wschodzącym — to znak zodiaku, który znajdował się na wschodnim horyzoncie w momencie Twoich narodzin. Zmienia się co ok. 2 godziny, dlatego do jego obliczenia potrzebna jest dokładna godzina urodzenia.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">Co opisuje Ascendent?</strong><br>To Twoja "maska społeczna" — jak inni Cię postrzegają przy pierwszym spotkaniu, jaki styl bycia prezentujesz światu. Osoby z Ascendentem w Baranie mogą sprawiać wrażenie energicznych i odważnych, nawet jeśli ich Słońce w Rybach czyni je wewnętrznie wrażliwymi i marzycielskimi.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">Praktyczny przykład:</strong><br>Jeśli Twoje Słońce jest w Koziorożcu (ambicja, dyscyplina), ale Ascendent w Bliźniętach — świat widzi Cię jako osobę komunikatywną, dowcipną i otwartą. Dopiero bliższe poznanie ujawnia Twój wewnętrzny rdzeń.</p>
 
<p style="margin-top:16px;">Oprócz tych dwóch elementów, ogromną rolę odgrywa też <strong style="color:var(--gold)">znak Księżyca</strong> — opisuje Twoje emocje, potrzeby i to, co daje Ci poczucie bezpieczeństwa. Razem, Słońce, Księżyc i Ascendent tworzą astrologiczne "trio", które maluje pełniejszy portret Twojej duszy.</p>`
    },
    {
        id: 'art_002',
        tag: 'Merkury retrograde',
        title: 'Merkury retrograde — mit czy realna siła?',
        excerpt: 'Trzy do czterech razy w roku Merkury pozornie cofa się na niebie. Astrolodzy łączą ten okres z chaosem komunikacyjnym, awariami technologii i nieporozumieniami. Co tak naprawdę kryje się za tym zjawiskiem?',
        date: '28 kwietnia 2025',
        body: `<p><strong style="color:var(--gold)">Merkury retrograde</strong> to jeden z najbardziej znanych terminów astrologicznych — i jeden z najbardziej nierozumianych. Zacznijmy od astronomii: planet nie cofają się naprawdę. Retrograde (wsteczny ruch) to złudzenie optyczne wynikające z różnicy prędkości orbit Ziemi i Merkurego wokół Słońca. Gdy Merkury nas "wyprzedza", wygląda jakby poruszał się do tyłu względem gwiazd tła.</p>
 
<p style="margin-top:16px;">W astrologii Merkury rządzi komunikacją, technologią, transportem, umowami i myśleniem. Gdy porusza się wstecznie — symbolizuje to czas rewizji, ponownego przemyślenia i spowolnienia w tych obszarach.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">Co może się wydarzyć?</strong><br>Astrolodzy zalecają ostrożność przy podpisywaniu ważnych umów, kupnie elektroniki i planowaniu dalekich podróży. Nie dlatego, że planeta "psuje" rzeczy — ale dlatego, że okres ten sprzyja refleksji, a nie pochopnym decyzjom.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">Co WARTO robić podczas Merkurego retrograde?</strong><br>To idealny czas na: przeglądanie starych planów i projektów, odświeżanie relacji, które z jakiegoś powodu zamarły, naprawę tego, co zepsute — dosłownie i w przenośni. Przedrostek "re-" jest tu kluczowy: refleksja, reorganizacja, rekonekcja.</p>
 
<p style="margin-top:16px;">Merkury retrograde trwa ok. 3 tygodnie i pojawia się 3-4 razy w roku. Zamiast się go bać — potraktuj go jako kosmiczne zaproszenie do zwolnienia i głębszego namysłu.</p>`
    },
    {
        id: 'art_003',
        tag: 'Fazy Księżyca',
        title: 'Jak fazy Księżyca wpływają na Twoje życie?',
        excerpt: 'Nów to czas sadzenia intencji, pełnia — kulminacja i emocjonalne apogeum. Poznaj praktyczny przewodnik po 8 fazach Księżyca i dowiedz się, jak synchronizować życie z jego rytmem.',
        date: '15 kwietnia 2025',
        body: `<p>Księżyc od tysiącleci fascynuje ludzi. Wpływa na przypływy i odpływy oceanów — a nasze ciała składają się w ok. 60% z wody. Nic dziwnego, że wiele tradycji duchowych i astrologicznych przypisuje mu ogromne znaczenie dla ludzkiej psychiki i rytmu życia.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌑 Nów (Nowy Księżyc)</strong><br>Czas nowych początków. Idealna pora na zapisanie intencji, postawienie celów i zaczęcie czegoś świeżego. Energia jest cichej, wewnętrzna.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌒 Sierp rosnący</strong><br>Budowanie pędu. Pierwsze działania w kierunku celów z nówiu. Czas odwagi i ruchu do przodu.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌓 Pierwsza kwadra</strong><br>Pojawia się opór i wyzwania. To test — czy Twoje intencje są wystarczająco silne? Czas decyzji.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌔 Garb rosnący</strong><br>Dopracowywanie, korekta kursu. Widać już wyniki działań, ale trzeba je jeszcze ulepszyć.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌕 Pełnia</strong><br>Kulminacja. Emocje sięgają szczytu. To, co zaczęłeś w nów, teraz przynosi efekty — dobre lub złe. Czas świętowania lub konfrontacji z prawdą.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌖 Garb malejący</strong><br>Wdzięczność i dzielenie się. Czas dawania innym tego, czego się nauczyłeś.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌗 Ostatnia kwadra</strong><br>Puszczanie. Czas uwolnienia tego, co już nie służy. Sprzątanie fizyczne i emocjonalne.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌘 Sierp malejący (Balsamic Moon)</strong><br>Odpoczynek, introspekcja. Przed kolejnym nówiem — cisza i regeneracja. Medytacja, sen, refleksja.</p>`
    },
    {
        id: 'art_004',
        tag: 'Tarot',
        title: 'Wielka Arkana — 22 karty, które opisują ludzki los',
        excerpt: 'Od Głupca wyruszającego w nieznane, przez Śmierć oznaczającą transformację, po Świat symbolizujący spełnienie — każda karta Wielkiej Arkany to archetyp głęboko zakorzeniony w zbiorowej nieświadomości.',
        date: '3 kwietnia 2025',
        body: `<p>Talia tarota składa się z 78 kart podzielonych na <strong style="color:var(--gold)">Wielką Arkanę</strong> (22 karty) i Małą Arkanę (56 kart). Wielka Arkana to serce tarota — każda karta reprezentuje archetyp, doświadczenie lub siłę, z którą każdy człowiek spotyka się na swojej drodze życia.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">0 — Głupiec</strong>: Nowy początek, nieskażona niewinność, gotowość do skoku w nieznane. To my wszyscy na starcie każdej podróży.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">I — Mag</strong>: Wola, manifest, zdolność przekształcania myśli w rzeczywistość. "As above, so below."</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">II — Kapłanka</strong>: Intuicja, tajemnica, wiedza ukryta. To, czego nie można wyrazić słowami.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">XIII — Śmierć</strong>: Wbrew pozorom — nie oznacza fizycznej śmierci. To transformacja, koniec jednego rozdziału i konieczność puszczenia starego.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">XV — Diabeł</strong>: Zniewolenie, uzależnienie, iluzja braku wyboru. Ale kajdany na kartce są luźne — zawsze możemy je zdjąć.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">XXI — Świat</strong>: Spełnienie, integracja, zakończenie cyklu. Tancerka w wieńcu symbolizuje harmonię osiągniętą po przebyciu całej drogi od Głupca.</p>
 
<p style="margin-top:16px;">Tarot nie przepowiada przyszłości w sposób deterministyczny. To lustro — narzędzie refleksji, które pomaga zobaczyć sytuację z innej perspektywy. Każda karta to zaproszenie do rozmowy ze swoim wnętrzem.</p>`
    },
    {
        id: 'art_005',
        tag: 'Znaki zodiaku',
        title: 'Cztery żywioły w astrologii — ogień, ziemia, powietrze, woda',
        excerpt: '12 znaków zodiaku dzieli się na 4 żywioły po 3 znaki każdy. Żywioł, do którego należysz, wiele mówi o Twojej energii, sposobie myślenia i reagowania na świat.',
        date: '20 marca 2025',
        body: `<p>Jednym z fundamentów astrologii jest podział 12 znaków zodiaku na <strong style="color:var(--gold)">cztery żywioły</strong>. Każdy żywioł skupia 3 znaki i opisuje pewien wspólny sposób przeżywania i działania w świecie.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🔥 Ogień — Baran, Lew, Strzelec</strong><br>Energia, entuzjazm, impulsywność i inspiracja. Znaki ognia działają intuicyjnie, szybko się rozpalają — zarówno z pasją, jak i gniewem. Mają naturalny dar przywódczy i zdolność motywowania innych. Cień żywiołu: niecierpliwość i egocentryzm.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">🌍 Ziemia — Byk, Panna, Koziorożec</strong><br>Praktyczność, stabilność, cierpliwość i materializm (w dobrym sensie — zdolność do budowania). Znaki ziemi są wiarygodne, metodyczne i przyziemne. Cień żywiołu: sztywność i opór przed zmianą.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">💨 Powietrze — Bliźnięta, Waga, Wodnik</strong><br>Intelekt, komunikacja, społeczność i idee. Znaki powietrza żyją w świecie myśli i relacji. Są ciekawskie, obiektywne i lubią dyskusję. Cień żywiołu: oderwanie od emocji i niezdecydowanie.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">💧 Woda — Rak, Skorpion, Ryby</strong><br>Emocje, intuicja, wrażliwość i głębia. Znaki wody czują intensywnie i mają wyjątkową empatię. Są połączone z nieświadomością i sferą duchową. Cień żywiołu: nadmierna emocjonalność i wycofanie.</p>
 
<p style="margin-top:16px;">Warto pamiętać, że każdy z nas ma w swoim horoskopie wszystkie cztery żywioły — w różnym nasileniu. Dominujący żywioł to jednak często klucz do zrozumienia własnych wzorców zachowania.</p>`
    },
    {
        id: 'art_006',
        tag: 'Rytuały',
        title: 'Rytuały nówiu — jak ustawiać intencje pod nowym Księżycem',
        excerpt: 'Nów Księżyca to astrologiczny Nowy Rok w miniaturze. Co dwa i pół tygodnia masz szansę na świeży start. Oto prosta, ale skuteczna praktyka ustawiania intencji.',
        date: '8 marca 2025',
        body: `<p>Nów Księżyca — moment, gdy Księżyc i Słońce są w tej samej części nieba — symbolizuje w astrologii nowy początek. To czas ciemności przed świtem, ciszy przed burzą. I właśnie ta cisza jest potężna.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">Dlaczego warto pracować z nówiem?</strong><br>Rytm Księżyca to jeden z najstarszych naturalnych kalendarzy ludzkości. Synchronizowanie się z nim to sposób na wyjście z chaosu i wprowadzenie intencjonalności do codziennego życia. Nie wymaga wiary w magię — wystarczy refleksja i skupienie.</p>
 
<p style="margin-top:16px;"><strong style="color:var(--gold)">Prosty rytuał nówiu (15-20 minut):</strong></p>
 
<p style="margin-top:12px;"><strong>1. Stwórz przestrzeń.</strong> Wycisz telefon. Zapal świecę lub kadzidło. Usiądź w spokojnym miejscu.</p>
 
<p style="margin-top:10px;"><strong>2. Oddech i wyciszenie.</strong> Weź 5 głębokich oddechów. Pozwól myślom opaść jak pył po burzy.</p>
 
<p style="margin-top:10px;"><strong>3. Zapisz 3 intencje.</strong> Nie życzenia — intencje. Różnica jest subtelna, ale ważna. Życzenie: "chcę więcej pieniędzy". Intencja: "buduję relację z finansami opartą na świadomości i wdzięczności". Pisz w czasie teraźniejszym, pozytywnie.</p>
 
<p style="margin-top:10px;"><strong>4. Jedno działanie.</strong> Przy każdej intencji zapisz jeden konkretny krok, który zrobisz w ciągu najbliższych 24 godzin. Intencja bez działania to tylko marzenie.</p>
 
<p style="margin-top:10px;"><strong>5. Zamknij rytuał.</strong> Podziękuj — sobie, naturze, czemukolwiek, w co wierzysz. Wydech. Koniec.</p>
 
<p style="margin-top:16px;">Wróć do tych zapisków przy pełni (ok. 2 tygodnie później) i sprawdź, co się wydarzyło. To może Cię zaskoczyć.</p>`
    }
];
 
function loadBlog() {
    renderBlogArticles();
}
 
function renderBlogArticles() {
    const saved = getSavedArticles();
    const all = [...saved, ...staticArticles];
    const container = document.getElementById('blog-articles-list');
    container.innerHTML = all.map((art, i) => `
        <div class="blog-card ${art.aiGenerated ? 'ai-generated' : ''}" 
             onclick="openBlogArticle('${art.id}')"
             style="animation-delay:${i * 0.07}s">
            <span class="blog-card-tag">${art.aiGenerated ? '✦ AI · ' : ''}${art.tag}</span>
            <h3>${art.title}</h3>
            <p>${art.excerpt}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                <span class="blog-meta">${art.date}</span>
                <span class="blog-read-more">Czytaj dalej →</span>
            </div>
        </div>
    `).join('');
}
 
function openBlogArticle(id) {
    const saved = getSavedArticles();
    const all = [...saved, ...staticArticles];
    const art = all.find(a => a.id === id);
    if (!art) return;
    document.getElementById('blog-modal-title').textContent = art.title;
    document.getElementById('blog-modal-date').textContent = art.tag + ' · ' + art.date;
    document.getElementById('blog-modal-body').innerHTML = art.body;
    document.getElementById('blog-modal').style.display = 'block';
    document.getElementById('blog-modal').scrollTop = 0;
}
 
function getSavedArticles() {
    try { return JSON.parse(localStorage.getItem('savedBlogArticles') || '[]'); }
    catch { return []; }
}
 
function saveGeneratedArticle() {
    const title = document.getElementById('generated-article-title').textContent;
    const body  = document.getElementById('generated-article-body').innerHTML;
    const date  = document.getElementById('generated-article-date').textContent;
    if (!title) return;
 
    const saved = getSavedArticles();
    const newArt = {
        id: 'saved_' + Date.now(),
        tag: 'Wygenerowany przez AI',
        title, body, date,
        excerpt: body.replace(/<[^>]+>/g, '').slice(0, 160) + '...',
        aiGenerated: true
    };
    saved.unshift(newArt);
    localStorage.setItem('savedBlogArticles', JSON.stringify(saved));
    renderBlogArticles();
 
    const btn = document.querySelector('[onclick="saveGeneratedArticle()"]');
    btn.textContent = '✓ ZAPISANO';
    btn.style.background = '#4a8c4a';
    setTimeout(() => { btn.textContent = '📌 ZAPISZ ARTYKUŁ'; btn.style.background = ''; }, 2000);
}
 
// ============================================================
// --- GEMINI AI HELPER ---
// ============================================================
const GROQ_API_KEY = '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';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
 
async function callGemini(prompt) {
    const response = await fetch(GROQ_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            max_tokens: 1200,
            temperature: 0.8,
            messages: [{ role: 'user', content: prompt }]
        })
    });
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || 'Błąd API Groq');
    }
    const data = await response.json();
    return data.choices[0].message.content;
}
 
async function generateBlogArticle() {
    const topic = document.getElementById('blog-topic-input').value.trim();
    if (!topic) {
        alert('Wpisz temat artykułu ✨');
        return;
    }
 
    document.getElementById('blog-generating').style.display = 'block';
    document.getElementById('blog-generated-article').style.display = 'none';
 
    try {
        const prompt = `Napisz po polsku artykuł blogowy o tematyce astrologicznej/ezoterycznej na temat: "${topic}".
                    
Artykuł powinien mieć:
- Chwytliwy tytuł (zwróć jako pierwszą linię zaczynającą się od "TYTUŁ: ")
- 5-7 paragrafów merytorycznej, wartościowej treści
- Praktyczne porady lub ciekawostki
- Przyjazny, ale ekspercki ton
- Ok. 400-500 słów
 
Format odpowiedzi:
TYTUŁ: [tytuł artykułu]
 
[treść artykułu — każdy paragraf oddzielony pustą linią, ważne terminy możesz otoczyć znacznikami <strong>]`;
 
        const text = await callGemini(prompt);
        const lines = text.split('\n');
        let title = topic;
        let bodyLines = lines;
 
        if (lines[0].startsWith('TYTUŁ:')) {
            title = lines[0].replace('TYTUŁ:', '').trim();
            bodyLines = lines.slice(2);
        }
 
        const bodyHTML = bodyLines
            .filter(l => l.trim())
            .map(l => `<p style="margin-top:16px;">${l}</p>`)
            .join('');
 
        const now = new Date();
        const dateStr = now.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
 
        document.getElementById('generated-article-title').textContent = title;
        document.getElementById('generated-article-body').innerHTML = bodyHTML;
        document.getElementById('generated-article-date').textContent = '✦ AI · ' + dateStr;
        document.getElementById('blog-generating').style.display = 'none';
        document.getElementById('blog-generated-article').style.display = 'block';
        document.getElementById('blog-generated-article').scrollIntoView({ behavior: 'smooth', block: 'start' });
 
    } catch (err) {
        document.getElementById('blog-generating').style.display = 'none';
        alert('Błąd generowania artykułu. Spróbuj ponownie.');
        console.error(err);
    }
}
 
// ============================================================
// --- 14. FORMULARZ KONTAKTOWY ---
// ============================================================
function sendContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
 
    if (!name || !email || !message) {
        alert('Uzupełnij wszystkie pola ✨');
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Podaj poprawny adres e-mail.');
        return;
    }
 
    // Przekierowanie na Facebook
    document.getElementById('contact-confirmation').style.display = 'block';
    setTimeout(() => {
        window.open('https://www.facebook.com/profile.php?id=61589331091991', '_blank');
    }, 1000);
}
 
// ============================================================
// --- 15. SENNIK KOSMICZNY ---
// ============================================================
async function interpretDream() {
    const dream = document.getElementById('dream-input').value.trim();
    if (!dream) {
        alert('Opisz swój sen ✨');
        return;
    }
 
    document.getElementById('dream-generating').style.display = 'block';
    document.getElementById('dream-result').style.display = 'none';
 
    try {
        const dreamPrompt = `Jesteś mistycznym interpretatorem snów łączącym psychologię Junga, astrologię i symbolikę ezoteryczną.
                    
Zinterpretuj poniższy sen po polsku w sposób głęboki, poetycki i pomocny:
"${dream}"
 
Odpowiedz TYLKO w formacie JSON (bez żadnego innego tekstu, bez znaczników backtick):
{
  "symbol": "[jeden emoji symbolizujący główny motyw snu]",
  "tytul": "[krótki tytuł interpretacji, max 8 słów]",
  "znaczenie": "[2-3 zdania o głównym znaczeniu symbolicznym snu]",
  "emocje": "[1-2 zdania o emocjonalnym przekazie snu]",
  "planeta": "[nazwa planety astrologicznie powiązanej z tym snem i dlaczego]",
  "przeslanie": "[praktyczna rada lub przesłanie dla śniącego, 2-3 zdania]",
  "afirmacja": "[krótka, inspirująca afirmacja związana ze snem]"
}`;
 
        const rawText = await callGemini(dreamPrompt);
        const clean = rawText.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(clean);
 
        document.getElementById('dream-symbol').textContent = parsed.symbol || '🌙';
        document.getElementById('dream-title').textContent = parsed.tytul || 'Interpretacja snu';
        document.getElementById('dream-body').innerHTML = `
            <div style="background:rgba(212,175,55,0.06);border-left:3px solid var(--gold);padding:16px 20px;margin-bottom:18px;border-radius:0 6px 6px 0;">
                <p style="font-family:'Cinzel',serif;font-size:0.75rem;color:var(--gold);letter-spacing:0.08em;margin-bottom:8px;">ZNACZENIE SYMBOLICZNE</p>
                <p>${parsed.znaczenie}</p>
            </div>
            <div style="margin-bottom:18px;">
                <p style="font-family:'Cinzel',serif;font-size:0.75rem;color:var(--gold);letter-spacing:0.08em;margin-bottom:8px;">EMOCJONALNY PRZEKAZ</p>
                <p>${parsed.emocje}</p>
            </div>
            <div style="margin-bottom:18px;">
                <p style="font-family:'Cinzel',serif;font-size:0.75rem;color:var(--gold);letter-spacing:0.08em;margin-bottom:8px;">🪐 PLANETA OPIEKUŃCZA</p>
                <p>${parsed.planeta}</p>
            </div>
            <div style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.2);padding:16px 20px;margin-bottom:18px;border-radius:6px;">
                <p style="font-family:'Cinzel',serif;font-size:0.75rem;color:var(--gold);letter-spacing:0.08em;margin-bottom:8px;">PRZESŁANIE DLA CIEBIE</p>
                <p>${parsed.przeslanie}</p>
            </div>
            <div style="text-align:center;padding:20px;border-top:1px solid rgba(212,175,55,0.15);">
                <p style="font-family:'Cinzel',serif;color:var(--gold);font-size:0.9rem;font-style:italic;letter-spacing:0.04em;">"${parsed.afirmacja}"</p>
            </div>
        `;
 
        document.getElementById('dream-generating').style.display = 'none';
        document.getElementById('dream-result').style.display = 'block';
        document.getElementById('dream-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
 
        // Store current dream data for saving
        document.getElementById('dream-result').dataset.dreamText = dream;
        document.getElementById('dream-result').dataset.dreamData = JSON.stringify(parsed);
 
    } catch (err) {
        document.getElementById('dream-generating').style.display = 'none';
        alert('Błąd interpretacji snu. Spróbuj ponownie.');
        console.error(err);
    }
}
 
function saveDream() {
    const dreamText = document.getElementById('dream-result').dataset.dreamText;
    const parsed = JSON.parse(document.getElementById('dream-result').dataset.dreamData || '{}');
    if (!dreamText) return;
 
    const saved = JSON.parse(localStorage.getItem('savedDreams') || '[]');
    const now = new Date();
    const dateStr = now.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
 
    saved.unshift({
        id: 'dream_' + Date.now(),
        date: dateStr,
        dream: dreamText,
        symbol: parsed.symbol,
        title: parsed.tytul,
        meaning: parsed.znaczenie,
        affirmation: parsed.afirmacja
    });
 
    if (saved.length > 20) saved.pop();
    localStorage.setItem('savedDreams', JSON.stringify(saved));
    renderDreamHistory();
 
    const btn = document.querySelector('[onclick="saveDream()"]');
    btn.textContent = '✓ ZAPISANO';
    btn.style.background = '#4a8c4a';
    setTimeout(() => { btn.textContent = '📌 ZAPISZ INTERPRETACJĘ'; btn.style.background = ''; }, 2000);
}
 
function renderDreamHistory() {
    const saved = JSON.parse(localStorage.getItem('savedDreams') || '[]');
    const container = document.getElementById('dream-history');
    if (!saved.length) { container.innerHTML = ''; return; }
 
    container.innerHTML = `
        <p class="gold-label" style="margin-bottom:16px;text-align:center;">📜 ZAPISANE SNY</p>
        ${saved.map(d => `
            <div style="background:var(--card-bg);border:1px solid rgba(212,175,55,0.2);border-radius:8px;padding:20px 22px;margin-bottom:14px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
                    <span style="font-size:1.5rem;">${d.symbol || '🌙'}</span>
                    <span class="blog-meta">${d.date}</span>
                </div>
                <p style="font-family:'Cinzel',serif;color:var(--gold);font-size:0.9rem;margin-bottom:8px;">${d.title}</p>
                <p style="font-size:0.8rem;color:rgba(255,255,255,0.4);font-style:italic;margin-bottom:8px;">"${d.dream.slice(0,80)}${d.dream.length > 80 ? '...' : ''}"</p>
                <p style="font-size:0.85rem;color:rgba(255,255,255,0.65);line-height:1.6;">${d.meaning}</p>
                ${d.affirmation ? `<p style="margin-top:10px;font-family:'Cinzel',serif;color:var(--gold);font-size:0.78rem;font-style:italic;opacity:0.7;">"${d.affirmation}"</p>` : ''}
            </div>
        `).join('')}
        <button onclick="clearDreams()" style="background:none;border:none;color:rgba(255,255,255,0.2);cursor:pointer;font-size:0.75rem;width:100%;text-align:center;margin-top:5px;">🗑 Wyczyść historię snów</button>
    `;
}
 
function clearDreams() {
