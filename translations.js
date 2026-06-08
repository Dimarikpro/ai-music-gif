const translations = {
  uk: {
    siteTitle: "AI Music Gift",
    navHome: "Головна",
    navProducts: "Подарунки",
    navDemos: "Демо",
    navTariffs: "Тарифи",
    navOrder: "Замовити",

    orderTitle: "Кому створюємо привітання?",
    orderSubtitle: "Кілька відповідей — і ми підберемо стиль пісні.",
    recipientLabel: "Для кого подарунок?",
    occasionLabel: "Привід",
    nameLabel: "Ім’я людини",
    detailsLabel: "Що важливо згадати?",
    nextButton: "Далі — обрати стиль",

    recipientLove: "Для коханої людини",
    recipientMother: "Для мами",
    recipientFather: "Для тата",
    recipientFriend: "Для друга / подруги",
    recipientChild: "Для дитини",
    recipientOther: "Інше",

    occasionBirthday: "День народження",
    occasionAnniversary: "Річниця",
    occasionWedding: "Весілля",
    occasionLove: "Просто сказати “люблю”",
    occasionSupport: "Підтримати людину",
    occasionOther: "Інший привід",

    namePlaceholder: "Наприклад: Олена",
    detailsPlaceholder: "Кілька фактів, спогадів, теплих слів..."
  },

  ru: {
    siteTitle: "AI Music Gift",
    navHome: "Главная",
    navProducts: "Подарки",
    navDemos: "Демо",
    navTariffs: "Тарифы",
    navOrder: "Заказать",

    orderTitle: "Для кого создаём поздравление?",
    orderSubtitle: "Несколько ответов — и мы подберём стиль песни.",
    recipientLabel: "Для кого подарок?",
    occasionLabel: "Повод",
    nameLabel: "Имя человека",
    detailsLabel: "Что важно упомянуть?",
    nextButton: "Дальше — выбрать стиль",

    recipientLove: "Для любимого человека",
    recipientMother: "Для мамы",
    recipientFather: "Для папы",
    recipientFriend: "Для друга / подруги",
    recipientChild: "Для ребёнка",
    recipientOther: "Другое",

    occasionBirthday: "День рождения",
    occasionAnniversary: "Годовщина",
    occasionWedding: "Свадьба",
    occasionLove: "Просто сказать “люблю”",
    occasionSupport: "Поддержать человека",
    occasionOther: "Другой повод",

    namePlaceholder: "Например: Елена",
    detailsPlaceholder: "Несколько фактов, воспоминаний, тёплых слов..."
  },

  pl: {
    siteTitle: "AI Music Gift",
    navHome: "Strona główna",
    navProducts: "Prezenty",
    navDemos: "Demo",
    navTariffs: "Cennik",
    navOrder: "Zamów",

    orderTitle: "Dla kogo tworzymy życzenia?",
    orderSubtitle: "Kilka odpowiedzi — i dobierzemy styl piosenki.",
    recipientLabel: "Dla kogo jest prezent?",
    occasionLabel: "Okazja",
    nameLabel: "Imię osoby",
    detailsLabel: "Co warto wspomnieć?",
    nextButton: "Dalej — wybierz styl",

    recipientLove: "Dla ukochanej osoby",
    recipientMother: "Dla mamy",
    recipientFather: "Dla taty",
    recipientFriend: "Dla przyjaciela / przyjaciółki",
    recipientChild: "Dla dziecka",
    recipientOther: "Inne",

    occasionBirthday: "Urodziny",
    occasionAnniversary: "Rocznica",
    occasionWedding: "Ślub",
    occasionLove: "Po prostu powiedzieć „kocham”",
    occasionSupport: "Wesprzeć bliską osobę",
    occasionOther: "Inna okazja",

    namePlaceholder: "Na przykład: Anna",
    detailsPlaceholder: "Kilka faktów, wspomnień, ciepłych słów..."
  }
};

function getCurrentLang() {
  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get("lang");

  if (["uk", "ru", "pl"].includes(langFromUrl)) {
    return langFromUrl;
  }

  const browserLang = navigator.language.slice(0, 2);

  if (browserLang === "uk") return "uk";
  if (browserLang === "ru") return "ru";
  if (browserLang === "pl") return "pl";

  return "uk";
}

function applyTranslations() {
  const lang = getCurrentLang();
  const dictionary = translations[lang] || translations.uk;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("a[href$='.html']").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("http") || href.includes("?lang=")) {
      return;
    }

    link.setAttribute("href", `${href}?lang=${lang}`);
  });
}

document.addEventListener("DOMContentLoaded", applyTranslations);
