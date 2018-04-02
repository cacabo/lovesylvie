class AdminController < ApplicationController
  def manage_posts
    @posts = Post.all
  end

  def manage_users
    @users = User.all
  end
end
