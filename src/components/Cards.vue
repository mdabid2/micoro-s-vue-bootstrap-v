
  <template>
  <div>
  
<b-container class="bv-example-row">
   <b-row>
    <b-col v-for="cur in info" :key="cur.code">
      <b-list-group>
        <b-list-group-item>
            <b-button-group>
              <b-button  variant="success">{{cur.code }}</b-button>
              <b-button variant="info" v-html="cur.symbol"></b-button>
              <b-button variant="warning">{{cur.rate_float }}</b-button>
          </b-button-group>
        </b-list-group-item> 
      </b-list-group>
      </b-col>
  </b-row>
  <b-row>
    
    <b-col v-for="item in items" :key="item.id"> 
      
      <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      
      >
        <b-card-text>{{item.text}}</b-card-text>
        <b-button href="#" variant="primary">{{item.linkText}}</b-button>
      </b-card>
  </b-col>
    
  </b-row>
</b-container>  
  </div>
  </template>

<script>
import axios from 'axios';
export default {
    name:"Cards",
    data(){
      return {
        loading: true,
        errored: false,
        items: [
        {
          id:1,
          text: "Some quick example text to build on the card title and make up the bulk of the card's content",
          linkText: "Go somewheres"
        },
        {
          id:2,
          text: "Some quick example text to build on the card title and make up the bulk of the card's content",
          linkText: "Go somewheres"
        },
        {
          id:3,
          text: "Some quick example text to build on the card title and make up the bulk of the card's content",
          linkText: "Go somewheres"
        }
      ],
      info: null
      }      
    },
    mounted() {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
        .catch(error => {
          // eslint-disable-next-line
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>