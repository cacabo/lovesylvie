class PostController < ActionController::Base
    before_action :super_admin, except: [:index, :show]

    def index
        @posts = Post.all.order(created_at: :desc)
    end

    def new
        @posts = current_user.posts.build
    end

    def edit
        @posts = Post.find(params[:id])
    end

    def create
        @post = current_user.posts.build(post_params)

        if @post.save
            redirect_to @post
        else
            render 'new'
        end
    end

    def show
      @post = Post.find(params[:id]) if Post.exists? params[:id]
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            redirect_to @post
        else
            render 'edit'
        end
    end


    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        redirect_to posts_path
    end

    private

    def post_params
        params.require(:post).permit(:title, :text)
    end

    # Confirms the current user is an admin
    def super_admin
        redirect_to(root_url) unless (current_user and current_user.isAdmin)
    end
end
