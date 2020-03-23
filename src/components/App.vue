<template>
  <div>
    
    <ul>
      <table class="tg border">
        <div class="row" v-for="joke in jokes" v-bind:key="joke.id">
          <div class="col">
            <ul>
              <li>
                <p>{{joke.value}}</p>
              </li>
            </ul>
          </div>
        </div>
      </table>
    
    </ul>
  </div>
</template>

<script>
const URL = 'http://localhost:3000/posts';

export default {
	data() {
    return {
      el: '#app', 
      jokes: [],
      load: [],
      page: 1,
    };
  },
  mounted() {
      console.log("mounted working");
    this.getContentFromApi();
  },
  methods: {
    updateScrollEvent() {
              console.log("update scroll working");
      var updated = false;
      window.onscroll = ev => {
        var userPosition = window.innerHeight + window.scrollY;
        var height = document.body.offsetHeight;
        if (!updated && userPosition >= height) {
          updated = true; 
          this.getContentFromApi();
        }
      };
    },
    getContentFromApi() {
      console.log("Getting Content From API...");
      //document.write(content);
      axios
        .get(
          ` http://localhost:3000/posts`
        )
        .then(res => {
                console.log("then working");
                console.log(JSON.stringify(res.data[0].value));
          this.jokes = [...this.jokes, ...res.data];
        })
        .catch(err => console.log(err));
    }
  }
}
</script>