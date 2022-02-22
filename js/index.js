const app = {
  async fetchAdvice() {
    const advice = await fetch(`https://api.adviceslip.com/advice/${app.randomNumber()}`);
    return await advice.json();
  },

  randomNumber() {
    return Math.floor(Math.random() * 224)
  },

  async adviceRendering() {
    let advice = await app.fetchAdvice()

    document.querySelector('.advice').innerText = advice.slip.advice
    document.querySelector('.id').innerText = advice.slip.id
  },

  init() {
    app.adviceRendering();

    document.querySelector('.dice').addEventListener("click", () => app.adviceRendering())
  },
};

document.addEventListener("DOMContentLoaded", app.init)