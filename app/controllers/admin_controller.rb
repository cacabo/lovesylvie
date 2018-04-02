class AdminController < ApplicationController
  def manage_posts
    @posts = Post.all
  end
end
