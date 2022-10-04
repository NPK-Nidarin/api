import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        groupInput: "",
        DateInput: Date.now("dd.mm.yyyy"),
        week: false,
      },
      table: [],
    };
  },
  methods: {
    returnTable() {
      const { ...dataClass } = this.form;
      var day = {
        UF_ID_SUBJECT: "УП.01 Учебная практика",
        UF_PARA: "1",
        UF_SUBSET: "0",
        UF_LECTURE: "В201 (М) Веб-дизайн и разработка",
        UF_ZONE: "Учебно-производственный корпус",
        UF_DATE: "03.10.2022 0:00:00",
        UF_ID_TEACHER: "Сафаргалин Загир Уралович",
        UF_DATE_DAY: "",
      };
      var day2 = {
        UF_ID_SUBJECT: "УП.01 Учебная практика",
        UF_PARA: "",
        UF_SUBSET: "0",
        UF_LECTURE: "В201 (М) Веб-дизайн и разработка",
        UF_ZONE: "Учебно-производственный корпус",
        UF_DATE: "03.10.2022 0:00:00",
        UF_ID_TEACHER: "Сафаргалин Загир Уралович",
        UF_DATE_DAY: "",
      };
      var days = {
        Monday: "Понедельник",
        Tuesday: "Вторник",
        Wednesday: "Среда",
        Thursday: "Четверг",
        Friday: "Пятница",
        Saturday: "Суббота",
        Sunday: "Воскресенье",
      };
      var d = moment("04.10.2022", "DD.MM.YYYY h:mm:ss").format("dddd");

      day.UF_DATE_DAY = days[d];
      console.log(day);
      this.table.push(day);
      
      this.table.push(day2);

      console.log(this.table);
    },
  },
});
