const app = {
  async fetchAdvice() {
    const advice = await fetch("https://api.adviceslip.com/advice");
    return await advice.json();
  },

  async adviceRendering() {
    let advice = await app.fetchAdvice()

    document.querySelector('.advice').innerText = advice.slip.advice
    document.querySelector('.id').innerText = advice.slip.id
  },

  adviceChangeOnClick() {
    window.location.reload()
  },

  init() {
    app.adviceRendering();

    document.querySelector('.dice').addEventListener("click", () => app.adviceChangeOnClick())
  },
};

document.addEventListener("DOMContentLoaded", app.init)