class PostsController < ApplicationController
  before_action :correct_admin,   only: [:new, :edit, :update, :destroy]

  def index
    @posts = Post.order(created_at: :desc)
  end

  def new
    @post = current_user.posts.build
  end

  def create
    @post = current_user.posts.build(post_params)

    if @post.save
      flash[:notice] = "Post created successfully"
      redirect_to @post
    else
      flash[:alert] = "There was an issue creating your post"
      render "new"
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def show
    @post = Post.find(params[:id])

    if @post.nil?
      flash[:alert] = "Post not found"
      redirect_to posts_path
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      flash[:notice] = "Post updated successfully"
      redirect_to @post
    else
      flash[:alert] = "There was an error updating your post"
      render 'edit'
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    flash[:notice] = "Post deleted successfully"
    redirect_to posts_path
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
