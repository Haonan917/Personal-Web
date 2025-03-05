<template>
  <div>
    <div id="main">
      <div class="title">
        <a class="title_link" id="bio" href="#bio">Bio</a>
      </div>

      <div class="content">
        I am a Ph.D. candidate at
        <a href="https://www.cis.pku.edu.cn/"
          >the School of Intelligence and Science Technology of Peking
          University</a
        >, supervised by
        <a href="http://www.liweiwang-pku.com/">Prof.Liwei Wang</a>. I am
        interested in the application of machine learning, especially computer
        vision in the field of biomedical engineering. Please see
        <a href="./projects.html">these projects</a> for an overview.
        <span style="font-weight: bold">
          My mission: develop artificial intelligence medical diagnosis system
          for social good.</span
        >
      </div>
      <div class="title">
        <a class="title_link" id="news" href="#news">News</a>
      </div>

      <div class="content">
        <ul>
          <li>
            <span class="label label-info">10/2024</span>
            I am honored to receive the National Scholarship.
          </li>
          <li>
            <span class="label label-info">7/2024</span>
            <!-- <span style="font-weight:bold">Acceptance</span> -->
            Our work "Knowledge-driven AI-generated data for accurate and
            interpretable breast ultrasound diagnoses" is now available. [<a
              href="https://arxiv.org/abs/2407.16634"
              >arXiv:2407.16634</a
            >]
          </li>
          <li>
            <span class="label label-info">7/2024</span>
            <span style="font-weight: bold">Acceptance</span>
            of our work "ST-CellSeg: Cell segmentation for imaging-based spatial
            transcriptomics using multi-scale manifold learning" at PLOS
            Computational Biology. [<a
              href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012254"
              >Full-text available</a
            >]
          </li>

          <li>
            <span class="label label-info">7/2023</span>
            <span style="font-weight: bold"
              >Xian Jiaotong University Promotion:</span
            >
            I have been selected as an outstanding student representative and
            featured in the promotion of Xian Jiaotong University. For more
            information, please visit [<a
              href="http://news.xjtu.edu.cn/info/1011/198755.htm"
              >here</a
            >]
          </li>

          <li>
            <span class="label label-info">5/2023</span>
            <span style="font-weight: bold">Early acceptance</span> of our work
            "Mining Negative Temporal Contexts For False Positive Suppression In
            Real-Time Ultrasound Lesion Detection" at MICCAI 2023. [<a
              href="https://arxiv.org/abs/2305.18060"
              >arXiv:2305.18060</a
            >]
          </li>
        </ul>
      </div>
      <div class="title">
        <a class="title_link" id="awards" href="#awards">Awards</a>
      </div>

      <div class="content">
        <ul>
          <li>
            National Scholarship
            <div class="float-right">2024</div>
          </li>
          <li>
            Mitacs Globalink Research Internship Award
            <div class="float-right">2023</div>
          </li>
          <li>
            Zheng Guobin Scholarship
            <div class="float-right">2022</div>
          </li>

          <li>
            MEGVII Scholarship
            <div class="float-right">2021</div>
          </li>

          <li>
            National Scholarship
            <div class="float-right">2020</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
@import url(./index.css);
</style>