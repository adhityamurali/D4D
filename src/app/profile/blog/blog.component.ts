import { Component, OnInit } from '@angular/core';
import MediumFeed from 'src\\app\\profile\\blog\\medium-feed.min';
//declare const Meed: any;
//declare const MediumFeed: any;
//declare const XDomainRequest: any;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  feed_data: Object;
  key: {}



  constructor() { }

  ngOnInit() {

    /*  (async () => {
       const feed = new Meed({
         proxy: "https://cors-anywhere.herokuapp.com/"
       })
       try {
    
 
         this.feed_data = await feed.user("adhityamurali03")
         //console.log(this.feed_data)
 
       } catch (err) {
         //console.log(err)
       }
     })()
  */

    ////console.log(MediumFeed)

    this.fetch_feed_fata()


  }


  fetch_feed_fata() {



    //console.log('fetching medium rss')

    var mediumFeed = new MediumFeed();
    mediumFeed.useProxy = true; //Optionally enable a CORS proxy for local development

    var mediumFeed = new MediumFeed({ useProxy: true }); //Enables a CORS proxy for localhost development via options object

    this.feed_data = mediumFeed.getUserFeed("adhityamurali03"); //Pass username of the feed you want

    //console.log(this.feed_data, typeof this.feed_data)

    //setTimeout(function () {

    // //console.log()
    Object.keys(this.feed_data).forEach((key, index) => {

      ////console.log(key, index)

      // //console.log(this.feed_data[0])

      ////console.log(this.feed_data[0].content)


      let str = this.feed_data[key].content

      let result = str.match(/src=\".*?\"/);

      // //console.log(result)

      let imgstr = result[0]

      this.feed_data[key].img = imgstr.substring(4).slice(1, -1);


      /* element.img =  */
    });

    //console.log(this.feed_data)

    //}, 3000)




  }

}
