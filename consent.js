/**
 * Gwiezdny Przewodnik — zgoda na cookies reklamowe (Google AdSense).
 * Do pierwszej decyzji użytkownika żadna reklama nie jest wypychana.
 * "Tylko niezbędne" => reklamy niespersonalizowane (requestNonPersonalizedAds = 1),
 * zgodnie z wytycznymi Google dla wydawców bez certyfikowanego CMP:
 * https://support.google.com/adsense/answer/9007336
 */
(function () {
    var CONSENT_KEY = 'gwz_ad_consent'; // 'personalized' | 'npa'
    var pendingAds = 0;

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* cookies wyłączone — trudno */ }
    }

    function pushAd(npa) {
        window.adsbygoogle = window.adsbygoogle || [];
        if (npa) { window.adsbygoogle.requestNonPersonalizedAds = 1; }
        try { window.adsbygoogle.push({}); } catch (e) { /* slot mógł już zniknąć z DOM */ }
    }

    function flushPending(choice) {
        var npa = choice === 'npa';
        for (var i = 0; i < pendingAds; i++) { pushAd(npa); }
        pendingAds = 0;
    }

    // Wywoływana z każdego <ins class="adsbygoogle"> zamiast bezpośredniego push({})
    window.gwzPushAd = function () {
        var consent = getConsent();
        if (consent === 'personalized') { pushAd(false); }
        else if (consent === 'npa') { pushAd(true); }
        else { pendingAds++; } // czekamy na decyzję w banerze
    };

    function buildBanner() {
        var el = document.createElement('div');
        el.id = 'gwz-cookie-banner';
        el.setAttribute('role', 'dialog');
        el.setAttribute('aria-label', 'Zgoda na pliki cookie');
        el.innerHTML =
            '<p>Ta strona korzysta z plików cookie, w tym reklamowych (Google AdSense), by finansować darmowy dostęp do treści. ' +
            'Możesz zaakceptować reklamy spersonalizowane lub ograniczyć je do niezbędnych. Szczegóły w ' +
            '<a href="/polityka-prywatnosci.html">Polityce Prywatności</a>.</p>' +
            '<div class="gwz-cookie-actions">' +
            '<button type="button" data-choice="npa">Tylko niezbędne</button>' +
            '<button type="button" data-choice="personalized" class="gwz-cookie-accept">Akceptuję</button>' +
            '</div>';
        document.body.appendChild(el);
        el.addEventListener('click', function (e) {
            var btn = e.target.closest('button[data-choice]');
            if (!btn) { return; }
            var choice = btn.getAttribute('data-choice');
            setConsent(choice);
            el.remove();
            flushPending(choice);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var consent = getConsent();
        if (!consent) {
            buildBanner();
        } else {
            flushPending(consent);
        }
    });
})();
