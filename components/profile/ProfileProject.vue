<template>
    <div>
    <section class="blog text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Project</h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            J'aime bien partager mes connaissances et des recherche intéressantes, pour le faire j'ai mis en place un blog personnel.
						Nous abordons plusieurs sujets intéressants et je donne quelques astuces et conseils aux jeunes développeurs pour mieux s'en sortir.          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto" v-for="project in projects" :key="project">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>
            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm">{{ project.name }} ({{ project.start }} - {{ project.end }})</div>
              </div>
              <div class="title-post font-medium">Mon titre</div>
              <div class="summary-post text-base text-justify">{{ project.desc }}
                <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span class="">{{project.categ}} - {{ project.role }}</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
const axios = require("axios");
const _ = require("lodash");
//  your spreadsheet has to be PUBLIC and SHARED with everybody to be accessed this way
//  https://sheets.googleapis.com/v4/spreadsheets/{SPREASHEET_ID}/values/{SHEET_TAB_NAME}!{CELLS}?key={GOOGLE_API_KEY}
const url =
  "https://sheets.googleapis.com/v4/spreadsheets/1bB8UJ8idRyTSGiUa2U0xgun_wwQXbGxl6CG1DC4OPmo/values/projects!A1:J1000?key=AIzaSyBCL9IShJzo5MrEojaYHbfD1SlGPw13dJo";

export default {
  async asyncData() {
    const projects = [];
    const response = await axios.get(url);
    const rows = response.data.values;
    const properties = rows.shift();
    for (const i in rows) {
      projects.push(_.zipObject(properties, rows[i]));
    }
    return { projects };
  },
};
</script>

<style>
  .w-70 {
    width: 20rem;
	}
</style>
