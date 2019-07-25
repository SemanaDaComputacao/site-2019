<template>
  <section id="schedule">
    <div v-for="item in items" :key="item.day" class="schedule--item">
      <div class="day">{{ item.day }}</div>
      <div class="lectures">
        <scrollactive :offset="60" :duration="600" :modifyUrl="false">
          <a
            v-for="lecture in item.lectures"
            :key="lecture.title"
            href="#lecture"
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
      this.selectedLecture = lect
      this.currentDay = day
      this.showLecture = true
    }
  }
}
</script>

<style>
.schedule--item {
  @apply flex flex-col flex-wrap my-4 ml-4 text-laranja-semana;
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

.lecture-disabled {
}
</style>
