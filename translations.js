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
    nextButton: "Далі — обрати стиль"
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
    nextButton: "Дальше — выбрать стиль"
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
    nextButton: "Dalej — wybierz styl"
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
}

document.addEventListener("DOMContentLoaded", applyTranslations);
