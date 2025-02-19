/**
 * Removes Reddit translations from the search results.
 * @returns {void}
 */
function removeRedditTranslations() {
  console.log("my script is running");

  // Select only non-English languages set in the browser
  const preferredLang = navigator.languages.find((lang) => lang.includes("-") && !lang.startsWith('en'));

  const searchBar = document.querySelector('textarea[class="gLFyf"]');
  const searchBtn = document.querySelector('button[class="HZVG1b Tg7LZd"]');

  if (searchBar.value.includes("reddit")) {
    const redditTlParam = `?tl=${preferredLang}`;
    if (!searchBar.value.includes(redditTlParam)) {
      searchBar.value = `${searchBar.value} -inurl:${redditTlParam}`;
      searchBtn.click();
    }
  }
}

removeRedditTranslations();
