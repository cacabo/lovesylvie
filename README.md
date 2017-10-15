# Love Sylvie

Web application / prelaunch referral website for Love Sylvie.

[Hours spent on the project.](https://docs.google.com/spreadsheets/d/1g1syyCLaZ8JBEtkDs3nitVwXa_25NJjfSbeRzw2BbqQ/edit?usp=sharing)

## Todo

__General__ (9)
- [x] Figure out content_for stuff
- [ ] Facebook, twitter meta tags
- [ ] Link with mailer (2)
- [x] Deploy to Heroku (1)
- [x] Google sheet of time spent and hours
- [ ] Views dependent on if admin or if user (5)

__Setup__ (3.5)
- [x] Bootstrap
- [x] Strapper
- [x] jQuery, JS, etc.
- [x] Fontawesome
- [x] Custom CSS (3)
- [x] Custom font (0.5)

__Views__ (40.5)
- [ ] Error pages (1)
- [ ] Campaign ended (0.5)
- [x] Home page (6)
- [ ] About (15)
  - [ ] Our story (4)
  - [ ] Vision (1)
  - [ ] Press (2)
  - [ ] Blog (8)
- [ ] Help (5)
  - [ ] FAQs (2)
  - [ ] Contact us (3)
- [ ] Account page (1)
- [ ] Our perfumes (13)
  - [ ] Build discovery box (8)
  - [x] Build basic carousel (3)
  - [ ] Make carousel mobile responsive (2)
- [x] Terms and conditions (1)
- [x] Privacy policy
- [ ] Export to CSV (1)
- [ ] User views (3)

__Shared__ (1)
- [x] Footer (0.5)
- [x] Navbar (0.5)
  - [x] Issue with navbar collapse toggle

__Details__ (2)
- [x] Pretty flash notifications (1)
- [ ] Devise mailing notifications (1)
- [x] More click and hover styling
- [x] Navbar dropdown transitions (0.5)

__Database__ (6)
- [ ] Add more to signup (first name, last name, email, password) (1)
- [ ] Referral (2)
  - [ ] Refer multiple friends at once (1)
  - [ ] Name in referral (1)
- [ ] Sendgrid for contact form (1)

__Needed resources__
- [ ] Logo as SVG in black with transparent back
- [ ] Logo as SVG in white with transparent back
- [ ] Additional images in product mockups

Note that numbers in parenthesis (x) represent expected number of hours per task. The total estimated number of hours is: __68 hours__, although this is subject to (large) change depending on configuration, iteration, and specification.

## Development instructions

Clone the repository
```
git clone git@github.com:ccabo1/lovesylvie.git
```
Or fork the repository.

Next, run `bundle install` to get the necessary gems then `rails s` to get the development server running on `localhost:3000`.

This application uses SQLite3 for development and PostgreSQL for production.

# Rails Boilerplate
Boilerplate application for Ruby on Rails web apps

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
