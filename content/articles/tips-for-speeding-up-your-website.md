---
title: "Tips for Speeding Up Your Website"
date: 2017-09-20T17:14:26-05:00
description: "A slow website may cost you more than you think."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-secondary-gradient"
categories: ["General"]
keywords: ["slow website", "tips for speeding up website", "fast website" ]
draft: false
---

A fast website is necessary for staying relevant in the modern era of web development. There is simply no time for a slow website.


Do not make the mistake of underestimating the impact of a slow site. The average mobile user will leave a website if it does not load within 3 seconds. Google now considers page speed a major factor for search engine rankings and 75% of Internet users agreed that they would not return to a website if it does not load within 4 seconds.

Amazon reported that they saw an increase in revenue of 1% for every 100 milliseconds improvement to their site speed.

Walmart also experienced a 2% increase in conversions for every 1 second of improvement.

Clearly, improving your website speed is crucial in keeping customer’s satisfaction and your business profits high. So today, I’m going to share with you 10 tips that can help you speed up your sites to increase page views, increase customer’s satisfaction, and increase conversions.

<p class="font-weight-bold">Always make a backup before making any changes to your website</p>.

{{<contentTitle title="1. Minimize HTTP Requests">}}

An HTTP request is a computer asking permission to download any files from a server that is needed in order for your site to be viewed properly.

Examples of HTTP requests are:

- loading CSS style sheets
- loading scripts
- loading images
- loading fonts
- loading HTML

Each one of these files are requested and downloaded, so naturally the more files needed to make up your website, the longer it takes for the page to render.

Some ways to improve your site speed is to simplify your design and write good lean code.

- Reduce the number of unnecessary images and use css whenever possible
- Combine multiple style sheets and scripts into one.
- Decrease the size of your css stylesheets to < 40KB and embedded it
- Avoid using custom fonts
- Avoid using plugins and libraries
- Minimize redirects

{{<contentTitle title="2. Minify Resources ( HTML, CSS, and Javascript)">}}

Minify your files simple means removing any unnecessary elements in your code such as: line breaks, comments, extra whitespace and indentations. Every element can add to the size of your files which in turn increases your sites load time.

To minify HTML, CSS, and javascript, you can try [HTML-minifier](https://www.willpeavy.com/minifier/) and [here](https://minify-html.com/).

3. OPTIMIZE IMAGES
Large images take a lot of time to load so it is important to keep your images as small as possible, especially if your site is image heavy.

- Use image editing tools to crop your images to the correct size. If your site requires a 450px wide image, do not upload a 2000px wide image and set the width parameters to (width="570“). This will slow down your site’s performance.
- Compress your images down as small as possible to reduce the image file size.
- Reduce color depth to the lowest acceptable level.
- Remove image's description and comments .
- Save your images in either jpg or png format but mostly in jpg
- Always set the image tag src attribute, because empty src attributes still make a request to the server which increases the amount of http request

[Here](http://optimizilla.com/) is a handy tool for lossy compressing images.

{{<contentTitle title="4. Reduce the number of plugins and add-ons">}}

Too many plugins can slow your site down, create security issues, and cause crashes and other technical problems.

Try deactivating or removing unnecessary plug-ins and slow plug-ins. Also keeping plug-ins up to date can help fix slow plugins.


{{<contentTitle title="5. Gzip Compression">}}

You have probably tried compressing a file on your computer and you’ve seen a massive reduction in the file size. A 60mb file can be compressed to 40mb, saving you 20mb. Gzip compression works in the same way, but for websites.

Gzip compression is a method of zipping large bulky web pages together to reduce bandwidth which reduces HTTP request.

According toYahoo, Gzip can reduce website load time by about 70%.

- Apache: Use [mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html)
- Nginx: Use [HttpGzipModule](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)

{{<contentTitle title="6. Enable Keep-Alive">}}

Usually, when a visitor’s web browser tries to request a file from your web server, it will grab each file individually; in other words, a connection opens and closes for each file needed for your site. This uses more processing power and memory and eventually leads to a slower website if there are a lot of files.

Enabling HTTP keep-alive ensures that all file requests to your server will be made via a single open connection, leading to a much faster website for your users.

{{<contentTitle title="7. Use a Content Delivery Network (CDN)">}}

A content delivery network is a collection of web servers distributed across multiple locations to deliver content more efficiently to users. The server with the fewest network jumps or the server with the quickest response time is chosen. Therefore a website with a CDN will be loaded from the nearest server to the visitor.

You can checkout CDN hosting with [Cloudflare](https://www.cloudflare.com/).

{{<contentTitle title="8. Utilize Browser Caching">}}

Browser caching ensures a much faster experience for your website visitors by storing a static version of your website on their browser and serving them that version until your website is updated.

Browser caching ensures a much faster experience for your website visitors by storing a static version of your website on their browser and serving them that version until your website is updated.

{{<contentTitle title="9. Placing Javascript at the bottom">}}

Placing javascript in the document head stops the progressive rendering of a webpage until the entire javascript has been downloaded. Imagine you have a large javascript file or library, that means your webpage content won't start to download until the javascript is finished. This being the case, all your javascript should be placed at the bottom, unless they are necessary for the webpage to be viewed.

{{<contentTitle title="10. Avoid Bad Requests">}}

Broken links and pages result in 404/410 errors. These increase the amount of wasteful HTTP requests. Fix your broken URLs especially image. Along with broken links comes the fact that visitors really dislike broken links.

{{<contentTitle title="Now Test Your Site">}}

After implementing the above tips, you should test your website speed to see if there’s a difference. Here are some websites you can use to test out your site:

- [Pingdom Website Speed Test](https://tools.pingdom.com/)
- [GTMetrix](https://gtmetrix.com/)
- [Webpage Test](https://www.webpagetest.org/)
- [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)


{{<contentTitle title="Final Thoughts">}}

Today, having a fast website is important for success on the web. Of course, a site speed is not the main goal but even a great website with a bad load time will find it hard to retain visitors.

This can make the difference between ranking on the first page of Google or the 3rd page. It can also be the difference between retaining and creating 200 new customers and permanently losing 75% of your customers due to slow page load times.