<template>
  <!-- component -->
  <div class="container mx-auto relative w-1/2 m-10">
    <div class="font-bold text-3xl pb-6">my little journey</div>
    <ul class="list-none m-0 p-0">
      <li class="mb-10" v-for="event in events" :key="event">
        <div
          class="border-r-8 mt-1 border-indigo-500 absolute h-full top-3"
          style="left: 12px"
        ></div>
        <div class="flex items-center mb-1">
          <div class="bg-indigo-500 rounded-full h-8 w-8"></div>
          <div class="flex-1 ml-4 font-medium">
            {{ event.date }} - {{ event.name }}
          </div>
        </div>
        <div class="ml-12">{{ event.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: "24 April 1993",
          name: "Born",
          type: "Bio",
          color: "#000",
          desc:
            "I was born on Jakarta, Indonesia as a super duper cutie baby boy",
        },
        {
          date: "1 July 2018",
          name: "Married",
          type: "Bio",
          color: "#000",
          desc: "I marry my lovely honey bunny sweetie RH",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
        {
          date: "11 July 2019",
          name: "First Boy",
          type: "Bio",
          color: "#000",
          desc:
            "Our super duper cutie baby boyah has coming into the whole world ",
        },
      ],
    };
  },
};
</script>