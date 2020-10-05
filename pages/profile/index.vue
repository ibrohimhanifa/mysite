<template>
  <div id="homepage">
    <!-- component -->
    <div
      class="article max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
      v-for="article in articles"
      :key="article"
    >
      <div class="flex justify-between items-center">
        <span class="font-light text-gray-600">mar 10, 2019</span>
        <a
          class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
          >{{ article.title }}</a
        >
      </div>
      <div class="mt-2">
        <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#"
          >Accessibility tools for designers and developers</a
        >
        <p class="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </p>
      </div>
      <div class="flex justify-between items-center mt-4">
        <a class="text-blue-600 hover:underline" href="#">{{
          article.content
        }}</a>
        <div>
          <a class="flex items-center" href="#">
            <img
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
              alt="avatar"
            />
            <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const _ = require("lodash");
//  your spreadsheet has to be PUBLIC and SHARED with everybody to be accessed this way
//  https://sheets.googleapis.com/v4/spreadsheets/{SPREASHEET_ID}/values/{SHEET_TAB_NAME}!{CELLS}?key={GOOGLE_API_KEY}
const url =
  "https://sheets.googleapis.com/v4/spreadsheets/1bB8UJ8idRyTSGiUa2U0xgun_wwQXbGxl6CG1DC4OPmo/values/articles!A1:B1000?key=AIzaSyBCL9IShJzo5MrEojaYHbfD1SlGPw13dJo";

export default {
  layout: "profile",
  async asyncData() {
    const response = await axios.get(url);
    const rows = response.data.values;
    const properties = rows.shift();
    const articles = [];
    for (const i in rows) {
      articles.push(_.zipObject(properties, rows[i]));
    }
    return { articles };
  },
};
</script>

<style>
#homepage {
  padding-top: 10vh;
  max-width: 70vw;
  margin: auto;
}
#homepage h1 {
  padding-bottom: 5vh;
}
#homepage .article {
  padding-bottom: 5vh;
}
</style>