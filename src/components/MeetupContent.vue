<template>
  <div>
    <div class="schools">
      <h2>대전의 대학교 <i class="fa fa-university" aria-hidden="true"></i></h2>
      <hr>
      <div class="contents">
        <div class="school-content">
          <div>
            <h2>대전 IT 대학생 Meet up ! </h2>
            <h4>대전 소재의 대학교에 재학중인 IT 분야에 관심 있는 대학생의 모임</h4>
          </div>
        </div>
        <div class="school-content">
          <div class="school" v-for="(item, index) in this.university" v-bind:key="index">
        <span>
          <i class="fa fa-check" aria-hidden="true"></i> {{ item }}
        </span>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      university: ['대덕대학교',
        '대전대학교',
        '대전과학기술대학교',
        '목원대학교',
        '배재대학교',
        '우송대학교',
        '우송정보대학교',
        '충남대학교',
        '한국과학기술원',
        '한남대학교',
        '한밭대학교']
    }
  }
}
</script>

<style scoped>
.contents {
  display: table;
  vertical-align: center;
}

.school-content {
  display: table-cell;
  width: 100%;
  height: 100%;
  margin: 0.2rem 1rem;
  text-align: center;
  vertical-align: center;
}

.school {
  width: 200px;
  text-align: left;
  background: #1f917e;
  margin: 0.5rem;
  padding: 1rem 1.2rem;
  color: #FFF;
}

.schools {
  text-align: center;
  width: 80%;
  display: inline-block;
}
</style>
