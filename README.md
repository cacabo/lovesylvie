# Rails Boilerplate
Boilerplate application for Ruby on Rails web apps

### Functionality
* Simple templating with a navbar, full-page height page content, and footer
* General web pages via the `welcome` controller
* `user` sign in / registration / etc. via [devise](https://github.com/plataformatec/devise)

### Meta tags and titles
Meta tags can be customized on each page using the following syntax:
```html
<head>
  <% title 'Example title' %>
  <% description "Description of the webpage" %>
  <% keywords "keywords,to,inlcude" %>
  <% image "http://website.com/linktoimage.jpg" %>
</head>
```
If these are not included in a given `.html.erb` file, then the application resorts to the default meta tag and title settings provided in `app/views/layouts/application.html.erb`.

### Styling
* [Bootstrap 4 Alpha](https://v4-alpha.getbootstrap.com/getting-started/introduction/)
* [Strapper](https://github.com/ccabo1/strapper)
  * The source code is included and can be edited
* All additional styling can be written in [SCSS](http://sass-lang.com/) via the `app/assets/stylesheets*` directory
* There are included styles for notifications and the navbar, which also can be edited
