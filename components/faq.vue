<template>
  <section class="faq-section">
    <div class="faq-header">
      <h2>Часто задаваемые вопросы</h2>

      <button class="ask-btn">
        Задать вопрос

        <Icon name="maki:arrow" class="icon-arrow" />
      </button>
    </div>

    <div class="faq-content">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <p>{{ faq.question }}</p>

          <Icon
            :name="faq.open ? 'ep:arrow-up-bold' : 'ep:arrow-down-bold'"
            class="icon-arrow" />
        </div>

        <div class="faq-answer" v-if="faq.open">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Банальный вопрос?",
    answer: "Банальный ответ.",
    open: false,
  },
  {
    question: "Банальный вопрос?",
    answer: "Банальный ответ.",
    open: false,
  },
  {
    question: "Банальный вопрос?",
    answer: "Банальный ответ.",
    open: false,
  },
  {
    question: "Банальный вопрос?",
    answer: "Банальный ответ.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value = faqs.value.map((faq, i) => ({
    ...faq,
    open: i === index ? !faq.open : false,
  }));
};
</script>

<style scoped>
.faq-section {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin: 4rem 5rem;
}

.faq-header {
  flex: 1;
}

.faq-header h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.faq-header p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.ask-btn {
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 0.5rem;
}

.ask-btn span {
  margin-left: 0.5rem;
}

.faq-content {
  flex: 2;
}

.faq-item {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
}

.faq-question p {
  margin: 0;
  font-weight: bold;
}

.faq-question span {
  font-size: 1.5rem;
}

.faq-answer {
  padding: 1rem;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #555;
}
</style>
