<template>
  <pageTransition name="page">
    <div class="min-h-screen">
      <ProfileHeader />
      <div class="flex justify-center items-center">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Project</h1>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="mb-6 flex flex-col justify-center items-center max-w-sm mx-auto" v-for="project in projects" :key="project">
              <div class=" w-60 bg-white m-1 shadow-2xl rounded-lg overflow-hidden p-5">
                <div class="title-post font-bold text-teal-700">{{ project.name }}</div>  
                <div class="category-title flex-4 text-sm mb-2">({{ project.start }} - {{ project.end }})</div>
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-white">
                    <div class="h-2 w-2 rounded-full m-1 bg-teal-500 " ></div>
                  </div>
                  <div class="category-title flex-4 text-sm">{{ project.role }}</div>
                </div>
                <div class="summary-post text-base bg-teal-500 text-white block rounded p-2">{{ project.desc }}</div>
                <div class= "p-2 text-sm "><span class="">{{project.categ}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </pageTransition>
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
    const response = await axios.get(url);
    const rows = response.data.values;
    const properties = rows.shift();
    const projects = [];
    for (const i in rows) {
      projects.push(_.zipObject(properties, rows[i]));
    }
    return { projects };
  },
};
</script>