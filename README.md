# Love Sylvie

Web application / prelaunch referral web application and admin dashboard for Love, Sylvie.
* [Hours spent on the project.](https://docs.google.com/spreadsheets/d/1g1syyCLaZ8JBEtkDs3nitVwXa_25NJjfSbeRzw2BbqQ/edit?usp=sharing)
* [Trello](https://trello.com/b/cqsAISkw/love-sylvie)

## Development instructions

Clone the repository
```
git clone git@github.com:ccabo1/lovesylvie.git
```
Or fork the repository.

Next, run `bundle install` to get the necessary gems then `rails s` to get the development server running on `localhost:3000`.

This application uses SQLite3 for development and PostgreSQL for production.

# Rails Boilerplate

Boilerplate application for Ruby on Rails web apps. This application was built atop this boilerplate. 

### Functionality
* Simple templating with a navbar, full-page height page content, and footer
* General web pages via the `welcome` controller
* `user` sign in / registration / etc. via [Devise](https://github.com/plataformatec/devise)
  * Basic styling for forms
  * Basic jQuery front-end validation on forms
  * Specialized Devise routes for readability
    * `/login`, `/register`, `/logout`, `/password`, etc.

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
  * [jQuery](https://jquery.com/), [Tether](http://tether.io/), and Bootstrap 4 Alpha javascript files are included
* [Strapper](https://github.com/ccabo1/strapper)
  * The source code is included and can be edited
* [Font Awesome](http://fontawesome.io/)
* All additional styling can be written in [SCSS](http://sass-lang.com/) via the `app/assets/stylesheets/*` directory
  * There are included styles for notifications and the navbar, which also can be edited

### Notifications
To flash a red alert:
```ruby
flash[:alert] = "Your alert message"
```
To flash a green notice
```ruby
flash[:notice] = "Your notice message"
```
Note that notifications only show on page load. Notifications are styled to be fixed position banners across the top of the page that disappear after a short amount of time. You can customize the JavaScript code in the `application.html.erb` file to adjust the timing of notifications and the types of notifications (beyond `alert` and `notice`) which are accepted.
