class PostsController < ApplicationController
  before_action :correct_admin,   only: [:new, :edit, :update, :destroy]

  def index
    @posts = Post.order(created_at: :desc)
  end

  def new
    @post = current_user.posts.build
  end

  private

  def correct_admin
    unless current_user and current_user.isAdmin
      flash[:alert] = "Admin access only"
      redirect_to(root_url)
    end
  end
end
