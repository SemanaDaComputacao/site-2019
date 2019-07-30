<template>
  <section id="schedule">
    <div class="section__title">
      <img
        class="section__title--img"
        src="../assets/images/icons/schedule.png"
      />
      <p class="section__title--text">Agenda</p>
    </div>
    <div v-for="(item, index) in items" :key="index" class="schedule--item">
      <div class="day">{{ item.day }}</div>
      <div class="lectures">
        <div v-for="(lecture, index) in item.lectures" :key="index">
          <scrollactive
            v-if="lecture.title !== 'Coffee-Break'"
            :offset="90"
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
                <span class="lecture__details--title text--link">
                  {{ lecture.title }}
                </span>
                <br />
                <span
                  v-if="lecture.title.toLowerCase() !== 'um dia na computação!'"
                >
                  <span
                    v-for="(person, index) in lecture.speakers"
                    :key="index"
                  >
                    <span v-if="index % 2 !== 0">e</span>
                    {{ person.speaker }}
                  </span>
                  <span v-if="lecture.speakerPlace !== ''"
                    >({{ lecture.speakerPlace }})</span
                  >
                </span>
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
              <span class="lecture__details--title not-lecture">
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
import lectures from '../data/lectures.json'

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
  @apply flex flex-col flex-wrap my-4 mx-4;
}

.day {
  @apply text-left flex-1 break-words mb-2 mr-4 text-3xl font-bold;
}

.lectures {
  @apply flex flex-col flex-1;
}

.lecture__info {
  @apply text-center self-stretch;
}

.lecture--item {
  @apply flex mb-4 outline-none;
}

.lecture__time {
  @apply mr-2 mt-2;
}

.lecture__details--title {
  @apply text-2xl;
}

.not-lecture {
  @apply no-underline text-white;
}

@screen md {
  .day {
    @apply text-right;
  }

  .lecture__info {
    @apply self-auto;
    flex-basis: 100%;
  }

  .schedule--item {
    @apply flex-row justify-center;
  }
}
</style>
