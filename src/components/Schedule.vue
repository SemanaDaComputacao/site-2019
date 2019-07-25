<template>
  <section id="schedule">
    <div class="section__title">
      <img
        class="section__title--img"
        src="../assets/images/icons/schedule.png"
      />
      <p class="section__title--text">Agenda</p>
    </div>
    <div v-for="item in items" :key="item.day" class="schedule--item">
      <div class="day">{{ item.day }}</div>
      <div class="lectures">
        <div v-for="lecture in item.lectures" :key="lecture.title">
          <scrollactive
            v-if="lecture.title !== 'Coffee-Break'"
            :offset="60"
            :duration="600"
            :modifyUrl="false"
          >
            <a
              :href="
                lecture.title.toLowerCase() === 'um dia na computação!'
                  ? '#compday'
                  : '#lecture'
              "
              class="lecture--item scrollactive-item"
              @click="toggleLecture(lecture, item.day)"
            >
              <div class="lecture__time">
                {{ splitTime(lecture.time, ' - ')[0] }}
                <br />
                {{ splitTime(lecture.time, ' - ')[1] }}
              </div>
              <div class="lecture__details">
                <span class="lecture__details--title">
                  {{ lecture.title }}
                </span>
                <br />
                {{ lecture.speaker }}
              </div>
            </a>
          </scrollactive>
          <div class="lecture--item" v-else>
            <div class="lecture__time">
              {{ splitTime(lecture.time, ' - ')[0] }}
              <br />
              {{ splitTime(lecture.time, ' - ')[1] }}
            </div>
            <div class="lecture__details">
              <span class="lecture__details--title">
                {{ lecture.title }}
              </span>
              <br />
              {{ lecture.speaker }}
            </div>
          </div>
        </div>
      </div>
      <lecture
        v-if="showLecture && currentDay === item.day"
        @close="showLecture = false"
        :info="selectedLecture"
        class="lecture__info"
      />
    </div>
  </section>
</template>

<script>
import Lecture from './Lecture'
import lectures from '../assets/data/lectures.json'

export default {
  data() {
    return {
      items: {},
      showLecture: false,
      currentDay: '',
      selectedLecture: {}
    }
  },
  components: {
    Lecture
  },
  mounted() {
    let obj = JSON.stringify(lectures)
    this.items = JSON.parse(obj)
  },
  methods: {
    splitTime(str, sep) {
      return str.split(sep)
    },
    toggleLecture(lect, day) {
      if (lect.title.toLowerCase() !== 'um dia na computação!') {
        this.selectedLecture = lect
        this.currentDay = day
        this.showLecture = true
      }
    }
  }
}
</script>

<style>
.schedule--item {
  @apply flex flex-col flex-wrap my-4 mx-4 text-laranja-semana;
}

.day {
  @apply text-left flex-1 break-words mb-2 mr-4 text-3xl font-bold;
}

.lectures {
  @apply flex flex-col flex-1;
}

.lecture__info {
  @apply text-center;
  flex-basis: 100%;
}

.lecture--item {
  @apply flex mb-4 outline-none;
}

.lecture__time {
  @apply mr-2 mt-2;
}

.lecture__details--title {
  @apply text-2xl text-white;
}

@screen sm {
  .day {
    @apply text-right;
  }

  .schedule--item {
    @apply flex-row justify-center;
  }
}
</style>
