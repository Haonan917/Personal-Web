<template>
  <div>
    <div id="main">
      <div class="title">
        <a class="title_link" id="projects" href="#projects">Projects</a>
      </div>

      <div class="content">
        <div class="media stream-item">
          <div class="media-body">
            <h3 class="article-title mb-0 mt-0">
              <a href="https://arxiv.org/abs/2305.18060"
                >Mining Negative Temporal Contexts For False Positive
                Suppression In Real-Time Ultrasound Lesion Detection</a
              >
            </h3>
            ArXiv preprint, 2023.
            <div class="stream-meta article-metadata">
              <div>
                <span>Haojun Yu</span>,
                <span class="font-weight-bold"
                  ><a href="https://youchengli.com">Youcheng Li</a></span
                >, <span>QuanLin Wu</span>, <span>Ziwei Zhao</span>,
                <span>Dengbo Chen</span>, <span>Dong Wang</span>,
                <span>Liwei Wang</span>
              </div>
              <div class="btn-links">
                <a
                  class="btn btn-outline-primary my-1 mr-1 btn-sm"
                  href="https://arxiv.org/pdf/2305.18060.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  PDF
                </a>
                <button
                  type="button"
                  class="btn btn-outline-primary my-1 mr-1 btn-sm js-cite-modal"
                  data-filename="pub/UltraDet.bib"
                  @click="showBibContent()"
                >
                  Cite
                </button>
              </div>
            </div>
          </div>
          <div class="mr-3">
            <a href="https://arxiv.org/abs/2305.18060">
              <img
                src="../src/assets/UltraDet.png"
                alt=""
                style="max-width: 200px; height: auto"
              />
            </a>
          </div>
        </div>
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
  methods: {
    showBibContent() {
      var filename = document.querySelector(".js-cite-modal").getAttribute("data-filename");
      fetch(filename)
        .then((response) => response.text())
        .then((data) => {
          alert(data); // 可以根据需要自定义显示方式，这里使用alert弹出bib文件内容
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>