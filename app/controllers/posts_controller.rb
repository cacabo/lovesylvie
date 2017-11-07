class PostsController < ApplicationController
  before_action :correct_admin,   only: [:new, :edit, :update, :destroy]

  def index
    @posts = Post.order(created_at: :desc)
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(params[:post])

    if @post.save
      flash[:notice] = "Post created successfully"
      redirect_to @post
    else
      flash[:alert] = "There was an issue creating your post"
      render "new"
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :text)
  end

  def correct_admin
    unless current_user and current_user.isAdmin
      flash[:alert] = "Admin access only"
      redirect_to(root_url)
    end
  end
end
