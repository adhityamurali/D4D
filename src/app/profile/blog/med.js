class MediumFeed {
    _baseUrl: string; _devUrl: string;
    useProxy: any;
    constructor(e) {
      this._baseUrl = "https://medium.com/feed", this._devUrl = "https://cors-anywhere.herokuapp.com/", e = e || {}, this.useProxy = e.useProxy || !1
    } getArticles(e, t, s) {
      let r = [], o = void 0 !== t, a = e; this.useProxy && (a = this._devUrl + e);
      let l = new XMLHttpRequest; return "withCredentials" in l ? l.open("GET", a, o) : "undefined" != typeof XDomainRequest ? (l = new XDomainRequest).open("GET", a) : console.error("Error: CORS not supported."), l.onload = function () {
        if (l.readyState === l.DONE && 200 === l.status) {
          !function (e, t, s) { let r = e.getElementsByTagName("item");
           for (let e = 0; e < r.length; e++) { let o = {};
            o.title = r[e].getElementsByTagName("title")[0].childNodes[0].nodeValue, o.link = r[e].getElementsByTagName("link")[0].childNodes[0].nodeValue, o.creator = r[e].getElementsByTagName("dc:creator")[0].childNodes[0].nodeValue, o.pubDate = new Date(r[e].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue); let a = "";
             switch (s) {
                  case "user": a = "content:encoded"; break;
                   case "topic": case "tag": a = "description" 
                }
                o.content = r[e].getElementsByTagName(a)[0].childNodes[0].nodeValue, o.categories = function () { var t = [];
                     return Array.prototype.slice.call(r[e].getElementsByTagName("category")).forEach((e: { textContent: any; }) => { t.push(e.textContent) }), t }(), t.push(new MediumArticle(o)) } }(l.responseXML, r, s), o && t(r)
        }
      }, l.send(), r
    } getUserFeed(e, t) {
      if (e) return this.getArticles(`${this._baseUrl}/@${e}`, t, "user");
      console.error("Error: Please pass a username.", "user")
    } getTopicFeed(e, t) {
      if (e) return this.getArticles(`${this._baseUrl}/topic/${e}`, t, "topic");
      console.error("Error: Please pass a topic.")
    } getTagFeed(e, t) {
      if (e) return this.getArticles(`${this._baseUrl}/tag/${e}`, t, "tag");
      console.error("Error: Please pass a tag.")
    }
  } class MediumArticle {
    title: any;
    link: any;
    creator: any;
    pubDate: any;
    content: any;
    categories: any; constructor(e) { e = e || {}, this.title = e.title || null, this.link = e.link || null, this.creator = e.creator || null, this.pubDate = e.pubDate || null, this.content = e.content || null, this.categories = e.categories || [] }
  }
