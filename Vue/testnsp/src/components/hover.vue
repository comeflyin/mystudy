<template>
  <div class="card-grid">
    <main class="main flow">
      <div class="main__cards cards">
        <div class="cards__inner">
          <div v-for="(card, index) in cards" :key="index" class="cards__card card">
            <div class="card__cta cta" @click="handleCardClick(index)">
              {{ card.ctaText }}
            </div>
          </div>
        </div>

        <div class="overlay cards__inner" ref="overlay"></div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [
          { ctaText: "Get Started" },
          { ctaText: "Upgrade to Pro" },
          { ctaText: "Go Ultimate" },
        ],
      };
    },
    methods: {
      handleCardClick(index) {
        // Handle card click event if needed
        console.log(`Card ${index + 1} clicked`);
      },
      applyOverlayMask(e) {
        const x = e.pageX - this.$refs.cards.offsetLeft;
        const y = e.pageY - this.$refs.cards.offsetTop;

        this.$refs.overlay.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
      },
      initOverlayCard(cardEl) {
        const overlayCard = document.createElement("div");
        overlayCard.classList.add("card");
        overlayCard.textContent = cardEl.lastElementChild.textContent;
        this.$refs.overlay.append(overlayCard);
      },
    },
    mounted() {
      const cardsContainer = this.$refs.cards;
      const overlay = this.$refs.overlay;

      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const cardIndex = this.cards.indexOf(entry.target);
          let width = entry.borderBoxSize[0].inlineSize;
          let height = entry.borderBoxSize[0].blockSize;

          if (cardIndex >= 0) {
            overlay.children[cardIndex].style.width = `${width}px`;
            overlay.children[cardIndex].style.height = `${height}px`;
          }
        });
      });

      this.cards.forEach((cardEl) => {
        this.initOverlayCard(cardEl);
        observer.observe(cardEl);
      });

      document.body.addEventListener("pointermove", this.applyOverlayMask);
    },
    beforeUnmount() {
      // Cleanup event listeners or any other clean-up code
      document.body.removeEventListener("pointermove", this.applyOverlayMask);
    },
  };
</script>

<style scoped>
  /* Add your existing styles here */
</style>